const calcFontSize = require('../calc-fontsize/index')

function div(text, width, height, fontFamily)
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerText = text
    if (width) div.style.width = width + 'px'
    if (height) div.style.height = height + 'px'
    if (fontFamily) div.style.fontFamily = fontFamily
    div.style.background = 'rgb(' + random(256) + ',' + random(256) + ',' + random(256) + ')'
    div.style.color = 'white'
    div.style.opacity = 0.7
    div.style.fontSize = calcFontSize(text, { width, height, fontFamily })
}

function test()
{
    div('this should fit perfectly', 500)
    div('this one too', 100)
    div('this one sizes the font using the desired height of the line', 0, 40)
    div('this uses a different font', 300, 0, 'Impact')
    div('這個使用中文', 250)
}

window.onload = function()
{
    var client = new XMLHttpRequest()
    client.open('GET', 'index.js')
    client.onreadystatechange = function()
    {
        var code = document.getElementById('code')
        code.innerHTML = client.responseText
        require('highlight.js').highlightBlock(code)
    }
    client.send()
    test()
}

function random(n)
{
    return Math.floor(Math.random() * n)
}