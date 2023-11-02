export const scrollMotionVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
        },
    },
};

export const coverVariants = {
    offscreen: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.2,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
        },
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2.67,
            delay: 0,
            ease: [0.9, 0.71, 0.2, 1.01],
        },
    },
};
