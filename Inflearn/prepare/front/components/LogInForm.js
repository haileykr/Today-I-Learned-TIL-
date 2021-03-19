
import React, {useState, useCallback, useMemo} from 'react';
import { Form, Input,Button } from 'antd';
import Link from 'next/link';

import styled from 'styled-components'; 
import PropTypes from 'prop-types';


import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;


const FormWrapper = styled(Form)`
    padding: 10px;
`;




const LogInForm = ({setIsLoggedIn}) => {

    const [id, onChangeId] = useInput('');
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {

    //     setId(e.target.value);
    // },[]);


    const [password, onChangePassword] = useInput('');
    
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    const style = useMemo(() => ({marginTop: 10}), []);

    return (
        <FormWrapper onFinish = {onSubmitForm}>
            <div>
                <label htmlFor = "user-id">Id</label>
                <br />
                <Input name = "user-id" valud={id} onChange = {onChangeId} required/>

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
                <Button type="primary" htmlType = "submit" loading={false}>LogIn</Button>

                <Link href = "/register"><a><Button>Register</Button></a></Link>
                
            </ButtonWrapper>
        </FormWrapper>
    )
}


LogInForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,

}

export default LogInForm;