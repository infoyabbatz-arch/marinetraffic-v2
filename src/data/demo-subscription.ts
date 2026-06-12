import {
  Company,
  Subscription,
  License,
  Payment,
  OrganizationUser,
} from "@/types/saas";

export const demoCompany: Company = {
  id: "company_001",
  name: "Bandari Salama Logistics",
  country: "Tanzania",
  industry: "Logistics & Customs",
  createdAt: "2026-01-01",
};

export const demoSubscription: Subscription = {
  id: "sub_001",
  companyId: demoCompany.id,
  plan: "professional",
  status: "active",
  startDate: "2026-01-01",
  renewalDate: "2026-07-15",
};

export const demoLicense: License = {
  id: "lic_001",
  companyId: demoCompany.id,
  key: "MTG-PRO-2026-001",
  status: "active",
  maxUsers: 15,
};

export const demoPayments: Payment[] = [
  {
    id: "pay_001",
    companyId: demoCompany.id,
    amount: 149,
    currency: "USD",
    status: "paid",
    createdAt: "2026-06-01",
  },
];

export const demoUsers: OrganizationUser[] = [
  {
    id: "usr_001",
    companyId: demoCompany.id,
    email: "admin@bandarisalama.com",
    role: "owner",
  },
  {
    id: "usr_002",
    companyId: demoCompany.id,
    email: "operations@bandarisalama.com",
    role: "manager",
  },
];
