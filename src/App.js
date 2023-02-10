import { useState } from 'react';
import Banner from './Components/Banner';
import './App.css';
import flickity from 'flickity/js/flickity';

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  wrapAround: true
}
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: 'https://is1-ssl.mzstatic.com/image/thumb/qL-yBoKCFztx-kDyvIXlHw/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/shrinking/umc.cmc.apzybj6eqf6pzccd97kev7bs',
      genra: 'Comedy',
      description: 'Breakdown. Breakthrough.'
    },
    {
      id: 2,
      img: 'https://is2-ssl.mzstatic.com/image/thumb/B9rhKXDRQThgLQn8zScdzQ/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/dear-edward/umc.cmc.2rp99884b0rpc42alv86h960b',
      genra: 'Drama',
      description: 'Connie Britton stars in a new series from the producer of Friday Night Lights.'
    },
    {
      id: 3,
      img: 'https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy',
      genra: 'Comedy',
      description: '4 Emmy® wins including Outstanding Comedy.'
    },
    {
      id: 4,
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Cij0RwKUCosYztZKtOovKg/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/truth-be-told/umc.cmc.6hegr60w8pjyfcblgocjek7oo',
      genra: 'Drama',
      description: 'No disappearance is a coincidence.'
    },
    {
      id: 5,
      img: 'https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1378x774.jpg',
      href: 'https://tv.apple.com/us/movie/causeway/umc.cmc.30p2zn6vd14159dorn1vo68el',
      genra: 'Comedy',
      description: 'Oscar® Nominee: Best Actor in a Supporting Role.'
    },
    {
      id: 6,
      img: 'https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1378x774.jpg',
      href: 'https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv',
      genra: 'Drama',
      description: 'Inspired by a gripping true story.'
    },
    {
      id: 7,
      img: 'https://is1-ssl.mzstatic.com/image/thumb/qL-yBoKCFztx-kDyvIXlHw/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx',
      genra: 'Thriller',
      description: 'We’re all different people at work.'
    },
    {
      id: 8,
      img: 'https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/servant/umc.cmc.4y25wuby7pck9o6vaubbbk7gb',
      genra: 'Thriller',
      description: 'The final reckoning.'
    },
    {
      id: 9,
      img: 'https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/black-bird/umc.cmc.30gx1y8nwthydkrvhqu156p3',
      genra: 'Drama',
      description: 'One man’s freedom hides in another man’s darkness.'
    },
    {
      id: 10,
      img: 'https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/1378x774.jpg',
      href: 'https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o',
      genra: 'Thriller',
      description: 'The very bottom of top secret.'
    },
  ])
  return (
    <div className="App">
      <flickity
        className={'banners-container'}
        elementType={'div'}
        options={flickityOptions}
      >
        {items.map((item) =>
          <Banner
            key = {item.id}
            id = {item.id}
            img = {item.img}
            href = {item.href}
            genra = {item.genra}
            description = {item.description}
          />
        )}
      </flickity>
      <section>circles</section>
    </div>
  );
}

export default App;
