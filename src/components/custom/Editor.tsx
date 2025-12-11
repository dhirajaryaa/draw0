"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
// custom
import { Menu as CustomMenu } from "@/components/custom/Menu";

function Editor() {
  return (
    <>
      <Excalidraw>
        <CustomMenu />
      </Excalidraw>
    </>
  );
}

export default Editor;
