import React from 'react'
import ImageLazyLoad from '../Components/ImageLazyLoad';
import { useEffect, useState } from 'react';
function About() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)
    // checking pipeline 

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:7000/getimages/about');
                const data = await response.json();
                localStorage.setItem("about", JSON.stringify(data))
                setImages(data.data);
                setLoading(false)
            } catch (error) {
                
                
                if (localStorage.getItem("services")) {
                    const data = JSON.parse(localStorage.getItem("services"));
                    setImages(data.data)
                    console.log("inside localsotrage",data)
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
export default About