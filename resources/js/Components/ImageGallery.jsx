import { usePage } from "@inertiajs/react";
import "photoswipe/dist/photoswipe.css";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGallery = () => {
    const images = usePage().props.data.galleries;

    const smallItemStyles = {
        cursor: "pointer",
        objectFit: "cover",
        width: "100%",
        maxHeight: "100%",
    };

    const spanProp = [
        { class: "row-span-2", aspect: "aspect-[3/4]" },
        { class: "col-span-2 row-span-2", aspect: "aspect-[9/16]" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-video" },
        { class: "col-span-2 row-span-2", aspect: "aspect-[3/4]" },
        { class: "col-span-2", aspect: "aspect-[3/4]" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-[3/4]" },
        { class: "", aspect: "aspect-video" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-video" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-video" },
        { class: "", aspect: "aspect-square" },
        { class: "", aspect: "aspect-[3/4]" },
        { class: "", aspect: "aspect-square" },
    ];

    return (
        <Gallery>
            <div className="columns-2 md:columns-3 gap-3">
                {images.map((image, index) => (
                    <Item
                        key={index}
                        original={image.image_url}
                        thumbnail={image.image_url}
                        width={image.width}
                        height={image.height}
                        title={image.alt}
                    >
                        {({ ref, open }) => (
                            <div className={`w-full mb-3`}>
                                <img
                                    className={`${spanProp[index]["aspect"]} inset-0 h-full w-full object-cover object-center rounded hover:opacity-100`}
                                    ref={ref}
                                    src={image.image_url}
                                    alt={image.alt}
                                    onClick={open}
                                    style={smallItemStyles}
                                />
                            </div>
                        )}
                    </Item>
                ))}
            </div>
        </Gallery>
    );
};

export default ImageGallery;
