import React, { useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../reducers/user';

const UserProfile = ({setIsLoggedIn}) => {
    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user)
    const onLogOut = useCallback(() => {
        //setIsLoggedIn(false);
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions = {[
                <div key = "tweet">Tweets<br />{me.Posts.length}</div>,
                <div key = "followings">Followings<br />{me.Followings.length}</div>,
                <div key = "followers">Followers<br />{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar = {<Avatar>{me.nickname[0]}</Avatar>}
                title = {me.nickname}
            />
            <Button onClick={onLogOut} loading = {isLoggingOut}>Log Out</Button>
        </Card>
    );

};

export default UserProfile;