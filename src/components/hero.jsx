import React from 'react'
import Container from './container'
import { motion } from 'framer-motion'
import Sidebar from './sidebar'
import { useState } from 'react'
import Navbar from './navbar'

export default function Hero() {
    const [sidebar, setSidebar] = useState(false)
    return (
        <main className='bg-[url(src/assets/bg-slate.png)] bg-no-repeat bg-cover bg-center'>
            <section className='relative min-h-[750px] w-full '>
                <Container>
                    <Navbar sidebar={sidebar} setSidebar={setSidebar}  />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                        <div className='relative mt-[100px] md:mt-0 space-y-24 text-[#f1dabf] p-4'>
                            <motion.h1
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1
                                }}
                                className='text-7xl font-bold leading-tight ms-14'>Blvck Tumbler</motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2
                                }}
                                className='relative'>
                                <div className='relative z-10  space-y-4'>
                                    <h2 className='text-2xl'>Black Lifestyle Lovers,</h2>
                                    <p className='text-sm opacity-55 leading-loose'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus
                                    </p>
                                </div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25' />
                            </motion.div>

                        </div>
                        <div className='relative'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4
                                }}
                                src='src/assets/black.png'
                                className='relative z-40 h-[400px] md:h-[700px] img-shadow ' />
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8
                                }}
                                className='absolute top-24 -right-16 rounded-full border-[20px] border-[#f19509] h-[180px] w-[180px] z-10' />
                            <div className='absolute -top-20 left-[200px]'>
                                <motion.h1
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.8
                                    }}
                                    className='text-[140px] scale-150 font-bold text-[#1a1f25]/40 leading-none' > Blvck Tumbler</motion.h1>
                            </div>
                        </div>
                        <div className='relative z-10 mt-[100px] md:mt-0 space-y-24 text-[#f1dabf] p-4'>
                            <h1 className='text-7xl font-bold leading-tight ms-14 opacity-0'>Blvck Tumbler</h1>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2
                                }}
                                className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h2 className='text-2xl'>Blvck Tumbler</h2>
                                    <p className='text-sm opacity-55 leading-loose'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,
                                        Delectus aspernatur,
                                    </p>
                                </div>
                                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-[#1a1f25]/50' />
                            </motion.div>
                        </div>
                    </div>
                </Container>
                {sidebar && <Sidebar />}
            </section>
        </main >
    )
}
