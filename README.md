## debug.js
calculate font-size for a given bounding box and optionally a font

## Code Example

    const FontSize = require('calc-fontsize')

    const div = document.createElement('div')
    document.body.appendChild(div)
    const text = 'find the right size for me'
    div.style.fontSize = FontSize(text, {width: 100, height: 100, fontFamily: 'arial'})

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
     * @param {number} [width] maximum width for bounding box
     * @param {number} [height] maximum height for bounding box
     * @param {string} [fontFamily]
     * @param {number} [min=10] minimum font size
     * @param {number} [max=1000] maximium font size
     * @returns {number} fontSize
     */
    function FontSize(text, options)

Copyright (c) 2017 YOPEY YOPEY LLC - MIT License