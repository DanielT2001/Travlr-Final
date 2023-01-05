import React, { useRef, useEffect } from 'react'
import Menu from './components/Menu';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
gsap.registerPlugin(ScrollTrigger);

function App() {
  let main = useRef(null)
  let cloudL = useRef(null)
  let cloudR = useRef(null)
  let hero = useRef(null)
  let nav = useRef(null)

  useEffect(() => {
    gsap.set(main, { opacity: 0 })
    gsap.fromTo(main, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.easeOut' }, 1)
    gsap.fromTo(cloudL, { x: -1000 }, { x: 0, duration: 2, ease: 'power3.easeOut' }, '<')
    gsap.fromTo(cloudR, { x: 1000 }, { x: 0, duration: 2, ease: 'power3.easeOut' }, '<')
    gsap.fromTo(hero, { opacity: 0, y: 1000 }, { opacity: 1, y: 0, duration: 2, ease: 'power3.easeOut' }, .5)
    gsap.fromTo(hero, { y: 0, scale: 1 }, {
      y: 75, scale: 1.2, duration: 1.2, scrollTrigger: {
        trigger: hero,
        start: 'top 30%',
        end: 'top 60%',
        scrub: 5,
      }
    })
    gsap.fromTo(cloudL, { x: 0 }, {
      x: -300, duration: 1.2,
      scrollTrigger: {
        trigger: hero,
        start: 'top 30%',
        scrub: 5,
      }
    })
    gsap.fromTo(cloudR, { x: 0 }, {
      x: 300, duration: 1.2,
      scrollTrigger: {
        trigger: hero,
        start: 'top 30%',
        scrub: 5,
      }
    })
    gsap.fromTo(nav, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.easeOut' }, '<')
    gsap.fromTo('.links', { opacity: 0, y: 1000 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.easeOut' }, '<')
    gsap.fromTo('.proposal1', { x: -700, scale: 0.1, opacity: 0 }, {
      x: 0, scale: 1, duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.anim-start1',
        start: 'top 35%',
      }
    })
    gsap.fromTo('.popular1', { x: 700, scale: 0.1, opacity: 0 }, {
      x: 0, scale: 1, duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.anim-start1',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.card1', { x: -500, scale: 0.1, rotate: '180deg', opacity: 0 }, {
      x: 0, scale: 1, rotate: '0', duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.anim-start1',
        start: 'top 5%',
      }
    })
    gsap.fromTo('.card2', { x: 500, scale: 0.1, rotate: '-180deg', opacity: 0 }, {
      x: 0, scale: 1, rotate: '0', duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.card1',
        start: 'top 50%',
      }
    })
    gsap.fromTo('.card3', { x: -500, scale: 0.1, rotate: '90deg', opacity: 0 }, {
      x: 0, scale: 1, rotate: '0', duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.card1',
        start: 'top -10%',
      }
    })
    gsap.fromTo('.card5', { x: 500, scale: 0.1, rotate: '-90deg', opacity: 0 }, {
      x: 0, scale: 1, rotate: '0', duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.card1',
        start: 'top -10%',
      }
    })
    gsap.fromTo('.card4', { y: 500, scale: 0.1, opacity: 0 }, {
      y: 0, scale: 1, duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.card1',
        start: 'top -10%',
      }
    })
    gsap.fromTo('.card3', { x: 0, y: 0 }, {
      x: 100, y: 100, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.card3',
        start: 'top 40%',
        scrub: 5
      }
    })
    gsap.fromTo('.card5', { x: 0, y: 0 }, {
      x: -50, y: 100, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.card3',
        start: 'top 40%',
        scrub: 5
      }
    })
    gsap.fromTo('.card4', { scale: 1, y: 0 }, {
      scale: 1.05, y: 100, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.card3',
        start: 'top 40%',
        scrub: 5
      }
    })
    gsap.fromTo('.discover', { y: 500, scale: 0.1, opacity: 0 }, {
      y: 0, scale: 1, duration: 1.3, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.card3',
        start: 'top 30%',
      }
    })
    gsap.fromTo('.discover', { y: 0 }, {
      y: 100, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.card3',
        start: 'top 40%',
        scrub: 5
      }
    })
    gsap.fromTo('.travel-image', { opacity: 0, scale: 0 }, {
      opacity: 1, scale: 1, duration: 1.5, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start2',
        start: 'top 50%',
      }
    })
    gsap.fromTo('.travel-image', { scale: 1 }, {
      scale: 1.1, duration: 1.5, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.travel-image',
        start: 'top 5%',
        end: 'top -20%',
        toggleActions: 'play reset play reset',
        scrub: 5,
      }
    })
    gsap.fromTo('.travel-btn', { y: 700, opacity: 0, scale: 0 }, {
      y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.travel-btn',
        start: 'top 100%',
      }
    })
    gsap.fromTo('.popular2', { x: 700, scale: 0.1, opacity: 0 }, {
      x: 0, scale: 1, duration: 1.3, opacity: 1, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 55%',
      }
    })
    gsap.fromTo('.SAmerica', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 50%'
      }
    })
    gsap.fromTo('.Arizona', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 45%'
      }
    })
    gsap.fromTo('.canyon', { x: 500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 45%'
      }
    }, 1)
    gsap.fromTo('.canoverlay', { x: 700, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 25%'
      }
    })
    gsap.fromTo('.para1', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.Arizona',
        start: 'top 50%'
      }
    })
    gsap.fromTo('.para2', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.Arizona',
        start: 'top 25%'
      }
    })
    gsap.fromTo('.price', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.para2',
        start: 'top 25%'
      }
    })
    gsap.fromTo('.price-btn', { x: -500, opacity: 0, rotate: '20deg' }, {
      x: 0, opacity: 1, rotate: '0', duration: 1.2, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.price',
        start: 'top 45%'
      }
    })
    gsap.fromTo('.proposal2', { x: -700, scale: 0.1, opacity: 0 }, {
      x: 0, scale: 1, duration: 1.2, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.anim-start4',
        start: 'top 35%',
      }
    })
    gsap.fromTo('.popular3', { x: 700, scale: 0.1, opacity: 0 }, {
      x: 0, scale: 1, duration: 1.2, ease: 'power3.easeOut', opacity: 1,
      scrollTrigger: {
        trigger: '.anim-start4',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.kaz', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top 15%',
      }
    })
    gsap.fromTo('.saudi', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top -5%',
      }
    })
    gsap.fromTo('.brazil', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top -25%',
      }
    })
    gsap.fromTo('.berlin', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top -45%',
      }
    })
    gsap.fromTo('.hong', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top -65%',
      }
    })
    gsap.fromTo('.dubai', { scale: 0.1, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 1.3, ease: 'power3.easeOut',
      scrollTrigger: {
        trigger: '.popular3',
        start: 'top -85%',
      }
    })
  })
  return (
    <>
      <div className="antialiased w-full hidden md:block selection:text-sky-400 selection:bg-yellow-200 relative" ref={el => main = el} id='page'>
        <div className="shadow-inner" id='hero'>
          <header className="lg:px-8 relative z-20">
            <div className="pr-2 pl-0 md:pr-4 md:pl-4 lg:px-12 flex justify-between items-center py-4 relative z-10" ref={el => nav = el}>
              <div className="">
                <img src="./Travel/logo-dark.svg" alt="" className="scale-75 lg:scale-100 2xl:scale-110" />
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-8 font-medium 2xl:text-3xl text-gray-700">
                  <a href="/" className="">Packages</a>
                  <div>
                    <a href="/" className="">Destinations</a>
                  </div>
                  <a href="/" className="">Contact Us</a>
                  <a href="/" className="">About Us</a>
                </div>
              </div>
              <Menu />
            </div>
          </header>
          {/* Hero Section */}
          <section className="lg:px-8 relative h-screen z-10">
            <div className="flex flex-col mb-20 sm:mb-0 absolute w-screen top-1/4 z-0" ref={el => hero = el}>
              <div className="text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl text-white mx-auto font-bold uppercase text-center mt-16 xl:mt-4 2xl:mt-16 relative z-0">Never stop exploring</div>
              <div className="text-lg md:text-xl lg:text-3xl 2xl:text-5xl text-white font-light mx-auto text-center my-8 sm:mt-8 sm:mb-8 relative z-0">Check Our Best Promotions</div>
              <button className="rounded-full border border-white px-4 py-2 lg:px-8 lg:py-4 text-base md:text-xl 2xl:text-2xl text-white mx-auto mt-4 mb-12 sm:mt-10 sm:mb-24 hover:-translate-y-3 hover:bg-amber-300 hover:bg-opacity-50 duration-500 relative z-0">Start Experience</button>
            </div>
            <img src="./Travel/cloud-left.png" alt="" className="absolute bottom-0 left-0 -z-10 2xl:scale-150" ref={el => cloudL = el} />
            <img src="./Travel/cloud-right.png" alt="" className="absolute bottom-0 right-0 -z-10 2xl:scale-150" ref={el => cloudR = el} />
            <div className="links absolute bottom-24 left-6 flex flex-col space-y-2 pb-4 ml-6 lg:ml-0">
              <div className="text-sky-200 text-xl 2xl:text-3xl font-medium">follow us on social media</div>
              <div className="text-sky-300 text-lg 2xl:text-2xl">
                <div>you can recieve the best</div>
                <div>offers on social media</div>
              </div>
              <div className="flex space-x-8">
                <a href="/" className='scale-75 2xl:scale-100'>
                  <BsFacebook className='text-white hover:text-blue-600 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-100'>
                  <BsTwitter className='text-white hover:text-sky-400 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-100'>
                  <BsInstagram className='text-white hover:text-rose-400 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-100'>
                  <BsLinkedin className='text-white hover:text-sky-700 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* Section - 1 */}
        <section className='anim-start1 mb-16 px-2 sm:px-4 lg:px-8 pt-16 lg:py-32 flex flex-col'>
          <div className="proposal1 text-xl lg:text-3xl text-center uppercase text-white">our proposals</div>
          <div className="popular1 text-3xl lg:text-5xl text-center capitalize text-zinc-700 font-bold mt-3 md:mt-8 mb-8 lg:mb-16">popular destinations</div>
          {/* First Images Row*/}
          <div className="lg:flex lg:space-x-6 my-4">
            <div className="hover:-translate-y-5 duration-500 lg:w-1/2">
              <div className="card1 rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <img src="./Travel/ahmed-raavi-MqIRZVuk7Uo-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl lg:text-8xl font-extrabold'>Maldives</div>
                  <div className='text-2xl font-medium'>9 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/2">
              <div className="card2 rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-8 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <img src="./Travel/theodor-lundqvist-WHhbYArwFt8-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl lg:text-8xl font-extrabold'>China</div>
                  <div className='text-2xl font-medium'>23 Packages</div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Images Row */}
          <div className="lg:flex lg:space-x-6 relative lg:my-4">
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3">
              <div className="card3 rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-violet-500 to-transparent opacity-50"></div>
                <img src="./Travel/nikolay-vorobyev-jaH3QF46gAY-unsplash@2x-1.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Russia</div>
                  <div className='text-2xl font-medium'>5 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3 z-10">
              <div className="card4 rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-yellow-400 to-transparent opacity-30"></div>
                <img src="./Travel/agustin-diaz-7F65HDP0-E0-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Brazil</div>
                  <div className='text-2xl font-medium'>8 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3">
              <div className="card5 rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-rose-400 to-transparent opacity-30"></div>
                <img src="./Travel/mathew-schwartz-s87bBFZviAU-unsplash@2x.jpg" alt="" className='h-400 2xl:h-600 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Italy</div>
                  <div className='text-2xl font-medium'>6 Packages</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-3 duration-500 mx-auto my-4 lg:mt-20 lg:mb-16 2xl:scale-125">
            <button className="discover rounded-full shadow-xl bg-rose-600 hover:bg-rose-700 duration-500 border-white px-12 py-3 md:px-16 md:py-4 lg:px-24 lg:py-4 md:text-xl text-white">Discover</button>
          </div>
        </section>
        {/* Section - 2 */}
        <section className="anim-start2 px-2 md:px-4 lg:px-8 2xl:px-24 overflow-hidden pt-16 sm:pt-0 lg:mb-32">
          <div className='travel-image overflow-hidden rounded-3xl relative flex flex-col items-center w-full'>
            {/* <div className="text-9xl text-white font-bold uppercase text-center absolute top-36">
            <div>Your Next</div>
            <div> Holiday</div>
          </div> */}
            <img src="./Travel/Frame 5.png" alt="" className='rounded-3xl 2xl:w-full 2xl:h-full' />
            {/* <img src="./Travel/Mask-Group-232x-1.png" alt="" className='absolute top-0 left-0 mx-auto' /> */}
            <div className="lg:my-16 mx-auto absolute bottom-4 md:bottom-8 lg:bottom-24 2xl:scale-150 hover:-translate-y-3 duration-500">
              <button className="travel-btn rounded-full border 2xl:border-2 border-white px-4 lg:px-8 py-2 lg:py-4 text-sm md:text-base lg:text-xl 2xl:text-2xl text-white hover:bg-amber-300 hover:bg-opacity-50 duration-500">View All Packages</button>
            </div>
          </div>
        </section>
        <section className="anim-start3 px-2 md:px-4 lg:px-8 2xl:px-24 mt-16 md:mt-24 lg:mt-48 lg:mb-40">
          <div className="popular2 text-xl md:text-3xl lg:text-5xl 2xl:text-6xl text-center capitalize text-zinc-100 font-bold mb-10 md:mb-24 lg:mb-48 2xl:mb-64">Editor's Choice</div>
          <div className="lg:flex lg:space-x-12">
            <div className="flex flex-col lg:inline-block lg:w-1/3">
              <div className="SAmerica text-lg lg:text-xl text-center lg:text-left 2xl:text-3xl font-extrabold mb-4">Southern America</div>
              <div className="Arizona text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl text-center lg:text-left font-extrabold">Arizona</div>
              <div className="para1 text-gray-100 text-justify lg:text-left lg:mr-6 mt-12 mb-4 text-lg 2xl:text-2xl">Arizona's most famous and now official nickname, “The Grand Canyon State” celebrates its most iconic feature, the Grand Canyon. Arizona is also known as the “Copper State” revealing its abundance in this mineral.</div>
              <div className="para2 text-gray-100 text-justify lg:text-left lg:mr-6 my-2 text-lg 2xl:text-2xl">Approximately 85 percent of Arizona’s land comprises national forests, national parks, recreation and wilderness areas, wildlife preserves and Indian reservations. In addition, Arizona is home to several of the world’s “sky islands,” which are mountains surrounded by valleys that boast wide-ranging ecosystems of plant and animal life.</div>
              <div className="price flex items-center text-4xl 2xl:text-5xl font-bold my-10 mb-8 md:mb-16">$600
                <span className='text-xl 2xl:text-2xl mx-2 font-light text-white md:text-gray-200' >
                  <del>$800</del>
                </span>
              </div>
              <div className="hover:-translate-y-4 duration-500 mx-auto 2xl:scale-125 mb-12 lg:mb-0">
                <button className="price-btn rounded-full bg-rose-600 shadow-xl hover:bg-rose-700 duration-500 border-white px-8 md:px-16 py-2 md:py-4 text-base md:text-xl text-white">Order</button>
              </div>
            </div>
            <div className="lg:w-2/3 mx-0 relative">
              <div className="canyon relative overflow-hidden rounded-3xl shadow-2xl text-center">
                <img src="./Travel/arizona-canyon-cliff-2563733.jpg" alt="" className='shadow-2xl w-full hover:scale-110 duration-1000 hover:rotate-3' />
              </div>
              <div className="canoverlay px-16 lg:px-12 py-2 md:py-6 lg:py-10 bg-black text-sm md:text-lg lg:text-2xl 2xl:text-4xl font-medium lg:font-bold rounded-2xl text-white w-3/5 lg:w-1/2 relative bottom-10 md:bottom-14 shadow-2xl text-center mx-auto hover:bg-amber-50 hover:text-sky-400 duration-500">Amazing Experience</div>
            </div>
          </div>
        </section>
        {/* Section - 3 */}
        <section className='anim-start4 mb-16 px-2 md:px-4 lg:px-8 py-12 lg:py-32 flex flex-col'>
          <div className="proposal2 text-xl lg:text-3xl 2xl:text-4xl text-center uppercase text-white">our proposals</div>
          <div className="popular3 text-3xl lg:text-5xl 2xl:text-6xl text-center capitalize text-zinc-700 font-bold mt-3 lg:mt-8 mb-12 lg:mb-16 2xl:mb-32">popular destinations</div>
          <div className="md:flex md:space-x-3 lg:space-x-4 md:mt-16">
            <div className="kaz rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/azamat-kinzhitaev-7kdkXDqHU78-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Kazakhstan</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Central Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>CULTURAL</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Destination Kazakhstan, a republic in Central Asia, south of Russia, that extends east from the...</div>
                <button className="rounded-full bg-yellow-400 hover:bg-yellow-500 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="saudi rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/keith-hardy-217164-unsplash-1@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Saudi Arabia</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Middle East Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>DELICIOUS</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Plan your holiday in Saudi Arabia and explore its ancient heritage and culture, breathtaking...</div>
                <button className="rounded-full bg-sky-500 hover:bg-sky-600 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="brazil rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/jonathan-borba-Lnb5nu98XJ4-unsplash.jpg" alt="" className='min-h-full w-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1 lg:space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Brazil</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>America</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>SCENERY</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Brazil is South America's biggest and the world's fifth largest country. The country covers...</div>
                <button className="rounded-full bg-rose-600 hover:bg-rose-700 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
          </div>
          <div className="md:flex md:space-x-3 lg:space-x-4 md:mt-16">
            <div className="berlin rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/anthony-reungere-sjUufQqEnHI-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Berlin</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Europe</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>ARCHITECTURAL</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant...</div>
                <button className="rounded-full bg-rose-600 hover:bg-rose-700 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="hong rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/florian-wehde-DpgujuZ92zE-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Hong Kong</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>CITY</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Hong Kong is best known as a shoppers' paradise.</div>
                <button className="rounded-full bg-sky-500 hover:bg-sky-600 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="dubai rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/fredrik-ohlander-fCW1hWq2nq0-unsplash.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Dubai</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Middle Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>RECREATION</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide...</div>
                <button className="rounded-full bg-yellow-400 hover:bg-yellow-500 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className='pb-0' id='footer'>
          <div className="lg:flex lg:flex-col pt-40 lg:pt-56">
            <div className='lg:flex items-center'>
              <div className='lg:mx-8 2xl:mx-24 lg:w-1/2'>
                <div className="text-base md:text-lg lg:text-xl 2xl:text-3xl font-semibold">KEEP IN TOUCH</div>
                <div className="text-black text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl tracking-wide font-semibold">Travel With Us</div>
              </div>
              <div className="flex ml-3 md:ml-6 lg:mx-0 w-full mt-16 lg:mt-0 lg:w-1/2 relative">
                <input type="text" className='rounded-full border border-zinc-400 px-2 lg:px-4 py-2 md:py-4 md:text-xl w-full focus:outline-none' placeholder='Email Address' />
                <button className="bg-sky-500 px-10 2xl:px-14 text-white md:text-xl 2xl:text-3xl rounded-full relative right-12 lg:right-24 font-light">Send</button>
              </div>
            </div>
            <div className='lg:flex lg:ml-8 px-2 md:px-4 lg:px-0 2xl:ml-24 mt-16 lg:mt-48 mb-12 lg:mb-24'>
              <div className="flex flex-col space-y-4 my-8 lg:my-0 lg:w-1/2 2xl:mr-24">
                <img src="./Travel/logo-dark.svg" alt="" className='w-96 mx-auto lg:mx-0 lg:w-48 2xl:w-72 shadow-sm rounded' />
                <div className='text-white text-base md:text-lg 2xl:text-2xl'>Thank you for choosing us to organize you a safe, memorable and worth repeating holiday for you. If you have any feedback or if you want another trip from us don't hesitate to contact us again.</div>
                <div className='text-white text-base md:text-lg 2xl:text-2xl'>You wil have 40% off of your next trip with us. First timers also get 25% discount!! Cantact us.</div>
              </div>
              <div className="flex justify-center items-center space-x-1 lg:space-x-16 2xl:space-x-32">
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">OUR AGENCY</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Services</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Insurance</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Agency</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Tourism</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Payment</div>
                  </a>
                </div>
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">PARTNERS</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Booking</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Bookingsol</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Barakbooking</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Momondo</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Sitobooking</div>
                  </a>
                </div>
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">LAST MINUTES</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">London</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">America</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">China</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Berlin</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Hong Kong</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sky-500 flex justify-between px-4 2xl:px-24 py-1 text-white">
            <div className="text-sm md:text-base lg:text-xl 2xl:text-3xl">© 2022 Travel. All rights reserved.</div>
          </div>
        </footer>
      </div>
      <div className="antialiased w-full block md:hidden selection:text-sky-400 selection:bg-yellow-200 relative" id='page'>
        <div className="shadow-inner" id='hero'>
          <header className="lg:px-8 relative z-20">
            <div className="pr-2 pl-0 md:pr-4 md:pl-4 lg:px-12 2xl:px-24 flex justify-between items-center py-4 2xl:py-16 relative z-10">
              <div className="">
                <img src="./Travel/logo-dark.svg" alt="" className="scale-75 lg:scale-100 2xl:scale-150" />
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-8 2xl:space-x-12 2xl:text-2xl font-medium text-gray-700">
                  <a href="/" className="">Packages</a>
                  <div>
                    <a href="/" className="">Destinations</a>
                  </div>
                  <a href="/" className="">Contact Us</a>
                  <a href="/" className="">About Us</a>
                </div>
              </div>
              <Menu />
            </div>
          </header>
          {/* Hero Section */}
          <section className="lg:px-8 relative h-screen z-10">
            <div className="flex flex-col mb-20 sm:mb-0 relative z-0">
              <div className="text-3xl md:text-4xl lg:text-6xl 2xl:text-9xl text-white font-bold uppercase text-center mt-16 2xl:scale-125 2xl:mt-32 2xl:mb-32 relative z-0">Never stop exploring</div>
              <div className="text-lg md:text-xl lg:text-3xl 2xl:text-5xl text-white font-light text-center my-8 sm:mt-8 sm:mb-8 2xl:mt-32 2xl:mb-32 relative z-0">Check Our Best Promotions</div>
              <button className="rounded-full border 2xl:border-2 border-white px-4 py-2 lg:px-8 lg:py-4 text-base md:text-xl 2xl:text-2xl text-white mx-auto mt-4 mb-12 sm:mt-10 sm:mb-24 2xl:scale-125 2xl:mb-32 hover:-translate-y-3 hover:bg-amber-300 hover:bg-opacity-50 duration-500 relative z-0">Start Experience</button>
            </div>
            <img src="./Travel/cloud-left.png" alt="" className="absolute bottom-0 left-0 -z-10 2xl:scale-150" />
            <img src="./Travel/cloud-right.png" alt="" className="absolute bottom-0 right-0 -z-10 2xl:scale-150" />
            <div className="flex flex-col space-y-2 pb-4 ml-6 lg:ml-0 2xl:ml-16">
              <div className="text-sky-200 text-xl 2xl:text-3xl font-medium">follow us on social media</div>
              <div className="text-sky-300 text-lg 2xl:text-2xl">
                <div>you can recieve the best</div>
                <div>offers on social media</div>
              </div>
              <div className="flex space-x-8">
                <a href="/" className='scale-75 2xl:scale-110'>
                  <BsFacebook className='text-white hover:text-blue-600 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-110'>
                  <BsTwitter className='text-white hover:text-sky-400 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-110'>
                  <BsInstagram className='text-white hover:text-rose-400 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
                <a href="/" className='scale-75 2xl:scale-110'>
                  <BsLinkedin className='text-white hover:text-sky-700 w-6 lg:w-8 h-6 lg:h-8 duration-500' />
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* Section - 1 */}
        <section className='mb-16 px-2 sm:px-4 lg:px-8 2xl:px-24 pt-16 lg:py-32 flex flex-col'>
          <div className="text-xl lg:text-3xl 2xl:text-4xl text-center uppercase text-white">our proposals</div>
          <div className="text-3xl lg:text-5xl 2xl:text-6xl text-center capitalize text-zinc-700 font-bold mt-3 md:mt-8 mb-8 lg:mb-16 2xl:mb-32">popular destinations</div>
          {/* First Images Row*/}
          <div className="lg:flex lg:space-x-6 my-4">
            <div className="hover:-translate-y-5 duration-500 lg:w-1/2">
              <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <img src="./Travel/ahmed-raavi-MqIRZVuk7Uo-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl lg:text-8xl font-extrabold'>Maldives</div>
                  <div className='text-2xl font-medium'>9 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/2">
              <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-8 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <img src="./Travel/theodor-lundqvist-WHhbYArwFt8-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl lg:text-8xl font-extrabold'>China</div>
                  <div className='text-2xl font-medium'>23 Packages</div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Images Row */}
          <div className="lg:flex lg:space-x-6 relative lg:my-4">
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3">
              <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-violet-500 to-transparent opacity-50"></div>
                <img src="./Travel/nikolay-vorobyev-jaH3QF46gAY-unsplash@2x-1.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Russia</div>
                  <div className='text-2xl font-medium'>5 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3 z-10">
              <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-yellow-400 to-transparent opacity-30"></div>
                <img src="./Travel/agustin-diaz-7F65HDP0-E0-unsplash@2x.jpg" alt="" className='h-400 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Brazil</div>
                  <div className='text-2xl font-medium'>8 Packages</div>
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-5 duration-500 lg:w-1/3">
              <div className="rounded-3xl overflow-hidden relative shadow-2xl mb-6 md:mb-12 lg:mb-0">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-rose-400 to-transparent opacity-30"></div>
                <img src="./Travel/mathew-schwartz-s87bBFZviAU-unsplash@2x.jpg" alt="" className='h-400 2xl:h-600 w-full' />
                <div className='absolute bottom-8 px-8 py-4 text-white'>
                  <div className='text-6xl font-extrabold'>Italy</div>
                  <div className='text-2xl font-medium'>6 Packages</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-3 duration-500 mx-auto my-4 lg:mt-20 lg:mb-16 2xl:scale-125">
            <button className="rounded-full shadow-xl bg-rose-600 hover:bg-rose-700 duration-500 border-white px-12 py-3 md:px-16 md:py-4 lg:px-24 lg:py-4 md:text-xl text-white">Discover</button>
          </div>
        </section>
        {/* Section - 2 */}
        <section className="px-2 md:px-4 lg:px-8 2xl:px-24 overflow-hidden pt-16 sm:pt-0 lg:mb-32">
          <div className='overflow-hidden rounded-3xl relative flex flex-col items-center w-full'>
            {/* <div className="text-9xl text-white font-bold uppercase text-center absolute top-36">
            <div>Your Next</div>
            <div> Holiday</div>
          </div> */}
            <img src="./Travel/Frame 5.png" alt="" className='rounded-3xl 2xl:w-full 2xl:h-full' />
            {/* <img src="./Travel/Mask-Group-232x-1.png" alt="" className='absolute top-0 left-0 mx-auto' /> */}
            <div className="lg:my-16 mx-auto absolute bottom-4 md:bottom-8 lg:bottom-24 2xl:scale-150 hover:-translate-y-3 duration-500">
              <button className="rounded-full border 2xl:border-2 border-white px-4 lg:px-8 py-2 lg:py-4 text-sm md:text-base lg:text-xl 2xl:text-2xl text-white hover:bg-amber-300 hover:bg-opacity-50 duration-500">View All Packages</button>
            </div>
          </div>
        </section>
        <section className="px-2 md:px-4 lg:px-8 2xl:px-24 mt-16 md:mt-24 lg:mt-48 lg:mb-40">
          <div className="text-xl md:text-3xl lg:text-5xl 2xl:text-6xl text-center capitalize text-zinc-100 font-bold mb-10 md:mb-24 lg:mb-48 2xl:mb-64">Editor's Choice</div>
          <div className="lg:flex lg:space-x-12">
            <div className="flex flex-col lg:inline-block lg:w-1/3">
              <div className="text-lg lg:text-xl text-center lg:text-left 2xl:text-3xl font-extrabold mb-4">Southern America</div>
              <div className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl text-center lg:text-left font-extrabold">Arizona</div>
              <div className="text-gray-100 text-justify lg:text-left lg:mr-6 mt-12 mb-4 text-lg 2xl:text-2xl">Arizona's most famous and now official nickname, “The Grand Canyon State” celebrates its most iconic feature, the Grand Canyon. Arizona is also known as the “Copper State” revealing its abundance in this mineral.</div>
              <div className="text-gray-100 text-justify lg:text-left lg:mr-6 my-2 text-lg 2xl:text-2xl">Approximately 85 percent of Arizona’s land comprises national forests, national parks, recreation and wilderness areas, wildlife preserves and Indian reservations. In addition, Arizona is home to several of the world’s “sky islands,” which are mountains surrounded by valleys that boast wide-ranging ecosystems of plant and animal life.</div>
              <div className="flex items-center text-4xl 2xl:text-5xl font-bold my-10 mb-8 md:mb-16">$600
                <span className='text-xl 2xl:text-2xl mx-2 font-light text-white md:text-gray-200' >
                  <del>$800</del>
                </span>
              </div>
              <div className="hover:-translate-y-4 duration-500 mx-auto 2xl:scale-125 mb-12 lg:mb-0">
                <button className="rounded-full bg-rose-600 shadow-xl hover:bg-rose-700 duration-500 border-white px-8 md:px-16 py-2 md:py-4 text-base md:text-xl text-white">Order</button>
              </div>
            </div>
            <div className="lg:w-2/3 mx-0 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl text-center">
                <img src="./Travel/arizona-canyon-cliff-2563733.jpg" alt="" className='shadow-2xl w-full hover:scale-110 duration-1000 hover:rotate-3' />
              </div>
              <div className="px-16 lg:px-12 py-2 md:py-6 lg:py-10 bg-black text-sm md:text-lg lg:text-2xl 2xl:text-4xl font-medium lg:font-bold rounded-2xl text-white w-3/5 lg:w-1/2 relative bottom-10 md:bottom-14 shadow-2xl text-center mx-auto hover:bg-amber-50 hover:text-sky-400 duration-500">Amazing Experience</div>
            </div>
          </div>
        </section>
        {/* Section - 3 */}
        <section className='mb-16 px-2 md:px-4 lg:px-8 py-12 lg:py-32 flex flex-col'>
          <div className="text-xl lg:text-3xl 2xl:text-4xl text-center uppercase text-white">our proposals</div>
          <div className="text-3xl lg:text-5xl 2xl:text-6xl text-center capitalize text-zinc-700 font-bold mt-3 lg:mt-8 mb-12 lg:mb-16 2xl:mb-32">popular destinations</div>
          <div className="md:flex md:space-x-3 lg:space-x-4 md:mt-16">
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/azamat-kinzhitaev-7kdkXDqHU78-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Kazakhstan</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Central Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>CULTURAL</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Destination Kazakhstan, a republic in Central Asia, south of Russia, that extends east from the...</div>
                <button className="rounded-full bg-yellow-400 hover:bg-yellow-500 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/keith-hardy-217164-unsplash-1@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Saudi Arabia</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Middle East Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>DELICIOUS</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Plan your holiday in Saudi Arabia and explore its ancient heritage and culture, breathtaking...</div>
                <button className="rounded-full bg-sky-500 hover:bg-sky-600 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/jonathan-borba-Lnb5nu98XJ4-unsplash.jpg" alt="" className='min-h-full w-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1 lg:space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Brazil</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>America</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>SCENERY</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Brazil is South America's biggest and the world's fifth largest country. The country covers...</div>
                <button className="rounded-full bg-rose-600 hover:bg-rose-700 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
          </div>
          <div className="md:flex md:space-x-3 lg:space-x-4 md:mt-16">
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/anthony-reungere-sjUufQqEnHI-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Berlin</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Europe</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>ARCHITECTURAL</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant...</div>
                <button className="rounded-full bg-rose-600 hover:bg-rose-700 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/florian-wehde-DpgujuZ92zE-unsplash@2x.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Hong Kong</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>CITY</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Hong Kong is best known as a shoppers' paradise.</div>
                <button className="rounded-full bg-sky-500 hover:bg-sky-600 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative lg:w-1/2 shadow-2xl h-fifth w-full mb-6 lg:mb-0">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <img src="./Travel/fredrik-ohlander-fCW1hWq2nq0-unsplash.jpg" alt="" className='min-h-full' />
              <div className='absolute bottom-8 px-4 lg:px-8 py-4 text-white w-5/6 space-y-1.5'>
                <div className='text-4xl 2xl:text-6xl font-bold'>Dubai</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Middle Asia</div>
                <div className='text-xl 2xl:text-3xl text-white opacity-50'>RECREATION</div>
                <div className='text-lg 2xl:text-xl text-white opacity-50'>Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide...</div>
                <button className="rounded-full bg-yellow-400 hover:bg-yellow-500 duration-300 border-white px-6 py-2 text-white mx-auto font-semibold 2xl:px-12 2xl:py-4 2xl:text-xl">Detail</button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className='pb-0' id='footer'>
          <div className="lg:flex lg:flex-col pt-40 lg:pt-56">
            <div className='lg:flex items-center'>
              <div className='lg:mx-8 2xl:mx-24 lg:w-1/2'>
                <div className="text-base md:text-lg lg:text-xl 2xl:text-3xl font-semibold">KEEP IN TOUCH</div>
                <div className="text-black text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl tracking-wide font-semibold">Travel With Us</div>
              </div>
              <div className="flex ml-3 md:ml-6 lg:mx-0 w-full mt-16 lg:mt-0 lg:w-1/2 relative">
                <input type="text" className='rounded-full border border-zinc-400 px-2 lg:px-4 py-2 md:py-4 md:text-xl w-full focus:outline-none' placeholder='Email Address' />
                <button className="bg-sky-500 px-10 2xl:px-14 text-white md:text-xl 2xl:text-3xl rounded-full relative right-12 lg:right-24 font-light">Send</button>
              </div>
            </div>
            <div className='lg:flex lg:ml-8 px-2 md:px-4 lg:px-0 2xl:ml-24 mt-16 lg:mt-48 mb-12 lg:mb-24'>
              <div className="flex flex-col space-y-4 my-8 lg:my-0 lg:w-1/2 2xl:mr-24">
                <img src="./Travel/logo-dark.svg" alt="" className='w-96 mx-auto lg:mx-0 lg:w-48 2xl:w-72 shadow-sm rounded' />
                <div className='text-white text-base md:text-lg 2xl:text-2xl'>Thank you for choosing us to organize you a safe, memorable and worth repeating holiday for you. If you have any feedback or if you want another trip from us don't hesitate to contact us again.</div>
                <div className='text-white text-base md:text-lg 2xl:text-2xl'>You wil have 40% off of your next trip with us. First timers also get 25% discount!! Cantact us.</div>
              </div>
              <div className="flex justify-center items-center space-x-1 lg:space-x-16 2xl:space-x-32">
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">OUR AGENCY</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Services</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Insurance</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Agency</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Tourism</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Payment</div>
                  </a>
                </div>
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">PARTNERS</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Booking</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Bookingsol</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Barakbooking</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Momondo</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Sitobooking</div>
                  </a>
                </div>
                <div className="flex flex-col space-y-3 2xl:space-y-8 w-48">
                  <div className="text-base md:text-lg 2xl:text-2xl font-semibold">LAST MINUTES</div>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">London</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">America</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">China</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Berlin</div>
                  </a>
                  <a href='/' className="flex items-center space-x-1">
                    <BsChevronRight className='w-4 h-4 text-white' />
                    <div className="text-white text-sm md:ext-base 2xl:text-xl font-semibold">Hong Kong</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sky-500 flex justify-between px-4 2xl:px-24 py-1 text-white">
            <div className="text-sm md:text-base lg:text-xl 2xl:text-3xl">© 2022 Travel. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
