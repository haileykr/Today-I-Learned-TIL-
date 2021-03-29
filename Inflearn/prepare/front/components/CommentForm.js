import { Form, Input, Button } from 'antd';

import React, { useEffect,useCallback } from 'react';

import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {ADD_COMMENT_REQUEST} from '../reducers/post'

import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id)
    const { addCommentDone, addCommentLoading} = useSelector((state) => state.post)
    const dispatch = useDispatch();
    const [commentText,onChangeCommentText, setCommentText] =useInput('');

    useEffect(() => {
        if (addCommentDone){
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id},
        })
    }, [commentText, id]);
    return (
        <Form onFinish = {onSubmitComment}>
            <Form.Item style={{position: 'relative', margin: 0}}>
               
               
                <Input.TextArea value={commentText} onChange = {onChangeCommentText} rows = {4} />
                <Button  
                style = {{ position: 'absolute', right: 0, bottom: -40, zIndex: 1}} 
                type = "primary" 
                htmlType = "submit"
                loading ={addCommentLoading}
                >Tweet</Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post:PropTypes.object.isRequired
}

export default CommentForm;