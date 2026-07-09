import { useState } from "react";

export default function Sidebar({
  files,
  folders=[],
  current,
  setCurrent,
  createFile,
  createFolder,
  renameFile,
  deleteFile,
}) {

  const [open,setOpen]=useState({});

  const toggle=(name)=>{
    setOpen({
      ...open,
      [name]:!open[name],
    });
  };

  return(
    <aside
      style={{
        width:220,
        background:"#111827",
        color:"#fff",
        overflow:"auto",
        borderRight:"1px solid #222",
      }}
    >

      <div
        style={{
          display:"flex",
          gap:6,
          padding:10,
        }}
      >
        <button
          style={{flex:1}}
          onClick={createFile}
        >
          📄
        </button>

        <button
          style={{flex:1}}
          onClick={createFolder}
        >
          📁
        </button>
      </div>

      {folders.map(folder=>(

        <div key={folder}>

          <div
            onClick={()=>toggle(folder)}
            style={{
              cursor:"pointer",
              padding:"8px 10px",
              fontWeight:"bold",
            }}
          >
            {open[folder] ? "📂" : "📁"} {folder}
          </div>

          {open[folder] &&
            Object.keys(files)
              .filter(f=>f.startsWith(folder+"/"))
              .map(file=>(

                <div
                  key={file}
                  style={{
                    padding:"6px 24px",
                    background:
                      current===file
                      ?"#374151"
                      :"transparent",
                  }}
                >
                  <div
                    onClick={()=>setCurrent(file)}
                    style={{
                      cursor:"pointer",
                    }}
                  >
                    📄 {file.split("/").pop()}
                  </div>

                  <div
                    style={{
                      display:"flex",
                      gap:4,
                      marginTop:4,
                    }}
                  >
                    <button
                      onClick={()=>renameFile(file)}
                    >
                      ✏
                    </button>

                    <button
                      onClick={()=>deleteFile(file)}
                    >
                      🗑
                    </button>

                  </div>

                </div>

              ))
          }

        </div>

      ))}

    </aside>
  );
}
