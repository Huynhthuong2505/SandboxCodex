import { useState } from "react";

export default function AIAgent({
  current,
  files,
  setFiles,
}){

  const [prompt,setPrompt]=useState("");
  const [loading,setLoading]=useState(false);

  const apply=()=>{

    if(!current) return;

    setLoading(true);

    setTimeout(()=>{

      const next={
        ...files,
      };

      next[current]+=`


<!-- AI Suggestion -->
<!-- ${prompt} -->
`;

      setFiles(next);

      setPrompt("");
      setLoading(false);

    },800);

  };

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
        }}
      >
        🤖 AI Coding Agent
      </div>

      <textarea
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Ví dụ: Thêm nút Login..."
        style={{
          flex:1,
          margin:10,
          padding:12,
          background:"#1f2937",
          color:"#fff",
          border:"1px solid #374151",
          resize:"none",
        }}
      />

      <button
        onClick={apply}
        disabled={loading}
        style={{
          margin:10,
          padding:12,
        }}
      >
        {loading ? "Generating..." : "Apply To Current File"}
      </button>

    </div>

  );

}
