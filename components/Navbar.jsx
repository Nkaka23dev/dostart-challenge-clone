import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='max-w-6xl mx-auto flex justify-between py-6 items-center'>
        <div>
        <img src="https://validthemes.live/themeforest/dostart/assets/img/logo.png" alt="" />
        </div>
        <div className='flex gap-6 items-center'>
            {[1,2,3,4,5,6,7,8].map((e,idx) => {
             return(
                <Link className href="#">Home</Link>
             )
            })}
        </div>
        </div>
    </nav>
  )
}
