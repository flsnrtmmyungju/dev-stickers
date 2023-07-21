import * as React from "react";
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  //그래프큐엘의 useStaticQuery사용법 gatsby-config.ts안에있는 데이터 가져올수있음.
  //그래프큐엘이 프로젝트 빌드할때 코드돌려서 데이터 저장해서 html에 바로뜸
  //정적사이트를위해. 리액트js불러오기전에 유저가 로딩화면볼필요없이 바로뜸
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);
  // console.log("data", data.site?.siteMetadata?.title);
  return (
    <>
      <Layout title="Home">
        <p>Home {data.site?.siteMetadata?.title}</p>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | DevStickers!</title>;
