플러그인 추가로 설치
로컬 파일 시스템에서 Gatsby 애플리케이션으로 데이터를 sourcing하기 위한 Gatsby 소스 플러그인.
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
