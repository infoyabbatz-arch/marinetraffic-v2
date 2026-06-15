alter table quotes
add column if not exists company_id uuid;

alter table invoices
add column if not exists company_id uuid;
