const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	// 第三方依赖是否需要转移，避免出现第三方的转移
	transpileDependencies: true,
	//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint
	lintOnSave: false,

	productionSourceMap: false,
	publicPath: './', //根目录
	outputDir: 'dist', //输出文件地址
	assetsDir: 'static', //静态资源位置
	//代理端口配置
	devServer: {
		//代理的地址
		port: 8089,
		https: false,
		host: '0.0.0.0',
		open: true,
		//配置代理
		proxy: {
			'/api': {
				changeOrigin: true, //是否开启跨域
				target: 'http://www.baidu.com', //代理地址
				pathRewrite: {
					'/api': ''
				}
			}
		}
	}
})
