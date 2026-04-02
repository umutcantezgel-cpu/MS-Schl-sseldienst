import { CompanyInfo } from "../types";

export const companyInfo: CompanyInfo = {
  name: "MS Schlüsseldienst Wetzlar",
  legalName: "MS Schlüsseldienst Wetzlar GmbH",
  address: "Wetzlarer Str. 1, 35576 Wetzlar, Deutschland",
  phone: "+49 6441 8056279",
  email: "info@wetzlar-schlüsseldienst.de",
  foundedYear: 2012,
  employeeCount: 8,
  totalProjects: 15400,
  customerSatisfaction: 98,
  certifications: ["IHK-Geprüft", "Handwerkskammer eingetragen", "VdS-Anerkannt"],
  socialMedia: {
    linkedin: "https://linkedin.com/company/ms-schluesseldienst-wetzlar",
    twitter: "https://twitter.com/schluesseldienst_w",
    instagram: "https://instagram.com/ms_schluesseldienst"
  },
  openingHours: {
    "Montag - Sonntag": "00:00-24:00 (24h Notdienst)",
    "Bürozeiten (Mo-Fr)": "08:00-18:00"
  }
};

export function getCompanyInfo(): CompanyInfo {
  return companyInfo;
}
