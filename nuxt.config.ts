// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/content",
        "nuxt-quasar-ui"
    ],

    css: ["~/assets/global.scss"],
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in"
        },
        head: {
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" }
            ]
        }
    },

    quasar: {
        config: {
            brand: {
                primary: '#bf0ac2',
                secondary: '#cf17bc',
                accent: '#9C27B0',

                dark: '#1d1d1d',
                'dark-page': '#121212',

                positive: '#1a9637',
                negative: '#96212f',
                info: '#085b70',
                warning: '#a66317',
            },
            dark: true,
        }
    },

    content: {
        highlight: {
            theme: "github-dark",
            preload: ["python", "rust"],
        }
    },

    // nitro: {
    //     prerender: {
    //         crawlLinks: true,
    //         routes: ["/"],
    //     }
    // }
})
