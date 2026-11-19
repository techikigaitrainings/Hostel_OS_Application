import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser/client Supabase factory. Uses the anon key + user session.
 * Service-role key must NEVER appear here — it belongs only in edge functions / server env.
 */
export function createSupabaseClient(url: string, anonKey: string): SupabaseClient {
  if (!url || !anonKey) {
    throw new Error("Supabase URL and anon key are required. See .env.example.");
  }
  return createClient(url, anonKey, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
}
