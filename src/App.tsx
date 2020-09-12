import React from "react";
import "./App.css";

const App: React.SFC<{}> = (props: any) => {
  const { children } = props;
  return <div style={{ marginTop: "50px" }}>{children}</div>;
};

export default App;
