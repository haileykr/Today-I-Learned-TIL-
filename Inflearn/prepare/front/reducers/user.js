export const initialState = {
    isLoggingIn: false, //trying logging in
    isLoggedIn: false,
    logInError: null,
    isLoggingOut: false, //trying logging out
    isLoggedOut: false,
    logOutError: null,
    isSigningIn: false,
    isSignedUp: false,
    signUpError: null, 
    changeNicknameLoading: false, //trying nickname change
    changeNicknameDone: false,
    changeNicknameError: null,
    
    me: null,
    signUpData: {},
    loginData: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST'
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS'
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    nickname: 'BP',
    id: 1,
    Posts: [{id: 1}],
    Followings: [{nickname: 'ZP'}, {nickname: 'AM'}, {nickname: 'qqe'}],
    Followers: [{nickname: 'ZP'}, {nickname: 'AM'}, {nickname: 'qqe'}],
});

export const loginAction = (data) =>{
    return (dispatch, getState) => {
        
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .them((res) => {
                dispatch(loginSuccessAction(res.data));
            })

            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        data,
    }
}

export const loginFailureAction = (data) => {
    return {
        type: LOG_IN_FAILURE,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}

export const logoutSuccessAction = () => {
    return {
        type: LOG_OUT_SUCCESS,
    }
}

export const logoutFailureAction = (data) => {
    return {
        type: LOG_OUT_FAILURE,
        data,
    }
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                //me: null, //data를 없앤 채 로딩을 돌려줄꺼냐
                logInError: null,
                isLoggedIn: false
                }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: dummyUser(action.data),
                }
        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                
                isLoggedIn: false,
                logInError: action.error,
                }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                isLoggedOut:false,
                logOutError: null,
                }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: dummyUser(action.data),
                }

        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logOutError: action.error,
                }
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isSigningIn: true,
                //me: null, //data를 없앤 채 로딩을 돌려줄꺼냐
                SignInError: null,
                isSignedIn: false
                }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSigningIn: false,
                isSignedIn: true,
                me: dummyUser(action.data),
                }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                isSigningIn: false,
                
                isSignedIn: false,
                SignInError: action.error,
                }

        case CHANGE_NICKNAME_REQUEST:
            return {
                ...state,
                changeNicknameLoading: true,
                //me: null, //data를 없앤 채 로딩을 돌려줄꺼냐
                changeNicknameError: null,
                changeNicknameDone: false
                }
        case CHANGE_NICKNAME_SUCCESS:
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameDone: true,
                me: dummyUser(action.data),
                }
        case CHANGE_NICKNAME_FAILURE:
            return {
                ...state,
                changeNicknameLoading: false,
                
                changeNicknameDone: false,
                changeNicknameError: action.error,
                }
        case ADD_POST_TO_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{id: action.data}, ...state.me.Posts],
                },
            };
        case REMOVE_POST_OF_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: state.me.Posts.filter((v) => v.id !== action.data),
                }
            }
        default:
            return state;
    }
};

export default reducer;