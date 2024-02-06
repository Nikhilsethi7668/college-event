import React from 'react'
import { useParams } from 'react-router-dom'
import "./Photos.css"

const Photos = () => {
    const { eventany } = useParams();
    return (
        <div className='cntr' style={{ backgroundColor: "white", height: "80vh" }}>

            <h1>
                No images of {eventany} has been uploaded

            </h1>


        </div>
    )
}

export default Photos
