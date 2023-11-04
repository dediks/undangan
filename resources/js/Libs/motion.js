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

export const fadeInVariants = {
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
            duration: 1.67,
            delay: 0,
            ease: [0.17, 0.67, 0.83, 0.67],
        },
    },
};

export const fadeInFastVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0,
            ease: [0.17, 0.67, 0.83, 0.67],
        },
    },
};

export const imageVariants = {
    offscreen: {
        opacity: 0,
        scale: 0.8,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
        },
    },
};
