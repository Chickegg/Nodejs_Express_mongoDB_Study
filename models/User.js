// 파일은 만들었는데 어떠한 내용을 작성해야 하는지 모를 것이다. 나는 그랬다.
// 검색을 통해 보니 몽구스의 모든것은 스키마(Schema)로 시작한다고 한다

// 우선 mongoose를 사용할 것이기 떄문에 요청해 온다.
const mongoose = require('mongoose');

// 즉 우리가 작성할 userSchema는 몬구스의 스키마를 통해 진행된다.

// userSchema라는 변수에 각각의 키와 value를 정해준다.
// 예를 들어 name이라는 key의 value는 object이고 
// 그 요소에는 type이 어떤것인지 최대길이는 얼마인지 등을 설정해 줄 것이다.

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
 })

//mongoose.model()스키마를 호출하면 mongoose가 model을 컴파일(편집, 수집) 한다.
// 첫번째 인수는 모델이 사용되는 컬렉션의 이름이다. User라는 컬렉션이 생긴것이다..?
// 즉 User라는 모델은 데이터베이스의 User라는 컬렉션에 대한 것이다 라는 것인데 잘모르겟다😵
// const User = mongoose.model('User', userSchema);
const User = mongoose.model('User', userSchema)
// 모듈로서 내보내는 부분
// module.exports = { User };
module.exports = { User }