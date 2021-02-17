import React from 'react'

function Left (props) {
    const { data } = props
    return(
        <div class="split left">
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
            <h3>{data.date}</h3>
        </div>
    )
}
export default Left