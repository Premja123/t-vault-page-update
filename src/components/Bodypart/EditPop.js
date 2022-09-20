import Iconsafe from './icon_image.png';
import './createform.css';
import Popup from 'reactjs-popup'
import React from 'react';
import Edit from './edit-xxl.png';
import { useState,useEffect } from 'react';
import { updateSafe } from '../features/Users';
import { useDispatch } from 'react-redux';

export default function EditPop(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    // const [owner, setOwner] = useState("");
    const[username,setUsername]=useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
  
    useEffect(() => {
      setId(props.id);
      setName(props.name);
      setUsername(props.owner);
      setType(props.type);
      setDescription(props.description);
    },[props.id,props.name,props.owner,props.type,props.description]);

    const dispatch=useDispatch();

  return (
    <div>
          <Popup trigger={ <img src={Edit} className="edit_button" alt="edit"></img>}>
   {close=>(
    <form>
    <div className="newsafe_container" >
    <div className="model_container">

        <h2>Create Safe</h2>
        <div className="iconsafe">
        <div>
        <img  className="create_page_logo" src={Iconsafe} alt="iconsafe"/>
        </div>
        <div className="safe_paragraph"> A Safe is a logical unit to store the secrets.
         All the safes are created within Vault. 
         You can control access only at the safe level. 
         As a vault administrator you can manage safes but 
         cannot view the content of the safe.</div>
        </div> 
        <div>
        <p className="safe_name">Safe Name</p>
        <input  id="safeNameInput" className="name_input" name="safeName" type="text" placeholder="Safe Name"   value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}></input>
        </div>
        <p className="Owner_name">Owner</p>
        <input  id="ownerInput" className="owner_input" name="owner" type="text" placeholder="Owner"  value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }} ></input>
        <p className="type_of_block">Type</p>
        <select  id="typeInput" className="select_thing" onChange={(e) => {
              setType(e.target.value);
            }}>
            <option>Personal</option>
            <option>Other</option>
        </select>
        <p className="description_area">Description</p>
        <textarea   id="descInput" rows="3" cols="50" name="description" className="textarea_description" placeholder="Description"   value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }} ></textarea>
        <p className="condition">Please add a minimum of 10 characters</p>
        <div>
        <div className="buttons"> 
        <button type="button" className="cancel_button"  onClick={()=>{close();}}>Cancel</button>
       
       
        <button type="submit" className="create_button_rose" 
           id="createBtn"
           onClick={()=>{
            dispatch(updateSafe({id:id,name:name,username:username,type:type,description:description,}));
            close();
           }}
        >Update</button>

{/* 
        {
          (name.length<=10 || username.length<=10 || description.length<=10)&&
          <button type="submit" className="create_button_grey"  onClick={()=>{close();}}>Update</button>

        } */}

{/* {
  (name.length>10 && username.length>10 && description.length>10) &&
    <button type="submit" className="create_button_rose" 
    >Update</button>

  } */}


{/* 
onClick={()=>{dispatch(addUser({
      id:(new Date()).getTime(),
      name,
      username,
      description,
    }))
  
    close();

    setName(' ');
    setUsername(' ');
    setDescription(' ');

    }}  */}
        </div>
    </div>

  
    </div>
</div>
</form>
  )}
   </Popup> 

    </div>
  )
}





// function UpdateSafe(props) {
//     const dispatch = useDispatch();
  
//     const [id, setId] = useState("");
//     const [name, setName] = useState("");
//     const [owner, setOwner] = useState("");
//     const [type, setType] = useState("");
//     const [description, setDescription] = useState("");
  
//     useEffect(() => {
//       setId(props.id);
//       setName(props.name);
//       setOwner(props.owner);
//       setType(props.type);
//       setDescription(props.description);
//     }, []);
  
//     return (
//         <Popup trigger={ <img src={Edit} className="edit_button" alt="edit"></img>}>
//           {close=>(
//       <div className="createSafeContainer">
//         <div className="information">
//           <span id="title">Create Safe</span>
//           <div className="safesInfo">
//             <div className="shieldLogo">
            
//             </div>
//             <div className="infoDetails">
//               <p id="details">
//                 A Safe is a logical unit to store the secrets. All the safes are
//                 created within Vault. You can control access only at the safe
//                 level. As a vault administrator you can manage safes but cannot
//                 view the content of the safe.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="inputs">
//           <div className="safeName">
//             <label id="safeNameLabel">Safe Name</label>
//             <input
//               id="safeNameInput"
//               type="text"
//               name="safeName"
//               placeholder="Safe Name"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//           </div>
//           <div className="owner">
//             <label id="ownerLabel">Owner</label>
//             <input
//               id="ownerInput"
//               type="text"
//               name="owner"
//               placeholder="Owner"
//               value={owner}
//               onChange={(e) => {
//                 setOwner(e.target.value);
//               }}
//             />
//           </div>
//           <div className="type">
//             <label id="safeTypeLabel">Type</label>
//             <select
//               id="typeInput"
//               onChange={(e) => {
//                 setType(e.target.value);
//               }}
//             >
//               <option value="Personal">Personal</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="description">
//             <label id="descLabel">Description</label>
//             <textarea
//               id="descInput"
//               name="description"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => {
//                 setDescription(e.target.value);
//               }}
//             />
//             <span id="minChar">Please add a minimum of 10 characters</span>
//           </div>
//         </div>
//         <div className="createCancelBtn">
//           <button
//             id="cancelBtn"
//             onClick={() => {
//               props.close();
//             }}
//           >
//             Cancel
//           </button>
//           <button
//             id="createBtn"
//             onClick={() => {
//               dispatch(
//                 updateSafe({
//                   id: id,
//                   name: name,
//                   owner: owner,
//                   type: type,
//                   description: description,
//                 })
//               );
//               props.close();
//             }}
//           >
//             Update
//           </button>
//         </div>
//       </div>
//           )}
//           </Popup>
//     );
//   }
  
//   export default UpdateSafe;