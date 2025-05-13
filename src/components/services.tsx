import React from 'react'
import Container from './container'
import { motion } from 'framer-motion'

const SERVICES = [
    {
        id: 1,
        img: "src/assets/coffee1.png",
        title: 'Black Coffee',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        img: "src/assets/coffee3.png",
        title: 'Hot Coffee',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        img: "src/assets/coffee1.png",
        title: 'Cold Coffee',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]

export default function Services() {
    return (
        <Container>
            <div className='my-16 space-y-4'>
                <div className='text-center mx-auto space-y-2 max-w-lg'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 150,
                            damping: 10,
                            delay: 0.2
                        }}
                        className='text-3xl font-bold text-[#272c35]'>Fresh and <span className='text-[#f19509]'>Tasty coffee</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 150,
                            damping: 10,
                            delay: 0.6
                        }}
                        className='text-sm opacity-50 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.</motion.p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {SERVICES.map(service => (
                        <div className='text-center p-5 space-y-6'>
                            <img src={service.img} className='cursor-pointer img-shadow2 max-w-[200px] mx-auto hover:scale-110 transition-all duration-300' />
                            <div className='space-y-2'>
                                <h2 className='text-2xl font-bold text-[#f19509]'>{service.title}</h2>
                                <p className='texxt-[#1a1f25] '>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
