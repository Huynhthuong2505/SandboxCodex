import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";
import AIChat from "../components/AIChat";

const DEFAULT_FILES = {
  "index.html":"<h1>Hello Sandbox CodeX</h1>",
  "style.css":"body{background:#111;color:#fff;font-family:sans-serif}",
  "script.js":"console.log('Sandbox CodeX');",
};

export default function IDE(){

  const [current,setCurrent]=useState("index.html");
  const [tab,setTab]=useState("preview");

  const [files,setFiles]=useState(()=>{
    const data=localStorage.getItem("sandbox-workspace");
    return data?JSON.parse(data):DEFAULT_FILES;
  });

  useEffect(()=>{
    localStorage.setItem(
      "sandbox-workspace",
      JSON.stringify(files)
    );
  },[files]);

  const saveWorkspace=()=>{
    localStorage.setItem(
      "sandbox-workspace",
      JSON.stringify(files)
    );
    alert("Workspace saved");
  };

  const exportWorkspace=()=>{
    const blob=new Blob(
      [JSON.stringify(files,null,2)],
      {type:"application/json"}
    );

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");
    a.href=url;
    a.download="workspace.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  const importWorkspace=(e)=>{
    const file=e.target.files[0];
    if(!file) return;

    const reader=new FileReader();

    reader.onload=()=>{
      try{
        const data=JSON.parse(reader.result);
        setFiles(data);
        setCurrent(Object.keys(data)[0]);
      }catch{
        alert("File không hợp lệ");
      }
    };

    reader.readAsText(file);
  };

  const preview=`
<!DOCTYPE html>
<html>
<head>
<style>${files["style.css"]||""}</style>
</head>
<body>
${files["index.html"]||""}
<script>${files["script.js"]||""}</script>
</body>
</html>`;

  return(
    <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>

      <TopBar
        createFile={()=>{}}
        saveWorkspace={saveWorkspace}
        runPreview={()=>setTab("preview")}
        exportWorkspace={exportWorkspace}
        importWorkspace={importWorkspace}
      />

      <div style={{display:"flex",flex:1}}>

        <Sidebar
          files={files}
          current={current}
          setCurrent={setCurrent}
          createFile={()=>{}}
          renameFile={()=>{}}
          deleteFile={()=>{}}
        />

        <div style={{flex:1}}>
          <Editor
            language={
              current.endsWith(".css")
              ?"css"
              :current.endsWith(".js")
              ?"javascript"
              :"html"
            }
            code={files[current]}
            setCode={(v)=>setFiles({
              ...files,
              [current]:v
            })}
          />
        </div>

        <div style={{width:"40%"}}>
          {tab==="preview"&&<Preview html={preview}/>}
          {tab==="terminal"&&<Terminal/>}
          {tab==="ai"&&<AIChat/>}
        </div>

      </div>

    </div>
  );
}
