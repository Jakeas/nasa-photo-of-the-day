import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import styled from 'styled-components'

function Right (props) {
const { data } = props
    

    // const handleChange = () => {
    //  src={data.hdurl}
    // }
    return( 
        <div class="split right">
            <H1>{"Astronomy Picture of the Day"}</H1>
                <>
                {data.media_type === 'image' 
                ? (<Img
                        alt='Astronomy pic of the day'
                        className='post-image'
                        src={data.url}
                />
                ) 
                : (
                    <iframe
                        title="Space Photo"
                        src={data.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="photo"
                    />)}  
            </>
            {/* <button onClick={handleChange}>APOD in HD!</button> */}
        </div>
    )
}

export default Right


const H1 = styled.h1`
color:  rgb(32, 21, 0);
font-size: 3rem;
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
`
const Img = styled.img`
border: 5px solid white;
width: 90%;
`