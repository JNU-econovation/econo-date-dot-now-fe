// express server
// express 모듈 불러오기
const express = require("express");

// express 사용
const app = express();

app.use("/", express.static(__dirname));

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));

