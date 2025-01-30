import data from '../../json/data.json'
import { useParams } from 'react-router-dom';

const StarRating = () => {
  const { id } = useParams();
  const rating = parseInt(data.find(item => item.id === id).rating, 10);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push('full');
    } else {
      stars.push('empty');
    }
  }

  return (
    <div className='star-rating' >
      {stars.map((star, i) => (
        <svg className='stars' key={i} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {star === 'full' ? (
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060" />
          ) : (
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
          )}
        </svg>
      ))}
    </div>
  );
};
  


export default StarRating;