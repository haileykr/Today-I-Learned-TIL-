import React, {useCallback, useState, useRef} from 'react';
import { Form, Input,Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';


const PostForm = () => {
    const {imagePaths}=useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput =useRef();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);    
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        // addPost는 객체!
        // 리마인더 - action은 원래 객체
        // 그리고 동적으로 action을 만들어야하면 action creator라는 함수 만듦
        setText('');
        // tweet누르면 입력창 초기화
    }, []);
    
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    return (
        <Form style={{ margin: '10px 0 20px'}} encType = "multipart/form-data" onFinish = {onSubmit}>
            {/* inline-style말고 빼는 게 좋지만 일단은 간단하게 */}
            {/* 성능에 문제가 있을 때 나중에 뺴는 것도 괜찮은 방법임 */}
            <Input.TextArea
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder = "What do you wanna share?"
            />
            <div>
                <input type ="file" multiple hidden ref={imageInput} />
                {/*  DOM에 접근할 때 ref사용 */}
                <Button onClick = {onClickImageUpload}>Upload image(s)</Button>
                <Button type = "primary" style = {{ float:  'right'}} htmlType="submit">Tweet</Button>
            </div>
            <div>
                
                {imagePaths.map((v) => (
                    // image preview!
                    <div key = {v} style = {{ display: 'inline-block'}}>
                        <img src = {v} style = {{width: '200px'}} alt = {v}></img>
                    <div>
                        <Button>Remove</Button>
                    </div>
                    </div>

                ))}
            </div>


        </Form>
    )
}

export default PostForm;