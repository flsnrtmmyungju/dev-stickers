import { graphql, HeadFC } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

//                 data: PostDetail데이터 // children:html형태로 반환된 데이터
export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data, children);
  return (
    <Layout title="">
      {/* 자식없으면 에러.. */}
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`;

export const Head: any = ({ data }: IBlogPostProps) => (
  <title>{data.mdx?.frontmatter?.title} | DevStickers!</title>
);
