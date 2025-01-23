'use client'
import { icons } from '@/common/icons'
import { useCallback, useEffect, useState } from 'react'

let interval: NodeJS.Timeout

const BannerSlider = () => {
    const banners: string[] = [
        '../assets/banner_1.jpg',
        '../assets/banner_2.jpg',
        '../assets/banner_3.jpg',
        '../assets/banner_4.jpg',
        '../assets/banner_5.jpg',
    ]
    const { MdArrowBackIosNew, MdArrowForwardIos } = icons
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(2)
    const [isAuto, setIsAuto] = useState<boolean>(true)
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(() => {
        // window.addEventListener('resize', (e: UIEvent) => {
        // })
        window.addEventListener('resize', setWidth)
        return () => { window.removeEventListener('resize', setWidth) }
    }, [])

    const setWidth = (e: any) => {
        // console.log(e.target.innerWidth);

        // setCurrentWidth(e.target.innerWidth)
        // if (e.target.innerWidth < 1024)
        //     setMax(1)
    }

    const getArrSlider = (start: number, end: number, length: number) => {
        const limit = (start > end) ? length : end
        let output = []
        for (let i = start; i <= limit; i++) {
            output.push(i)
        }
        if (start > end) {
            for (let i = 0; i <= end; i++) {
                output.push(i)
            }
        }
        return output
    }

    const handleBannerAnimation = (step: number) => {
        const slider = document.getElementsByClassName('slider-item')
        const list = getArrSlider(min, max, slider.length - 1)
        for (let i = 0; i < slider.length; i++) {
            // reset animations from the images
            slider[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
            slider[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
            slider[i]?.classList?.remove('animate-slide-left-2', 'order-2', 'z-10')
            // show image within min and max range and hide image outside of that range
            if (list.some(item => item === i)) {
                slider[i].classList.add('block')
            } else {
                slider[i].classList.remove('block')
            }
        }
        // add animation for the images (the first one to most right and the 2nd and 3rd to left)
        list.forEach(item => {
            if (item === max) {
                slider[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
            } else if (item === min) {
                slider[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
            } else {
                slider[item]?.classList?.add('animate-slide-left-2', 'order-2', 'z-10')
            }
        })
        if (step === 1) {
            setMin(prev => prev === slider.length - 1 ? 0 : prev + step)
            setMax(prev => prev === slider.length - 1 ? 0 : prev + step)
        }
        if (step === -1) {
            setMin(prev => prev === 0 ? slider.length - 1 : prev + step)
            setMax(prev => prev === 0 ? slider.length - 1 : prev + step)
        }
    }

    const clickPreviousBanner = useCallback((step: number) => {
        interval && clearInterval(interval)
        setIsAuto(false)
        handleBannerAnimation(step)
    }, [min, max])


    const clickNextBanner = useCallback((step: number) => {
        interval && clearInterval(interval)
        setIsAuto(false)
        handleBannerAnimation(step)
    }, [min, max])

    useEffect(() => {
        if (isAuto) {
            interval = setInterval(() => handleBannerAnimation(1), 4000)
        }
        return () => { interval && clearInterval(interval) }
    }, [min, max, isAuto])

    const visibleIndices = getArrSlider(min, max, banners.length)

    return (
        <div className='select-none flex justify-between gap-4 mt-6 w-full overflow-hidden relative' onMouseLeave={() => setIsAuto(true)}>
            <button className='rounded-full p-2 z-30 absolute top-1/2 -translate-y-[50%] left-2 bg-[rgba(0,0,0,0.2)] text-blue-500'
                onClick={() => clickPreviousBanner(-1)}
            >
                <span><MdArrowBackIosNew size={20} /></span>
            </button>
            {
                banners?.map((banner, i) => {
                    return (
                        <div className={`slider-item flex-1  ${visibleIndices.includes(i) ? 'block' : 'hidden'}`} key={i}>
                            <img src={banner} alt='banner' className='rounded-lg object-cover aspect-video h-full' />
                        </div>
                    )
                })
            }
            <button className='rounded-full p-2 z-30 absolute top-1/2 -translate-y-[50%] right-2 bg-[rgba(0,0,0,0.2)] text-blue-500'
                onClick={() => clickNextBanner(1)}
            >
                <span><MdArrowForwardIos size={20} /></span>
            </button>
        </div>
    )
}

export default BannerSlider