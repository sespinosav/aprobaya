// Barrel file para AWS CLF-C02
export { default as info, awsCloudPractitionerInfo } from "./info";
export { default as domains, allDomains, domain1, domain2, domain3, domain4 } from "./domains";
export { default as services, servicesByCategory, getServiceById } from "./services";
export {
  default as questions,
  allQuestions,
  getQuestionsByDomain,
  getQuestionById,
  getQuestionsByDifficulty,
  getRandomQuestions,
  getQuestionStats,
  domain1Questions,
  domain2Questions,
  domain3Questions,
  domain4Questions,
} from "./questions";
