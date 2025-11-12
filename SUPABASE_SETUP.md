# Supabase Contact Form Setup Guide

This guide will help you set up the Supabase integration for the contact form.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A Supabase project created

## Step 1: Create the Database Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `supabase-schema.sql` into the editor
5. Click **Run** to execute the SQL

This will create:
- `contact_messages` table with all necessary fields
- Indexes for better query performance
- Row Level Security (RLS) policies
- A function to count unread messages

## Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_project_url` and `your_supabase_anon_key` with the values you copied in Step 2.

**Important:** 
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The `NEXT_PUBLIC_` prefix is required for Next.js to expose these variables to the browser

## Step 4: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page
3. Fill out and submit the contact form
4. Check your Supabase dashboard:
   - Go to **Table Editor** → `contact_messages`
   - You should see your submitted message

## Database Schema

The `contact_messages` table has the following structure:

- `id` (UUID) - Primary key, auto-generated
- `name` (VARCHAR) - Contact's name
- `email` (VARCHAR) - Contact's email
- `subject` (VARCHAR) - Message subject
- `message` (TEXT) - Message content
- `created_at` (TIMESTAMP) - Submission timestamp
- `read` (BOOLEAN) - Whether the message has been read (default: false)
- `responded` (BOOLEAN) - Whether you've responded (default: false)

## Security

The table uses Row Level Security (RLS):
- **Anyone** can insert (submit contact forms)
- **Only authenticated users** can read (for admin dashboard)

You can modify the RLS policies in the Supabase dashboard under **Authentication** → **Policies** if needed.

## Troubleshooting

### Error: "relation 'contact_messages' does not exist"
- Make sure you've run the SQL schema in Step 1

### Error: "Invalid API key"
- Verify your environment variables are set correctly
- Make sure you're using the `anon` key, not the `service_role` key
- Restart your development server after adding environment variables

### Form submits but no data appears
- Check the browser console for errors
- Verify RLS policies allow inserts
- Check the Supabase logs in your project dashboard

## Next Steps

Consider adding:
- Email notifications when a new message is received
- An admin dashboard to view and manage messages
- Mark messages as read/responded functionality

