플러그인 추가로 설치

1.  로컬 파일 시스템에서 Gatsby 애플리케이션으로 데이터를 sourcing하기 위한 Gatsby 소스 플러그인.
    플러그인은 파일에서 파일 노드를 생성합니다.
    다양한 "transformer" 플러그인은 파일 노드를 다양한 다른 유형의 데이터로 변환할 수 있습니다.
    npm install gatsby-source-filesystem

gatsby-config.ts파일에서
plugins: [
{
resolve: `gatsby-source-filesystem`,
options: {
path: `${__dirname}/blog-posts`,//폴더위치원하는곳 수정(src바깥인지 경로확인필수)
},
},
],

https://www.gatsbyjs.com/plugins/gatsby-source-filesystem

2.MDX -(gatsby-plugin-mdx)
gatsby-config.ts파일에서
plugins: [
`gatsby-plugin-mdx`,

추가

gatsby-plugin-mdx는 Gatsby와 함께 MDX를 사용하기 위한 공식 통합입니다. MDX는 마크다운 안에 포함된 JSX를 작성할 수 있습니다. 사소한 일에는 마크다운의 간결한 구문(예: # heading)을 사용하고 고급 구성 요소에는 JSX를 사용할 수 있기 때문에 훌륭한 조합입니다.
npm install gatsby-plugin-mdx @mdx-js/react

https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx
