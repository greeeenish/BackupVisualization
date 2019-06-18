// vue.config.js 修改的配置
module.exports = {
  //配置代理服务器
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: require.resolve("three/examples/js/controls/OrbitControls"),
      use: "imports-loader?THREE=three"
    })
    config.module.rules.push({
      test: require.resolve("three/examples/js/controls/OrbitControls"),
      use: "exports-loader?THREE.OrbitControls"
    })
    config.module.rules.push({
      test: require.resolve("three/examples/js/loaders/OBJLoader"),
      use: "imports-loader?THREE=three"
    })
    config.module.rules.push({
      test: require.resolve("three/examples/js/loaders/OBJLoader"),
      use: "exports-loader?THREE.OBJLoader"
    })
    config.module.rules.push({
      test: require.resolve("three/examples/js/loaders/MTLLoader"),
      use: "imports-loader?THREE=three"
    })
    config.module.rules.push({
      test: require.resolve("three/examples/js/loaders/MTLLoader"),
      use: "exports-loader?THREE.MTLLoader"
    })
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      // 为生产环境修改配置
      config.resolve.alias
        .set('three.meshline', require.resolve('three.meshline/src/THREE.MeshLine.js'))   //配置meshiline

    } else {
      // 为开发环境修改配置
    }
  }

}
