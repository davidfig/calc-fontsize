/**
 * @file index.js
 * @summary calculate font-size for a given bounding box
 * @author David Figatner
 * @license MIT
 * @copyright YOPEY YOPEY LLC 2017
 * {@link https://github.com/davidfig/calcFontSize}
 */

let _dummy

 /**
  * @param {string} text
  * @param {object} options
  * @param {number} [maxWidth] bounding box width and/or height
  * @param {number} [maxHeight] "
  * @param {string} [fontFamily] use this font-family to determine the size
  * @param {number} [min=10] minimum font size
  * @param {number} [max=1000] maximium font size
  * @returns {number} fontSize
  */
module.exports = function calcFontSize(text, options)
{
    if (!_dummy)
    {
        _dummy = document.createElement('div')
        document.body.appendChild(_dummy)
        _dummy.style.position = 'absolute'
        _dummy.style.float = 'left'
        _dummy.style.whiteSpace = 'no-wrap'
        _dummy.style.visibility = 'hidden'
    }
    _dummy.style.fontFamily = options.fontFamily
    let size = options.min || 10
    let max = options.max || 1000
    _dummy.style.fontSize = size + 'px'
    _dummy.innerHTML = text
    while (size <= max && (!options.width || _dummy.offsetWidth < options.width) && (!options.height || _dummy.offsetHeight < options.height))
    {
        size++
        _dummy.style.fontSize = size + 'px'
    }
    return size - 1
}