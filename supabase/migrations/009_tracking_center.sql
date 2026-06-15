create table if not exists shipments (
    id uuid primary key default gen_random_uuid(),
    company_id uuid,
    customer_id uuid,
    tracking_number text not null,
    origin text,
    destination text,
    status text default 'pending',
    created_at timestamptz default now()
);
