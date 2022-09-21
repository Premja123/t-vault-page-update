import React from 'react'
import Popupfirst from 'reactjs-popup';
import './createform.css';
import Add from './add_button_after.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSecret} from '../features/Users';
import FolderPlus from './folder_update.png';
import { v4 as uuid } from "uuid";

export default function CreateFolderPop(props) {
    // const[name,setName]=useState("");
    const uid = uuid();
    const id = uid.slice(0, 6);
    const [secret, setSecret] = useState([]);
  const dispatch=useDispatch();

  const[blankpage,setBlankpage]=useState('add_button_bottom');
  const updateBlank=()=>{
    setBlankpage('add_button_bottom_update');
  }

  const[blankpagefolder,setBlankpagefolder]=useState('top_folder');
  const updateBlankfolder=()=>{
    setBlankpagefolder('top_folder_update');
  }

  return (
    <div>
         <form>
         {/* onClick={updateBlank} className={blankpage} */}

      <Popupfirst trigger={<div><img src={Add}  alt="add"  onClick={updateBlank} className={blankpage} /> 
    <img src={FolderPlus} alt="folderplus" className={blankpagefolder} onClick={updateBlankfolder}></img></div>} >

       {closing=>(
            <form>
              <div>
                <div className='folder_pop'>
        <div className='add_folder'>
            <h2>Add Folder</h2>
        </div>
        <div className='folder_name'>
            <p>Folder Name</p>
            <input className="folder_name_text" type="text" placeholder='Folder Name' onChange={(event)=>{setSecret(event.target.value);}}></input>
        </div>

        <div className='folder_para'>
            <p>Please enter lowercase alphabets, numbers and underscores only.</p>
        </div>
<div className='folder_button'>
    <button className='cancel' onClick={()=>{closing();}}>Cancel</button>

    {
          secret.length<=10 &&
          <button type="submit" className="save_before"  onClick={()=>{closing();}}>Save</button>

        }

{
  secret.length>10 &&
    <button type="submit" className="save_after"  onClick={() => {
      dispatch(
        addSecret({
          curId: props.curId,
          secret: secret,
           id:id,
        })
      );
    closing();
    setSecret(' ');

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
