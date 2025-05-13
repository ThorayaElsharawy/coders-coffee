import React from 'react'
import Container from './container'
import { motion } from "framer-motion"


export default function WhereToBuy() {
    return (
        <Container>
            <div className='my-36'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center'>
                    <div className='space-y-8'>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2
                            }}
                            className='text-4xl font-bold text-[#1a1f25] font-serif'>Buy our products from anywhere</motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4
                            }}
                            className='flex items-center gap-4'>
                            <input
                                type="text" placeholder='Name'
                                className='w-full lg:w-[150px] border-1  border-gray-400 rounded-md focus:border-[#f19509] focus:outline-none px-4 py-2 ' />
                            <input type="email" placeholder='Email'
                                className='w-full border-1  border-gray-400 rounded-md focus:border-[#f19509] focus:outline-none px-4 py-2 ' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.6
                            }}
                            className='flex items-center gap-4'>
                            <input
                                type="text" placeholder='Country'
                                className='w-full border-1  border-gray-400 rounded-md focus:border-[#f19509] focus:outline-none px-4 py-2 ' />
                            <input type="number" placeholder='Zipcode'
                                className='w-full lg:w-[150px] border-1  border-gray-400 rounded-md focus:border-[#f19509] focus:outline-none px-4 py-2 ' />
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.8
                            }}
                            className='text-white px-4 py-2 rounded-md bg-[#f19509] hover:bg-[#e86f00] duration-200 cursor-pointer w-full'>Order Now</motion.button>
                    </div>
                    <div className='col-span-2'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 1
                            }}
                            src="src/assets/world-map.png"
                            className='w-full sm:w-[500px] mx-au'
                            />
                    </div>
                </div>
            </div>
        </Container>
    )
}
