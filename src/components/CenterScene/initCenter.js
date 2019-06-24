import * as THREE from 'three';
import OBJLoader from "three/examples/js/loaders/OBJLoader"
import MTLLoader from "three/examples/js/loaders/MTLLoader"


export const initCenter = () => {

  return new Promise(function (resolve, reject) {
    let mtlLoader = new MTLLoader();
    mtlLoader.setPath(process.env.BASE_URL + "object/3/");
    mtlLoader.load('3.mtl', (materials1) => {
      materials1.preload();
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials1);
      objLoader.setPath(process.env.BASE_URL + "object/3/");
      objLoader.load('3.obj', (object1) => {
        object1.rotation.x = 1.5 * Math.PI;
        object1.rotation.y = 0.5 * Math.PI;
        // object1.scale.set(0.5, 0.5, 0.5);
        object1.position.z -= 30
        resolve(object1)
      })
    })
  })
}


