import { useMemo, useState } from "react";

export default function SearchPanel({
  files,
  openFile,
}) {

  const [keyword,setKeyword]=useState("");

  const results=useMemo(()=>{

    if(!keyword.trim()) return [];

    const list=[];

    Object.entries(files).forEach(([name,content])=>{

      const lines=String(content).split("\n");

      lines.forEach((line,index)=>{

        if(
          line.toLowerCase().includes(
            keyword.toLowerCase()
          )
        ){

          list.push({
            file:name,
            line:index+1,
            text:line.trim(),
          });

        }

      });

    });

    return list;

  },[keyword,files]);

  return(
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        height:"100%",
        background:"#111827",
        color:"#fff",
      }}
    >

      <input
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
        placeholder="Search..."
        style={{
          margin:10,
          padding:10,
          border:"1px solid #374151",
          background:"#1f2937",
          color:"#fff",
        }}
      />

      <div
        style={{
          flex:1,
          overflow:"auto",
        }}
      >

        {results.map((item,i)=>(

          <div
            key={i}
            onClick={()=>openFile(item.file)}
            style={{
              padding:10,
              cursor:"pointer",
              borderBottom:"1px solid #374151",
            }}
          >

            <b>{item.file}</b>

            <div
              style={{
                fontSize:12,
                opacity:.8,
              }}
            >
              Line {item.line}
            </div>

            <div
              style={{
                fontSize:13,
                color:"#9ca3af",
              }}
            >
              {item.text}
            </div>

          </div>

        ))}

      </div>

    </div>
  );

}
