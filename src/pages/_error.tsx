import React from "react";
import { BaseError } from "@infrastructure/errors/types";
import { NextPage } from "next";
import SEOHead from "@components/modules/SEOHead/SEOHead";
import { Container } from "@components/primitives/Container/Container";

const Error: NextPage<BaseError> = ({ statusCode, errors, responseContent, url, ...otherProps }) => {
  console.warn({ ...otherProps });

  return (
    <>
      <SEOHead nofollow noindex />

      <Container>
        <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
        {url && <p>{url}</p>}
        {/*{errors?.map(({ message }, index) => (*/}
        {/*  <Text key={`error-text-${index}`} center>*/}
        {/*    {message}*/}
        {/*  </Text>*/}
        {/*))}*/}
        <p>{JSON.stringify(responseContent)}</p>
      </Container>
    </>
  );
};

export default Error;
