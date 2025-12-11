import { MainMenu } from "@excalidraw/excalidraw";
import { Github, Twitter, Youtube } from "lucide-react";

function SocialMenu() {
  return (
    <>
      <MainMenu.Group title="social links">
        <MainMenu.ItemLink
          icon={<Github />}
          href="https://github.com/dhirajaryaa/draw0"
        >
          Github
        </MainMenu.ItemLink>
        <MainMenu.ItemLink icon={<Twitter />} href="https://x.com/dhirajarya01">
          Twitter
        </MainMenu.ItemLink>
        <MainMenu.ItemLink
          icon={<Youtube />}
          href="https://youtube.com/@dhirajaryaa"
        >
          Youtube
        </MainMenu.ItemLink>
      </MainMenu.Group>
    </>
  );
}

export default SocialMenu;
