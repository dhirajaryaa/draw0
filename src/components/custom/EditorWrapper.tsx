"use client";

import dynamic from "next/dynamic";
const ExcalidrawWrapper = dynamic(
  async () => (await import("./Editor")).default,
  {
    ssr: false,
  }
);

function EditorWrapper() {
  return <ExcalidrawWrapper />;
}

export default EditorWrapper;
