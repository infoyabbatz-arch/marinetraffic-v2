alter table invoices
add column if not exists paid_at timestamptz;

alter table invoices
add column if not exists sent_at timestamptz;

alter table invoices
add column if not exists notes text;
