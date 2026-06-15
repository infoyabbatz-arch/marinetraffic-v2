alter table payments
add column if not exists payment_method text,
add column if not exists transaction_reference text,
add column if not exists proof_url text,
add column if not exists payer_name text,
add column if not exists payer_phone text,
add column if not exists approved_by text,
add column if not exists approved_at timestamptz,
add column if not exists notes text;

alter table subscriptions
add column if not exists amount numeric(12,2) default 0,
add column if not exists currency text default 'USD';

create index if not exists idx_payments_company
on payments(company_id);

create index if not exists idx_payments_status
on payments(status);
