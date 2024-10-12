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
      <div className="ml-64 grid grid-col-1 md:grid-cols-6">
        <div className="md:col-span-2 bg-fuchsia-600">Control Panel</div>
        <div className="md:col-span-3 bg-teal-900">Icon Preview</div>
        <div className="md:col-span-1 bg-orange-700">Ads Banner</div>
      </div>
    </div>
  );
}

export default App;
