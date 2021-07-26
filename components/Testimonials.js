import React from 'react'
import styledJsx from '../styles/Testimonials.styles'

export default function Testimonials() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <div
                className={`${styledJsx.className} testimonial_card`}
            >
                I AM A TESTIMONIAL
            </div>
            {styledJsx.styles}  
        </div>
    )
}
