import React, { useState } from 'react';
import './Card.css';

function changeHeading(event) {
  let heading = event.currentTarget.firstChild.firstChild;
  heading.classList.add('headingHover');
  heading.textContent = 'Котэ не одобряет?';
}

function toggleHeading(event) {
  let heading = event.currentTarget.firstChild.firstChild;
  heading.classList.remove('headingHover');
  heading.textContent = 'Сказочное заморское яство';
  event.currentTarget.addEventListener('mousemove', changeHeading);
}

const CardM = ({
  defaultStatus,
  taste,
  portion,
  giftCount,
  giftText,
  clientComment,
  value,
  comment,
}) => {
  const [status, setStatus] = useState(defaultStatus);

  function toggleBuy(event) {
    if (status === 'default') {
      setStatus('active');
      event.currentTarget.addEventListener('mouseleave', toggleHeading);
    } else if (status === 'active') {
      setStatus('default');
      event.currentTarget.removeEventListener('mousemove', changeHeading);
      event.currentTarget.removeEventListener('mouseleave', toggleHeading);
      let heading = event.currentTarget.firstChild.firstChild;
      heading.classList.remove('headingHover');
      heading.textContent = 'Сказочное заморское яство';
    }
  }

  function changeComment(event) {
    setStatus('active');
    let cardHeading =
      event.currentTarget.parentNode.parentNode.previousElementSibling;
    cardHeading.addEventListener('mousemove', changeHeading);
    cardHeading.addEventListener('mouseleave', toggleHeading);
  }

  return (
    <div className='content__column'>
      <div
        className={`card-about__img_${status}`}
        onClick={event => toggleBuy(event)}
      >
        <div className='card-about__information'>
          <p className='card-about__heading'>Сказочное заморское яство</p>
          <h2 className='card-about__title'>Нямушка</h2>
          <h2 className='card-about__taste'>{taste}</h2>
          <div className='card-about__text'>
            <p className='card-about__portion'>
              <b>{portion}</b> порций
            </p>
            <br />
            <p className='card-about__gift'>
              <b>{giftCount}</b>
              {giftText}
            </p>
            <br />
            <p>{clientComment}</p>
          </div>
        </div>
        <div className={`card-about__weight_${status}`}>
          <p className='card-about__value'>{value}</p>
          <p className='card-about__measure'>кг</p>
        </div>
      </div>
      <div className='card-comment'>
        {status === 'default' ? (
          <p>
            Чего сидишь? Порадуй котэ,{' '}
            <span
              className='card-comment__buy-btn'
              onClick={event => changeComment(event)}
            >
              купи.
            </span>
          </p>
        ) : (
          <p className={`card-comment_${status}`}>{comment}</p>
        )}
      </div>
    </div>
  );
};

export default CardM;
