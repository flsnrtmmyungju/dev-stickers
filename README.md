<!--
플러그인 추가로 설치

* 1. gatsby-source-filesystem
~npm install gatsby-source-filesystem
!로컬 파일 시스템에서 Gatsby 애플리케이션으로 데이터를 sourcing하기 위한 Gatsby 소스 플러그인.
플러그인은 파일에서 파일 노드를 생성합니다.
다양한 "transformer" 플러그인은 파일 노드를 다양한 다른 유형의 데이터로 변환할 수 있습니다.

^적용법
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

*2.MDX -(gatsby-plugin-mdx)
~ npm install gatsby-plugin-mdx @mdx-js/react
gatsby-source-filesystem도 같이필요한듯.
^적용법
gatsby-config.ts파일에서 ``부분추가
ex//
plugins: [
`gatsby-plugin-mdx`,

페이지폴더에 "{mdx.frontmatter__slug}.tsx" 파일생성하면
gatsby-source-filesystem적용된폴더(ex/blog-posts)에서 각각의 mdx파일읽어서
frontmatter 보고 slug 를 본다음 각각의 페이지 형식으로 만들어줌
(\*slug말고 mdx.frontmatter__title}.tsx 로하면 title로 페이지만듬)

gatsby-plugin-mdx는 Gatsby와 함께 MDX를 사용하기 위한 공식 통합입니다. MDX는 마크다운 안에 포함된 JSX를 작성할 수 있습니다. 사소한 일에는 마크다운의 간결한 구문(예: # heading)을 사용하고 고급 구성 요소에는 JSX를 사용할 수 있기 때문에 훌륭한 조합입니다.

https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx

* 3,4 gatsby-plugin-image,gatsby-plugin-sharp
~ npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
^적용법
gatsby-config.ts파일에서 ``부분추가
ex//
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,

gatsby-plugin-image
높은 성능 점수를 유지하면서 반응형 이미지를 사이트에 추가하는 것은 수동으로 수행하기 어려울 수 있습니다.
Gatsby Image 플러그인은 다양한 크기와 형식으로 이미지를 생성하는 어려운 부분을 처리합니다!
https://www.gatsbyjs.com/plugins/gatsby-plugin-image

gatsby-plugin-sharp
아래 Sharp 이미지 처리 라이브러리에 구축된 여러 이미지 처리 함수들을 사용할 수 있습니다.
일반적인 웹 이미지 형식을 처리하기 위한 뛰어난 기본 설정을 제공하는 것을 목표로 합니다.
npm install gatsby-plugin-sharp
https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp

sharp
일반적인 형식의 큰 이미지를 더 작고 웹 친화적인 JPEG, PNG, WebP, GIF 및 다양한 크기의 AVIF 이미지로 변환하는 것입니다.
https://github.com/lovell/sharp

샘플 이미지 주소
https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80


-->
