import React from 'react';
import chartImage from '../../../assets/review-chart.png';
import './Reviews.css';

const Review: React.FC = () => {
    return (
        <div className="review">
            <Stars />
            <div className="review-header">
                <span><b>Name</b></span>
                <time>December 1, 2022</time>
            </div>
            <p className="review-text">
                The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
            </p>
        </div>
    )
}

const Star: React.FC = () => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.96248 1.19315C9.28905 0.188081 10.7109 0.18808 11.0375 1.19315L12.4492 5.538C12.5953 5.98747 13.0141 6.2918 13.4868 6.2918H18.0552C19.112 6.2918 19.5514 7.6441 18.6964 8.26527L15.0005 10.9505C14.6181 11.2283 14.4581 11.7207 14.6042 12.1702L16.0159 16.5151C16.3425 17.5201 15.1921 18.3559 14.3372 17.7347L10.6412 15.0495C10.2589 14.7717 9.74113 14.7717 9.35878 15.0495L5.66283 17.7347C4.80787 18.3559 3.65753 17.5201 3.98409 16.5151L5.39582 12.1702C5.54186 11.7207 5.38187 11.2283 4.99952 10.9505L1.30358 8.26527C0.448615 7.6441 0.888006 6.2918 1.9448 6.2918H6.51324C6.98585 6.2918 7.40471 5.98748 7.55076 5.538L8.96248 1.19315Z" fill="#FF8C38" />
    </svg>
);

const Stars: React.FC = () => {
    return (
        <div className="stars-container">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

const Reviews: React.FC = ({ }) => {
    return (
        <div className="hostreviews">
            <div className="reviews-header">
                <h2>Your reviews</h2>
                <span>last <u>30 days</u></span>
            </div>
            <img src={chartImage} alt="Image to simulate a chart of the reviews" />
            <div className="reviews-container">
                <Review />
                <Review />
            </div>
        </div>
    );
};

export default Reviews;