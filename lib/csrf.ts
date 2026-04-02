import { headers } from "next/headers";

export async function validateCSRF() {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const host = headersList.get("host");

    if (!origin || !host) {
        // For GET requests or same-origin requests without origin header, bypass or handle differently
        // In strict environments, origin is required for state-mutating requests
        return false;
    }

    try {
        const originUrl = new URL(origin);
        // Simple check: host matches origin.host. 
        // This protects against CSRF on state-changing API endpoints called directly from front-end
        if (originUrl.host !== host) {
            return false;
        }
    } catch (error) {
        return false;
    }

    return true;
}
