import $ from 'jquery';
import style1 from './index.module.less';
import vUrl from '@/assets/movie.mp4';
import aUrl from '@/assets/music.mp3';

function init() {
  const container = $('<div>').addClass(style1.container).appendTo('#app');
  $('<video>')
    .prop('src', vUrl)
    .prop('autoplay', true)
    .prop('loop', true)
    .prop('muted', true)
    .addClass(style1.video)
    .appendTo(container);
  const video = $('video');
  $('<audio>')
    .prop('src', aUrl)
    .prop('autoplay', true)
    .prop('loop', true)
    .appendTo(container);
  const audio = $('audio');
  $('<h1>').text('豆瓣电影').addClass(style1.title).appendTo(container);
  $(window).on('scroll', () => {
    if (
      document.documentElement.scrollTop -
        document.documentElement.clientHeight >=
      0
    ) {
      video[0].pause();
      audio[0].pause();
    } else {
      video[0].play();
      audio[0].play();
    }
  });
}
init();
