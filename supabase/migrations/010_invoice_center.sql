create table if not exists invoices (
    id uuid primary key default gen_random_uuid(),
    company_id uuid,
    customer_id uuid,
    invoice_number text not null,
    amount numeric(18,2) default 0,
    currency text default 'USD',
    status text default 'draft',
    due_date date,
    created_at timestamptz default now()
);
