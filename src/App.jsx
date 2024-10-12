import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => console.log(value)} />
      </div>
      <div className="ml-64">Body</div>
    </div>
  );
}

export default App;
