
create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  industry text,
  created_at timestamptz default now()
);

create table if not exists organization_users (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  user_id uuid,
  role text not null default 'viewer',
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  plan text not null default 'starter',
  status text not null default 'trial',
  start_date date,
  renewal_date date,
  created_at timestamptz default now()
);

create table if not exists licenses (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  license_key text unique,
  status text not null default 'active',
  max_users integer default 1,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  amount numeric(12,2) not null default 0,
  currency text default 'USD',
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  action text not null,
  performed_by text,
  created_at timestamptz default now()
);

