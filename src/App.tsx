import { AppRoot, Panel, PanelHeader, View } from "@vkontakte/vkui";
import { LeftColumn } from "./components/LeftColumn/LeftColumn";
import { RightColumn } from "./components/RightColumn/RightColumn";

function App() {
  return (
    <AppRoot mode="partial">
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader delimiter="separator">VKUI</PanelHeader>
          <div className="app">
            <LeftColumn />
            <RightColumn />
          </div>
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App
