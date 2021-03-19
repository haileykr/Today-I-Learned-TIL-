import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col }from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LogInForm from '../components/LogInForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const Applayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
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
                    {isLoggedIn ? <UserProfile setIsLoggedIn = {setIsLoggedIn}/> : <LogInForm setIsLoggedIn={setIsLoggedIn}/>}
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