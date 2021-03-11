//document.querySelector(".control-buttons span").onclick = function () {
//    let yourName = prompt("what is your name ?");
//    console.log(yourName)
//}

document.querySelector(".control-buttons span").addEventListener("click", function () {
    let yourName = prompt("what is your name ?");
    if (yourName == null || yourName == "") {
        document.querySelector('.name span').innerHTML = 'Unknown';
    } else {
        document.querySelector('.name span').innerHTML = yourName;
    } 

    document.querySelector(".control-buttons ").remove();
})

let duration = 1000;
let blcokContainer = document.querySelector('.memory-game-blocks ');
let blcoks = Array.from(blcokContainer.children);
let orderRange = Array.from(Array(blcoks.length).keys());

shuffel(orderRange)


blcoks.forEach(myfunction);
function myfunction(item ,index) {
   
    item.style.order = orderRange[index];
    item.addEventListener('click', function () {
        isFliped(item)
    })
}

function stopClicking() {

    blcokContainer.style.pointerEvents = "none";
    setTimeout(() => {
        blcokContainer.style.pointerEvents = "auto";
    }, duration)

}

function chcekMatchedBlocks(firstBlock,secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration)

        //firstBlock.classList.add('has-match');
        //secondBlock.classList.add('has-match');


        document.getElementById('success').play();
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration)
        document.getElementById('fail').play();
    }
}

function isFliped(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    let allblockFlibed = blcoks.filter(flibedBlock => flibedBlock.classList.contains('is-flipped'));
    if (allblockFlibed.length === 2) {
      
        stopClicking();
        chcekMatchedBlocks(allblockFlibed[0], allblockFlibed[1])
    }
} 

function shuffel(array) {
    let current = array.length;
    let temp;
    let random;

    while (current > 0) {
        
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
       
    }
    return array
    
}