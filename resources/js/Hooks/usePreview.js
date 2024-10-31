import { useEffect, useState } from "react";

let section = null;

export default function usePreview({ theme_id }) {
    const [section, setSection] = useState();

    useEffect(() => {
        
    }, []);

    switch (theme_id) {
        case "Theme_1":
            IntroTheme = lazy(() =>
                import(`@/Components/Themes/Theme-1/Section/Intro`)
            );
        case "Theme_2":
            IntroTheme = lazy(() =>
                import(`@/Components/Themes/Theme_2/Section/Intro`)
            );
    }
}
