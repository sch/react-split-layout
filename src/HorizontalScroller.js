import React, { Component } from 'react';

const info = [
  {
    title: "the big title ",
    body: "some text that goes inside the card, who knows how long it'll go",
    style: {titleColor: randomColor(), blockColor: randomColor()}
  },
  {
    title: "title",
    body: "That last one say something like: some text that goes inside the card, who knows how long it'll go",
    style: {titleColor: randomColor(), blockColor: randomColor()}
  },
  {
    title: "A big title",
    body: "That last one say something like: some text that goes inside the card, who knows how long it'll go",
    style: {titleColor: randomColor(), blockColor: randomColor()}
  }
];


const outerStyle = {width: 500, overflow: "auto", border: "solid 1px"}
const cardsScrollerStyle = {width: "300%"}

export default class HorizontalScroller extends Component {
  render() {
    return (
      <div style={outerStyle}>
        <div style={cardsScrollerStyle}>
          {info.map(cardItem)}
        </div>
      </div>
    );
  }
}

function randomColor() {
  const letters = '0123456789ABCDEF'.split('');
  return [rand(16), rand(16), rand(16)].reduce(function (color, randIndex) {
    return color + letters[randIndex];
  }, '#');
}

function rand(upper) {
  return Math.floor(Math.random() * 16);
}

function cardItem({title, body, style}) {
  const cardStyle = {width: 500, float: "left", scrollSnapPointsX: "repeat(1000px)"};
  const titleStyle = {left: '1em', position: '-webkit-sticky', display: 'inline-block'}
  let titleAreaStyle = {backgroundColor: style.titleColor, padding: "1em"}
  let blockStyle = {backgroundColor: style.blockColor, height: 100, padding: "1em"};

  return (
    <div style={cardStyle}>
      <div style={titleAreaStyle}>
        <h3 style={titleStyle}>{title}</h3>
      </div>
      <div style={blockStyle}>{body}</div>
    </div>
  );
}
