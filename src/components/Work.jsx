import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
    {
      imgSrc: '/assets/Work1.jpg',
      title: 'KonnexWeb',
      tags: ['Auth', 'Payment'],
      projectLink: 'https://github.com/Vinayaka-Voleti/SupaSafe'
    },
    {
      imgSrc: '/assets/Work2.jpg',
      title: 'ChitChat App',
      tags: ['React', 'Realtime', 'Go'],
      projectLink: 'https://github.com/Vinayaka-Voleti/Chit-Chat'
    },
    {
      imgSrc: '/assets/Work3.jpg',
      title: 'Python Quiz App',
      tags: ['Python', 'TkinterGUI'],
      projectLink: 'https://github.com/Vinayaka-Voleti/Python-Quiz-Game'
    },
    {
      imgSrc: '/assets/Work4.png',
      title: 'Learn_R',
      tags: ['React', 'Development'],
      projectLink: 'https://github.com/Vinayaka-Voleti/Learn_R'
    },
    // {
    //   imgSrc: '/images/project-5.jpg',
    //   title: 'eCommerce website',
    //   tags: ['eCommerce', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    // {
    //   imgSrc: '/images/project-6.jpg',
    //   title: 'vCard Personal portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
  ];
  // let WorkCount = works.length ;
  export const WorkCount = works.length

const Work = () => {
  return (
    <section id='work' className='section'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title ,tags, projectLink}, key) =>(
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work