import * as THREE from 'three';

export const initArrow = (value) => {
  let loader = new THREE.TextureLoader();
  let texture = loader.load(process.env.BASE_URL + "object/arrow.png");
  texture.minFilter = THREE.LinearFilter;
  let geometry = new THREE.BoxGeometry(20,50,2);
  let mats = []
  //材质和颜色
  for(let i = 0;i<geometry.faces.length;i++){
    if( i==5){//顶面
      let material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        map: texture
      });
      mats.push(material);
    }else {
      mats.push(null)
    }
  }
  let arrow = new THREE.Mesh(geometry, mats);
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