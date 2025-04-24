import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/Vinayaka-Voleti'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.https://www.linkedin.com/in/vinayaka-voleti-489061201/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/vinayaka_voleti'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/vkv__05'
    },
    // {
    //   label: 'CodePen',
    //   href: 'https://codepen.io/codewithsadee'
    // }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together!
                    </h2>

                    <ButtonPrimary href="mailto:vinayaka.vvk@gmail.com" label="Start project" icon="chevron_right" classes="reveal-up"/>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({ label, href}, key) =>(
                                <li key={key}>
                                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {sitemap.map(({ label, href}, key) =>(
                                <li key={key}>
                                    <a href={href} target='_blank ' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                {/* <a href="/" className='logo reveal-up'><img src="" alt="Vamsi" /></a> */}
                <h3 className="text-sm italic text-gray-400 text-right pr-4 mt-4 tracking-widest">
                    — VKV
                </h3>
                <p className='text-zinc-500 text-sm reveal-up'>&copy; 2025 <span className='text-zinc-200'>Vinayaka Voleti</span></p>
            </div>

        </div>
    </footer>
  )
}

export default Footer