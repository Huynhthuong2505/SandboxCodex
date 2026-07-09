import { useState } from "react";

const PACKAGES = [
  {
    name:"react",
    version:"19.1.0",
    desc:"React Library",
  },
  {
    name:"vite",
    version:"8.1.3",
    desc:"Frontend Build Tool",
  },
  {
    name:"tailwindcss",
    version:"4.1.0",
    desc:"CSS Framework",
  },
  {
    name:"axios",
    version:"1.11.0",
    desc:"HTTP Client",
  },
  {
    name:"express",
    version:"5.1.0",
    desc:"Backend Framework",
  },
];

export default function PackageManager(){

  const [installed,setInstalled]=useState(
    JSON.parse(
      localStorage.getItem("packages")||"[]"
    )
  );

  const toggle=(pkg)=>{

    let next;

    if(installed.includes(pkg)){
      next=installed.filter(v=>v!==pkg);
    }else{
      next=[...installed,pkg];
    }

    setInstalled(next);

    localStorage.setItem(
      "packages",
      JSON.stringify(next)
    );

  };

  return(

    <div
      style={{
        height:"100%",
        background:"#111827",
        color:"#fff",
        overflowY:"auto",
      }}
    >

      {PACKAGES.map(pkg=>(

        <div
          key={pkg.name}
          style={{
            padding:12,
            borderBottom:"1px solid #374151",
          }}
        >

          <b>{pkg.name}</b>

          <div
            style={{
              color:"#9ca3af",
              fontSize:13,
            }}
          >
            {pkg.desc}
          </div>

          <div>
            v{pkg.version}
          </div>

          <button
            onClick={()=>toggle(pkg.name)}
            style={{
              marginTop:8,
            }}
          >
            {installed.includes(pkg.name)
              ? "Remove"
              : "Install"}
          </button>

        </div>

      ))}

    </div>

  );

}
