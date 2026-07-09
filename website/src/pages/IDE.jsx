import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
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

  const [drawer,setDrawer]=useState(false);
  const [tab,setTab]=useState("preview");
  const [current,setCurrent]=useState("index.html");

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

  const createFile=()=>{
    const name=prompt("Tên file");

    if(!name||files[name]) return;

    setFiles({
      ...files,
      [name]:"",
    });

    setCurrent(name);
  };

  const deleteFile=(name)=>{
    if(!confirm("Xóa "+name+" ?")) return;

    const next={...files};
    delete next[name];

    setFiles(next);

    if(current===name){
      setCurrent(Object.keys(next)[0]||"");
    }
  };

  const renameFile=(oldName)=>{
    const newName=prompt("Tên mới",oldName);

    if(!newName||newName===oldName||files[newName]) return;

    const next={};

    Object.keys(files).forEach(key=>{
      next[key===oldName?newName:key]=files[key];
    });

    setFiles(next);

    if(current===oldName){
      setCurrent(newName);
    }
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

  return (
    <div>
      {/* Giữ nguyên phần giao diện hiện tại */}

      {/* Khi gọi Sidebar nhớ truyền thêm: */}
      {/* deleteFile={deleteFile} */}
      {/* renameFile={renameFile} */}
    </div>
  );
}
