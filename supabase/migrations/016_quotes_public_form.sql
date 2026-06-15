alter table quotes
add column if not exists company_name text;

alter table quotes
add column if not exists contact_person text;

alter table quotes
add column if not exists email text;

alter table quotes
add column if not exists phone text;

alter table quotes
add column if not exists weight text;

alter table quotes
add column if not exists description text;
