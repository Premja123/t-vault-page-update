import React from 'react'
import Popupfirst from 'reactjs-popup';
import './createform.css';
import Add from './add.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser} from '../features/Users';
import FolderPlus from './folder-plus 1.png';

export default function CreateFolderPop() {
    const[name,setName]=useState("");
    
  const dispatch=useDispatch();

  return (
    <div>
         <form>
      <Popupfirst trigger={<div><img src={Add} className="add_button_bottom" alt="add"/> 
    <img src={FolderPlus} alt="folderplus" className='top_folder'></img></div>} >
       {closing=>(
            <form>
              <div>
                <div className='folder_pop'>
        <div className='add_folder'>
            <h2>Add Folder</h2>
        </div>
        <div className='folder_name'>
            <p>Folder Name</p>
            <input className="folder_name_text" type="text" placeholder='Folder Name' onChange={(event)=>{setName(event.target.value);}}></input>
        </div>

        <div className='folder_para'>
            <p>Please enter lowercase alphabets, numbers and underscores only.</p>
        </div>
<div className='folder_button'>
    <button className='cancel' onClick={()=>{closing();}}>Cancel</button>

    {/* <button type="submit" className='save_before'>Save</button> */}

    {/* <button type="submit" className='save_after'>Save</button> */}

    
    {
          name.length<=10 &&
          <button type="submit" className="save_before"  onClick={()=>{closing();}}>Save</button>

        }

{
  name.length>10 &&
    <button type="submit" className="save_after" onClick={()=>{dispatch(addUser({
      id:(new Date()).getTime(),
      name,
    }))
  
    closing();

    setName(' ');

    }} 
    >Save</button>

  }


</div>
</div>
</div>
</form>
       )}
</Popupfirst>

      </form>
    </div>
  )
}