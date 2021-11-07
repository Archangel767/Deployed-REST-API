'use strict';
// Object literal array:
const scenery = [
  {
    id: '01',
    title: 'Coast',
    description: 'Bunch of coast',
    width: '1688px',
    height: '2250px',
    pathURL: 'assets/images/01.jpeg',
    linkURL: 'https://www.pexels.com/photo/body-of-water-with-rock-formation-2308893',
    credit: 'Matt Hardy',
    creditURL: 'https://www.pexels.com/@matthardy'
  },
  {
    id: '02',
    title: 'Mesa',
    description: 'A mesa',
    width: '1501px',
    height: '2250px',
    pathURL: 'assets/images/02.jpeg',
    linkURL: 'https://www.pexels.com/photo/green-trees-near-rock-formation-2754200/',
    credit: 'Todd Trapani',
    creditURL: 'https://www.pexels.com/@todd-trapani-488382',
  },
  {
    id: '03',
    title: 'Forest',
    description: 'Bunch of trees',
    width: '1500px',
    height: '2250px',
    pathURL: 'assets/images/03.jpeg',
    linkURL: 'https://www.pexels.com/photo/photo-of-forest-during-daytime-3222686/',
    credit: 'Tim Mossholder',
    creditURL: 'https://www.pexels.com/@timmossholder',
  },
  {
    id: '04',
    title: 'Beach',
    description: 'A beach',
    width: '1264px',
    height: '2250px',
    pathURL: 'assets/images/04.jpeg',
    linkURL: 'https://www.pexels.com/es-es/foto/olas-del-mar-tempestuoso-y-playa-de-arena-3876447/',
    credit: 'Tomas Anunziata',
    creditURL: 'https://www.pexels.com/es-es/@tomas-anunziata-129267',
  },
  {
    id: '05',
    title: 'Mountain',
    description: 'Misty mountain',
    width: '1494px',
    height: '2250px',
    pathURL: 'assets/images/05.jpeg',
    linkURL: 'https://www.pexels.com/es-es/foto/arboles-verdes-en-la-montana-4017166/',
    credit: 'Jenny Uhling',
    creditURL: 'https://www.pexels.com/es-es/@jenny-uhling-2262740',
  },
  {
    id: '06',
    title: 'Sunset',
    description: 'Bunch of sunset',
    width: '1522px',
    height: '2250px',
    pathURL: 'assets/images/06.jpeg',
    linkURL: 'https://www.pexels.com/photo/calm-sea-and-mountains-at-sunset-time-4993160/',
    credit: 'Rachel Claire',
    creditURL: 'https://www.pexels.com/@rachel-claire',
  },
  {
    id: '07',
    title: 'Canyon',
    description: 'Bunch of canyon',
    width: '1497px',
    height: '2250px',
    pathURL: 'assets/images/07.jpeg',
    linkURL: 'https://www.pexels.com/es-es/foto/persona-de-pie-sobre-la-formacion-rocosa-6150551/',
    credit: 'Matthew DeVries',
    creditURL: 'https://www.pexels.com/es-es/@mattdvphotography',
  },
  {
    id: '08',
    title: 'Ocean',
    description: 'Bunch of ocean',
    width: '1688px',
    height: '2250px',
    pathURL: 'assets/images/08.jpeg',
    linkURL: 'https://www.pexels.com/de-de/foto/meer-natur-himmel-sonnenuntergang-6868659/',
    credit: 'Kira Schwarz',
    creditURL: 'https://www.pexels.com/de-de/@kira-schwarz',
  },
  {
    id: '09',
    title: 'Rock',
    description: 'A big rock',
    width: '1500px',
    height: '2250px',
    pathURL: 'assets/images/09.jpeg',
    linkURL: 'https://www.pexels.com/photo/brown-rocky-mountain-near-river-9544524/',
    credit: 'Arkhod',
    creditURL: 'https://www.pexels.com/@arkhod-85162625',
  },

]

let output = '';

// forEach loop:
scenery.forEach(function (nature) {
  output += `
          <figure>
            <a href="${nature.linkURL}">
              <img src="${nature.pathURL}" alt="${nature.title}">
              <figcaption>${nature.title}</figcaption>
            </a>
          </figure>  
            `;
});

//  HTML output:
const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;

document.querySelector('.gallery').innerHTML = output;

// const randomItem = array => {
//   const length = array.length
//   const randNumber = Math.random()
//   const arrayRatio = randNumber * length
//   const lowInteger = Math.floor(arrayRatio)
//   const item = array[lowInteger]

//   console.log(randNumber, arrayRatio, lowInteger)
//   return item
// }

// module.exports = randomItem
