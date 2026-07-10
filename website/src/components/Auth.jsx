import { useEffect, useState } from "react";

export default function Auth(){

  const [user,setUser]=useState(null);

  useEffect(()=>{

    const data=localStorage.getItem("user");

    if(data){
      setUser(JSON.parse(data));
    }

  },[]);

  const login=()=>{

    const profile={
      name:"Developer",
      email:"developer@sandboxcodex.dev",
      avatar:"https://github.githubassets.com/favicons/favicon.svg",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(profile)
    );

    setUser(profile);

  };

  const logout=()=>{

    localStorage.removeItem("user");
    setUser(null);

  };

  return(

    <div
      style={{
        height:"100%",
        padding:16,
        background:"#111827",
        color:"#fff",
      }}
    >

      <h3>🔐 Authentication</h3>

      {!user && (

        <>
          <button onClick={login}>
            Sign in
          </button>
        </>

      )}

      {user && (

        <>

          <img
            src={user.avatar}
            alt=""
            width="60"
            height="60"
            style={{
              borderRadius:"50%",
            }}
          />

          <h4>{user.name}</h4>

          <p>{user.email}</p>

          <button
            onClick={logout}
          >
            Sign out
          </button>

        </>

      )}

    </div>

  );

}
