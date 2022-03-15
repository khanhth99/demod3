// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import ForceGraph from "./forceGraph";
import miserables from './miserables.json';



function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState();
  // const svgRef = useRef('svg');
  return (
    <div className="App">
      <h1>Demo d3 js</h1>
      <section className="Main">
        <ForceGraph
          nodes={miserables.nodes}
          links={miserables.links}
          nodeId={d => d.id}
          nodeGroup={d => d.group}
          nodeTitle={d => `${d.id}\n${d.group}`}
          linkStrokeWidth={l => Math.sqrt(l.value)}
          width={800}
          height={600}
        />
      </section>
    </div>
  );
}

export default App;
