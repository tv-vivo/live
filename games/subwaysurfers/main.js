var cubeRotation = 0.0;
var b;
var rail1;
var r1 = [];
var r2 = [];
var r3 = [];
var brick;
var rbrick = [];
var lbrick = [];
var flag = 0;
var coins = [];
var grayScale = 0;
var player, police;
var fly = 0;
var barrier = [];
var barrierup = [];
var rajtrain = [];
var duck = 0;
var speed = 0.2;
var rest = 0;
var rest_flag = 0;
var flash_time=0;
var tflag=0;
var jet =[];
var jetflag=0;
var shoe =[];
var shoeflag=0;
var magnet=[];
var magnetflag=0;
var powerup_time=0;
main();
var eyex, eyey, eyez, tx, ty, tz;
eyex = -4.5;
eyey = 1.5;
eyez = 0;
tx = ty = tz = 0;
//
// Start here
//

function check(e) {
  var code = e.keyCode;
  switch (code) {
    case 76:
      //GrayScale
      toggle_gray();
      break; //l key
    case 88:
      flag = 1;
      console.log('move');
      break;//X
    case 90:
      flag = 0;
      console.log(player.score);
      console.log(player.position);
      console.log(jet.length);
      console.log('stop');
      break;//Z
    case 65:
      
        if (eyez > -1.1) {
          eyez -= 1.1;
          tz -= 1.1
        }
        player.moveLeft();
      police.moveLeft();
      
      break;//A
    case 68:
      if (eyez < 1.1) {
        eyez += 1.1;
        tz += 1.1
      }
      player.moveRight();
      police.moveRight();
      break;//D
    case 32:
      player.moveUp();
      police.moveUp();
      break;//Space
    case 83:
      if(eyey > 1)
        eyey-= 1;
      player.duckP();
      duck = 1;
      //player.moveDown();
      break;//s
    case 69:
      
      player.reset();
      if(duck){
        eyey=1.5
      }
      duck = 0;
      break;//E
    default: console.log(code); //Everything else

  }
}
function main() {
  
  eyex = -4.5;
  eyey = 1.5;
  eyez = 0;
  tx = ty = tz = 0;
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  b = new base(gl, [0, 0, 0], 1000, 0.0, 2.5, 0);
  for (var i = 0; i < 1000; i++) {
    r1[i] = new rec(gl, [-2.5 + 0.5 * i, 0.1, -1.1], 0.5, 0, 0.5);
    r2[i] = new rec(gl, [-2.5 + 0.5 * i, 0.1, 0.0], 0.5, 0, 0.5);
    r3[i] = new rec(gl, [-2.5 + 0.5 * i, 0.1, 1.1], 0.5, 0, 0.5);
    rbrick[i] = new wall(gl, [-2.5 + 4 * i, 0.1, 2.5], 2, 2, 0.0);
    lbrick[i] = new wall(gl, [-2.5 + 4 * i, 0.1, -2.5], 2, 2, 0.0);
  }
  
  
  player = new human(gl, [-2, 0.2, 0]);
  police = new human(gl, [-5, 0.2, 0]);
  
  for(var j=0;j<800;j+=40){
    for (var i = 0; i < 5; i++) {
      c = new coin(gl, [player.position[0]+i+j+3, 0.2, -1.1], 0.1);
      c1 = new coin(gl, [player.position[0]+i+j+3, 0.2, 0], 0.1);
      c2 = new coin(gl, [player.position[0]+i+j+3, 0.2, 1.1], 0.1);
      coins.push(c);
      coins.push(c1);
      coins.push(c2);
    }
  }
  drawLow(gl);
  drawHigh(gl);
  drawTrain(gl);
  
  for(var j=0;j<800;j+=40){
      c = new barricade(gl, [j , 0.3, -1.1], 0, 0.2, 0.2);
      c1 = new barricade(gl, [j , 0.3, 0], 0, 0.2, 0.2);
      c2 = new barricade(gl, [j , 0.3, 1.1], 0, 0.2, 0.2);
      jet.push(c);
      shoe.push(c1);
      magnet.push(c2);
  }
  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;


  const fsSource = `
precision mediump float;
varying highp vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform int uGray;
uniform int uFlash;

void main(void) {
  vec4 tex =  texture2D(uSampler, vTextureCoord);
  float sum = (tex.x+tex.y+tex.z)/3.0;
  vec4 gray = vec4(sum,sum,sum,1);
  if(uGray ==1){
    gl_FragColor = gray;
  }else if(uFlash == 1){
    gl_FragColor = 0.25*tex;
  }  
  else{
    gl_FragColor = tex;
  }
  
}
`;



  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aTextureCoord and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
      uGray: gl.getUniformLocation(shaderProgram, 'uGray'),
      uFlash : gl.getUniformLocation(shaderProgram, 'uFlash'),
    },
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.

  var texture = [];
  texture['base'] = loadTexture(gl, 'base.jpg');
  texture['rails'] = loadTexture(gl, 'new_track.jpg');
  texture['wall'] = loadTexture(gl, 'BrickWall.jpg');
  texture['coin'] = loadTexture(gl, 'yellow.jpg');
  texture['head'] = loadTexture(gl, 'brown.jpg');
  texture['body'] = loadTexture(gl, 'tbody.jpg');
  texture['leg'] = loadTexture(gl, 'leg.jpg');
  texture['police'] = loadTexture(gl, 'policebody.jpg');
  texture['policeleg'] = loadTexture(gl, 'policeleg.jpg');
  texture['barricade'] = loadTexture(gl, 'barricade.jpg');
  texture['train'] = loadTexture(gl, 'train.jpg');
  texture['moving'] = loadTexture(gl, 'movingtrain.png');
  texture['jetpack'] = loadTexture(gl, 'jetpack.jpg');
  texture['magnet'] = loadTexture(gl, 'magnet.png');
  texture['shoe'] = loadTexture(gl, 'shoe.jpg');

  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    flash_time += 10*deltaTime;
    //console.log(flash_time);
    if(player.position[0]==1000){
      flag=0;
      document.getElementById('gameover').innerHTML ="Gameover thanks for playing"
    }
    if(jetflag==1){
      powerup_time += 5*deltaTime;
      if(powerup_time > 20){
        jetflag=0;
        powerup_time=0;
        if(fly){
          //eyey=1.5;
          eyex+=1;
          speed = speed/4;
        }
        fly = 0;
        player.reset();
        document.getElementById('powerup').innerHTML = "";  
      }
    }
    if(shoeflag==1){
      powerup_time += 5*deltaTime;
      if(powerup_time > 100){
        shoeflag=0;
        powerup_time=0;
        player.jump /=2;
        document.getElementById('powerup').innerHTML = "";      
      }
    }
    if(magnetflag==1){
      powerup_time += 5*deltaTime;
      magnet_coins();
      if(powerup_time > 100){
        magnetflag=0;
        powerup_time=0;
        document.getElementById('powerup').innerHTML = "";  
      }
    }
    if (rest_flag == 1) {
      rest += 2 * deltaTime;

      if (rest > 10) {
        rest = 0;
        rest_flag = 0;
        speed = 2 * speed;
        police.moveAhead(-2.5);
      }
    }
    then = now;
    if (flag) {
      eyex += speed;
      tx += speed;
      player.moveAhead(speed);
      police.moveAhead(speed);
    }
    if (!fly) {
      if(eyey > 1.5){
        eyey -= 0.04;
      }
      player.moveDown();
      police.moveDown();
      
    }else if(fly){
      //generate_coins(gl);
    }
    if(flash_time > 50){
      flash_time=0;
      flash();
    }if(!magnetflag){
      coin_collision();
    }
    
    barrier_collision();
    barrierup_collision();
    shoe_collision();
    jet_collision();
    magnet_collision();
    train_top();
    train_collision();
    move_train();
    clear();
    
    window.addEventListener('keydown', this.check, false);
    drawScene(gl, programInfo, texture, deltaTime);
    document.getElementById('score').innerHTML = player.score;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}


