import {all, fork} from 'redux-saga/effects'

import postSaga from './post.js';
import userSaga from './user.js';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
};