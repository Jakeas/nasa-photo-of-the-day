import React, { useState } from 'react'

function Right (props) {
const { data } = props
    
    return( 
        <div class="split right">
        <h1>{"Astronomy Picture of the Day"}</h1>
            <>
                <img
                    alt='Astronomy pic of the day'
                    className='post-image'
                    src={data.url}
                />
            </>
        </div>
    )
}

export default Right