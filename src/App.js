import "./App.css";
import TopBar from "./components/topbar";
import Background from "./components/background";
import StoreListings from "./components/storelistings";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
