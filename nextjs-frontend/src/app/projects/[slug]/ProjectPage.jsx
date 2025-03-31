'use client'
import Image from "next/image";
import Slider from "react-slick";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "styled-jsx/css";

const customComponents = {
    block: {
      normal: ({ children }) => <p className="text-md">{children}</p>,
      // Add more custom block types here if needed
    },
    list: {
      // Customize how unordered lists are rendered
      bullet: ({ children }) => (
        <ul className="list-disc pl-7 mt-3">
          {children}
        </ul>
      ),
      // Customize how ordered lists are rendered
      number: ({ children }) => (
        <ol className="list-decimal pl-7 mt-3">
          {children}
        </ol>
      ),
    },
    listItem: {
      // Customize how each list item is rendered
      bullet: ({ children }) => (
        <li className="text-md">{children}</li>
      ),
      number: ({ children }) => (
        <li className="text-md">{children}</li>
      ),
    },
  };

export default function ProjectClient({ project }) {
    const data = project.data;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    };

    // Function to extract YouTube video ID from different URL formats
    const extractYouTubeID = (url) => {
        try {
            const parsedURL = new URL(url);
            if (parsedURL.hostname.includes("youtu.be")) {
                return parsedURL.pathname.substring(1);
            } else if (parsedURL.hostname.includes("youtube.com")) {
                return parsedURL.searchParams.get("v");
            }
        } catch (error) {
            console.error("Invalid YouTube URL:", url);
            return null;
        }
    };

    return (
        <div className="container mx-auto p-12 bg-[#1d1b1d] rounded-sm">
            <Slider {...settings} className="w-full">
                {/* Image Slides */}
                {data.title_images?.map((image, index) => (
                    <div key={index} className="flex justify-center items-center h-[400px]">
                        <Image
                            src={urlFor(image)?.width(800).height(400).url() || ""}
                            alt={data.name}
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                ))}

                {/* YouTube Video Slides */}
                {data.youtube_links?.map((link, index) => {
                    const videoId = extractYouTubeID(link);
                    return videoId ? (
                        <div key={`youtube-${index}`} className="flex justify-center items-center h-[400px]">
                            <iframe
                                className="rounded-lg w-[800px] h-[400px]"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`YouTube Video ${index + 1}`}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : null;
                })}
            </Slider>

            <h1 className="text-4xl text-[#cd6688] font-semibold">{data.name}</h1>
            {data.date && (
                <p className="text-gray-600 mb-5">{new Date(data.date).getFullYear()}</p>
            )}
            {data.details && <PortableText value={data.details} components={customComponents} />}
        </div>
    );
}
