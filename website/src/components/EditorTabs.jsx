export default function EditorTabs({
  openTabs,
  current,
  setCurrent,
  closeTab,
}) {
  return (
    <div
      style={{
        display:"flex",
        overflowX:"auto",
        background:"#1f2937",
        borderBottom:"1px solid #333",
      }}
    >
      {openTabs.map((name)=>(
        <div
          key={name}
          style={{
            display:"flex",
            alignItems:"center",
            padding:"8px 12px",
            color:"#fff",
            background:
              current===name
                ?"#374151"
                :"transparent",
            borderRight:"1px solid #333",
          }}
        >
          <span
            onClick={()=>setCurrent(name)}
            style={{
              cursor:"pointer",
              marginRight:8,
              whiteSpace:"nowrap",
            }}
          >
            📄 {name}
          </span>

          <button
            onClick={()=>closeTab(name)}
            style={{
              border:"none",
              background:"transparent",
              color:"#fff",
              cursor:"pointer",
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
