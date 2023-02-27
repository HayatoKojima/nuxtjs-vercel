import { createClient } from '@supabase/supabase-js'
const runtimeConfig = useRuntimeConfig()

export default createClient(runtimeConfig.SUPABASE_URL!, runtimeConfig.SUPABASE_ANON_KEY!)
