create table if not exists customers (
    id uuid primary key default gen_random_uuid(),
    company_id uuid not null,
    company_name text not null,
    contact_person text,
    email text,
    phone text,
    country text,
    status text default 'active',
    created_at timestamptz default now()
);
