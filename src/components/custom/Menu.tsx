import { MainMenu } from "@excalidraw/excalidraw";
import SocialMenu from "@/components/custom/SocialMenu";

export function Menu() {
  return (
    <MainMenu>
      <MainMenu.Group>
        <MainMenu.DefaultItems.LoadScene />
        <MainMenu.DefaultItems.Export />
        <MainMenu.DefaultItems.SaveToActiveFile />
        <MainMenu.DefaultItems.SaveAsImage />
        <MainMenu.DefaultItems.ClearCanvas />
      </MainMenu.Group>
      <hr />
      <SocialMenu />
      <hr />
      <MainMenu.Group>
        <MainMenu.DefaultItems.Help />
        <MainMenu.DefaultItems.ToggleTheme />
      </MainMenu.Group>
      <MainMenu.DefaultItems.ChangeCanvasBackground />
    </MainMenu>
  );
}
