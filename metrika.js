// ── Яндекс.Метрика ──────────────────────────────────────────────────────
// Общий для всех страниц файл: номер счётчика задаётся здесь, в одном месте.
// Вставьте номер вместо 00000000 (получить: metrika.yandex.ru) — и ещё
// в noscript-картинке в конце index.html.
// Пока стоит заглушка — скрипт сам не загрузится, ошибок на сайте не будет.
// Цель «contact» засчитывается при клике по ссылкам tel: (см. script.js).
(function () {
  var COUNTER_ID = 00000000; // TODO: номер счётчика Яндекс.Метрики
  if (!COUNTER_ID) return;
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
  ym(COUNTER_ID, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:false });
  window.__ymCounterId = COUNTER_ID;
})();
