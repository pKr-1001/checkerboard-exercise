

const container = document.createElement('div')
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = '800px'
container.style.height = '800px'
container.style.columnCount = '8'
document.body.appendChild(container)

// const curRow = 0; 
// const randomColor = Math.floor(Math.random()*16777215).toString(16);


let row = false;
// for(let i = 0; i < 8; i++) {
//     for( let j = 0; j < 8; j++) {
//         const square = document.createElement('div');
//         square.style.width = '12.5%'
//         square.style.height = '12.5%'
//         if(j % 2 === 0) {
//             if(!row){
//                 square.style.background = 'red';
//             } else {
//                 square.style.background = "black";
//             }
//         } else {
//             if(!row){
//                 square.style.background = 'black';
//             } else {
//                 square.style.background = 'red';
//             }
//         }
//             container.appendChild(square)
//     }
//     row = !row;
// }

// for(let i = 0; i < 64; i++) {
//     const square = document.createElement('div');
//     square.style.width = '12.5%'
//     square.style.height = '12.5%'
//     //square.style. = ''
//     if((i + Math.floor(i / 8)) % 2 === 0) {
//         square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     } else {
//         square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     }
//     container.appendChild(square);
// }

var body = document.body;

function setGradient (element, color1, color2) {
    element.style.background = "linear-gradient(to left," + color1 + "," + color2 +")";
}

for(let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.style.width = '12.5%'
    square.style.height = '12.5%'
    if((i + Math.floor(i / 8)) % 2 === 0) {
        square.style.background = "black";
        //square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    } else {
        square.style.background = "red";
        // square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
    setGradient(container, "red", "blue")
    container.appendChild(square);
}

