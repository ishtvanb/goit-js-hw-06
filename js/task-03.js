const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const allImages = document.querySelector('.gallery');

const imagesEl = images.map(({ url, alt }) => 
  `<li><img src='${url}' alt='${alt}' width = 100%></li>`).join('');
  console.log(imagesEl);
  const imageEl = document.createElement('img');
  const itemEl = document.createElement('li');
  
  allImages.insertAdjacentHTML('afterbegin', imagesEl);
   
allImages.style.display = 'flex';
allImages.style.listStyleType = 'none';
allImages.style.gap = '30px';
allImages.style.padding = '40px';
allImages.style.alignItems = 'center';
allImages.style.justifyContent = 'center';
allImages.style.backgroundColor = 'rgb(142, 206, 123)';


 
   