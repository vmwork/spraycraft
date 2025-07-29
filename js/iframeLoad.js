function loadIframe(url, elementId) {
  const divContainer = document.getElementById('binomIframe');
  console.log('divContainer');
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '600'; // Задаем ширину
  iframe.height = '400'; // Задаем высоту
  iframe.loading = 'lazy'; // Отложенная загрузка
  iframe.title = 'Динамический iframe'; // Заголовок для доступности

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(iframe);
  } else {
    console.error('Элемент с id="' + elementId + '" не найден.');
  }
}
<script> document.addEventListener('DOMContentLoaded', loadIframe()); </script>;
