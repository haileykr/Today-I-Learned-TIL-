// deal with dup.codes


import React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';
const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};



// Check to strengthen the reliability
App.propTypes = {
    Component: PropTypes.elementType.isRequired
}
export default wrapper.withRedux(App);