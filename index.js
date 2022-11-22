var canvas, g;
var characterPosX, characterPosY, characterimage;
var speed, acceleration;


onload = function () {
  // 描画コンテキストの取得
  canvas = document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  const chara = new Image();
  chara.src = "/abc.png";
  chara.onload = () => {
    characterPosX.drawImage(chara, 0, 0);
  };
  // 初期化
  init();
  // 入力処理の指定
  document.onkeydown = keydown();
  // ゲームループの設定 60FPS
  setInterval("gameloop()", 16);
};

function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function init() {
  characterPosX = -15;
  characterPosY = 400;
  characterimage = new Image();
  characterimage.src = "./hori.png";
}

function keydown(e) {
  speed = -20;
  acceleration = 1.5;
  audio();
}
addEventListener("keydown", keydown );

function gameloop() {
  update();
  draw();
}

function update() {
  characterPosX = characterPosX + 1;
  speed = speed + acceleration;
  characterPosY = characterPosY + speed;

  if(characterPosX > 500) {
    characterPosX = -15;
  }
  if (characterPosY > 400) {
    characterPosY = 400;
    speed = 0;
    acceleration = 0;
  }
}


function draw() {

  g.fillStyle = "rgb(0,0,0)";
  g.fillRect(0, 0, 480, 480);


  g.drawImage(
    characterimage,
    characterPosX - characterimage.width / 2,
    characterPosY - characterimage.height / 2
  );
}