export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'BP'
        },
        content: 'First article #GME #APL',
        Images: [{
            src: 'http://image.yes24.com/momo/TopCate1860/MidCate008/185975276.jpg'
        },{
            src: 'https://miro.medium.com/max/1200/1*ZDDuzNRgvV0pJukSOw-UDA.jpeg'
        },{
            src: 'https://image.aladin.co.kr/product/23331/95/cover500/e332537164_1.jpg'
        }]
    }],
    Comments: [{
        User: {
            nickname: 'hero'
        },
        content: 'Saving $$$ for it!*'
    }],

    imagePaths: [],

    postAdded: false,
}

const ADD_POST = 'ADD_POST';
// 액션 이름을 상수로 지어주면 오타로 인한 에러 줄이는 데 도움됨
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: 'dummy data!',
    User: {
        id: 1,
        nickname: 'BP'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,

                mainPosts: [dummyPost,...state.mainPosts],
                //제일 위에 보여주기 위해 앞에다 추가
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;