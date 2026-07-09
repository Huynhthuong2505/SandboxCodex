export default function Sidebar({
  files,
  current,
  setCurrent,
  createFile,
}) {
  const list = Object.keys(files).sort();

  return (
    <aside
      style={{
        background:"#111827",
        color:"#fff",
        height:"100%",
        overflow:"auto",
        borderRight:"1px solid #222",
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"10px",
          borderBottom:"1px solid #222"
        }}
      >
        <b>EXPLORER</b>

        <button onClick={createFile}>
          +
        </button>
      </div>

      {list.map((name)=>(
        <div
          key={name}
          onClick={()=>setCurrent(name)}
          style={{
            padding:"8px 12px",
            cursor:"pointer",
            background:
              current===name
              ? "#374151"
              : "transparent"
          }}
        >
          {name.endsWith(".html") && "🌐"}
          {name.endsWith(".css") && "🎨"}
          {name.endsWith(".js") && "📜"}
          {!name.match(/\.(html|css|js)$/) && "📄"}
          {" "}
          {name}
        </div>
      ))}
    </aside>
  );
}
