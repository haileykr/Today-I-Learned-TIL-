import React, {useCallback, useState} from 'react';
import Head from 'next/head';
import {Form, Input,Checkbox , Button} from 'antd';
import styled from 'styled-components';


import Applayout from '../components/Applayout';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput'
import { SIGN_UP_REQUEST } from '../reducers/user';

const ErrorMessage = styled.div`
    color: red;
    `;

const Register = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);
    const [email, onChangeEmail]=useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password );
        // 윗부분 때문에 커스텀 훅 못 씀
    },[password]);

    const [term , setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e) =>{
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {

        if (password!== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term){
            return setTermError(true);
        }

        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        })
    },[email, password, passwordCheck, term]);

    return (
        <>
        
        <Applayout>
            <Head>
                <title> Register - NodeBird</title>
            </Head>
            <Form onFinish = {onSubmit}>
                <div>
                    <label htmlFor = "user-email">Email</label>
                    <br />
                    <Input name = "user-email" type="email" value = {email} required  onChange = {onChangeEmail}/>
                </div>
                <div>
                    <label htmlFor = "user-nickname">Nickname</label>
                    <br />
                    <Input name = "user-nickname" value = {nickname} required  onChange = {onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor = "user-password">Password</label>
                    <br />
                    <Input name = "user-password" value = {password} required  onChange = {onChangePassword}/>
                </div>
                <div>
                    <label htmlFor = "user-password-check">Password Check</label>
                    <br />
                    <Input
                    name = "user-password-check"
                    type = "password"
                    value = {passwordCheck}
                    required
                    onChange = {onChangePasswordCheck}
                    />
                    {passwordError &&  <ErrorMessage>Passwords do not match!</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name = "user-term" checked={term} onChange = {onChangeTerm}>I agree to all the conditions required.</Checkbox>
                    {termError &&  <ErrorMessage>You must agree to Terms and Conditions.</ErrorMessage>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type = "primary" htmlType = "submit" loading = {signUpLoading}>Register</Button>
                </div>
                </Form>
            </Applayout>
        </>
    );

};

export default Register;