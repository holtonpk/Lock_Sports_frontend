import logo from "./assets/logo.png";
import PoolPage from "./pages/PoolPage";
function App() {
  return (
    <div className="bg-[#151515] w-screen py-4">
      <img src={logo} className="w-[50%] mx-auto " />
      <PoolPage />
    </div>
  );
}

export default App;
