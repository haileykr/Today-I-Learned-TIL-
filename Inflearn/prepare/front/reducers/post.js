import shortId from 'shortid';
import faker from 'faker'
import produce from 'immer'

export const initialState = {
    mainPosts: [
    ],

    hasMorePost: true,

    imagePaths: [],

    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
})
);

//initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));


export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
// 액션 이름을 상수로 지어주면 오타로 인한 에러 줄이는 데 도움됨
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
// 액션 이름을 상수로 지어주면 오타로 인한 에러 줄이는 데 도움됨
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


export const loadPost = (data) => ({
    type: LOAD_POST_REQUEST,
    data,
})

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})

const dummyPost = (data) => ({
    id:data.id,
    content: data.content,
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
    return produce(state, (draft) => {
        switch (action.type){
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                //제일 위에 보여주기 위해 앞에다 추가
                draft.loadPostLoading = false;
                draft.hasMorePost = draft.mainPosts.length < 50;
                draft.loadPostDone= true;
                draft.mainPosts = action.data.concat(draft.mainPosts);      
                break;
            case LOAD_POST_FAILURE:
                
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.mainPosts = draft.mainPosts.unshift(action.data)
                
                //제일 위에 보여주기 위해 앞에다 추가
                draft.addPostLoading = false;
                draft.addPostDone= true;
                break;
            case ADD_POST_FAILURE:
                
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
    
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;

                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                //지울때는 filter가 더 "편하기 때문"에 이렇게 자주 사용
                //엄밀히 말하면 splice가 의미론적으로 더 맞긴 한데
                //그러려면 index를 찾아야 해서 한 줄이 늘어남

                draft.mainPosts = draft.mainPosts.filter((v)=> v.id!== action.data);
                draft.removePostLoading =  false;
                draft.removePostDone =  true;
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading =  false;
                draft.removePostError = action.error;
                break;
            
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone =  false;
                draft.addCommentError =  null;
                break;
            
            case ADD_COMMENT_SUCCESS: 
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                
                // immer 사용 x
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = {...state.mainPosts[postIndex]};
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;

            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading=false;
                draft.addComemntError=data.error;
                break;
            default:    
                break;
        };
    });
};

export default reducer;