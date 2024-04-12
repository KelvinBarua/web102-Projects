import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const supabaseURL = "https://poslhgstyxjspnmuckqr.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_KEY;


export const supabase = createClient(supabaseURL, supabaseAnonKey);