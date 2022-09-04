import "./tailwind.css";
import SiteProvider from "./context/SiteContext";
import Screen from "./components/Screen";

function App() {
  return (
    <SiteProvider>
      <Screen />
    </SiteProvider>
  );
}

export default App;
