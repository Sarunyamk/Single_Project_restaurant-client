import React from 'react'

import burgerVideo2 from '../assets/burgerVideo2.mp4'
import pizzaVideo from '../assets/pizzaVideo.mp4'
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
    const { t } = useTranslation();
    return (
        <div id='about' className='flex gap-20 mt-60 text-red'>
            <section className='w-1/2 grid grid-cols-2 gap-4 ms-20 mb-10'>
                <div >
                    <img className='w-full h-full object-cover'
                        src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
                <div >

                    <video autoPlay loop muted className='w-full h-full object-cover'>
                        <source src={burgerVideo2} type="video/mp4" />
                    </video>
                </div>
                <div >

                    <video autoPlay loop muted className='w-full h-full object-cover'>
                        <source src={pizzaVideo} type="video/mp4" />
                    </video>
                </div>
                <div >
                    <img className='w-full h-full object-cover'
                        src="https://images.pexels.com/photos/3534750/pexels-photo-3534750.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-3534750.jpg&fm=jpg" />
                </div>

            </section>

            <section className='w-1/2 me-40 flex flex-col gap-8'>
                <div className='h-1/4 flex flex-col gap-6 '>
                    <h1 className='font-main'>{t('about.title')}</h1>
                    <h2 className='font-title text-yellow'>{t('about.welcome')}</h2>
                    <h2 className='font-title text-yellow'>{t('about.restaurant')}</h2>
                </div>
                <div className='h-1/4 flex flex-col gap-6 '>
                    <p className='font-head'>{t('about.description1')}.</p>
                    <p className='font-head'>{t('about.description2')}</p>
                </div>
                <div className='h-1/6 flex gap-6 mt-8 text-yellow'>
                    <div className='w-1/2 h-1/2 flex  items-center border-x-4 border-red'>
                        <h1 className='font-title mx-6'>10</h1>
                        <div>
                            <h2 className='font-head'>{t('about.experience')}</h2>
                            <h2 className='font-main'>{t('about.experienceTitle')}</h2>
                        </div>
                    </div>
                    <div className='w-1/2 h-1/2 flex  items-center'>
                        <h1 className='font-title mx-6'>20</h1>
                        <div>
                            <h2 className='font-head'>{t('about.masterChef')}</h2>
                            <h2 className='font-main'>{t('about.masterChefTitle')}</h2>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
