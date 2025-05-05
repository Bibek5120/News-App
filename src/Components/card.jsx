import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((currentItem, index) => {
        if (!currentItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img src={currentItem.urlToImage} alt="news" />
              <div className="Content">
                <a className="title" onClick={() => window.open(currentItem.url)}>{currentItem.title}</a>
                <p>{currentItem.description}</p>
                <button onClick={() => window.open(currentItem.url)}>Read more</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;

