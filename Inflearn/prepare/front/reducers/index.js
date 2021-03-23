import { HYDRATE } from 'next-redux-wrapper';








import {combineReducers} from 'redux';

import user from './user';
import post from './post';

// const initialState = {
//     user: {
//     },
//     post: {
//     }
// };
//combinedReducer사용 이후로 필요 없음

//action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };
// changeNickname('BM');

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'BM'
// }

// store.dispatch(changeNickname('MT'));

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
//const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case HYDRATE: 
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;