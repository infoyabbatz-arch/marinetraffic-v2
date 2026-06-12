alter table companies
add column if not exists owner_user_id uuid;

alter table companies
add column if not exists active boolean default true;

alter table companies
add column if not exists company_email text;

alter table companies
add column if not exists company_phone text;

alter table companies
add column if not exists max_users integer default 2;

alter table organization_users
add column if not exists full_name text;

alter table organization_users
add column if not exists status text default 'active';

alter table organization_users
add column if not exists last_login timestamptz;

create table if not exists staff_invitations (
    id uuid primary key default gen_random_uuid(),
    company_id uuid references companies(id) on delete cascade,
    email text not null,
    role text not null default 'viewer',
    invited_by uuid,
    status text default 'pending',
    created_at timestamptz default now()
);

create table if not exists subscription_plans (
    id uuid primary key default gen_random_uuid(),
    code text unique,
    name text not null,
    monthly_price numeric(12,2) default 0,
    max_users integer default 2,
    created_at timestamptz default now()
);

insert into subscription_plans
(code,name,monthly_price,max_users)
values
('starter','Starter',0,2),
('professional','Professional',49,2),
('enterprise','Enterprise',149,2)
on conflict (code) do nothing;
