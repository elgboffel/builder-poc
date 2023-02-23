import React from "react";
import NextHead from "next/head";

export interface SEOProps {
  seoTitle?: string;
  metaDescription?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonicalUrl?: boolean;
}

const buildRobotsDirective = (noindex?: boolean, nofollow?: boolean): string => {
  if (!noindex && !nofollow) return "noindex, nofollow";

  if (!noindex && nofollow) return "nofollow";

  if (noindex && !nofollow) return "noindex";

  return "all";
};
/* TODO: fix outcommented */
const SEOHead: React.FC<SEOProps> = ({ seoTitle, metaDescription, canonicalUrl, nofollow, noindex }) => {
  // const { seo_global } = useSettings();
  // const prefix = seo_global?.prefix ?? "";
  // const suffix = ` ${seo_global?.suffix}` ?? ""; // Whitespace before suffix is intended.

  return (
    <>
      <NextHead>
        {/*<title>{`${prefix}${seoTitle}${suffix}`}</title>*/}
        {metaDescription && <meta name="description" content={metaDescription} />}
        <meta name="robots" content={buildRobotsDirective(noindex, nofollow)} />
        {/*{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}*/}
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
    </>
  );
};

export default SEOHead;
