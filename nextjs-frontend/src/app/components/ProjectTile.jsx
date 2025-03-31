import Link from "next/link"
import { urlFor } from "@/sanity/image"

export default function ProjectTile({ title, description, thumbnail, slug, softwares_used }) {

    return (
        <Link href={"/projects/" + slug.current} className="p-4 bg-[#1d1b1d] rounded-sm scale-100 hover:scale-102 ease-in-out duration-200 cursor-pointer">
            <div>
                <div className="flex items-center mb-2">
                    <img
                        className="w-[120px] h-[120px] object-cover rounded-md"
                        src={thumbnail || "https://via.placeholder.com/150x120"}
                        alt="Placeholder"
                    />
                    {/* Centered Grid */}
                    <div className="flex flex-1 justify-center items-center">
                        <div
                            className="flex flex-col justify-center items-center"
                        >
                            {(softwares_used ?? []).map((img) => (
                                <img
                                    className="h-[35px] my-2 object-scale-down"
                                    src={urlFor(img).url() || "https://via.placeholder.com/150x120"}
                                    alt="Software Used"
                                    key={img._key}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl text-[#cd6688] font-semibold my-2">{title}</h3>
                <div className="text-md text-gray-300">{description}</div>
            </div>
        </Link>
    )
}