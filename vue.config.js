module.exports = {
  transpileDependencies: true,
  publicPath: './', // 自己GitHub上的仓库名称两边 / 不能省略
  outputDir: 'docs', // 打包输出的文件名称（不配置也可以，默认是dist）
  assetsDir: 'static', // 静态资源（js、css等）存放路径，相对outputDir
}