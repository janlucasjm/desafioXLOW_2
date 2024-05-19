import Slider from "./components/Slider"

function App() {
  const images = [
    {
      url: 'https://pixabay.com/get/g81de16c6a85b2e1aff53e9a37b6d7e0967204553703700a7fe3fe8274ba8a6a7dc912942a0fcec60b893020d4e5501c7.jpg',
      alt: 'Foto de uma paisagem com montanhas e uma casa em frente ao lago',
      link: 'https://pixabay.com/pt/photos/lago-montanhas-névoa-panorama-7624330/'
    },
    {
      url: 'https://pixabay.com/get/g35368c7fcbdea0007854721b53743c5316a087adbccbe43ca2f6d63f4fde366ede39f14a6cc969eaf107b2e655d18dc0.jpg',
      alt: 'Foto de uma floresta',
      link: 'https://pixabay.com/pt/photos/floresta-arvores-raios-de-sol-1072828/'
    },
    {
      url: 'https://pixabay.com/get/g0c63592fa65563938a436df216ad219bda49e96eb1b9b965714af521782a47f4b9a3e8dd1d534a5ddea383006f97f7b7.jpg',
      alt: 'Foto de uma praia',
      link: 'https://pixabay.com/pt/photos/maldivas-trópicos-tropical-1993704/'
    },
    {
      url: 'https://pixabay.com/get/g69141ebf89e03867a406a3a2c54139441839fd744a8ed3cb3fd3b315b331cdc521c6dd01bf7ae03c22160bf4a77181f8.jpg',
      alt: 'Foto de dunas de areia',
      link: 'https://pixabay.com/pt/photos/dunas-de-areia-paisagem-de-duna-7825545/'
    },
  ]

  return (
    <div>
      <Slider images={images}/>
    </div>
  )
}

export default App
