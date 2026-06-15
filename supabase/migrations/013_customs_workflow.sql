alter table customs_jobs
add column if not exists documents_received_at timestamptz;

alter table customs_jobs
add column if not exists customs_entry_at timestamptz;

alter table customs_jobs
add column if not exists assessment_at timestamptz;

alter table customs_jobs
add column if not exists payment_at timestamptz;

alter table customs_jobs
add column if not exists released_at timestamptz;

alter table customs_jobs
add column if not exists completed_at timestamptz;
