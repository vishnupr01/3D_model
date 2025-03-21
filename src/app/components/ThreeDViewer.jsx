"use client";

import dynamic from "next/dynamic";


const ThreeDViewer = dynamic(() => import("../components/ModelViewer"), { ssr: false });

export default ThreeDViewer;
