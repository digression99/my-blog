import * as React from "react";
import PageLayout from "../components/PageLayout";
import Page from "../components/Page";

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <Page>
        <h2>Hi, This is Daniel Kim.</h2>
        <p>And this is my blog.</p>
        <p>I am a software engineer.</p>
      </Page>
    </PageLayout>
  );
};

export default IndexPage;
