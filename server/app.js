// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve( "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing Dashboard") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  // 현재 route와 현재 페이지 경로가 일치하는지 테스트
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  console.log(potentialMatches);
};

// DOM이 렌더링 되면 router 함수 실행
document.addEventListener("DOMContentLoaded", () => {
  router();
});


