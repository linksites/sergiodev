import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Null quando as variáveis não estão presentes (ex.: build sem secrets),
// evitando que o prerender quebre. O formulário trata o caso null.
export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key) : null;
