create table if not exists company_onboarding (
    id uuid primary key default gen_random_uuid(),
    company_id uuid references companies(id) on delete cascade,
    completed boolean default false,
    completed_at timestamptz,
    created_at timestamptz default now()
);
