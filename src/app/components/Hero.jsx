import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <Link href='/register' className='border-2 py-2 px-6 bg-red-600 text-white'>
            Register
        </Link>
    </>
  )
}

export default Hero