import { useState } from "react";

export default function TerminalRunner(){

  const [history,setHistory]=useState([
    "Sandbox CodeX Terminal",
    "Type 'help' to see commands.",
  ]);

  const [command,setCommand]=useState("");

  const run=()=>{

    const cmd=command.trim();

    if(!cmd) return;

    let output="";

    switch(cmd){

      case "help":
        output="Commands: help clear ls pwd date version";
        break;

      case "clear":
        setHistory([]);
        setCommand("");
        return;

      case "ls":
        output="index.html  style.css  script.js";
        break;

      case "pwd":
        output="/workspace";
        break;

      case "date":
        output=new Date().toString();
        break;

      case "version":
        output="Sandbox CodeX v1.0.0";
        break;

      default:
        output="Command not found: "+cmd;

    }

    setHistory(v=>[
      ...v,
      "$ "+cmd,
      output,
    ]);

    setCommand("");

  };

  return(

    <div
      style={{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        background:"#111827",
        color:"#fff",
      }}
    >

      <div
        style={{
          flex:1,
          overflowY:"auto",
          padding:10,
          fontFamily:"monospace",
        }}
      >

        {history.map((line,i)=>(
          <div key={i}>{line}</div>
        ))}

      </div>

      <input
        value={command}
        onChange={(e)=>setCommand(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==="Enter"){
            run();
          }
        }}
        placeholder="$"
        style={{
          padding:12,
          border:"none",
          outline:"none",
          background:"#1f2937",
          color:"#fff",
          fontFamily:"monospace",
        }}
      />

    </div>

  );

}
