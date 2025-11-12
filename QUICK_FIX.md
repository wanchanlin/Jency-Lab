# Quick Fix for RLS Policy Violation

## Step 1: Run Diagnostic (Optional but Recommended)

Run `diagnose-rls.sql` in your Supabase SQL Editor to see current policies.

## Step 2: Apply the Fix

Run `fix-rls-final.sql` in your Supabase SQL Editor. This will:
1. Drop ALL existing policies
2. Create a new permissive policy using `TO public` which includes all roles
3. Verify the policy was created

## Step 3: Alternative - Temporarily Disable RLS (For Testing Only)

If the above doesn't work, you can temporarily disable RLS to test:

```sql
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
```

**⚠️ WARNING:** Only use this for testing! Re-enable RLS after confirming the form works, then create proper policies.

## Step 4: Verify Your Environment Variables

Make sure your `.env.local` file has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Restart your dev server after adding/changing environment variables.

## Step 5: Check Browser Console

Open browser DevTools → Console and check for any errors when submitting the form.

## Common Issues:

1. **Environment variables not loaded**: Restart dev server
2. **Wrong Supabase key**: Make sure you're using the `anon` key, not `service_role`
3. **Policies not applied**: Run the fix SQL again
4. **RLS still blocking**: Try the temporary disable method above to isolate the issue

