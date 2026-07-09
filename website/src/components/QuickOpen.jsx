import { useState } from "react";

export default function QuickOpen({
  visible,
  files,
  openFile,
  close,
}){

  const [search,setSearch]=useState("");

  if(!visible) return null;

  const list=Object.keys(files).filter(name=>
    name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return(
    <div
      onClick={close}
      style={{
        position:"fixed",
        inset:0,
        background:"rgba(0,0,0,.45)",
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start",
        paddingTop:70,
        zIndex:9999,
      }}
    >

      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          width:"92%",
          maxWidth:600,
          background:"#1f2937",
          borderRadius:10,
          overflow:"hidden",
        }}
      >

        <input
          autoFocus
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Go to file..."
          style={{
            width:"100%",
            padding:14,
            border:"none",
            outline:"none",
            background:"#111827",
            color:"#fff",
            fontSize:16,
          }}
        />

        <div
          style={{
            maxHeight:350,
            overflowY:"auto",
          }}
        >

          {list.map(name=>(
            <div
              key={name}
              onClick={()=>{
                openFile(name);
                close();
              }}
              style={{
                padding:"12px 14px",
                color:"#fff",
                cursor:"pointer",
                borderTop:"1px solid #374151",
              }}
            >
              📄 {name}
            </div>
          ))}

        </div>

      </div>

    </div>
  );

}
