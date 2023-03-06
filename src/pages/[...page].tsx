import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { appRouter } from "@server/root";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
  // Fetch the first page from Builder that matches the current URL.
  // Use the `userAttributes` field for targeting content.
  // For more, see https://www.builder.io/c/docs/targeting-with-builder
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  type content = Awaited<ReturnType<typeof page>>;

  const ssg = await createProxySSGHelpers({
    router: appRouter,
    ctx: { session: null }, // No auth yet
    transformer: superjson,
  });

  let settings;

  try {
    settings = await ssg.content.getSettings.fetch({
      preview: false,
    });
  } catch (e) {
    console.error(e);
  }
  return {
    props: {
      settings: settings ?? null,
      page: page ?? null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
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

export default function Page({ page, ...rest }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  console.info({ page });
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
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
}
