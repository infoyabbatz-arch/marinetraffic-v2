alter table quotes
add column if not exists amount numeric(18,2) default 0;

alter table quotes
add column if not exists currency text default 'USD';

alter table quotes
add column if not exists valid_until date;

alter table quotes
add column if not exists converted_to_invoice boolean default false;
