<template>
    <div id="canvas_container"></div>
</template>

<script>
  import * as THREE from 'three'
  import * as d3 from 'd3'
  import OrbitControls from "three/examples/js/controls/OrbitControls"
  import {initPlane} from './initPlane'
  import {initCube} from "./initCube"
  import {initStorageCube} from "./initStorageCube"
  import {initCenter} from "./initCenter"
  import {initPlat} from "./initPlat"
  import {initLine} from "./initLine"
  import {initPoint} from "./initPoint"

  export default {
    name: "CenterScene",
    data() {
      return {
        camera: null,
        renderer: null,
        scene: null,
        light: null,
        traceballControl: null,
        raycaster: null,
        mouse: null,
        width: 0,
        height: 0,
        planewidth: 0,  //最底部台子的宽度

        treeData: {
          name: "数据中心",
          type: 'datacenter',
          children: [
          {
            name: "存储环境",
            type: "platform",
            children: [
            {
              name: "区域1",
              type: 'zone',
              children: [
                {
                  name: "主机A",
                  type: 'host',
                  ip: '192.168.11.69',
                  os: 'Windows',
                },
              ]
            },
            {
              name: "区域2",
              type: 'zone',
              children: [
                {
                  name: "主机D",
                  type: 'storage',
                  ip: '192.168.11.69',
                  os: 'Windows',
                },
              ]
            },]
          },
          {
            name: "生产环境" ,
            type: 'platform',
            children: [
              {
                name: '',
                type: 'zone',
                children: [
                  {
                    name: "主机C" ,
                    type: 'host',
                    ip: '192.168.11.100',
                    os: 'Linux',
                  },
                ]
              },
              {
                name: '',
                type: 'zone',
                children: [
                  {
                    name: "主机C" ,
                    type: 'storage',
                    ip: '192.168.11.100',
                    os: 'Linux',
                  },
                ]
              }
            ]
          }]
        },
        nodes: [],
        cubeObjects: [],
        lineObjects: [],
        links: [],
        spheres: [],

        plat: {
          z: 0
        }

      }
    },
    methods: {
      /**初始化场景*/
      init() {
        //设置渲染器大小，绑定渲染器
        this.initRender();
        //相机位置
        this.initCamera();
        //场景
        this.initScene();
        //光源
        this.initLight();
        //交互控制
        this.initControl()
        //辅助工具
        let helper = new THREE.AxesHelper(1000);
        // this.scene.add(helper);
        let chelper = new THREE.CameraHelper(this.camera)
        // this.scene.add(chelper)
      },
      initRender() {
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true //抗锯齿
        });

        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.renderer.setSize(this.width, this.height);
        this.renderer.domElement.style.cssText += "position:absolute; top:0; left:0 "
        document.getElementById('canvas_container').appendChild(this.renderer.domElement);//追加 【canvas】 元素
      },
      initCamera() {
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 1, 10000);
        this.camera.up.x=0;      this.camera.up.y=0;      this.camera.up.z=-1;
        this.camera.position.set(-1000, -1200, -500)
        this.camera.lookAt(0,0,0)
      },
      initScene() {
        this.scene = new THREE.Scene();
        this.scene.position.z = -100
      },
      initLight() {
        //环境光
        this.light = new THREE.AmbientLight(0xffffff, 6);
        this.light.position.set(0, 0, -1000);
        this.scene.add(this.light);
      },
      initControl() {
        this.traceballControl = new OrbitControls( this.camera, this.renderer.domElement );
        window.addEventListener('resize', this.onWindowResize, false);
        this.renderer.domElement.addEventListener( 'wheel', ()=>{}, false );
      },

      /**添加3D元素*/
      add3DObject() {
        this.addPlane();
        this.initTreeData();
        this.addNodes();
        this.addLinks();
        this.addSpheres();
      },
      initTreeData(){// 定义Tree层级，并设置宽高
        // 计算父节点、字节点、高度和深度（parent, children, height, depth）
        let root = d3.hierarchy(this.treeData, function(d) {
          if(d.type == 'datacenter'){
            return d.children;
          }
        });
        this.planewidth = root.height * 900
        let treemap = d3.tree().size([this.planewidth, this.planewidth]);   //平面的宽高
        // 设置节点的x、y位置信息
        let treemapData = treemap(root);
        this.nodes = treemapData.descendants();
        this.links = treemapData.descendants().slice(1);
        this.spheres = treemapData.descendants();
      },
      addPlane() {  //底部的台子
        let plane = initPlane(1200, 1200, 500);
        plane.position.z = 250;
        this.scene.add(plane)
      },
      addNodes() {
        this.nodes.forEach((value, index) => {
          if(value.data.type == "datacenter"){  //数据中心圆柱
            value.x = (value.x - this.planewidth/2);    //缩放位置
            value.y = (value.y - this.planewidth/2);
            initCenter().then((object)=>{
              object.position.set(value.x-25, value.y, 0)
              this.scene.add(object)
            })
          }
          else {
            let platform = new THREE.Group();
            // let plat = initPlane(value.data.children.length * 200,value.depth * 200, -50);
            let plat = initPlat(value.data.children.length * 200,value.depth * 200, value.depth * 100);


            value.x = (value.x - this.planewidth/2);    //缩放位置
            value.y = (value.y - this.planewidth/2);

            platform.add(plat);
            this.plat.z = value.depth * 100/2
            platform.position.set(value.x, value.y, -this.plat.z);
            this.scene.add(platform);

            this.loadFont(value.data.name).then((font)=>{
              font.position.set(value.x, value.y-value.depth * 100, -this.plat.z);
              this.scene.add(font)
            });

            this.addPlatformObj(value.data,platform)
          }
        });
        this.addClickEvent()
      },
      addPlatformObj(value,platform, zone) {
        let that = this
        var childnodes = value.children;
        for(let i=0; i < childnodes.length; i++){
          var cnode = childnodes[i];
          if(cnode.type == 'zone'){ //区域平面
            let planeGeometry = new THREE.PlaneGeometry(120, 100);
            let planeMaterial = new THREE.MeshStandardMaterial({color: 0x000000, side: THREE.DoubleSide});
            let plane = new THREE.Mesh(planeGeometry, planeMaterial);

            zone = new THREE.Group();
            zone.position.z = -9
            if(childnodes.length%2==0){
              if(i<(childnodes.length/2)){
                zone.position.x -= (i+1)*100
              }else {
                zone.position.x += i*100
              }
            }
            else {
              if(i<Math.floor(childnodes.length/2)){
                zone.position.x -= (i+1)*200
              }else if(i>Math.floor(childnodes.length/2)){
                zone.position.x += (i-1)*200
              }
            }

            // zone.add(plane)
            platform.add(zone)
          }
          else if(cnode.type == 'host'){  //主机立方体
            initCube(cnode).then((cube)=>{
              if(childnodes.length%2==0){
                if(i<(childnodes.length/2)){
                  cube.position.x -= (i+1)*30
                }else {
                  cube.position.x += i*30
                }
              }
              else {
                if(i<Math.floor(childnodes.length/2)){
                  cube.position.x -= (i+1)*30
                }else if(i>Math.floor(childnodes.length/2)){
                  cube.position.x += (i-1)*30
                }
              }

              if(zone){
                cube.position.z = this.plat.z;
                zone.add(cube)
              }
              else {
                cube.position.z = this.plat.z;
                platform.add(cube)
              }
              // that.cubeObjects.push(cube.children[0]);
              // that.lineObjects.push(cube.children[1])
            })
          }
          else if(cnode.type == 'storage'){  //存储
            initStorageCube(cnode).then((cube)=>{
              if(childnodes.length%2==0){
                if(i<(childnodes.length/2)){
                  cube.position.x -= (i+1)*30
                }else {
                  cube.position.x += i*30
                }
              }
              else {
                if(i<Math.floor(childnodes.length/2)){
                  cube.position.x -= (i+1)*30
                }else if(i>Math.floor(childnodes.length/2)){
                  cube.position.x += (i-1)*30
                }
              }

              if(zone){
                cube.position.z = this.plat.z;
                zone.add(cube)
              }
              else {
                cube.position.z = this.plat.z;
                platform.add(cube)
              }
            })
          }
          if(cnode.children){
            that.addPlatformObj(cnode,platform,zone);//递归调用
          }
        }


      },
      addLinks() {
        this.links.forEach((value,index) => {
            let line = initLine(value);
            this.scene.add(line);
        });
      },
      addSpheres() {
        this.spheres.forEach((value, index) => {
          if(value.parent!=null){
            let sphere = initPoint(value);
            value.body = sphere;
            value.body.position.set(value.x, value.y, 0);
            this.scene.add(sphere);
          }
        });
      },

      /**动画*/
      animate(){
        this.pointMove();
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
        this.traceballControl.update();
      },
      pointMove() {
        this.spheres.forEach((value) => {
          if(value.parent){
            if(value.body.position.y > (value.y + value.parent.y)/2){
              value.body.position.y -= 2 //向下
              value.body.rotation.z = 0
            }
            else if(value.body.position.x > value.parent.x ){
              value.body.position.x -=2//向右
              value.body.rotation.z = -0.5 * Math.PI
            }
            else if(value.body.position.x < value.parent.x){
              value.body.position.x +=2 //向左
              value.body.rotation.z = 0.5 * Math.PI
            }

            if(value.body.position.y < (value.y + value.parent.y)/2+2 && value.body.position.y+2 > value.parent.y && Math.abs(value.body.position.x - value.parent.x)<2){
              value.body.position.y -= 2//向下
              value.body.rotation.z = 0
            }else if(value.body.position.y<value.parent.y){
              value.body.position.x = value.x;
              value.body.position.y = value.y
            }
          }
        });
      },

      //浏览器窗口改变大小时事件
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      //点击事件
      addClickEvent() {
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        var select = null;

        //监听全局点击事件,通过ray检测选中哪一个object
        document.addEventListener("mousedown", (event) => {
          event.preventDefault();
          this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
          this.mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

          this.raycaster.setFromCamera(this.mouse, this.camera);
          var intersects = this.raycaster.intersectObjects(this.cubeObjects) || this.raycaster.intersectObjects(this.lineObjects);

          if (intersects.length > 0) {
            if(select){
              //还原
              select.parent.children[1].material.color.setHex(0x383941)
            }
            select = intersects[0].object;
            // 改变颜色
            select.parent.children[1].material.color.setHex(0xffffff);
            //显示详情
            this.showDetail(select)
          }

        }, false)
      },
      showDetail(select){
        if(select.data.data && select.data.data.type=='datacenter'){
          console.log(select.data.data.name)
        }else {
          console.log(select.data.name)
        }

      },
      loadFont(text){
        return new Promise((resolve, reject)=>{
          let loader = new THREE.FontLoader();
          loader.load(process.env.BASE_URL+"font/Microsoft YaHei_Regular.json", (res)=>{
            let font = new THREE.TextBufferGeometry(text, {
              font: res,
              size: 30,
              height: 5
            });
            let material = new THREE.MeshLambertMaterial({
              color: 0x00e598
            });
            let fontModel = new THREE.Mesh(font,material);
            fontModel.rotateX(1.5 * Math.PI)
            fontModel.rotateY(1 * Math.PI)
            resolve(fontModel)
          })
        })
      }
    },
    mounted() {
      this.init();
      this.add3DObject();
      this.animate();
    }
  }
</script>

<style scoped>
  #canvas_container {
    border: none;
    cursor: pointer;
  }
</style>