import * as THREE from 'three';

export const initPoint = (value) => {
  // let sphere_geometry = new THREE.SphereGeometry(2, 20, 20);
  // let sphere_material = new THREE.PointsMaterial({
  //   color:0xffffff,
  //   size:80,
  //   transparent:true,//使材质透明
  //   // opacity: 0.5,
  //   blending:THREE.AdditiveBlending,
  //   // depthTest:false,//深度测试关闭，不消去场景的不可见面
  //   map: createLightMateria()
  // });
  // let sphere = new THREE.Mesh(sphere_geometry, sphere_material);
  // sphere.castShadow = true;
  // sphere.receiveShadow = true;
  // return sphere;

  let loader = new THREE.TextureLoader();
  let texture = loader.load(process.env.BASE_URL + "object/arrow.png");

  let sphere_geometry = new THREE.BoxGeometry(20,50,2);
  let sphere_material = new THREE.MeshBasicMaterial({
    transparent:true,//使材质透明
    // opacity: 0.5,
    // blending:THREE.AdditiveBlending,
    // depthTest:false,//深度测试关闭，不消去场景的不可见面

  });

  let mats = []
  //材质和颜色
  for(let i = 0;i<sphere_geometry.faces.length;i++){
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
  let sphere = new THREE.Mesh(sphere_geometry, mats);
  return sphere;

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