import { useState } from "react";

export default function AIFileGenerator({
  files,
  setFiles,
  setCurrent,
}){

  const [name,setName]=useState("");
  const [prompt,setPrompt]=useState("");

  const generate=()=>{

    if(!name.trim()) return;

    let content="";

    if(name.endsWith(".html")){

      content=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${name}</title>
</head>
<body>

<h1>${prompt||"New Page"}</h1>

</body>
</html>`;

    }else if(name.endsWith(".css")){

      content=`body{

margin:0;
padding:0;
font-family:sans-serif;

}`;

    }else if(name.endsWith(".js")){

      content=`console.log("${prompt||"Hello Sandbox CodeX"}");`;

    }else{

      content=prompt;

    }

    setFiles({
      ...files,
      [name]:content,
    });

    setCurrent(name);

    setName("");
    setPrompt("");

  };

  return(

    <div
      style={{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        background:"#111827",
        color:"#fff",
        padding:12,
        gap:10,
      }}
    >

      <h3>🤖 AI File Generator</h3>

      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Tên file..."
      />

      <textarea
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Mô tả file..."
        style={{
          minHeight:120,
        }}
      />

      <button
        onClick={generate}
      >
        Generate File
      </button>

    </div>

  );

}