//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//


//
// Draw the scene.
//
function drawScene(gl, programInfo, texture, deltaTime) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
    fieldOfView,
    aspect,
    zNear,
    zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.

  var cameraMatrix = mat4.create();
  //mat4.tanslate(outout,input,value)
  mat4.translate(cameraMatrix, cameraMatrix, [eyex, eyey, eyez]);
  var cameraPosition = [
    cameraMatrix[12],
    cameraMatrix[13],
    cameraMatrix[14],
  ];

  var up = [0, 1, 0];
  var target = [tx, ty, tz];
  mat4.lookAt(cameraMatrix, cameraPosition, target, up);
  var viewMatrix = cameraMatrix;
  var viewProjectionMatrix = mat4.create();

  mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);

  b.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['base']);
  for (var i = 0; i < 1000; i++) {
    r1[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['rails']);
    r2[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['rails']);
    r3[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['rails']);
    rbrick[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['wall']);
    lbrick[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['wall']);
  }
  for (var i = 0; i < coins.length; i++) {
    coins[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['coin']);
  }
  drawPlayer(player, gl, viewProjectionMatrix, programInfo, deltaTime, texture);
  for (var i = 0; i < barrier.length; i++)
    barrier[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['barricade']);
  for (var i = 0; i < barrierup.length; i++)
    barrierup[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['barricade']);
  for (var i = 0; i < rajtrain.length; i++) {
    if (rajtrain[i].static)
    rajtrain[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['moving']);
    else
    rajtrain[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['train']);
    // rajtrain[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, tex);
  }
  for (var i = 0; i < jet.length; i++)
    jet[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['jetpack']);
  for (var i = 0; i < shoe.length; i++)
    shoe[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['shoe']);
  for (var i = 0; i < magnet.length; i++)
    magnet[i].drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['magnet']);
  drawPlayer(police, gl, viewProjectionMatrix, programInfo, deltaTime, texture);


  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute

  // Update the rotation for the next draw

  //cubeRotation += deltaTime;
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader) + source);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function drawPlayer(human, gl, viewProjectionMatrix, programInfo, deltaTime, texture) {
  if (human == player) {
    human.body.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['body']);
    human.left_leg.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['leg']);
    human.right_leg.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['leg']);
  } else {
    human.body.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['police']);
    human.left_leg.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['policeleg']);
    human.right_leg.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['policeleg']);
  }
  human.head.drawBase(gl, viewProjectionMatrix, programInfo, deltaTime, texture['head']);
}
function coin_collision() {
  for (var i = 0; i < coins.length; i++) {

    if (coins[i].pos[2] == player.position[2]) {
      if (coins[i].pos[1] == player.position[1] || (coins[i].pos[1] - player.position[1] == 0.2 && duck)) {
        if (Math.abs(coins[i].pos[0] - player.position[0]) < 0.01) {
          player.score += 50;
          coins.splice(i, 1);
          continue;
        }
      }

    }
  }
}
function barrier_collision() {
  for (var i = 0; i < barrier.length; i++) {
    if (barrier[i].pos[2] == player.position[2]) {
      if (Math.abs(barrier[i].pos[1] - player.position[1]) < 0.35) {
        if (Math.abs(barrier[i].pos[0] - player.position[0]) < 0.01) {
          if (rest_flag) {
            flag = 0;
            document.getElementById('gameover').innerHTML ="Gameover thanks for playing"
          } else {
            console.log('collision');
            rest_flag = 1;
            speed = speed / 2;
            police.moveAhead(2);
          }
        }
      }

    }
  }
}
function barrierup_collision() {
  for (var i = 0; i < barrierup.length; i++) {
    if (barrierup[i].pos[2] == player.position[2]) {
      if (Math.abs(barrierup[i].pos[1] - player.position[1]) < 0.61) {
        if (Math.abs(barrierup[i].pos[0] - player.position[0]) < 0.01) {
          if (rest_flag) {
            flag = 0;
            document.getElementById('gameover').innerHTML ="Gameover thanks for playing"
          } else {
            console.log('collision');
            rest_flag = 1;
            speed = speed / 2;
            police.moveAhead(2);
          }

        }
      }

    }
  }
}
function jet_collision(){
  for (var i = 0; i < jet.length; i++) {
    if (jet[i].pos[2] == player.position[2]) {
      if (Math.abs(jet[i].pos[1] - player.position[1]) < 0.31) {
        if (Math.abs(jet[i].pos[0] - player.position[0]) < 0.01) {
          jetflag =1;
          fly = 1;
        if(eyey < 4.5){
          eyey +=3;
          eyex -=1;
        }
        speed = speed*4;
        player.fly();
        document.getElementById('powerup').innerHTML = "Jetpack";  
          jet.splice(i,1);
          continue;
        }
      }

    }
  }
}
function shoe_collision(){
  for (var i = 0; i < shoe.length; i++) {
    if (shoe[i].pos[2] == player.position[2]) {
      if (Math.abs(shoe[i].pos[1] - player.position[1]) < 0.31) {
        if (Math.abs(shoe[i].pos[0] - player.position[0]) < 0.01) {
          shoeflag =1;
          player.jump *= 2;
          shoe.splice(i,1);
          document.getElementById('powerup').innerHTML = "Double Jump";  
          continue;
        }
      }

    }
  }
}
function magnet_collision(){
  for (var i = 0; i < magnet.length; i++) {
    if (magnet[i].pos[2] == player.position[2]) {
      if (Math.abs(magnet[i].pos[1] - player.position[1]) < 0.31) {
        if (Math.abs(magnet[i].pos[0] - player.position[0]) < 0.01) {
          magnetflag =1;
          magnet.splice(i,1);
          document.getElementById('powerup').innerHTML = "Magnet";  
          continue;
        }
      }

    }
  }
}
function magnet_coins(){
  for (var i = 0; i < coins.length; i++) {
      if (coins[i].pos[1] == player.position[1] || (coins[i].pos[1] - player.position[1] == 0.2 && duck)) {
        if (Math.abs(coins[i].pos[0] - player.position[0]) < 0.01) {
          player.score += 50;
          coins.splice(i, 1);
          continue;
        }
      }

    }

}
function train_collision() {
  for (var i = 0; i < rajtrain.length; i++) {
    var train = rajtrain[i].retFrontFace();
    var height = rajtrain[i].retHeight();
    //sideways collision
    if (train[2] == player.position[2]) {
      if (Math.abs(train[1] - player.position[1]) < 1) {
        if (Math.abs(train[0] - player.position[0]) < 0.01) {
          if(rajtrain[i].static)
          {
            rajtrain[i].static =0;
          }
          flag = 0;
          document.getElementById('gameover').innerHTML ="Gameover thanks for playing"
          police.moveAhead(2);
          
        }

      }
      
    }
  }
}
function train_top(){
  for (var i = 0; i < rajtrain.length; i++) {
    var train = rajtrain[i].retFrontFace();
    var height = rajtrain[i].retHeight();
    var width = rajtrain[i].width;
    //sideways collision
    if (train[2] == player.position[2]) {
      // console.log('train'+i);
      if (Math.abs(rajtrain[i].pos[0]-player.position[0]) < height) {
        // console.log('within range'+i);  
        if (Math.abs(rajtrain[i].pos[1]+width - player.position[1]) < 0.1) {
          //console.log('stand on train')
          tflag=1;
        }else{
          tflag=0;
        }

      }else
        tflag=0;
      
    }
  }
}
function move_train(){
  for (var i = 0; i < rajtrain.length; i++)
    rajtrain[i].moveTrain();
}
function flash(){
  for(var i=0;i<lbrick.length;i++){
    if(lbrick[i].uFlash==0){
      lbrick[i].uFlash = 1;
    }else{
      lbrick[i].uFlash =0;
    }
  }
  for(var i=0;i<rbrick.length;i++){
    if(rbrick[i].uFlash==0){
      rbrick[i].uFlash = 1;
    }else{
      rbrick[i].uFlash =0;
    }
  }
}
function toggle_gray(){
  b.uGray = (b.uGray==0)?1:0;
      for(var i=0;i<rajtrain.length;i++){
        rajtrain[i].uGray = (rajtrain[i].uGray==0)?1:0;
      }
      for(var i=0;i<lbrick.length;i++){
        lbrick[i].uGray = (lbrick[i].uGray==0)?1:0;
      }
      for(var i=0;i<rbrick.length;i++){
        rbrick[i].uGray = (rbrick[i].uGray==0)?1:0;
      }
      for(var i=0;i<barrier.length;i++){
        barrier[i].uGray = (barrier[i].uGray==0)?1:0;
      }
      for(var i=0;i<barrierup.length;i++){
        barrierup[i].uGray = (barrierup[i].uGray==0)?1:0;
      }
      player.grayScale();
}
function generate_coins(gl){
  for (var i = 0; i < 2; i++) {
    c = new coin(gl, [player.position[0]+i, 2.2, player.position[2]], 0.1);
    coins.push(c);
  }
  
}
function drawTrain(gl){
  for (var j = 0; j < 800; j += 40) {
    for (var i = 1; i < 3; i++) {
      var lane = [-1.1, 0, 1.1];
      var t = lane[Math.floor((Math.random() * 3))];
      var q = new train(gl, [10 + j + 1.5 * i, 0.77, t], 1, 0.75, 0.5);
      if (i == 2)
        q.static = 1  ;
      rajtrain.push(q);
    }
  } 
}
function drawLow(gl){
  for(var j =0;j<800;j+= 20){
    for (var i = 0; i < 2; i++){
      var lane = [-1.1, 0, 1.1];
      var t = lane[Math.floor((Math.random() * 3))];
      var bar = new barricade(gl, [j + 10* i+8, 0.3, t], 0, 0.2, 0.5);
      barrier.push(bar);
    }
  }
}
function drawHigh(gl){
  for(var j=0;j<800;j += 45){
    for (var i = 0; i < 2; i++){
      var lane = [-1.1, 0, 1.1];
      var t = lane[Math.floor((Math.random() * 3))];
      var bar =new barricade(gl, [15+j + 10* i+8, 0.8, t], 0, 0.4, 0.5);
      barrierup.push(bar);
    }
  }  
}
function clear(){
  var p = player.position[0];
  for (var i = 0; i < jet.length; i++){
    if(p-jet[i].pos[0] > 4){
      jet.splice(i,1);
      continue;
    }
  }
  for (var i = 0; i < shoe.length; i++){
    if(p-shoe[i].pos[0] > 4){
      shoe.splice(i,1);
      continue;
    }
  }
  for (var i = 0; i < magnet.length; i++){
    if(p-magnet[i].pos[0] > 4){
      magnet.splice(i,1);
      continue;
    }
  }
  for (var i = 0; i < barrier.length; i++){
    if(p-barrier[i].pos[0] > 4){
      barrier.splice(i,1);
      continue;
    }
  }for (var i = 0; i < barrierup.length; i++){
    if(p-barrierup[i].pos[0] > 4){
      barrierup.splice(i,1);
      continue;
    }
  }for (var i = 0; i < rajtrain.length; i++){
    if(p-rajtrain[i].pos[0] > 4){
      rajtrain.splice(i,1);
      continue;
    }
  }for (var i = 0; i < coins.length; i++){
    if(p-coins[i].pos[0] > 4){
      coins.splice(i,1);
      continue;
    }
  }
    
}