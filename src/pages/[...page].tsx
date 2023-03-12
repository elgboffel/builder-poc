import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { appRouter } from "@server/root";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";
import { withNextPageError } from "@infrastructure/errors/with-next-page-error";
import { MainLayout } from "@components/modules/Layouts/MainLayout";

const Page = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your header or main layout here */}
        Your header
      </div>

      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />

      <div style={{ padding: 50, textAlign: "center" }}>
        {/* Put your footer or main layout here */}
        Your footer
      </div>
    </>
  );
};

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  const ssg = await createProxySSGHelpers({
    router: appRouter,
    ctx: { session: null }, // No auth yet
    transformer: superjson,
  });

  let cmsSettings;

  try {
    cmsSettings = await ssg.content.getSettings.fetch({
      preview: false,
    });
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      context: { settings: { cms: cmsSettings } },
      page: page ?? null,
      trpcState: ssg.dehydrate(),
    },
    revalidate: 5,
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

const withErrorPage = withNextPageError(Page);

withErrorPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default withErrorPage;
