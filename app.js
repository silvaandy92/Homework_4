const inflateB = () => {if (event.isComposing || event.keyCode === 73) {
        return inflate();
}};

document.addEventListener('keyup', inflateB);

const deflateB = () => {
    if (event.isComposing || event.keyCode === 68) {
        return deflate()}
};

document.addEventListener('keyup', deflateB)

function inflate() {
    var balloonSize = document.getElementById('Balloon').style.fontSize;
    if (parseInt(balloonSize)>50)
    {document.getElementById('Balloon').innerHTML = '💥';}

    if (parseInt(balloonSize)>60 || parseInt(balloonSize)<=0)
    {document.getElementById('Balloon').innerHTML = 'Done', removeListeners ();}

    else
        {if(balloonSize=='')
            {balloonSize=30;}
            var change=parseInt(balloonSize) +10;
                document.getElementById('Balloon').style.fontSize = change.toString()+'px';}
}

function deflate() {
    var balloonSize = document.getElementById('Balloon').style.fontSize;
    if (balloonSize == '')
        {balloonSize=30;}
    if (balloonSize<=0)
        {change=30;}
    else
        {var change = parseInt(balloonSize)-10;}
        document.getElementById('Balloon').style.fontSize = change.toString() + 'px';
}

function removeListeners () {
    document.removeEventListener('keyup', inflateB);
    document.removeEventListener('keyup', deflateB);
}

