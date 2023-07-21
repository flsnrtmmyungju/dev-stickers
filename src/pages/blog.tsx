import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log("data", data);
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

//추가로설치한 플로그인 gatsby-source-filesystem 때문에 사용가능
//위의 data에 들어감
export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Blog | DevStickers!</title>;
