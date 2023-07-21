import { graphql, HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log("data", data);
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            {/* {mdx.frontmatter__slug}.tsx 파일만들어야함 __는 두개!! */}
            {/* 위 파일 만들어주면 자동으로 blog파일에있는 파일들 연결시켜줌 */}
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

//추가로설치한 플로그인 gatsby-source-filesystem 때문에 사용가능
//위의 data에 들어감
// 아래는 블로그폴더에있는 블로그이름불러오는것
// export const query = graphql`
//   query BlogTitles {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          category
          date(formatString: "YYYY.MM.DD")
          title
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Blog | DevStickers!</title>;
