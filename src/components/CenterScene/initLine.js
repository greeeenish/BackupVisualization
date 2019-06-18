import * as THREE from 'three'
import {MeshLine, MeshLineMaterial} from 'three.meshline';

export const initLine = function (value) {
  let geometry = new THREE.Geometry();

  //画线段
  if(value.parent) {
    geometry.verticesNeedUpdate = true;
    geometry.vertices[0] = new THREE.Vector3(value.x, value.y , 0);
    geometry.vertices[1] = new THREE.Vector3(value.x, (value.y + value.parent.y)/2 , 0);
    geometry.vertices[2] = new THREE.Vector3(value.parent.x, (value.y + value.parent.y)/2  , 0);
    geometry.vertices[3] = new THREE.Vector3(value.parent.x, value.parent.y, 0);
  }

  let meshline = new MeshLine();
  meshline.setGeometry( geometry );

  let material = new MeshLineMaterial({
    color: new THREE.Color( 0x4CCDFC ),
    opacity: 1,
    // resolution: resolution,
    sizeAttenuation: !false,
    lineWidth: 2,
  });
  let line = new THREE.Mesh(meshline.geometry, material);
  return line
}