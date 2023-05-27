export const scrollMotionVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
        },
    },
};
