import React, { useEffect } from 'react';
//Next에서는 이게 필요 없음
import {useSelector, useDispatch} from 'react-redux';

import Applayout from '../components/Applayout'
import PostForm from '../components/PostForm';


import PostCard from '../components/PostCard';

import {LOAD_POST_REQUEST} from '../reducers/post';

const Home = () => {
    const dispatch = useDispatch();
    const {me} = useSelector((state) => state.user);
    const {mainPosts,hasMorePost,loadPostLoading} = useSelector((state) => state.post);
    useEffect(() => {
        dispatch({
            type: LOAD_POST_REQUEST,
        })
    }, []);

    useEffect(() => {
        function onScroll(){
            //많이 쓰는 세 가지
            // scrollY: 얼마나 내렸는 지
            // clientHeight: 화면 보이는 길이
            // scrollHeight: 총 길이
            // 따라서 끝까지 내렸을 때
            // scrollY + clientHeight=scrollHeight!!
            
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
        
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight  -300) {
                if (hasMorePost && !loadPostLoading){
                    dispatch({
                        type: LOAD_POST_REQUEST,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        //useEffect에서 window함수 쓸 때 중요한 건
        //이렇게 해제해주는 것
        //메모리 누수 방지
        return() => {
            window.removeEventListener('scroll', onScroll);
        };
    },  [hasMorePost, loadPostLoading]);

    return (
        <Applayout>
            {/* 로그인 시에만 보임 */}
            {me && <PostForm />} 
            {mainPosts.map((post) => <PostCard  key = {post.id} post={post}/> )}
        </Applayout>
    );
}

export default Home;