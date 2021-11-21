import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const container = document.querySelector('.gallery');




const insertElementMarkup = createElements(galleryItems);
container.innerHTML = insertElementMarkup;

function createElements(items) {
    return items.map(item =>
    `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
`).join('')
};


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    });

