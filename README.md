## debug.js
calculate font-size for a given bounding box and optionally a font

## Code Example

    const calcFontSize = require('calc-fontsize')

    const div = document.createElement('div')
    document.body.appendChild(div)
    const text = 'find the right size for me'
    div.style.fontSize = calcFontSize(text, {width: 100, height: 100, fontFamily: 'arial'})

    div.style.fontFamily = 'arial'
    div.style.fontSize = fontSize
    div.innerText = text


## Live Example
https://davidfig.github.io/calc-fontsize/

## Installation

    npm i calc-fontsize

# API Reference

    /**
    * @param {string} text
    * @param {object} options
    * @param {number} [maxWidth] bounding box width and/or height
    * @param {number} [maxHeight] "
    * @param {string} [font-family]
    * @param {number} [min=10] minimum font size
    * @param {number} [max=1000] maximium font size
    * @returns {number} fontSize
    */
    function calcFontSize(text, options)

Copyright (c) 2017 YOPEY YOPEY LLC - MIT License