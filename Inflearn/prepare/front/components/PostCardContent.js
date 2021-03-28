import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({postData}) => (
    //ex. 'First article #GME #APL'
    <div>
        {postData.split(/(#[^\s#]+)/g).map ((v, i) => {
            if (v.match (/(#[^\s#]+)/g)){

                return <Link key = {i} href = {`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
                // Link는 넥스트의 링크임 - slice는 # 뗀 것
                // 함수 map을 쓰므로 key가 필요함
            }
            return v; //일반 문자열이면 그냥 반환
        })
    }
    </div>

);

PostCardContent.propTypes = {postData: PropTypes.string.isRequired};

export default PostCardContent;