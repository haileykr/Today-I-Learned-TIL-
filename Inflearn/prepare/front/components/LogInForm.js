
import React, {useState, useCallback, useMemo} from 'react';
import { Form, Input,Button } from 'antd';
import Link from 'next/link';

import styled from 'styled-components'; 
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput'
import {loginRequestAction} from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;




const LogInForm = () => {

    const dispatch =useDispatch();

    const {isLoggingIn} = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {

    //     setId(e.target.value);
    // },[]);


    const [password, onChangePassword] = useInput('');
    
    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        // setIsLoggedIn(true);
        
        dispatch(loginRequestAction({email, password}));
    }, [email, password]);

    const style = useMemo(() => ({marginTop: 10}), []);

    return (
        <FormWrapper onFinish = {onSubmitForm}>
            <div>
                <label htmlFor = "user-email">Email</label>
                <br />
                <Input name = "user-email" type="email" value={email} onChange = {onChangeEmail} required/>

            </div>
            <div>
                <label htmlFor = "user-password">Password</label>
                <br />
                <Input
                name = "user-password"
                value={password} 
                type="password"
                onChange = {onChangePassword} 
                required
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType = "submit" loading={isLoggingIn}>LogIn</Button>

                <Link href = "/register"><a><Button>Register</Button></a></Link>
                
            </ButtonWrapper>
        </FormWrapper>
    )
}


// LogInForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,

// }
//리덕스 intro다음엔 필요없음!


export default LogInForm;