"use client";

import dynamic from "next/dynamic";

// Import the component dynamically with SSR disabled
const ThreeDViewer = dynamic(() => import("../components/ModelViewer"), { ssr: false });

export default ThreeDViewer;
