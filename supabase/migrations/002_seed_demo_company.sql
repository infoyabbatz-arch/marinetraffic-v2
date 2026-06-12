
insert into companies (
  id,
  name,
  country,
  industry
)
values (
  '11111111-1111-1111-1111-111111111111',
  'Bandari Salama Logistics',
  'Tanzania',
  'Logistics & Customs'
);

insert into subscriptions (
  company_id,
  plan,
  status,
  start_date,
  renewal_date
)
values (
  '11111111-1111-1111-1111-111111111111',
  'professional',
  'active',
  current_date,
  current_date + interval '30 days'
);

insert into licenses (
  company_id,
  license_key,
  status,
  max_users
)
values (
  '11111111-1111-1111-1111-111111111111',
  'MTG-PRO-2026-001',
  'active',
  15
);

insert into payments (
  company_id,
  amount,
  currency,
  status
)
values (
  '11111111-1111-1111-1111-111111111111',
  149.00,
  'USD',
  'paid'
);

