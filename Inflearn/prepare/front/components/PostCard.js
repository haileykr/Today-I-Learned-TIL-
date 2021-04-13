import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'

import PostImages from './PostImages';
import CommentForm from './CommentForm';

import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    // post는 지금 반복문 통해서
    // 부모로부터 받아온 것
    const dispatch = useDispatch();
    const {removePostLoading} = useSelector((state) => state.post);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);

        // prev는 이전 상태가 들어있음. useState -liked/setliked
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {

        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);
    const { me } = useSelector((state) => state.user);
    // const id = me && me.id;
    // 위의 식은 아래와 같은 뜻
    const id = me?.id;
    // "optional chaining 연산자!"
    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                // cover와 actions모두 antd기능
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor='#eb2f96' key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>

                            {/* 로그인 시에만 보이게 */}
                            {id && post.User.id === id ? (
                                <>
                                    <Button>Edit</Button>
                                    <Button type="danger"loading={removePostLoading} onClick={onRemovePost}>Remove</Button>
                                </>
                            ) : <Button>Report</Button>}
                        </Button.Group>
                    )}>
                        {/* 더보기버튼 */}
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />

            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    {/* 게시글의 id를 comment가 받아야하기 때문에 post 넘겨줌! */}
                    <List
                        header={`
                                ${post.Comments ? post.Comments.length : '0'} comments`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        // post.Comments 각각이 item으로 들어감
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}

                                />
                            </li>
                        )}
                    />
                </div>)}

        </div>
    )
}

PostCard.propTypes = {
    // post: PropTypes.object.isRequired,
    // 혹은 더 자세히 명시해주기 위해서
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,

}

export default PostCard;
