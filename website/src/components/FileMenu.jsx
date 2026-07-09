export default function FileMenu({
  file,
  renameFile,
  deleteFile,
  duplicateFile,
  close,
}) {

  if(!file) return null;

  return (
    <div
      style={{
        position:"fixed",
        right:20,
        bottom:80,
        width:180,
        background:"#1f2937",
        border:"1px solid #374151",
        borderRadius:8,
        overflow:"hidden",
        zIndex:9999,
      }}
    >

      <button
        style={{
          width:"100%",
          padding:12,
          border:"none",
          background:"transparent",
          color:"#fff",
          textAlign:"left",
        }}
        onClick={()=>{
          renameFile(file);
          close();
        }}
      >
        ✏ Rename
      </button>

      <button
        style={{
          width:"100%",
          padding:12,
          border:"none",
          background:"transparent",
          color:"#fff",
          textAlign:"left",
        }}
        onClick={()=>{
          duplicateFile(file);
          close();
        }}
      >
        📄 Duplicate
      </button>

      <button
        style={{
          width:"100%",
          padding:12,
          border:"none",
          background:"#991b1b",
          color:"#fff",
          textAlign:"left",
        }}
        onClick={()=>{
          deleteFile(file);
          close();
        }}
      >
        🗑 Delete
      </button>

    </div>
  );
}
