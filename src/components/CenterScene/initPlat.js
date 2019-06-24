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