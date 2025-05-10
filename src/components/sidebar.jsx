import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Sidebar() {
    return (
        <motion.div 
        initial={{ x: '100%'}}
        whileInView={{ x: 0 }}
        className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-[#f19509]/80 to-[#e86f00]/80 backdrop-blur-sm z-10'>
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <div className='w-[1px] h-[70px] bg-white' />
                <ul className='text-white space-y-6'>
                    <li className='p-2 rounded-full cursor-pointer border border-white'>
                        <FaFacebookF className='text-2xl' />
                    </li>
                    <li className='p-2 rounded-full cursor-pointer border border-white'>
                        <FaTwitter className='text-2xl' />
                    </li>
                    <li className='p-2 rounded-full cursor-pointer border border-white'>
                        <FaInstagram className='text-2xl' />
                    </li>
                </ul>
                <div className='w-[1px] h-[70px] bg-white' />
            </div>
        </motion.div>
    )
}
