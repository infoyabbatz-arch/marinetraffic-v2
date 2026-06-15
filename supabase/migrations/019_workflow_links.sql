alter table shipments
add column if not exists quote_id uuid;

alter table customs_jobs
add column if not exists shipment_id uuid;

alter table invoices
add column if not exists customs_job_id uuid;

alter table invoices
add column if not exists quote_id uuid;

alter table invoices
add column if not exists paid_amount numeric(18,2) default 0;

alter table invoices
add column if not exists balance numeric(18,2) default 0;
