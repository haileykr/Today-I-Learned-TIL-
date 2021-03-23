import React from 'react';
import PropTypes from 'prop-types';

const PostImages = ({images}) => {
    return (
        <div>Loading...</div>
    )
}

PostImages.propTypes = {
    images: PropTypes.arrayOf (PropTypes.object)
}
export default PostImages;