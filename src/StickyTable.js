import window from 'global/window'
import React, { Component } from 'react';

import HorizontalScroller from './HorizontalScroller'

const padding = "20px";

const tableRowStyle = {
  // display: "table-row",
  display: "flex",
  // outline: "solid lime 1px",
  borderBottom: "solid 1px #ECECEC",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "70em"
}

const leftStyle = {
  // display: "table-cell",
  // outline: "solid blue 1px",
  flex: "1 1 auto",
  paddingBottom: "2em",
  paddingTop: "2em",
  // backgroundColor: "#ECECEC"
}
const rightStyle = {
  // display: "table-cell",
  // outline: "solid red 1px",
  flex: "1 1 auto",
  width: "62%",
  paddingTop: "2em",
  paddingBottom: "2em"
}

export default class StickyTable extends Component {
  render() {
    const tableStyle = {
      // display: "table"
    }
    return (
      <div className="StickyTable" style={tableStyle}>
      {
        [stickyRow(essayText()), stickyRow(<HorizontalScroller />)]
      }
      </div>
    )
  }
}

function stickyRow(body) {
  const headerStyle = {
    position: "-webkit-sticky",
    top: 0,
    paddingLeft: padding,
    paddingRight: padding,
    lineHeight: 1.2,
    display: 'block'
  };

  const leftPane = (
    <div className="StickyPane" style={leftStyle}>
      <h1 style={headerStyle}>until our waiting room took off</h1>
    </div>
  );

  const rightPane = (
    <div className="StickyPane" style={rightStyle}>
      {body}
    </div>
  );

  return React.createElement('div', {
    className: "StickyRow",
    style: tableRowStyle
  }, leftPane, rightPane);
}

function essayText() {
  const style = {
    fontSize: 20,
    paddingLeft: padding,
    paddingRight: padding
  };
  return (
    <div style={style}>
      <p>The 747 is a masterpiece of industrial design. Everything we think of as normal about air travel, for better or worse, was invented for this airplane and its immediate predecessor, the 707.  That includes seats on rails, overhead bins, drink trolleys, sliding window shades, the little fan above your seat—you name it.</p>

      <p>There are so many wonderful stories about the 747. It was two and a half times bigger than the largest passenger jet ever built.  They had to make a special factory to assemble it, and they were still building the factory as the first planes came off the line.  They were also still tinkering with the design. Engineers would run out onto the shop floor waving amended drawings, and annoyed foremen on the production line would cuss them out.</p>

      <p>The 747 required over 75,000 technical drawings. All of them were done by hand. There was no computer aided design to help engineers figure out how to put everything together, just a massive filing system.</p>

      <p>Boeing had to build a full-scale plywood model of the plane from these drawings to make sure everything fit together, and that multiple systems were not trying to occupy the same space.</p>
    </div>
  );
}
