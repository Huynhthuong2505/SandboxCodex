import { useMemo, useState } from "react";

export default function CommandPalette({
  visible,
  onClose,
  commands,
}) {

  const [keyword,setKeyword]=useState("");

  const list=useMemo(()=>{

    return commands.filter((cmd)=>
      cmd.title
        .toLowerCase()
        .includes(
          keyword.toLowerCase()
        )
    );

  },[keyword,commands]);

  if(!visible) return null;

  return(
    <div
      onClick={onClose}
      style={{
        position:"fixed",
        inset:0,
        background:"rgba(0,0,0,.45)",
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start",
        paddingTop:60,
        zIndex:9999,
      }}
    >

      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          width:"92%",
          maxWidth:650,
          background:"#1f2937",
          borderRadius:10,
          overflow:"hidden",
          border:"1px solid #374151",
        }}
      >

        <input
          autoFocus
          value={keyword}
          onChange={(e)=>setKeyword(e.target.value)}
          placeholder="Type a command..."
          style={{
            width:"100%",
            padding:14,
            outline:"none",
            border:"none",
            background:"#111827",
            color:"#fff",
            fontSize:16,
          }}
        />

        <div
          style={{
            maxHeight:350,
            overflow:"auto",
          }}
        >

          {list.map((cmd)=>(
            <div
              key={cmd.title}
              onClick={()=>{
                cmd.action();
                onClose();
              }}
              style={{
                padding:"12px 14px",
                cursor:"pointer",
                color:"#fff",
                borderTop:"1px solid #374151",
              }}
            >
              {cmd.icon} {cmd.title}
            </div>
          ))}

        </div>

      </div>

    </div>
  );

}
