import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <>
      <Layout title="About Us">
        <p>Abouts us</p>
      </Layout>
    </>
  );
}

export const Head: HeadFC = () => <title>About-Us | DevStickers!</title>;
