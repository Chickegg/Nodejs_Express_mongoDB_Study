// // npm init을 통해서  package.json을 생성해준다.
// // 초기화된 패키치를 설치해 준다.
//     // 터미널에 npm init 입력

// // Node.js를 쉽게 사용할 수 있도록 해주는 웹 프레임워크인 Express를 설치해준다.
//     // npm install express
//     // package.json에 추가되고 package-lock.json이 생긴다.


// // Express 예제 코드 작성
//     const express = require('express');
//     const app = express();  // app이라는 변수는 expreess를 함수를 실행시키는 변수이다.
//     const port = 3600; // post번호를 지정

//     app.get('/', (req, res) => res.send('Develog!')); // 웹브라우져에게 사용자들에게 이런 화면을 보여줘라고 말해주는 부분
//     app.listen(port, () => console.log(`Example app listening on port ${port}! `)); 
//         // port번호로 서버를 시작한다.

// // 서버시작하기 
//     // 터미널창에 node index.js 를 입력하게 되면 index.js를 실행한다.
//     // 그러나 우리는 이 명령어를 직접 할당하여 만들어 줄 것이다.
//     // package.json 파일로 들어가 script 부분에 추가해 준다.
//     // "start": "node index.js"
//     // 이렇게 하게 되면 node index.js 로도 가능하지만 npm run start 로도 가능해지고
//     // 우리가 코드에 입력한 내용인 Develog!라는 내용을 확인할 수 있다.

// // 이제 DataBase인 mongoDB에 연결해 보겠다.

//     // -mongoDB 다운로드 하기 (홈페이지)
//     // -DataBase만들기
//     // -Connect your application부분에서 연결문자열 받기[나의 아이디와 패스워드로 접속권한을 얻는 부분❓]
//         // mongodb+srv://m001-student:<password>@sandbox.2wve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//     // mongoDB의 확장버전인 mongoose 설치하기
//         // npm install mongoose --save

// // moongse를 요청해와서 moonges의 connect라는 객체함수를 상용하여 연결문자열을 통해서 mongoDB와 연결하고
// // useNewUrlParser등을 통해서 권환을 설정해준다❓[이부분은 학습이 더 필요하다.]
// // .then() 안의 명령문은 mongoose.connect가 완료가 되면 실행되는 부분이다.
// // 즉 완료가 되면 터미널창에 mongoDB connected를 표시해 주라는 것이다.
//     const mongoose = require('mongoose');
//     const { connected } = require('process');
//     mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2wve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//         useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
//     }).then(() => console.log('mongoDB connected...'));

//     // npm run start로 실행해보니 mongoDB connected..가 출력되고 localhost:3600도 접속이 되는것을 알 수 있다.(성공적❗)

// // Express의 middleware인 Body-parser를 통해 data를 전달해주기 위한 부분
//     // body-parser 설치하기
//         // npm install body-parser --save
//     // body-parser 사용하기
//         // body-parser를 json으로 부터 요청받는다.
//         const bodyParser = require('body-parser');
// const { User } = require('../mongoDB/models/User');
//         // body-parser를 사용하는 부분 
//         // 파싱해서 가져와야 한다고 한다.
//             // app.use(bodyParser.urlencoded({extended: true}));
//         // bodyParser의 json함수를 실행한다..❓
//             // app.use(bodyParser.json()); 
//         //⭐최신 버전에서는 express에 body-parser를 가지고 들어오기 때문에 express로 해줘도 된다.
//         app.use(express.urlencoded({extended: true}));
//         app.use(express.json());

// /// 회원 가입시 필요한 정보를 client에서 가져와서 DB에 넣기 위한 부분
//     // 여기서 post란 글 쓰기 부분이라고 보면 될 것이다. 입력❓쓰기❓ 
//     app.post('/register', (req, res) => { 
//         //  /register경로로 쓰기를 요청하고 req, res라는 변수를 사용한다.
//         // User라는 다른 모듈에서 req.body(요청하는 데이터 전체)일 것이다.
//         const user = new User(req.body);  
//         // 그 user에 저장을 한다. error와 userInfo라는 변수를 활용할 수 있다.
//         user.save((error, userInfo) => {
//             // 만일 error가 발생한다면 서버에서 웹브라우저에 응답하는 것(즉 배달을 해준느것이라고 할 수 도 있다.)
//             // 우리 웹브라우져에 서버가 json형태로({정보})를 전달 해준다.
//             if(error) return res.json({success: false, error}); 
//             // error가 아니라 정상적으로 된다면❓
//             // 정상완료 됬다는 상태(200)으로 .json 형태로 data를 전달해 줄것이다. 누가? 서버가 웹브라우져에게
//             return res.status(200).json({
//                 success: ture
//             });
//         });
//     });

// // 그럼 우리가 해야할 것은 무엇인가❓
// // User라는 모듈을 줄 수 있는 js파일을 만들어야 한다.
// // 이 때 이런 모듈들은 여러가지가 생겨날 수 있기 때문에 
// // 현재 디렉토리에 modules 라는 디렉토리를 만들어서 생성해 줄 것이다.

// // 완료했다면 API를 사용할 수 있는 Postman을 다운받고 실행하여 
// // register라는 경로를 통해서 접속하여 dat를 입력했을 때 제대로 서버를 통해서 body를 전달해 주는지 확인할 것이다.
//     // Postma 홈페이지 다운로드, 로그인
//     // post로 바꾸고 row를 통해 json형태로 data를 입력하고 send Click!
        

// 완성 코드🔥🔥

// const express = require('express');
//     const app = express();  // app이라는 변수는 expreess를 함수를 실행시키는 변수이다.
//     const port = 3600; // post번호를 지정

//     app.use(express.urlencoded({extended: true}));
//     app.use(express.json());
//     const { User } = require('./models/User');
//     console.log({ User });

//     const mongoose = require('mongoose');
//     const { connected } = require('process');
//     mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2wve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//         useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
//     }).then(() => console.log('mongoDB connected...'));
    
//     app.post('/register', (req, res) => { 
//         const user = new User(req.body);  
//         user.save((error, userInfo) => {
//             if(error) {
//                 return res.json({success: false, error}); 
//             } else {
//                 return res.status(200).json({
//                     success: ture
//                 });
//             };  
//         });
//     });


//     app.get('/', (req, res) => res.send('Develog!'));
//     app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    
const express = require('express')
const app = express()
const port = 3700
// bodyParser를 사용하기 위해 추가한다.
const bodyParser = require('body-parser')
const { User } = require('./models/User')

// application/x-www-form-urlenconded 에서 파싱해서 가져올 것
app.use(express.urlencoded({ extended: true }));
// applicaion/json
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2wve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(error => console.log(error))

app.post('/register', (req, res) => {
   // 회원 가입시 필요한 정보 client에서 가져와 DB에 넣기
   // body parser를 이용하여 req로 전송
   const user = new User(req.body)

   user.save((error, userInfo) => {
       if(error) return res.json({success: false, error})
       return res.status(200).json({
           success: true
       })
   })
})


app.get('/', (req, res) => res.send('Develog!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))