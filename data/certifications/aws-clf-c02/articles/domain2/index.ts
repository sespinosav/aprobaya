// Domain 2: Security and Compliance Articles
export { iamFundamentos } from "./iam-fundamentos";
export { seguridadCuentaRoot } from "./seguridad-cuenta-root";
export { securityGroupsNacls } from "./security-groups-nacls";
export { awsWafShield } from "./aws-waf-shield";
export { awsArtifactCumplimiento } from "./aws-artifact-cumplimiento";
export { amazonGuardduty } from "./amazon-guardduty";
export { principioPrivilegioMinimo } from "./principio-privilegio-minimo";
export { awsCertificateManager } from "./aws-certificate-manager";
export { awsConfig } from "./aws-config";
export { amazonInspector } from "./amazon-inspector";
export { awsSecretsManager } from "./aws-secrets-manager";
export { accessKeysCredenciales } from "./access-keys-credenciales";
export { awsControlTower } from "./aws-control-tower";
export { amazonMacie } from "./amazon-macie";
export { kmsCifrado } from "./kms-cifrado";

import { Article } from "@/types";
import { iamFundamentos } from "./iam-fundamentos";
import { seguridadCuentaRoot } from "./seguridad-cuenta-root";
import { securityGroupsNacls } from "./security-groups-nacls";
import { awsWafShield } from "./aws-waf-shield";
import { awsArtifactCumplimiento } from "./aws-artifact-cumplimiento";
import { amazonGuardduty } from "./amazon-guardduty";
import { principioPrivilegioMinimo } from "./principio-privilegio-minimo";
import { awsCertificateManager } from "./aws-certificate-manager";
import { awsConfig } from "./aws-config";
import { amazonInspector } from "./amazon-inspector";
import { awsSecretsManager } from "./aws-secrets-manager";
import { accessKeysCredenciales } from "./access-keys-credenciales";
import { awsControlTower } from "./aws-control-tower";
import { amazonMacie } from "./amazon-macie";
import { kmsCifrado } from "./kms-cifrado";

export const domain2Articles: Article[] = [
  iamFundamentos,
  seguridadCuentaRoot,
  securityGroupsNacls,
  awsWafShield,
  awsArtifactCumplimiento,
  amazonGuardduty,
  principioPrivilegioMinimo,
  awsCertificateManager,
  awsConfig,
  amazonInspector,
  awsSecretsManager,
  accessKeysCredenciales,
  awsControlTower,
  amazonMacie,
  kmsCifrado,
];
