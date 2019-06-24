import * as THREE from 'three';

export const initPlane = (width, height, thick) => {
  let planeGeometry = new THREE.BoxGeometry(width, height,thick);
  let mats = []

  //材质和颜色
  for(let i = 0;i<planeGeometry.faces.length;i++){
      if(i==4){//底面
          let material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0
          });
          mats.push(material);
      }
      else if( i==5){//顶面
        let loader = new THREE.TextureLoader();
        let texture = loader.load(process.env.BASE_URL + "object/5/5/p-5.png");
        texture.minFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearFilter;
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
        });
        mats.push(material);
      }
      else if(i==0){
        let loader = new THREE.TextureLoader();
        let texture = loader.load(process.env.BASE_URL + "object/5/5/p-0.png");
        texture.minFilter = THREE.LinearFilter;
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity:0.3
        });
        mats.push(material);
      }
      else if(i==1){
        let loader = new THREE.TextureLoader();
        let texture = loader.load(process.env.BASE_URL + "object/5/5/p-1.png");
        texture.minFilter = THREE.LinearFilter;
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity:0.3
        });
        mats.push(material);
      }
      else if(i==2){
        let loader = new THREE.TextureLoader();
        let texture = loader.load(process.env.BASE_URL + "object/5/5/p-2.png");
        texture.minFilter = THREE.LinearFilter;
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity:0.3
        });
        mats.push(material);
      }
      else if(i==3){
        let loader = new THREE.TextureLoader();
        let texture = loader.load(process.env.BASE_URL + "object/5/5/p-3.png");
        texture.minFilter = THREE.LinearFilter;
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity:0.3
        });
        mats.push(material);
      }
  }

  let plane = new THREE.Mesh(planeGeometry, mats);
  plane.receiveShadow = true;
  return plane
}