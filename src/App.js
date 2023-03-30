import { useState } from "react";
import { GridLayout } from "./components/layout/GridLayout";
import { Home } from "./components/Home";
import { Presentation } from "./components/Presentation";
import { SideBar } from "./components/layout/SideBar";
import { Legal } from "./components/Legal";
import { Finder } from "./components/Finder";
import { Results } from "./components/Results";

function App() {

  const [submited, setSubmited] = useState(null);

  return (
    <>
      <GridLayout template="auto" width="100vw" height="100vh">
        <Presentation />
      </GridLayout>

      <GridLayout className="finder-grid" template="15% 85%" width="100vw" height="100vh">

          <SideBar bgColor="#303030">
            <Finder setSubmited={setSubmited}/>
            <Legal />
          </SideBar>

          {submited ? <Results submitedQuery={submited} />
                    : <Home />}

      </GridLayout>
    </>
  );
}

export default App;
