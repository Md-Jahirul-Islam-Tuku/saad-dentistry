import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Review from './Review';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [user?.email])
  return (
    <div className='pt-32 h-[100vh] px-56'>
      {
        reviews.length === 0 && <h1 className="text-3xl font-semibold text-gray-300" >You have no reviews for any services</h1>
      }
      <div>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default MyReviews;