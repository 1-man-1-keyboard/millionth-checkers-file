let canvas = document.getElementById('gameCanvas');

let ctx = canvas.getContext('2d');
let boardImage = new Image(); 
let redPieceImage = new Image(); blackPieceImage = new Image();
let rect = {
  x: 50,
  y: 50,
  width: 100,
  height: 100
};

function resizeCanvas() {
  let size = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = size;
    canvas.height = size;
    pieceWidth = canvas.width * 0.089;
    pieceHeight = canvas.height * 0.089;
  boardCoordinates = [
    [{x: canvas.width * 0.243, y: canvas.height * 0.16, piece: null}, {x: canvas.width * 0.419, y: canvas.height * 0.161, piece: null}, {x: canvas.width * 0.595, y: canvas.height * 0.162, piece: null}, {x: canvas.width * 0.772, y: canvas.height * 0.163, piece: null}],[{x: canvas.width * 0.154, y: canvas.height * 0.248, piece: null}, {x: canvas.width * 0.33, y: canvas.height* 0.248, piece: null}, {x: canvas.width * 0.506, y: canvas.height * 0.2490, piece: null}, {x: canvas.width * 0.682, y: canvas.height * 0.251, piece: null}],[{x: canvas.width * 0.242, y: canvas.height * 0.336, piece: null}, {x: canvas.width * 0.417, y: canvas.height * 0.3370, piece: null}, {x: canvas.width * 0.593, y: canvas.height * 0.339, piece: null}, {x: canvas.width * 0.769, y: canvas.height * 0.339, piece: null}],[{x: canvas.width * 0.154, y: canvas.height * 0.422, piece: null}, {x: canvas.width * 0.329, y: canvas.height * 0.423, piece: null}, {x: canvas.width * 0.504, y: canvas.height * 0.425, piece: null}, {x: canvas.width * 0.68, y: canvas.height * 0.427, piece: null}],[{x: canvas.width * 0.242, y: canvas.height * 0.51, piece: null}, {x: canvas.width * 0.416, y: canvas.height * 0.512, piece: null}, {x: canvas.width * 0.591, y: canvas.height * 0.514, piece: null}, {x: canvas.width * 0.767, y: canvas.height * 0.515, piece: null}],[{x: canvas.width * 0.155, y: canvas.height * 0.596, piece: null}, {x: canvas.width * 0.329, y: canvas.height * 0.598, piece: null}, {x: canvas.width * 0.503, y: canvas.height * 0.599, piece: null}, {x: canvas.width * 0.679, y: canvas.height * 0.601, piece: null}],[{x: canvas.width * 0.243, y: canvas.height * 0.683, piece: null}, {x: canvas.width * 0.416, y: canvas.height * 0.684, piece: null}, {x: canvas.width * 0.59, y: canvas.height * 0.686, piece: null}, {x: canvas.width * 0.766, y: canvas.height * 0.689, piece: null}],[{x: canvas.width * 0.155, y: canvas.height * 0.768, piece: null}, {x: canvas.width * 0.329, y: canvas.height * 0.77, piece: null}, {x: canvas.width * 0.502, y: canvas.height * 0.772, piece: null}, {x: canvas.width * 0.677, y: canvas.height * 0.774, piece: null}],
  ];
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let a2 = boardCoordinates[0][0]; a4 = boardCoordinates[0][1]; a6 = boardCoordinates[0][2]; a8 = boardCoordinates[0][3]; b1 = boardCoordinates[1][0]; b3 = boardCoordinates[1][1]; b5 = boardCoordinates[1][2]; b7 = boardCoordinates[1][3]; c2 = boardCoordinates[2][0]; c4 = boardCoordinates[2][1]; c6 = boardCoordinates[2][2]; c8 = boardCoordinates[2][3]; d1 = boardCoordinates[3][0]; d3 = boardCoordinates[3][1]; d5 = boardCoordinates[3][2]; d7 = boardCoordinates[3][3]; e2 = boardCoordinates[4][0]; e4 = boardCoordinates[4][1]; e6 = boardCoordinates[4][2]; e8 = boardCoordinates[4][3]; f1 = boardCoordinates[5][0]; f3 = boardCoordinates[5][1]; f5 = boardCoordinates[5][2]; f7 = boardCoordinates[5][3]; g2 = boardCoordinates[6][0]; g4 = boardCoordinates[6][1]; g6 = boardCoordinates[6][2]; g8 = boardCoordinates[6][3]; h1 = boardCoordinates[7][0]; h3 = boardCoordinates[7][1]; h5 = boardCoordinates[7][2]; h7 = boardCoordinates[7][3];
 
boardImage.onload = function() {
  ctx.drawImage(boardImage, 0, 0, canvas.width, canvas.height);
  
  redPieceImage.onload = function() {
    ctx.drawImage(redPieceImage, a2.x, a2.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, a4.x, a4.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, a6.x, a6.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, a8.x, a8.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, b1.x, b1.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, b3.x, b3.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, b5.x, b5.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, b7.x, b7.y, pieceWidth, pieceHeight); ctx.drawImage(redPieceImage, c2.x, c2.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, c4.x, c4.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, c6.x, c6.y, pieceWidth, pieceHeight);ctx.drawImage(redPieceImage, c8.x, c8.y, pieceWidth, pieceHeight);
    
    blackPieceImage.onload = function() {ctx.drawImage(blackPieceImage, f1.x, f1.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, f3.x, f3.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, f5.x, f5.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, f7.x, f7.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, g2.x, g2.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, g4.x, g4.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, g6.x, g6.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, g8.x, g8.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, h1.x, h1.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, h3.x, h3.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, h5.x, h5.y, pieceWidth, pieceHeight);ctx.drawImage(blackPieceImage, h7.x, h7.y, pieceWidth, pieceHeight);
    };
    blackPieceImage.src = 'Black350.png';
  };
  redPieceImage.src = 'Red350.png';
};
boardImage.src = 'R_Edited.jpeg';

function moveCheck(moveCheckX, moveCheckY) {
  canvas.addEventListener("click", function(event){
  let x = event.offsetX;
  let y = event.offsetY;
  
  if (x > d3.x && x < d3.x + pieceWidth && y > d3.y && y < d3.y + pieceHeight) {
    alert("You clicked on D3!");
    ctx.drawImage(redPieceImage, d3.x, d3.y, pieceWidth, pieceHeight);
    }
  });
}
canvas.addEventListener("click", function(event){
  let x = event.offsetX;
  let y = event.offsetY;
  
  if (x > a2.x && x < a2.x + pieceWidth && y > a2.y && y < a2.y + pieceHeight) {
    alert("You clicked on A2!");
    let moveX = x
    let moveY = y
    moveCheck(moveX, moveY);
  }
  if (x > a4.x && x < a4.x + pieceWidth && y > a4.y && y < a4.y + pieceHeight) {
    alert("You clicked on A4!");
  }
  if (x > a6.x && x < a6.x + pieceWidth && y > a6.y && y < a6.y + pieceHeight) {
    alert("You clicked on A6!");
  }
})



class RedPiece {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
