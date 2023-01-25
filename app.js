
// express server
// express 모듈 불러오기
const express = require("express");


const app = express();

const router = require('routes/index.js');
app.use('/', router);


app.use(function(req, res, next) {
    next(createError(404));
});


app.use("/", express.static(__dirname));

app.get('/', (req, res)=>{
    res.render('d') //게시판 메인 페이지 html코드가 저장된 파일
})


// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));