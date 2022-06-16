import './cover'; //静态依赖，表示该模块需要合并到主打包结果中
import './global.less'; //全局样式
import('./movie'); //动态依赖，表示该模块会动态加载，最终会形成一个独立的js
