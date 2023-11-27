import React from "react";
import Slider from "react-slick";

export default function ImageSlider({ images }) {
    let image_to_show = 2;

    if (window.screen.width >= 1024 && window.screen.height >= 768) {
        image_to_show = 3;
    }

    const settings = {
        dots: false,
        speed: 2000,
        infinite: true,
        slidesToShow: image_to_show,
        slidesToScroll: image_to_show,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        rtl: true,
    };

    return (
        <div className="h-32 relative z-10">
            <Slider {...settings}>
                {Object.values(images).map((image) => {
                    return (
                        <img
                            key={image.id}
                            className="object-cover object-center bg-cover bg-center w-full h-full aspect-video"
                            src={image.image_url}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}
