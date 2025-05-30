import React from 'react'
import Container from './container'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function Navbar({sidebar, setSidebar}) {
    return (
        <nav className='absolute top-0 left-0 w-full pt-10'>
            <Container>
                <div className='text-white flex items-center justify-between'>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: .2
                        }}
                        className='text-2xl font-semibold uppercase'>
                        <span className='text-[#f19509]'>Coders </span>Coffee.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: .2
                        }}

                        onClick={() => setSidebar(!sidebar)}
                    >
                        <GiHamburgerMenu className='relative text-2xl cursor-pointer z-40' />
                    </motion.div>
                </div>
            </Container>
        </nav>
    )
}
