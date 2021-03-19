import React from 'react';
import Head from 'next/head';

import Applayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from   '../components/FollowList';

const Profile = () => {
    const followerList = [{nickname: 'BP'}, {nickname: 'chicken'}, {nickname: 'bread'}]
    const followingList = [{nickname: 'BP'}, {nickname: 'chicken'}, {nickname: 'bread'}]
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>My Profile - NodeBird</title>
            </Head>
            <Applayout>
                <NicknameEditForm />
                <FollowList header="Following List"data={followingList}/>
                <FollowList header="Follower List" data={followerList}/>
            </Applayout>
        </>
    );
};

export default Profile;