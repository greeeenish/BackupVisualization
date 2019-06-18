import * as THREE from 'three';
import OBJLoader from "three/examples/js/loaders/OBJLoader"
import MTLLoader from "three/examples/js/loaders/MTLLoader"

export const initCube = (value, fn) => {
  return new Promise(function (resolve, reject) {
    let mtlLoader = new MTLLoader();
    mtlLoader.setPath(process.env.BASE_URL + "object/1/");
    mtlLoader.load('1.mtl', (materials) => {
      materials.preload();
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath(process.env.BASE_URL + "object/1/");
      objLoader.load('1.obj', (object) => {
        object.rotation.x = 1.5 * Math.PI;
        object.scale.set(0.5, 0.5 , 0.5);
        object.data = value;
        object.position.z = -30;

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
            group.add(object)
            group.add(object2)
            group.data = value
            resolve(group)
          });
        });

      });
    })
  })
}

