import { useState } from "react";

export default function ReplacePanel({
  files,
  setFiles,
}) {

  const [search,setSearch]=useState("");
  const [replace,setReplace]=useState("");

  const replaceAll=()=>{

    if(!search) return;

    const next={};

    Object.keys(files).forEach((name)=>{

      next[name]=String(files[name]).split(search).join(replace);

    });

    setFiles(next);

    alert("Replace hoàn tất");

  };

  return(

    <div
      style={{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        background:"#111827",
        color:"#fff",
        padding:12,
        gap:10,
      }}
    >

      <input
        placeholder="Search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:10,
          background:"#1f2937",
          color:"#fff",
          border:"1px solid #374151",
        }}
      />

      <input
        placeholder="Replace..."
        value={replace}
        onChange={(e)=>setReplace(e.target.value)}
        style={{
          padding:10,
          background:"#1f2937",
          color:"#fff",
          border:"1px solid #374151",
        }}
      />

      <button
        onClick={replaceAll}
        style={{
          padding:12,
          border:"none",
          background:"#2563eb",
          color:"#fff",
          cursor:"pointer",
        }}
      >
        Replace All
      </button>

    </div>

  );

}
