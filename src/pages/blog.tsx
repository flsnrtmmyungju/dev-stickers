import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout title="Blog">
      <p>Blog</p>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Blog | DevStickers!</title>;
