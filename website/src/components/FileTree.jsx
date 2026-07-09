import { useState } from "react";

function Node({
  name,
  node,
  path,
  openFile,
}){

  const [open,setOpen]=useState(true);

  if(node.type==="file"){

    return(
      <div
        onClick={()=>openFile(path)}
        style={{
          padding:"6px 0 6px 24px",
          cursor:"pointer",
          color:"#fff",
        }}
      >
        📄 {name}
      </div>
    );

  }

  return(

    <div>

      <div
        onClick={()=>setOpen(!open)}
        style={{
          padding:"6px",
          cursor:"pointer",
          color:"#fff",
          fontWeight:"bold",
        }}
      >
        {open?"📂":"📁"} {name}
      </div>

      {open &&

        Object.entries(node.children).map(
          ([childName,child])=>(

            <Node
              key={childName}
              name={childName}
              node={child}
              path={
                path
                  ? path+"/"+childName
                  : childName
              }
              openFile={openFile}
            />

          )
        )

      }

    </div>

  );

}

export default function FileTree({
  tree,
  openFile,
}){

  return(

    <div
      style={{
        height:"100%",
        overflowY:"auto",
        background:"#111827",
      }}
    >

      {

        Object.entries(tree).map(
          ([name,node])=>(

            <Node
              key={name}
              name={name}
              node={node}
              path={name}
              openFile={openFile}
            />

          )
        )

      }

    </div>

  );

}
