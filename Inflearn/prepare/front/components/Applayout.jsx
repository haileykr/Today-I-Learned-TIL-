import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col }from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';


import {createGlobalStyle} from 'styled-components';

import UserProfile from '../components/UserProfile';
import LogInForm from '../components/LogInForm';

const Global = createGlobalStyle`
.ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.ant-col:first-child {
    padding-left: 0 !important;
}


.ant-col:last-child {
    padding-right: 0 !important;
}
`;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const Applayout = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { me } = useSelector((state)=>state.user);
    return (
        <div>

            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Nodebird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput style={{ verticalAlign: 'middle' }} enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/register"><a>Register</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter = {8}>
                
                <Col xs={24} md={6}>
                    {/* {isLoggedIn ? <UserProfile setIsLoggedIn = {setIsLoggedIn}/> : <LogInForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {me ? <UserProfile /> : <LogInForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://twitter.com" target="_blank"  rel="noreferrer noopener">Twitter</a>
                </Col>
            </Row>
        </div>
    );
};

Applayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Applayout;