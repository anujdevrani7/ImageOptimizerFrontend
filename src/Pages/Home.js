import React from 'react'
import ImageLazyLoad from '../Components/ImageLazyLoad'
import { useState, useEffect } from 'react';
function Home() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:7000/getimages/home');
                if(!response.ok){   
                    return(
                        <>
                            <h1>Somethig Went Wrong Please try again later</h1>
                        </>
                    )
                }

                
                const data = await response.json();
                localStorage.setItem("home",JSON.stringify(data))
                setImages(data.data);
                setLoading(false)
            } catch (error) {
                console.warn("inside localsotrage")
                if(localStorage.getItem("home")){
                    const data = JSON.parse(localStorage.getItem("home"));
                    
                    setImages(data.data)
                    setLoading(false)
                    console.log("inside localsotrage",data)
                }
                // console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);
    if (loading) {
        return (
            <h1>
                the data is loading here
            </h1>
        )
    }
    return (
        <div className='image-container'>
            {
                images?.map((item) => {
                    const blurUrl = item?.blurImage
                    const originalImageUrl = item?.image
                    return (
                        <ImageLazyLoad blurUrl={blurUrl} originalImage={originalImageUrl} />
                    )
                })
            }
        </div>
    )
}

export default Home