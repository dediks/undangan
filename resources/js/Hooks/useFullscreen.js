import { useEffect, useState } from "react";

export default function useFullscreen() {
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setFullscreen(Boolean(document.fullscreenElement));
        }

        document.addEventListener("fullscreenchange", onFullscreenChange);

        return () =>
            document.removeEventListener(
                "fullscreenchange",
                onFullscreenChange
            );
    }, []);

    return [fullscreen, setFullscreen];
}
