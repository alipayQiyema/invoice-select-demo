import React from "react";
import "./App.css";

function App() {
  // 可以通过 ref 获取 DOM 节点
  const selectorRef = React.useRef();

  React.useEffect(() => {
    const selector = selectorRef.current;
    const handleConfirm = (e) => {
      console.log("选中的发票:", e.detail);
    };
    selector.addEventListener("onConfirm", handleConfirm);

    return () => {
      selector.removeEventListener("onConfirm", handleConfirm);
    };
  }, []);

  // 点击事件，调用 open 方法
  const handleClick = () => {
    console.log("selectorRef", selectorRef.current);
    selectorRef.current.open();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>打开发票选择器</button>

      <invoice-selector ref={selectorRef} enterpriseid="" token=""></invoice-selector>
    </div>
  );
}

export default App;
