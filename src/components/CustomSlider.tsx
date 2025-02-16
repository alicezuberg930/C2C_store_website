import React, { useState, useRef, useEffect } from "react"
import { icons } from "@/common/icons"

export interface Settings {
    children?: React.ReactNode,
    slidesToShow: number,
    autoplay?: boolean,
    autoplaySpeed?: number,
    infinite?: boolean,
    responsive?: { breakpoint: number, slidesToShow: number }[],
    customMargin?: number
}

const CustomSlider: React.FC<Settings> = ({
    children, slidesToShow = 1, autoplay = false, autoplaySpeed = 3000, infinite = true, responsive = [], customMargin = 2
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderRef = useRef(null)
    const totalSlides = React.Children.count(children)
    const { FaChevronLeft, FaChevronRight } = icons
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow)

    const updateSlidesToShow = () => {
        let newSlidesToShow = slidesToShow
        responsive.forEach((breakpoint) => {
            if (window.innerWidth <= breakpoint.breakpoint) newSlidesToShow = breakpoint.slidesToShow
        })
        setVisibleSlides(newSlidesToShow)
    }

    // Listen for window resize and update visible slides
    useEffect(() => {
        updateSlidesToShow()
        window.addEventListener("resize", updateSlidesToShow)
        return () => window.removeEventListener("resize", updateSlidesToShow)
    }, [])

    const nextSlide = () => {
        if (currentIndex < totalSlides - visibleSlides) {
            setCurrentIndex(currentIndex + 1)
        } else if (infinite) {
            setCurrentIndex(0) // Loop back to start
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else if (infinite) {
            setCurrentIndex(totalSlides - visibleSlides) // Loop back to end
        }
    }

    // AutoPlay
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                nextSlide()
            }, autoplaySpeed)
            return () => clearInterval(interval)
        }
    }, [currentIndex, autoplay, autoplaySpeed])

    return (
        <div className='relative w-full overflow-hidden'>
            <button onClick={prevSlide} className="absolute left-4 z-50 rounded-full p-2 bg-[rgba(203,213,225,0.8)] text-white bottom-1/2 translate-y-1/2">
                <FaChevronLeft size={24} />
            </button>
            <div className={`flex duration-1000 ease-in-out -mx-${customMargin}`} ref={sliderRef} style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
                {
                    React.Children.map(children, (child, i) => {
                        return (
                            <div key={i} style={{ width: `${100 / visibleSlides}%`, flex: '0 0 auto' }}>
                                {child}
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={nextSlide} className="absolute right-4 z-50 rounded-full p-2 bg-[rgba(203,213,225,0.7)] text-white bottom-1/2 translate-y-1/2">
                <FaChevronRight size={24} />
            </button>
        </div>
    )
}

export default CustomSlider