import React, { useState } from 'react';
import './Accessibility.css';
function Accessibility() {
  const [font, setfont] = useState(100);
  var max = 130;
  var min = 70;
  var original = 100;
  const invertColor = () => {
    // the css we are going to inject
    var css =
        'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }',
      head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    // a hack, so you can "invert back" clicking the bookmarklet again
    if (!window.counter) {
      window.counter = 1;
    } else {
      window.counter++;
      if (window.counter % 2 == 0) {
        var css =
          'html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
      }
    }

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    //injecting the css to the head
    head.appendChild(style);
  };
  const increaseFont = () => {
    if (font < max) {
      setfont(font + 10);
    }
  };
  const decreaseFont = () => {
    if (font > min) {
      setfont(font - 10);
    }
    console.log(font);
  };
  const originalFont = () => {
    setfont(original);
  };
  document.body.style.zoom = font + '%';

  return (
    <div>
      <button onClick={increaseFont}>increase Font</button>
      <button onClick={originalFont}>original Font </button>
      <button onClick={decreaseFont}>decrease Font</button>
      <button onClick={invertColor}>invert color</button>
    </div>
  );
}

export default Accessibility;