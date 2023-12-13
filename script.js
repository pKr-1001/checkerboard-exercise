

const container = document.createElement('div')
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = '800px'
container.style.height = '800px'
container.style.columnCount = '8'
document.body.appendChild(container)

container.style.borderStyle = "solid";
container.style.borderWidth = "5px"
container.style.backgroundImage = "linear-gradient(to bottom right, red, blue)"

for(let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.style.width = '12.5%'
    square.style.height = '12.5%'
        if((i + Math.floor(i / 8)) % 2 === 0) {
        square.style.background = `rgba(180,60,30,${i * (1/64)})`;
    } else {
        square.style.background = `rgba(30,100,200,${i * (1/64)})`;
    }
    const p = document.createElement('p');
    p.textContent = i;
    square.appendChild(p);
    container.append(square)
}

// let row = false;
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


// for(let i = 0; i < 64; i++) {
//     const square = document.createElement('div');
//     square.style.width = '12.5%'
//     square.style.height = '12.5%'
//     if((i + Math.floor(i / 8)) % 2 === 0) {
//         square.style.background = "black";
//         //square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     } else {
//         square.style.background = "red";
//         // square.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     }
//     container.appendChild(square);
// }

