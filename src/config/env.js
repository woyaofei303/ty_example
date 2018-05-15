/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = 'http://10.144.72.23:81';
let routerMode = 'hash';
let imgBaseUrl;


if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = 'http://10.144.72.23:81';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '';
  imgBaseUrl = '';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
