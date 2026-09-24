// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Substitua essas duas strings pelas chaves reais que aparecem no painel do seu Supabase
const supabaseUrl = 'https://svrzanzjgbqqxzoeeote.supabase.co';
const supabaseAnonKey = 'sb_publishable_M2gqyowJXDsV6dF3BFTLwg_4VYiSgpN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
