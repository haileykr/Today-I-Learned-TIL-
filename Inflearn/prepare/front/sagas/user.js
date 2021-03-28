
import { all, fork, put, delay, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {  
    LOG_IN_SUCCESS, LOG_OUT_SUCCESS, LOG_OUT_REQUEST,
    LOG_OUT_FAILURE, LOG_IN_REQUEST, LOG_IN_FAILURE,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
} from '../reducers/user'

function logInAPI(data){
    return axios.post('/api/login',data)
}

// test code
/* const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'BP'}})
l.next();
l.next();*/

function* logIn(action){
    try {
        //const result = yield call(logInAPI)
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch(err) {
        yield put({

            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutAPI(){
    return axios.post('/api/logout')
}

function* logOut(){
    try {
        //const result = yield call(logOutAPI)
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            data: result.data
        });
    } catch(err) {
        yield put({

            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function signUpAPI(){
    return axios.post('/api/logout')
}

function* signUp(){
    try {
        //const result = yield call(signUpAPI)
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data
        });
    } catch(err) {
        yield put({

            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}
function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp)
        
    ])
}