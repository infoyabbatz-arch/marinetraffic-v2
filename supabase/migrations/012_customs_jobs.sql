create table if not exists customs_jobs (
    id uuid primary key default gen_random_uuid(),
    company_id uuid,
    customer_id uuid,
    job_number text not null,
    cargo_type text,
    vessel_name text,
    bl_number text,
    assigned_officer text,
    status text default 'created',
    created_at timestamptz default now()
);
