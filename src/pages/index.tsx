import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout title="Home">
        <p>Home</p>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | DevStickers!</title>;
