export default function TopBar({
  createFile,
  saveWorkspace,
  runPreview,
  exportWorkspace,
  importWorkspace,
}) {
  return (
    <header
      style={{
        height:50,
        background:"#111827",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0 10px",
        borderBottom:"1px solid #222",
      }}
    >
      <b>Sandbox CodeX</b>

      <div
        style={{
          display:"flex",
          gap:6,
        }}
      >
        <button onClick={createFile}>
          📄
        </button>

        <button onClick={saveWorkspace}>
          💾
        </button>

        <button onClick={runPreview}>
          ▶
        </button>

        <button onClick={exportWorkspace}>
          ⬇
        </button>

        <label
          style={{
            cursor:"pointer",
            padding:"4px 8px",
            background:"#374151",
            borderRadius:4,
          }}
        >
          ⬆
          <input
            type="file"
            accept=".json"
            hidden
            onChange={importWorkspace}
          />
        </label>
      </div>
    </header>
  );
}
