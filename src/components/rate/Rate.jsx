import React from "react";
import starGrey from '../../assets/images/Grey_star.png';
import starRed from '../../assets/images/Red_star.png';
import '../rate/rate.scss';

const Rate = ({ value, maxStars }) => {
    const stars = Array.from({ length: maxStars }, (_, index) => (
        <img
            key={index}
            src={index < value ? starRed : starGrey}
            alt={`Star ${index + 1}`}
            className="stars_icon"
        />
    ));

    return <div className="stars">{stars}</div>;
};

export default Rate