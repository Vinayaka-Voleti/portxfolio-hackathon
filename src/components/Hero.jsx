import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className='pt-28 lg:pt-36' id='home'>
            <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
                <div>
                    <div className='flex items-center gap-3'>
                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img 
                            src="../src/assets/bgHero1.jpg" 
                            width={40}
                            height={40}
                            className='img-cover'
                            alt="Vinayaka Vamsi Kiran" />
                        </figure>

                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                            </span>
                            Available for work

                        </div>
                    </div>

                    <h2 className='headline-1'>
                    Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="">
                        ButonPrimary 
                        
                        ButtonOutline
                    </div>
                </div>

                <div className="">
                    <figure className=''>
                        <img src="../src/assets/bigHero4.png" alt="Vamsi" width={656} height={800} className='w-full' />
                    </figure>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero