
import React, {useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({setIsLoggedIn}) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions = {[
                <div key = "tweet">PI equals 3.141592..<br />0</div>,
                <div key = "followings">Following<br />0</div>,
                <div key = "followers">Followers<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar = {<Avatar>BP</Avatar>}
                title = "Bluberry Pie"
            />
            <Button onClick={onLogOut}>Log Out</Button>
        </Card>
    );

};


export default UserProfile;