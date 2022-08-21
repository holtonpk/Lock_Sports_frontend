import logo from "./assets/logo.png";
import PoolPage from "./pages/PoolPage";
import Lottie from "react-lottie-player";
import lock3 from "./assets/lottie/lock3.json";
import { useState } from "react";
function App() {
  const [lockAnimation, showLockAnimation] = useState(false);
  return (
    <div className="bg-[#151515] w-screen py-4">
      <div
        id="lockAnimation"
        className="fixed w-full h-full  bg-back60 z-[80] top-0 hidden"
      >
        {(() => {
          if (lockAnimation) {
            return (
              <div className="w-[250px] h-[250px] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <Lottie
                  loop
                  animationData={lock3}
                  play
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            );
          }
        })()}
      </div>
      <img src={logo} className="w-[50%] mx-auto " />

      <PoolPage showLockAnimation={showLockAnimation} />
    </div>
  );
}

export default App;
