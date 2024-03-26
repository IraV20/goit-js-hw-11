import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImg from './js/pixabay-api';
import renderImg from './js/render-functions';
import { imgList } from './js/render-functions';

const form = document.querySelector('form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();

  imgList.innerHTML = '';

  const userValue = e.target.elements.search.value;
  loader.classList.remove('is-hidden');

  searchImg(userValue).then(images => {
    if (images.hits.length === 0) {
      validImg(images);
    } else {
      renderImg(images);
    }
    loader.classList.add('is-hidden');
  });

  e.target.reset();
});

function validImg(images) {
  iziToast.error({
    title:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    titleColor: '#fff',
    backgroundColor: '#EF4040',
    titleSize: '16px',
    titleLineHeight: '1.5',
    close: true,
    icon: '',
  });
}
