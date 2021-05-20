import axios from 'axios';
import { all, call, fork, takeLatest, put, delay } from 'redux-saga/effects';
import shortId from 'shortid';
import {
    LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST,
    ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,
    REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,  REMOVE_POST_REQUEST,
    ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, generateDummyPost,
} from '../reducers/post'
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from '../reducers/user';

//import {generateDummyPost} from '../reducers/post'

function loadPostAPI() {
    return axios.get('/api/post', data)
}

function* loadPost(action) {
    try {
        //const result = yield call(loadPostAPI, action.data)
        yield delay(1000)
        yield put({
            type: LOAD_POST_SUCCESS,
            data: generateDummyPost(5),
        });
    } catch (err) {
        yield put({
            type: LOAD_POST_FAILURE,
            data: err,
        });
    }
}

function addPostAPI() {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try {
        //const result = yield call(addPostAPI, action.data)
        yield delay(1000)
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {


                id,
                content: action.data
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
    } catch (err) {
        yield put({

            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function removePostAPI() {
    return axios.delete('/api/post', data)
}

function* removePost(action) {
    try {
        //const result = yield call(addPostAPI, action.data)
        yield delay(1000)
        // post reducer조작
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,//여기에 id가 들어있을 것
        });
        //user reducer조작
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        yield put({

            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function addCommentAPI() {
    return axios.post(`/api/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {
        //const result = yield call(addPostAPI, action.data)
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                id,
                content: action.data
            }
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {

    yield takeLatest(REMOVE_POST_REQUEST,removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPost),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment)
    ]);
}