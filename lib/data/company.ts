import { CompanyInfo } from "../types";

export const companyInfo: CompanyInfo = {
  name: "Schlüssel Schmiede Wetzlar",
  legalName: "Schlüssel Schmiede Wetzlar — ein Service der MS Schlüsseldienst GmbH",
  address: "Langgasse 70, 35578 Wetzlar, Deutschland",
  phone: "+49 6441 8056279",
  email: "info@wetzlar-schlüsseldienst.de",
  foundedYear: 2012,
  employeeCount: 8,
  totalProjects: 15400,
  customerSatisfaction: 99,
  certifications: ["IHK-Geprüft", "Handwerkskammer eingetragen", "VdS-Anerkannt", "ADAC Partner"],
  socialMedia: {
    linkedin: "https://linkedin.com/company/schluessel-schmiede-wetzlar",
    twitter: "https://twitter.com/schluessel_schmiede",
    instagram: "https://instagram.com/schluessel_schmiede_wetzlar"
  },
  openingHours: {
    "Montag - Sonntag": "00:00-24:00 (24h Notdienst)",
    "Ladengeschäft (Mo-Sa)": "10:00-18:00"
  }
};

export function getCompanyInfo(): CompanyInfo {
  return companyInfo;
}
