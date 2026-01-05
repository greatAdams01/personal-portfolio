# Supabase Setup for Newsletter Subscriptions

## Step 1: Create Supabase Project

1. Go to https://supabase.com and sign up/login
2. Create a new project
3. Note your project URL and anon key from Settings → API

## Step 2: Create Subscribers Table

In Supabase Dashboard → Table Editor → New Table:

**Table Name:** `subscribers`

**Columns:**
- `id` - UUID, Primary Key, Default: `gen_random_uuid()`
- `email` - Text, Unique, Not Null
- `created_at` - Timestamp, Default: `now()`
- `subscribed` - Boolean, Default: `true` (optional)

## Step 3: Set Up Row Level Security (RLS)

1. Go to Authentication → Policies
2. Click "Enable RLS" on the `subscribers` table
3. Create a new policy:
   - **Policy Name:** "Allow public inserts"
   - **Allowed Operation:** INSERT
   - **Target Roles:** `anon`, `authenticated`
   - **USING Expression:** `true`
   - **WITH CHECK Expression:** `true`

This allows anyone to insert emails but keeps other operations secure.

## Step 4: Add Environment Variables

Add to your `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Optional - Sync to Brevo

You can set up a Supabase Edge Function or Database Webhook to automatically sync new subscribers to Brevo:

1. Create a Supabase Edge Function
2. Use Brevo API to add contacts
3. Trigger on new row insert in `subscribers` table

Or use a service like Zapier/Make to sync Supabase → Brevo.

## Testing

1. Fill out the form on your site
2. Check Supabase Dashboard → Table Editor → `subscribers` table
3. You should see the new email entry

