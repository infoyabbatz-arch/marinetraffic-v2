alter table organization_users
add column if not exists role text default 'viewer';
