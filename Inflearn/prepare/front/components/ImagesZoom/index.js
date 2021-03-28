import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slick from 'react-slick';

import {Overlay, Global, Header, CloseBtn, ImgWrapper,Indicator,SlickWrapper} from './styles.js';

const ImagesZoom = ({ images, onClose }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    return (

        <Overlay>
            <Global />
            <Header>
                <h1>Details</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >

                        {images.map((v) => (
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImgWrapper>
                        ))}
                        {/* Slick이 저절로 여기 div들을 carousel로 만들어줌 */}

                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            
            </SlickWrapper>

        </Overlay>
    );
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;