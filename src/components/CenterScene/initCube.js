import * as THREE from 'three';
import OBJLoader from "three/examples/js/loaders/OBJLoader"
import MTLLoader from "three/examples/js/loaders/MTLLoader"

export const initCube = (value, fn) => {  //主机模型
  return new Promise(function (resolve, reject) {
    let mtlLoader = new MTLLoader();
    mtlLoader.setPath(process.env.BASE_URL + "object/1/");
    mtlLoader.load('1.mtl', (materials) => {
      materials.preload();
      for (let key in materials.materials) {
        materials.materials[key].map.minFilter = THREE.LinearFilter;
        materials.materials[key].map.anisotropy = 2;
        materials.materials[key].map.magFilter = THREE.LinearFilter;
        console.log(materials.materials[key].map)
      }
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath(process.env.BASE_URL + "object/1/");
      objLoader.load('1.obj', (object) => {
        object.rotation.x = 1.5 * Math.PI;
        object.rotation.y = 0.5 * Math.PI;
        object.data = value;

        object.traverse(function(child) {
          if(child instanceof THREE.Mesh) {
            console.log(child.material.map)
            child.material.map.minFilter = THREE.LinearFilter
          }
        });


        resolve(object)
      });
    })
  })
}

