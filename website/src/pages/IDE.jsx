import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import EditorTabs from "../components/EditorTabs";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";
import AIChat from "../components/AIChat";

const DEFAULT_FILES={
  "index.html":"<h1>Hello Sandbox CodeX</h1>",
  "style.css":"body{background:#111;color:#fff}",
  "script.js":"console.log('Sandbox CodeX');",
};

export default function IDE(){

  const [current,setCurrent]=useState("index.html");
  const [tab,setTab]=useState("preview");
  const [openTabs,setOpenTabs]=useState(["index.html"]);

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

  const openFile=(name)=>{
    if(!openTabs.includes(name)){
      setOpenTabs([...openTabs,name]);
    }
    setCurrent(name);
  };

  const closeTab=(name)=>{

    const next=openTabs.filter(t=>t!==name);

    if(next.length===0){
      setOpenTabs([]);
      setCurrent("");
      return;
    }

    if(current===name){
      setCurrent(next[next.length-1]);
    }

    setOpenTabs(next);
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
        saveWorkspace={()=>{}}
        runPreview={()=>setTab("preview")}
        exportWorkspace={()=>{}}
        importWorkspace={()=>{}}
      />

      <div style={{display:"flex",flex:1}}>

        <Sidebar
          files={files}
          folders={[]}
          current={current}
          setCurrent={openFile}
          createFile={()=>{}}
          createFolder={()=>{}}
          renameFile={()=>{}}
          deleteFile={()=>{}}
        />

        <div
          style={{
            flex:1,
            display:"flex",
            flexDirection:"column",
          }}
        >

          <EditorTabs
            openTabs={openTabs}
            current={current}
            setCurrent={setCurrent}
            closeTab={closeTab}
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
              code={files[current]||""}
              setCode={(v)=>setFiles({
                ...files,
                [current]:v,
              })}
            />
          </div>

        </div>

        <div style={{width:"40%"}}>
          {tab==="preview" && <Preview html={preview}/>}
          {tab==="terminal" && <Terminal/>}
          {tab==="ai" && <AIChat/>}
        </div>

      </div>

    </div>
  );
}
