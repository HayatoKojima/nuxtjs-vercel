export default {
    nitro: {
        preset: 'vercel-edge',
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        // Keys within public, will be also exposed to the client-side
        /* public: {
            apiBase: '/api',
        }, */
    },
}
