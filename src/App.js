import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ImageLazyLoad from './Components/ImageLazyLoad';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchImages = async () => {

      try {
        setLoading(true)
        const response = await fetch('http://localhost:7000/getimages');
        const data = await response.json();
        setImages(data.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  if(loading){
    return(
      <h1>
        the data is loading here
      </h1>
    )
  }
  return (
    <>
      {
        images?.map((item) => {
          const blurUrl = item?.blurImage
          const originalImageUrl = item?.image
          return (
            <ImageLazyLoad blurUrl={blurUrl} originalImage={originalImageUrl} />
          )
        })
      }
    </>
  );
}

export default App;
