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
  return (
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

      {folders.map((folder)=>(
        <div key={folder}>
          <div
            style={{
              padding:"8px 10px",
              fontWeight:"bold",
            }}
          >
            📁 {folder}
          </div>

          {Object.keys(files)
            .filter(name=>name.startsWith(folder+"/"))
            .map(name=>(
              <div
                key={name}
                style={{
                  padding:"6px 24px",
                  cursor:"pointer",
                  background:
                    current===name
                    ?"#374151"
                    :"transparent",
                }}
              >
                <div
                  onClick={()=>setCurrent(name)}
                >
                  📄 {name.split("/").pop()}
                </div>

                <div
                  style={{
                    display:"flex",
                    gap:4,
                    marginTop:4,
                  }}
                >
                  <button
                    onClick={()=>renameFile(name)}
                  >
                    ✏
                  </button>

                  <button
                    onClick={()=>deleteFile(name)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}

      <div style={{paddingTop:10}}>
        {Object.keys(files)
          .filter(name=>!name.includes("/"))
          .map(name=>(
            <div
              key={name}
              style={{
                padding:"8px 10px",
                background:
                  current===name
                  ?"#374151"
                  :"transparent",
              }}
            >
              <div
                onClick={()=>setCurrent(name)}
              >
                📄 {name}
              </div>

              <div
                style={{
                  display:"flex",
                  gap:4,
                  marginTop:4,
                }}
              >
                <button
                  onClick={()=>renameFile(name)}
                >
                  ✏
                </button>

                <button
                  onClick={()=>deleteFile(name)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}
