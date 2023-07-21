import * as React from "react";
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

// const IndexPage: React.FC<PageProps> = () => {
//   //그래프큐엘의 useStaticQuery사용법 gatsby-config.ts안에있는 데이터 가져올수있음.
//   //그래프큐엘이 프로젝트 빌드할때 코드돌려서 데이터 저장해서 html에 바로뜸
//   //정적사이트를위해. 리액트js불러오기전에 유저가 로딩화면볼필요없이 바로뜸
//   const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
//     query SeoData {
//       site {
//         siteMetadata {
//           description
//           siteUrl
//           title
//         }
//       }
//     }
//   `);
//   // console.log("data", data.site?.siteMetadata?.title);
//   return (
//     <>
//       <Layout title="Home">
//         <p>Home {data.site?.siteMetadata?.title}</p>
//         {/* 미리 이미지주소를 알때만 사용 */}
//         <StaticImage
//           height={200}
//           src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
//           alt="Stickers on the wall"
//         />
//       </Layout>
//     </>
//   );
// };

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="welcome Home">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)}
            alt={String(sticker.name)}
          ></GatsbyImage>
          <h2>{sticker.name}</h2>
          <h4>{sticker.price}</h4>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home | DevStickers!</title>;
