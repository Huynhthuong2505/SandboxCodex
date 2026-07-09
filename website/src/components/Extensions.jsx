import { useState } from "react";

const DEFAULT_EXTENSIONS = [
  {
    id:"prettier",
    name:"Prettier",
    desc:"Code Formatter",
    version:"1.0.0",
  },
  {
    id:"eslint",
    name:"ESLint",
    desc:"JavaScript Linter",
    version:"9.0.0",
  },
  {
    id:"live-server",
    name:"Live Server",
    desc:"Live Preview Server",
    version:"5.7.0",
  },
  {
    id:"copilot",
    name:"GitHub Copilot",
    desc:"AI Coding Assistant",
    version:"1.0.0",
  },
];

export default function Extensions(){

  const [search,setSearch]=useState("");

  const [installed,setInstalled]=useState(
    JSON.parse(
      localStorage.getItem("extensions")||"[]"
    )
  );

  const toggle=(id)=>{

    let next;

    if(installed.includes(id)){
      next=installed.filter(v=>v!==id);
    }else{
      next=[...installed,id];
    }

    setInstalled(next);

    localStorage.setItem(
      "extensions",
      JSON.stringify(next)
    );

  };

  const list=DEFAULT_EXTENSIONS.filter(item=>
    item.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return(

    <div
      style={{
        height:"100%",
        background:"#111827",
        color:"#fff",
        display:"flex",
        flexDirection:"column",
      }}
    >

      <input
        placeholder="Search Extensions..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          margin:10,
          padding:10,
          background:"#1f2937",
          border:"1px solid #374151",
          color:"#fff",
        }}
      />

      <div
        style={{
          flex:1,
          overflowY:"auto",
        }}
      >

        {list.map(item=>(

          <div
            key={item.id}
            style={{
              padding:12,
              borderBottom:"1px solid #374151",
            }}
          >

            <b>{item.name}</b>

            <div
              style={{
                fontSize:13,
                color:"#9ca3af",
              }}
            >
              {item.desc}
            </div>

            <div
              style={{
                fontSize:12,
              }}
            >
              v{item.version}
            </div>

            <button
              onClick={()=>toggle(item.id)}
              style={{
                marginTop:8,
              }}
            >
              {installed.includes(item.id)
                ? "Uninstall"
                : "Install"}
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}
