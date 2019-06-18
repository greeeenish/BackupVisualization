import * as THREE from 'three';
import OBJLoader from "three/examples/js/loaders/OBJLoader"
import MTLLoader from "three/examples/js/loaders/MTLLoader"


export const initCenter = () => {

  return new Promise(function (resolve, reject) {
    let mtlLoader = new MTLLoader();
    mtlLoader.setPath(process.env.BASE_URL + "object/2/");
    mtlLoader.load('2.mtl', (materials1) => {
      materials1.preload();
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials1);
      objLoader.setPath(process.env.BASE_URL + "object/2/");
      objLoader.load('2.obj', (object1) => {
        object1.rotation.x = 1.5 * Math.PI;
        object1.scale.set(0.5, 0.5, 0.5);
        object1.position.z -= 30

        //加载底座
        mtlLoader.setPath(process.env.BASE_URL + "object/7/");
        mtlLoader.load('7.mtl', (materials2) => {
          materials2.preload();
          objLoader.setMaterials(materials2);
          objLoader.setPath(process.env.BASE_URL + "object/7/");
          objLoader.load('7.obj', (object2) => {
            object2.rotation.x = 1.5 * Math.PI;
            object2.scale.set(0.5, 0.5, 0.5);

            let group = new THREE.Group()
            group.add(object1)
            group.add(object2)

            resolve(group)
          });
        });
      })
    })
  })
}


