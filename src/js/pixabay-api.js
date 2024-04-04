export default function searchImg(userValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42716405-8ee00579c2dae2c7c3ba8a313';
  const PARAMS = `?key=${API_KEY}&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
