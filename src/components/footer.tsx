import React from 'react'
import Container from './container'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { motion } from "framer-motion"
export default function Footer() {
    return (
        <footer className='bg-gradient-to-r from-[#f19509] to-[#e86f00]  pt-12 pb-8 text-white'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: .5 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.2
                        }}
                        className='space-y-6'>
                        <h1 className='text-2xl font-bold uppercase'>Coders Coffee</h1>
                        <p className='text-sm max-w-[300px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
                        </p>
                        <div className='space-y-2'>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                +1 (123) 456-7890
                            </p>
                            <p className='flex items-center gap-2'>
                                <FaMapLocation />
                                Noida, Uttar Pradesh
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: .5 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.4
                        }}
                        className='space-y-6'>
                        <h2 className='text-2xl font-bold'>Quick Links</h2>
                        <div className='grid grid-cols-2 gap-3 '>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: .5 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6
                        }}
                        className='space-y-6'>
                        <h2 className='text-2xl font-bold'>Follow Us</h2>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                            <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                            <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                            <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                        </div>
                        <div>
                            <h1 className='text-xl mb-2 font-semibold'>Payment Methods</h1>
                            <img src="src/assets/credit-cards-JstMMRFE.webp" alt="" className='w-[80%]' />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </footer>
    )
}
