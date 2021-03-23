import React from 'react';
//Next에서는 이게 필요 없음
import {useSelector} from 'react-redux';

import Applayout from '../components/Applayout'
import PostForm from '../components/PostForm';


import PostCard from '../components/PostCard';

const Home = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);
    return (
        <Applayout>
            {/* 로그인 시에만 보임 */}
            {isLoggedIn && <PostForm />} 
            {mainPosts.map((post) => <PostCard  key = {post.id} post={post}/> )}
        </Applayout>
    );
}

export default Home;