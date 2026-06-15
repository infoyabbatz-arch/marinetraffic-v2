create table if not exists documents (
    id uuid primary key default gen_random_uuid(),
    company_id uuid,
    customer_id uuid,
    document_name text not null,
    category text not null,
    status text default 'active',
    file_url text,
    created_at timestamptz default now()
);
