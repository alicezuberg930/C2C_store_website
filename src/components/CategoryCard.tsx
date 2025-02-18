// import { icons } from "@/app/common/icons"

import { icons } from "@/common/icons"

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
    // let link = item?.link?.split('.')[0]
    // const { AiOutlineHeart, BsPlayFill, BsThreeDots } = icons

    return (
        <div className={`text-sm flex flex-col gap-3 cursor-pointer px-2`}>
            <div className="relative w-full group overflow-hidden rounded-lg bg-white aspect-square">
                <div className="text-white absolute w-full h-full gap-3 bg-overlay z-20 invisible group-hover:visible flex items-center justify-center">
                    {/* <span><AiOutlineHeart size={25} /></span> */}
                    <span className="p-1 border border-white rounded-full">
                        {/* <BsPlayFill size={35} /> */}
                    </span>
                    {/* <span><BsThreeDots size={25} /></span> */}
                </div>
                <img src={category?.image ?? "./assets/image-not-found.jpg"} alt={category?.name} className="w-full h-full z-10 group-hover:animate-scale-up-center object-contain" />
            </div>
            <div className="text-center">
                <span className="font-semibold line-clamp-2">{category?.name}</span>
            </div>
        </div>
    )
}

export default CategoryCard