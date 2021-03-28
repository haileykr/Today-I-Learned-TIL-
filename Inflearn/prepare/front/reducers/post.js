import shortid from 'shortid';
import shortId from 'shortid'

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
        }],
    
        Comments: [{
            User: {
                nickname: 'hero'
            },
            content: 'Saving $$$ for it!*'
        }],
    }],

    imagePaths: [],

    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
// 액션 이름을 상수로 지어주면 오타로 인한 에러 줄이는 데 도움됨
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})

const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'BP'
    },
    Images: [],
    Comments: [],
})

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'BP'
    },
})

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading:true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,

                mainPosts: [dummyPost(action.data),...state.mainPosts],
                //제일 위에 보여주기 위해 앞에다 추가
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError:action.error
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading:true,
                addCommentDone: false,
                addCommentError: null,
            };
        
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = {...state.mainPosts[postIndex]};
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,

                //제일 위에 보여주기 위해 앞에다 추가
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addComemntError: data.error
            };
        default:    
            return state;
    };
};

export default reducer;