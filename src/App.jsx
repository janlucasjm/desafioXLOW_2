import Slider from "./components/Slider"

function App() {
  const images = [
    {
      url: 'https://pixabay.com/get/gac4a0c33f378a213fc8220fb5468ac07b3d4005f42b91796c44aa465be2d8047bb5f0cb8482ee543883904e9ab6e16aa.jpg',
      alt: 'Foto de uma paisagem com montanhas e uma casa em frente ao lago',
      link: 'https://pixabay.com/pt/photos/lago-montanhas-névoa-panorama-7624330/'
    },
    {
      url: 'https://pixabay.com/get/gaf1cc02fc441c0871a13a8182ba8f5ea8e4cb01c5194a7a12e9543b2749d798f1cc763bb8458d5bfb1bcb864a0ef5fa4.jpg',
      alt: 'Foto de uma floresta',
      link: 'https://pixabay.com/pt/photos/floresta-arvores-raios-de-sol-1072828/'
    },
    {
      url: 'https://pixabay.com/get/gdefe5ae162b9857209173280ee6fcce1fbadc2a4ffafc7e8dafe7bedac5e2fe8781771c6cad7db092a17ecf7ef632955.jpg',
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
