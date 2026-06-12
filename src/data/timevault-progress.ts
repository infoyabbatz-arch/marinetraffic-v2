export interface LearningProgress {
  id: string;
  title: string;
  progress: number;
  href: string;
}

export const learningProgress: LearningProgress[] = [
  {
    id: "port-operations",
    title: "Port Operations",
    progress: 65,
    href: "/timevault/port-operations",
  },
  {
    id: "customs-academy",
    title: "Customs Academy",
    progress: 30,
    href: "/timevault/customs-academy",
  },
  {
    id: "tax-academy",
    title: "Tax Academy",
    progress: 20,
    href: "/timevault/tax-academy",
  },
  {
    id: "logistics",
    title: "Logistics & Shipping",
    progress: 45,
    href: "/timevault/logistics",
  },
  {
    id: "investment",
    title: "Investment Hub",
    progress: 10,
    href: "/timevault/investment",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Hub",
    progress: 5,
    href: "/timevault/entrepreneurship",
  },
];
