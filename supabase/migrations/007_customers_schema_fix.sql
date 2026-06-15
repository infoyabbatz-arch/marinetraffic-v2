alter table customers
add column if not exists company_id uuid;

alter table customers
add column if not exists contact_person text;

alter table customers
add column if not exists email text;

alter table customers
add column if not exists phone text;

alter table customers
add column if not exists country text;

alter table customers
add column if not exists status text default 'active';

alter table customers
add column if not exists created_at timestamptz default now();
