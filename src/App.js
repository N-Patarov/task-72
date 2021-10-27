import React from 'react';
import Tags from "./Tags";
import "./App.css";

function App() {
  const [tags] = React.useState(["boomdotdev", "task", "tags", "react"])
  return (
    <div className="Main">
      <Tags tags={tags}/>
    </div>
  );
}

export default App;
