import React from 'react'
import { useState } from 'react'
function ImageLazyLoad({blurUrl,originalImage}) {
    const [imageLoading, setImageLoading] = useState(false)
    const handelOnLoad=()=>{
        setImageLoading(true)
    }
  return (
    <>
    <img src={imageLoading?originalImage:blurUrl} onLoad={handelOnLoad} height={"400px"} width={"400px"}  alt='this is alt tag'/>
    
    </>
  )
}

export default ImageLazyLoad