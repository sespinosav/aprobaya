export { modelosPreciosEc2 } from "./modelos-precios-ec2";
export { awsBudgets } from "./aws-budgets";
export { awsCostExplorer } from "./aws-cost-explorer";
export { planesSoporteAws } from "./planes-soporte-aws";
export { awsTrustedAdvisor } from "./aws-trusted-advisor";
export { awsOrganizations } from "./aws-organizations";
export { awsFreeTier } from "./aws-free-tier";
export { preciosS3 } from "./precios-s3";
export { dedicatedHosts } from "./dedicated-hosts";
export { personalHealthDashboard } from "./personal-health-dashboard";
export { savingsPlans } from "./savings-plans";
export { pricingCalculator } from "./pricing-calculator";

import { Article } from "@/types";
import { modelosPreciosEc2 } from "./modelos-precios-ec2";
import { awsBudgets } from "./aws-budgets";
import { awsCostExplorer } from "./aws-cost-explorer";
import { planesSoporteAws } from "./planes-soporte-aws";
import { awsTrustedAdvisor } from "./aws-trusted-advisor";
import { awsOrganizations } from "./aws-organizations";
import { awsFreeTier } from "./aws-free-tier";
import { preciosS3 } from "./precios-s3";
import { dedicatedHosts } from "./dedicated-hosts";
import { personalHealthDashboard } from "./personal-health-dashboard";
import { savingsPlans } from "./savings-plans";
import { pricingCalculator } from "./pricing-calculator";

export const domain4Articles: Article[] = [
  modelosPreciosEc2,
  awsBudgets,
  awsCostExplorer,
  planesSoporteAws,
  awsTrustedAdvisor,
  awsOrganizations,
  awsFreeTier,
  preciosS3,
  dedicatedHosts,
  personalHealthDashboard,
  savingsPlans,
  pricingCalculator,
];
