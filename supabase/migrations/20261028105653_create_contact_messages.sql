/*
# Create contact_messages table (public contact form, insert-only)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, max 100 characters)
  - `email` (text, required, max 255 characters)
  - `subject` (text, required, max 150 characters)
  - `message` (text, required, max 2000 characters)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `contact_messages`.
- Anonymous and signed-in visitors may only INSERT new rows, and only when every field passes the length checks.
- No SELECT, UPDATE, or DELETE access is granted, so visitors cannot read or change submitted messages.
- The site owner can review messages in the Supabase dashboard.

3. Notes
- Statements are idempotent so the migration can be safely re-run.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  subject text NOT NULL CHECK (char_length(trim(subject)) BETWEEN 1 AND 150),
  message text NOT NULL CHECK (char_length(trim(message)) BETWEEN 10 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
