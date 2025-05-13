import React from 'react'
import Container from './container'
import { motion } from 'framer-motion'

export default function AppBanner() {
    return (
        <Container>
            <div className='my-36'>
                <div className='bg-[url(src/assets/coffee-cover.jpg)] bg-no-repeat bg-center bg-cover h-full w-full rounded-xl'>
                    <div className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center'>
                        <div className=''>
                            <div className='space-y-6 max-w-xl mx-auto w-full'>
                                <motion.h1
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.2
                                    }}
                                    className='text-2xl sm:text-4xl text-center font-semibold'>Download the app </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.3
                                    }}
                                    className='text-center sm:px-20'>Lorem ipsum dolor sit amet consedolor sit amet consectetur adipisicing elit. Officiis</motion.p>
                                <div className='flex justify-center items-center gap-4 '>
                                    <motion.img
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.4
                                        }}
                                        src="src/assets/app_store.png" alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                    <motion.img
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.5
                                        }}
                                        src="src/assets/play_store.png" alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
