-- Complete fix for RLS policy violation
-- Run this entire script in your Supabase SQL Editor

-- First, let's check current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'contact_messages';

-- Drop ALL existing policies on contact_messages to start fresh
DROP POLICY IF EXISTS "Allow public insert on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow anonymous insert on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated insert on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated read on contact_messages" ON contact_messages;

-- Ensure RLS is enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- IMPORTANT: Create a permissive insert policy for anonymous users (anon key)
-- When using NEXT_PUBLIC_SUPABASE_ANON_KEY, users are in the 'anon' role
-- This is the most important one for public contact forms
CREATE POLICY "Allow anonymous insert on contact_messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert
CREATE POLICY "Allow authenticated insert on contact_messages"
  ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to read (for admin dashboard)
CREATE POLICY "Allow authenticated read on contact_messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify policies were created correctly
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies 
WHERE tablename = 'contact_messages'
ORDER BY policyname;

