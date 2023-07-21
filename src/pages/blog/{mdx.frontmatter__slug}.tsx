import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

//                 data: PostDetail데이터 // children:html형태로 반환된 데이터
export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data, children);
  // gatsbyImageData!의 !는 Non-null assertion operator로 피연산자가 Nullish(null이나 undefined)
  // 값이 아니라고 타입스크립트에게 단언하는 것입니다.
  // 즉, 앞의 값이 null 또는 undefined가 아님을 확신할 때 사용할 수 있습니다.
  // (하지만 ! 대신 if문을 사용하는 것을 추천)
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="">
      <GatsbyImage
        image={image as any}
        alt={String(data.mdx?.frontmatter?.title)}
      />
      {/* 자식없으면 에러.. */}
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        slug
        title
        headerImage {
          childImageSharp {
            # TRACED_SVG :사진뜨기전에 svg를 만들어서 리얼이미지랑 비슷하게
            # BLURRED,DOMINANT_COLOR(가장많이쓰인색으로 placeholder배경만듬)
            gatsbyImageData(height: 450, width: 700, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export const Head: any = ({ data }: IBlogPostProps) => (
  <title>{data.mdx?.frontmatter?.title} | DevStickers!</title>
);
