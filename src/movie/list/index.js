import $ from 'jquery';
import style from './index.module.less';
/**
 * 初始化函数，负责创建容器
 */
let container = null;
function init() {
  container = $('<div>').addClass(style.container).appendTo('#app');
}

init();

/**
 * 根据传入的电影数组，创建元素，填充到容器中
 * @params movies 电影数组
 */
export function createMovieTags(movies) {
  console.log(movies);
  const html = movies
    .map(
      (m) => `<div>
    <a href=${m.url}><img src=${m.cover}></a>
    <a href=${m.url}><p class=${style.title}>${m.title}</p></a>
    <p class=${style.rate}>${m.rate}</p>
    </div>`
    )
    .join('');
  container.html(html);
}
