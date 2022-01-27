let boxTop = 300
let boxLeft = 500


document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if(keyName === 'ArrowDown' && boxTop < 460){
        boxTop += 10
    }

    if(keyName === 'ArrowUp' && boxTop > -10){
        boxTop -= 10
    }

    if (keyName === 'ArrowRight' && boxLeft < 1080){
        boxLeft += 10  
    }

    if(keyName === 'ArrowLeft' && boxLeft > 0){
        boxLeft -= 10
    }
    //alert('keydown event\n\n' + 'key: ' + keyName);
    //console.log('keydown event\n\n' + 'key: ' + keyName)
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
});

const main = document.getElementById('root')

for(let a = 0; a < 150; a++){
    let div = document.createElement('div')
    div.style.boxShadow = `${Math.round(Math.random() * 1200)}px ${Math.round(Math.random() * 180)}px white`
    div.style.zIndex = '3'
    div.style.width = "3px"
    div.style.height = "3px"
    div.style.borderRadius = '50%'
    main.appendChild(div)
}
    