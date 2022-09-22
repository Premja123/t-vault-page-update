import Iconsafe from './icon_image.png';
import './createform.css';
import Popup from 'reactjs-popup'
import Circle from "./circle.png";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser, setCurId} from '../features/Reducer';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

export default function CreateNewSafe() {


  const uid = uuid();
  const id = uid.slice(0, 6);
  const[name,setName]=useState("");
  const[username,setUsername]=useState("");
  const [type, setType] = useState("");
  // const[active,setActive]=useState(false);
  const[description,setDescription]=useState("");
  const [secret] = useState([]);

  const dispatch=useDispatch();


  // const[blankpage,setBlankpage]=useState('add_button_1');
  // const updateBlank=()=>{
  //   setBlankpage('add_buttonupdating');
  // }


  return (
    <div>
          <div>
    <Popup trigger={<div><img src={Circle} alt="circle" className="add_button_1"></img></div>}>
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
        <input className="name_input"   id="safeNameInput" name="safeName" type="text" placeholder="Safe Name"  value={name} onChange={(event)=>{setName(event.target.value);}} ></input>
        </div>
        <p className="Owner_name">Owner</p>
        <input className="owner_input" id="ownerInput" name="username" type="text" placeholder="Owner" value={username} onChange={(event)=>{setUsername(event.target.value);}}></input>
        <p className="type_of_block">Type</p>
        <select className="select_thing" id="typeInput" value={type} onChange={(e) => {
              setType(e.target.value);
            }} >
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
        </select>
        <p className="description_area">Description</p>
        <textarea id="descInput" rows="3" cols="50" name="description" className="textarea_description" placeholder="Description"  value={description} onChange={(event)=>{setDescription(event.target.value);}} ></textarea>
        <p className="condition">Please add a minimum of 10 characters</p>
        <div>
        <div className="buttons"> 
        <button type="button" className="cancel_button"  onClick={()=>{close();}}>Cancel</button>

        {
          (name.length<=10 || username.length<=10 || description.length<=10)&&
          <button type="submit" className="create_button_grey"  onClick={()=>{close();}}>+ Create</button>

        }

{
  (name.length>10 && username.length>10 && description.length>10) &&
    <button type="submit" className="create_button_rose" onClick={()=>{dispatch(addUser({
      id:id,
      name,
      username,
      type,
      description,
      secret:secret,
      // active:active,
    }));
    dispatch(
      setCurId({
        id: id,
      })
    );
    
    close();
    setName(' ');
    setUsername(' ');
    setType(' ');
    setDescription(' ');

    }} 
     >+ Create</button>
  }
        </div>
    </div>

  
    </div>
</div>
</form>
  )}
   </Popup> 

          </div>
    </div>
  )
}
