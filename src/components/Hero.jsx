import React, { useEffect, useState } from 'react';
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "-VKV Frontend Developer";
  const backspaceText = "vkv ";
  const newText = " Java Developer";
  const typingSpeed = 100;
  const backspaceSpeed = 50;

  useEffect(() => {
    const runTypingEffect = () => {
      let index = 0;
      let currentText = '';
      
      const typingEffect = setInterval(() => {
        if (index < fullText.length) {
          currentText += fullText.charAt(index);
          setTypedText(currentText);
          index++;
        } else {
          clearInterval(typingEffect); 
          setTimeout(() => {
            let backspaceIndex = currentText.length;
            const backspaceEffect = setInterval(() => {
              if (backspaceIndex > backspaceText.length) {
                currentText = currentText.slice(0, -1);
                setTypedText(currentText);
                backspaceIndex--;
              } else {
                clearInterval(backspaceEffect);
                setTimeout(() => {
                  let newIndex = 0;
                  const newTypingEffect = setInterval(() => {
                    if (newIndex < newText.length) {
                      currentText += newText.charAt(newIndex);
                      setTypedText(currentText);
                      newIndex++;
                    } else {
                      clearInterval(newTypingEffect); 
                      setTimeout(() => {
                        runTypingEffect();
                      }, 1000); 
                    }
                  }, typingSpeed);
                }, 500);
              }
            }, backspaceSpeed);
          }, 500);
        }
      }, typingSpeed);
    };

    runTypingEffect(); 

    return () => {
      clearInterval(runTypingEffect);
    };
  }, []); 

  return (
    <div>
      <section className='pt-28 lg:pt-36' id='home'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
          <div>
            <div className='flex items-center gap-3'>
              <figure className='img-box w-9 h-9 rounded-lg'>
                <img 
                  src="/assets/bgHero1.jpg" 
                  width={40}
                  height={40}
                  className='img-cover'
                  alt="Vinayaka Vamsi Kiran" 
                />
              </figure>

              <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                  <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                </span>
                Available for work
              </div>
            </div>

            <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-19'>
              Building Scalable Modern Websites for the Future
            </h2>

            <h3 className="text-sm italic text-gray-400 text-left pr-4 mt-4 tracking-widest">{typedText}</h3> 

            <div className="flex items-center gap-3 mt-5">
              <ButtonPrimary
                label="Download CV"
                icon="download"
                href='/Vinayaka_Resume.pdf'
                target='_blank'
                classes="hover:scale-105"
                download
              /> 

              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
                classes='btn-outline'
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <figure className='-fulwl max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
              {/* <img src="../src/assets/.png" alt="Vamsi" width={656} height={800} className='w-full' /> */}
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
