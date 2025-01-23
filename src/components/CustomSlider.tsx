import React, { useState, useRef, useEffect } from "react";
import { icons } from "../common/icons";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const CustomSlider: React.FC<{ categories: Category[], title: string, }> = ({ categories, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { FaChevronLeft, FaChevronRight } = icons
    const totalItems = categories.length
    // const { width } = useSelector((state: any) => state.utils)
    const [visibleItems, setVisibleItems] = useState(3) // Number of items visible at once

    // useEffect(() => {
    //     setVisibleItems(width > 1280 ? 5 : width > 1024 ? 4 : width > 768 ? 3 : 2)
    // }, [width])


    useEffect(() => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
    }, [visibleItems])

    console.log({ currentIndex, visibleItems });

    const next = () => {
        if (currentIndex < totalItems - visibleItems) setCurrentIndex(currentIndex + 1);
    }

    const prev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className="mt-10 w-full">
            <div className="mb-5">
                <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
            <div className="relative">
                <div className="overflow-hidden">
                    <button onClick={prev} className="absolute left-4 z-50 rounded-full p-2 bg-[rgba(203,213,225,0.8)] text-white bottom-1/2 translate-y-1/2">
                        <FaChevronLeft size={24} />
                    </button>
                    <div className="transition-transform duration-500 ease-in-out grid -mx-2"
                        style={{
                            transform: `translateX(-${(100 / visibleItems) * currentIndex}%)`,
                            gridTemplateColumns: `repeat(${totalItems}, ${100 / visibleItems}%)`,
                        }}
                    >
                        {
                            categories?.map(category => {
                                return (
                                    <div key={category?._id} className={`px-2`}>
                                        <CategoryCard category={category} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={next} className="absolute right-4 z-50 rounded-full p-2 bg-[rgba(203,213,225,0.7)] text-white bottom-1/2 translate-y-1/2">
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CustomSlider