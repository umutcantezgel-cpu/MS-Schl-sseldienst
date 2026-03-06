"use client";

import dynamic from "next/dynamic";

const InteractiveServiceMap = dynamic(
    () => import("@/components/maps/InteractiveServiceMap"),
    { ssr: false }
);

export default function ServiceMapWrapper() {
    return <InteractiveServiceMap />;
}
