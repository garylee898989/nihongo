-- Enable Realtime for all tables
begin;
  -- Remove existing publication if exists to avoid errors on re-run
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for all tables;
commit;

-- Create tables
create table if not exists public.words (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null default auth.uid(),
  japanese text not null,
  kana text not null,
  chinese text not null,
  created_at timestamptz default now()
);

create table if not exists public.grammar (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null default auth.uid(),
  grammar text not null,
  meaning text not null,
  context text,
  example text,
  created_at timestamptz default now()
);

create table if not exists public.sentences (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null default auth.uid(),
  chinese_context text not null,
  japanese_sentence text not null,
  note text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.words enable row level security;
alter table public.grammar enable row level security;
alter table public.sentences enable row level security;

-- Create policies for Words
create policy "Users can view their own words" on public.words for select using (auth.uid() = user_id);
create policy "Users can insert their own words" on public.words for insert with check (auth.uid() = user_id);
create policy "Users can update their own words" on public.words for update using (auth.uid() = user_id);
create policy "Users can delete their own words" on public.words for delete using (auth.uid() = user_id);

-- Create policies for Grammar
create policy "Users can view their own grammar" on public.grammar for select using (auth.uid() = user_id);
create policy "Users can insert their own grammar" on public.grammar for insert with check (auth.uid() = user_id);
create policy "Users can update their own grammar" on public.grammar for update using (auth.uid() = user_id);
create policy "Users can delete their own grammar" on public.grammar for delete using (auth.uid() = user_id);

-- Create policies for Sentences
create policy "Users can view their own sentences" on public.sentences for select using (auth.uid() = user_id);
create policy "Users can insert their own sentences" on public.sentences for insert with check (auth.uid() = user_id);
create policy "Users can update their own sentences" on public.sentences for update using (auth.uid() = user_id);
create policy "Users can delete their own sentences" on public.sentences for delete using (auth.uid() = user_id);
