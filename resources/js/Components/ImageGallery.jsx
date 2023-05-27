import "photoswipe/dist/photoswipe.css";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGallery = ({ images }) => {
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
                        original={image.src}
                        thumbnail={image.thumbnail}
                        width={image.width}
                        height={image.height}
                        title={image.title}
                    >
                        {({ ref, open }) => (
                            <div className={`w-full mb-3`}>
                                <img
                                    className={`${spanProp[index]["aspect"]} inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100`}
                                    ref={ref}
                                    src={image.thumbnail}
                                    alt={image.title}
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
