import React from "react";
import Layout from "../../components/Layout";

export default function BlogPost() {
  return (
    <Layout title="Blog Post">
      {/* 자식없으면 에러.. */}
      <div />
    </Layout>
  );
}
