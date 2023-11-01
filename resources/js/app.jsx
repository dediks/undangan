import "./bootstrap";
import "../css/app.css";
import "filepond/dist/filepond.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NProgress from "nprogress";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

NProgress.configure({
    easing: "ease",
    speed: 1000,
    showSpinner: true,
    template:
        '<div class="bg-black" role="bar"><div class="peg"></div></div><div class="bg-black spinner  min-h-screen min-w-full z-[99] fixed flex items-center justify-center" role="spinner"><div class="animate-pulse mx-auto text-center w-20 h-20 md:w-40 md:h-40 shadow-inner rounded-full border-2 text-gray-100  ring-red-600 p-10 flex items-center justify-center text-sm">Sedang dimuat..</div></div>',
});

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "OURMARRY";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        NProgress.start();
        root.render(<App {...props} />);
        NProgress.done();
    },
    progress: false,
});
