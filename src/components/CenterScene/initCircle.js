import * as THREE from 'three';

export const initCircle = (value) => {
  let geometry = new THREE.CircleGeometry(50, 40, 3, 2*Math.PI);
  let matieral =  new THREE.MeshBasicMaterial({
    // map: texture,
    side: THREE.DoubleSide,
    color: 0x0098e7

  });

  let arrow = new THREE.Mesh(geometry, matieral);
  return arrow;

};

//发光粒子贴图
function createLightMateria() {
  let canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  let context = canvas.getContext('2d');
  //根据参数确定两个圆的坐标，绘制放射性渐变的方法，一个圆在里面，一个圆在外面
  let gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);

  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
  gradient.addColorStop(1, 'rgba(0,0,0,1)');

  //设置渐变
  context.fillStyle = gradient;
  //绘图
  context.fillRect(0, 0, canvas.width, canvas.height);

  //贴图使用
  let texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}