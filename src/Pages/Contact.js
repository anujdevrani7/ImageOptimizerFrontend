import React from 'react'
import ImageLazyLoad from '../Components/ImageLazyLoad'
import { useState, useEffect } from 'react';
function Contact() {
  const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:7000/getimages/contact');
                console.log("value of the response is  : ",response)
                const data = await response.json();
                localStorage.setItem("contact",JSON.stringify(data))
                setImages(data.data);
                setLoading(false)
            } catch (error) {
               
                if(localStorage.getItem("contact")){
                    const data = JSON.parse(localStorage.getItem("contact"));
                    setImages(data.data)
                    setLoading(false)
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

export default Contact