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

// const galleryRef = document.querySelector('.gallery')
// let markup = '';
// images.forEach(image => {
//   markup = images
//     .map(image => 
//             `<li class="gallery_element">
//               <img class="gallery_img" src="${image.url}" alt="${image.alt}" width=640px>
//             </li>`)
//     .join("");
// });
// galleryRef.insertAdjacentHTML('beforebegin', markup);
  

const galleryRef = document.querySelector('.gallery')

const picturesRef = option => {
  const { url, alt } = option;
  return `
    <li class="gallery_element">
      <img class="gallery_img" src="${url}" alt="${alt}" width=640px >
    </li>
  `;
};

const makePicturesRef = images
  .map(picturesRef)
  .join('');
galleryRef.insertAdjacentHTML('afterbegin', makePicturesRef);


// const pictures = images.map(option => {
//   const li = document.createElement('li');
//   li.classList.add("gallery_element");

//   const img = document.createElement('img');
//   img.src = option.url;
//   img.alt = option.alt;
//   img.width = 640;

//   li.appendChild(img);
  
//   galleryRef.appendChild(li);

  
// })

// galleryRef.insertAdjacentHTML('afterbegin', galleryRef);



 

// for (let i = 0; i < images.length; i += 1) {
//   const element = images[i];
//   const listRef = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = images[i].url;
//   imageEl.alt = images[i].alt;
//   listRef.appendChild(imageEl)
//   galleryRef.appendChild(listRef);
// }