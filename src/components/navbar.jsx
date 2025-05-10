import React from 'react'
import Container from './container'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    return (
        <nav className='absolute top-0 left-0 w-full pt-10'>
            <Container>
                <div className='text-white flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold uppercase'>
                        <span className='text-[#f19509]'>Coders </span>Coffee.
                    </h1>
                    <div>
                        <GiHamburgerMenu className='text-2xl cursor-pointer' />
                    </div>
                </div>
            </Container>
        </nav>
    )
}
