import { GridLayout } from "./components/layout/GridLayout";
import { Home } from "./components/Home";
import { Presentation } from "./components/Presentation";
import { SideBar } from "./components/layout/SideBar";
import { Legal } from "./components/Legal";
import { Finder } from "./components/Finder";

function App() {
  return (
    <>
      <GridLayout template="auto">
        <Presentation />
      </GridLayout>

      <GridLayout template="15% 85%">

          <SideBar bgColor="#303030">
            <Finder />
            <Legal />
          </SideBar>

          <Home />

      </GridLayout>
    </>
  );
}

export default App;
