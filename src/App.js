import React from 'react';
import Card from './components/Card';
import './App.css';
import cardsBase from './CardsBase';

function App() {
  return (
    <main className='content'>
      <div className='content__body'>
        <div className='content__title'>Ты сегодня покормил кота?</div>
        <div className='content__row'>
          {cardsBase.map(card => (
            <Card
              defaultStatus={card.defaultStatus}
              taste={card.taste}
              portion={card.portion}
              giftCount={card.giftCount}
              giftText={card.giftText}
              clientComment={card.clientComment}
              value={card.value}
              comment={card.comment}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
