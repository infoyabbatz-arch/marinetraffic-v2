create table if not exists user_profiles (
  id uuid primary key,
  email text not null,
  full_name text,
  created_at timestamptz default now()
);

alter table organization_users
add column if not exists invited_by uuid;

alter table organization_users
add column if not exists active boolean default true;

alter table organization_users
add column if not exists email text;

alter table organization_users
add column if not exists permission_scope text default 'standard';

alter table licenses
alter column max_users set default 2;
