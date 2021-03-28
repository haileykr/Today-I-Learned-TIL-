
import next from 'next';
import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

//thunk사용 x
//import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';
import rootSaga from '../sagas'

const loggerMiddleware = ({dispatch, useState}) => (next) => (action) => {
    console.log(action);
    return next(action);
};

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) //배포용
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer,enhancer);
    // store.dispatch({
    //     type: 'CHANGE_NICKNAME',
    //     data: 'BP'
    // })
    store.sagaTask = sagaMiddleware.run(rootSaga);
    
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
