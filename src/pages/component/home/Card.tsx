import React from 'react';

interface ICard {
  order: string;
  title: string;
  description: string;
  image: string;
}

const Card = ({ order, title, description, image }: ICard) => {
  return (
    <div className={`col-lg-4 ${order} `}>
      <div className='card p-5'>
        <img className='card-image' src={image} alt='alternative' />
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
