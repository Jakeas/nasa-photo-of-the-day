import React from 'react'
import styled from 'styled-components'

function Left (props) {
    const { data } = props
    return(
        <div class="split left">
            <H2>{data.title}</H2>
            <Para>{data.explanation}</Para>
            <H3>{data.date}</H3>
        </div>
    )
}
export default Left

const H2 = styled.h2`
color:  white;
font-size: 2rem;
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
`
const H3 = styled.h3`
color:  white;
font-size: 2rem;
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
`
const Para = styled.p`
font-size: 1.6rem;
margin: 4% 8%;
color: skyblue;
font-family:'Josefin Sans', sans-serif;
font-weight: 300;
`