const getSectionTitle = (sectionName, title = null) => {
    if (title) {
        return title;
    }

    switch (sectionName) {
        case "cover":
            return "Undangan Pernikahan";
        case "intro":
            return "Intro";
    }
};

export { getSectionTitle };
