import React, { useState } from 'react';
import './ReviewsPage.css'; // Ensure this file exists with the updated styles

const ReviewsPage = () => {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: "Ona Lee Jones",
      location: "NY",
      date: "3 months ago",
      rating: 4,
      text:  "This app has been a lifesaver for me. The guided meditations are so calming, and the mood tracker helps me stay on top of my mental health. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" // Placeholder image
    },
    {
      name: "Emily Schlesinger",
      date: "4 months ago",
      rating: 5,
      text: "The exercises are great, and I love how the app provides personalized suggestions based on my stress levels. It's like having a therapist in my pocket.",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" // Placeholder image
    },
    {
      name: "H. Ali",
      date: "7 months ago",
      rating: 5,
      text: "I've been using this app daily, and it has made a significant difference in my stress levels. The guided exercises are practical, and I appreciate the focus on overall wellness.",
      avatar: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" // Placeholder image
    }
  ]);
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review) {
      setReviews([...reviews, { name: "Anonymous", date: "Just now", rating, text: review, avatar: "https://via.placeholder.com/50" }]);
      setReview('');
      setRating(5);
    }
  };

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <div className="rating-summary">
        <span className="rating-value">5</span>
        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
        <span className="rating-count">Over 196 Reviews</span>
        <button className="write-review-btn">Write a Review</button>
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          Leave Your Review:
          <textarea 
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            required
          ></textarea>
        </label>
        <label>
          Rate Your Experience:
          <select 
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="reviews-list">
        <h2>All Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div key={index} className="review-item">
              <img src={r.avatar} alt={`${r.name}'s avatar`} className="review-avatar" />
              <div className="review-content">
                <div className="review-header">
                  <span className="review-name">{r.name} - {r.location}</span>
                  <span className="review-date">{r.date}</span>
                  <span className="review-rating">{"⭐".repeat(r.rating)}</span>
                </div>
                <p>{r.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
