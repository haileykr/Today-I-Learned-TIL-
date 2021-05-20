import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {useSelector} from 'react-redux';

import Applayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from   '../components/FollowList';

const Profile = () => {
    const {me} = useSelector((state) => state.user);
    // const followerList = [{nickname: 'BP'}, {nickname: 'chicken'}, {nickname: 'bread'}]
    // const followingList = [{nickname: 'BP'}, {nickname: 'chicken'}, {nickname: 'bread'}]
    
    useEffect(() => {
        if (!(me && me.id)){
            Router.push('/')
        }
    }, [me &&me.id])

    if (!me){ 
        return null;
    }
    
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>My Profile - NodeBird</title>
            </Head>
            <Applayout>
                <NicknameEditForm />
                <FollowList header="Following"data={me.Followings}/>
                <FollowList header="Follower" data={me.Followers}/>
            </Applayout>
        </>
    );
};

export default Profile;