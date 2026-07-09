import { useState } from "react";

const TEMPLATES = {

  HTML:{
    "index.html":"<h1>Hello Sandbox CodeX</h1>",
    "style.css":"body{font-family:sans-serif;margin:0;padding:20px;}",
    "script.js":"console.log('Hello');",
  },

  React:{
    "package.json":`{
  "name":"sandbox-app",
  "private":true
}`,
    "src/App.jsx":"export default function App(){return <h1>Hello React</h1>}",
    "src/main.jsx":"import React from 'react';",
    "index.html":"<div id='root'></div>",
  },

  Node:{
    "package.json":`{
  "name":"node-app"
}`,
    "index.js":"console.log('Node.js');",
    ".gitignore":"node_modules",
  },

};

export default function ProjectGenerator({
  setFiles,
  setCurrent,
}){

  const [type,setType]=useState("HTML");

  const create=()=>{

    const data=TEMPLATES[type];

    setFiles(data);

    setCurrent(
      Object.keys(data)[0]
    );

  };

  return(

    <div
      style={{
        padding:16,
        color:"#fff",
        background:"#111827",
        height:"100%",
      }}
    >

      <h3>🚀 Project Generator</h3>

      <select
        value={type}
        onChange={(e)=>setType(e.target.value)}
      >

        <option>HTML</option>
        <option>React</option>
        <option>Node</option>

      </select>

      <br/><br/>

      <button
        onClick={create}
      >
        Create Project
      </button>

    </div>

  );

}
