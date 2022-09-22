import React from 'react'
import { useSelector } from "react-redux";
import Banner_img from "./Banner_img.png";

export default function BannerUpdate() {
    const curId = useSelector((state) => state.users.curId);

    const userList = useSelector((state) => state.users.value);


  return (
    <div>
    <div className="banner">
     
   
     
     <img src={Banner_img} className="banner_img" alt="banner_img"></img>
     {userList.map((value) => {
        return value.id === curId.id ? (
          <div key={value.id} >
            <div className="total_card">{value.name}</div>
            <div className="description_next">{value.description}</div>
          </div>
        ) : (
          ""
        );
      })}
      {userList.length === 0 ? (
        // <div className="total_card">
        //   <span id="nameInfo">No Safes Created Yet</span>
        //   <span id="descInfo">
        //     Create a Safe to see your secrets, folders and permissions here
        //   </span>
        // </div>
        <div className="total_card">
          <div className='total_scroll'>
        {" "}
        <div className="no_safe_card">
          No Safes Created yet
          </div>
          <div className="description">
            Create a Safe to see your secrets, folders and permissions here
          </div>
       
        </div>
      </div>
      ) : (
        ""
      )}

   </div>
    </div>
  )
}
