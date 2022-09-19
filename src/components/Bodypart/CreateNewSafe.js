import Iconsafe from './icon_image.png';
import './createform.css';
import Popup from 'reactjs-popup'
import Circle from "./circle.png";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser} from '../features/Users';
import { useState } from 'react';

export default function CreateNewSafe() {

  const[name,setName]=useState("");
  const[username,setUsername]=useState("");

  const[description,setDescription]=useState("");

  const dispatch=useDispatch();

  return (
    <div>
          <form>
    <Popup trigger={<img src={Circle}  className="add_button_1" alt="circle"></img>}>
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
        <input className="name_input" name="safename" type="text" placeholder="Safe Name" onChange={(event)=>{setName(event.target.value);}} ></input>
        </div>
        <p className="Owner_name">Owner</p>
        <input className="owner_input" name="owner" type="text" placeholder="Owner"  onChange={(event)=>{setUsername(event.target.value);}}></input>
        <p className="type_of_block">Type</p>
        <select className="select_thing">
            <option>Personal</option>
            <option>Other</option>
        </select>
        <p className="description_area">Description</p>
        <textarea rows="3" cols="50" name="description" className="textarea_description" placeholder="Description" onChange={(event)=>{setDescription(event.target.value);}} ></textarea>
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
      id:(new Date()).getTime(),
      name,
      username,
      description,
    }))
  
    close();

    setName(' ');
    setUsername(' ');
    description(' ');

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

          </form>
    </div>
  )
}
