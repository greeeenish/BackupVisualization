import * as THREE from 'three';

export const initPlat = (width, height, thick) => {
  let planeGeometry = new THREE.BoxGeometry(width, height,thick);
  let mats = []

  //材质和颜色
  for(let i = 0;i<planeGeometry.faces.length;i++){
    if(i==4){//底面
      let material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        depthTest:true
      });
      mats.push(null);
    }
    else if( i==5){//顶面
      let material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        depthTest:true
      });
      mats.push(null);
    }
    else if(i==0){
      let loader = new THREE.TextureLoader();
      let texture = loader.load(process.env.BASE_URL + "object/plat/p-0.png");
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity:0.3,

      });
      mats.push(null);
    }
    else if(i==1){
      let loader = new THREE.TextureLoader();
      let texture = loader.load(process.env.BASE_URL + "object/plat/p-1.png");
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity:0.8,

      });
      mats.push(material);
    }
    else if(i==2){
      let loader = new THREE.TextureLoader();
      let texture = loader.load(process.env.BASE_URL + "object/plat/p-2.png");
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity:0.3,
        // depthTest:true
      });
      mats.push(null);
    }
    else if(i==3){
      //获取到canvas对象
      var canvas = document.createElement('canvas');
      canvas.width=100;
      canvas.height=100;
      var ctx = canvas.getContext('2d');
      ctx.fillText("aaaaaa",0,0)
      ctx.fillStyle = "red";
      ctx.font = "60px '微软雅黑'";


      // var texture = new THREE.Texture(canvas);
      // texture.needsUpdate=true;//开启纹理更新

      let loader = new THREE.TextureLoader();
      let texture = loader.load(process.env.BASE_URL + "object/plat/p-3.png");
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      mats.push(material);
    }
  }

  let plane = new THREE.Mesh(planeGeometry, mats);
  mats.map.needsUpdate = true;
  plane.receiveShadow = true;
  return plane
}