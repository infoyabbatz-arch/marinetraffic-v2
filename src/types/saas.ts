export type UserRole =
  | "owner"
  | "admin"
  | "manager"
  | "operator"
  | "viewer";

export type PlanType =
  | "starter"
  | "professional"
  | "enterprise";

export type LicenseStatus =
  | "trial"
  | "active"
  | "expired"
  | "suspended";

export interface Company {
  id: string;
  name: string;
  country: string;
  industry: string;
  createdAt: string;
}

export interface Subscription {
  id: string;
  companyId: string;
  plan: PlanType;
  status: LicenseStatus;
  startDate: string;
  renewalDate: string;
}

export interface License {
  id: string;
  companyId: string;
  key: string;
  status: LicenseStatus;
  maxUsers: number;
}

export interface Payment {
  id: string;
  companyId: string;
  amount: number;
  currency: string;
  status: "pending" | "paid" | "failed";
  createdAt: string;
}

export interface OrganizationUser {
  id: string;
  companyId: string;
  email: string;
  role: UserRole;
}
