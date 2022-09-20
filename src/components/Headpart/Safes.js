import React from "react";
import Search from "./search.png";
import Arrow from "./arrow.png";
import Icon from './icon_image.png';
import Delete from './delete-xxl.png';
import Banner_img from "./Banner_img.png";
import IconFolder from './icon_folder.png';
import CreateNewSafe from "../Bodypart/CreateNewSafe";
import CreateFolderPop from "../Bodypart/CreateFolderPop";
import { deleteUser,deleteUserfolder} from "../features/Users";
import { useDispatch } from 'react-redux';
// import {v4 as uuidV4} from "uuid";
//import CreateFolderPop from "../FolderRight/CreateFolderPop";
import {useSelector } from "react-redux";
import EditPop from "../Bodypart/EditPop";


export default function Safes() {

  // const[count,setCount]=useState(0);
// function countincrease(){
//   setCount(count+1);
// }

  const dispatching=useDispatch();
  const userList=useSelector((state)=>state.users.value);
  const userListing=useSelector((state)=>state.users.value1);

// const[count,setCount]=useState(0);

  return (
    <div className="safes">
    <div className="safes_left_container">
    
      <div className="container_1">
        <div className="all_safes">
          <div>
            <p>
              All Safes <span>()</span>
            </p>
          </div>
          <div>
            <img src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <div className="searching">
          <img src={Search} alt="search_button" />
          <input type="search" placeholder="Search"></input>
        </div>
      </div>
      <div>
        <p></p>
        <CreateNewSafe/>

      </div>
      <div className="bottom_container">
        <div className="bottom_child">
          
        {


userList.map((user)=>{
        return(
          <div  className="listing_all">
            <div className="input_first">
            <img src={Icon} className="banner_button" alt="icon"></img>
          <p>{user.name}</p>
         </div>
         <div  className="input_second">

         <EditPop
         id={user.id}
         name={user.name}
         owner={user.username}
         type={user.type}
         description={user.description}
         />
          <img src={Delete} className="delete_button" alt="delete" onClick={()=>{dispatching(deleteUser({id:user.id}));}}></img>
          </div>
          </div>
        );
      })
     }

</div>
     </div>
    
    </div>

    


   

    
    <div className="safes_right_container">
    
      <div className="banner">
     
        {/* <div className="total_card">
          {" "}
          <div className="no_safe_card">
            No Safes Created yet
            <div className="description">
              Create a Safe to see your secrets, folders and permissions here
            </div>
          </div>{" "}
        </div> */}
        
        <img src={Banner_img} className="banner_img" alt="banner_img"></img>
      </div>
      
      <div className="nav_2">
        <div className="nav_left">
          <div className="for_focusing active">
            <p>Secrets</p>
          </div>
         
          <div className="for_focus">
            <p>Permissions</p>
          </div>
        </div>
        <div className="nav_right">
        
                    <div className="for_focus">
            <p>Add Folder</p>
          </div>
        
          <div>
            {/* <img src={Folder} alt="fold_img" /> */}
          </div>
         
        </div>
      </div>
      <div>
        <p></p>
      </div>
  
<div>
<CreateFolderPop/>
{/* {
userList.map((user,user1)=>{
        return(
          <div  className="listing_all_folder">
            <div className="input_first_folder">
            <img src={IconFolder} className="banner_button" alt="icon"></img>
          <h2>{user.name}</h2>
         </div>
         <div  className="input_second_folder">
          <img src={Delete} className="delete_button_folder" alt="delete" onClick={()=>{dispatching(deleteUser({id:user.id}));}}></img>
          </div>
          </div>
        );
      })
     } */}

{
userListing.map((user1)=>{
        return(
          <div  className="listing_all">
            <div className="input_first">
            <img src={IconFolder} className="banner_button" alt="icon"></img>
          <p>{user1.name}</p>
         </div>
         <div  className="input_second">
          <img src={Delete} className="delete_button" alt="delete" onClick={()=>{dispatching(deleteUserfolder({id:user1.id}));}} ></img>
          </div>
          </div>
        );
      })
     }

</div>













      {/* <div className="secrets_count">
        <p>0 Secrets</p>
      </div>
     
      <div className="total_container">
        <div className="file_document">
          <img src={File_img} alt="file_img"></img>
        </div>
      
        <div>
          <p className="caption">
            {" "}
            Add a<span className="highlight"> Folder</span>
            and then you’ll be able to
          </p>
          <p className="caption">
            add <span className="highlight"> Secrets </span>
            to view them all here{" "}
          </p>
        </div>

        <div>

            </div>
      
      </div> */}

    </div>
  </div>
  )
}
