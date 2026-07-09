export default function SourceControl({
  branch="main",
  changedFiles=[],
  commit,
  push,
  pull,
}){

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
          padding:12,
          borderBottom:"1px solid #374151",
          fontWeight:"bold",
        }}
      >
        🌿 {branch}
      </div>

      <div
        style={{
          flex:1,
          overflowY:"auto",
        }}
      >

        {changedFiles.length===0 && (

          <div
            style={{
              padding:16,
              color:"#9ca3af",
            }}
          >
            Working tree clean
          </div>

        )}

        {changedFiles.map(file=>(

          <div
            key={file}
            style={{
              padding:"10px 14px",
              display:"flex",
              justifyContent:"space-between",
              borderBottom:"1px solid #374151",
            }}
          >
            <span>📄 {file}</span>
            <span>●</span>
          </div>

        ))}

      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr",
          gap:8,
          padding:10,
          borderTop:"1px solid #374151",
        }}
      >

        <button onClick={commit}>
          Commit
        </button>

        <button onClick={push}>
          Push
        </button>

        <button onClick={pull}>
          Pull
        </button>

      </div>

    </div>
  );
}
