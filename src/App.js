import { init } from "./utils/layer";
import React, { useEffect, useRef } from "react";

function App() {
  const log = useRef(true);
  useEffect(() => {
    if (log.current) {
      log.current = false;
    }
    return () => {
      init();
    };
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
