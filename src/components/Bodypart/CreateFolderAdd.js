import React from 'react'
import Popupfirst from 'reactjs-popup';
import './createform.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSecret} from '../features/Reducer';
import Add from './add_button_after.png';
// import FolderPlus from './folder_update.png';
import { v4 as uuid } from "uuid";
export default function CreateFolderAdd(props) {

    const uid = uuid();
    const id = uid.slice(0, 6);
    const [secret, setSecret] = useState([]);
  const dispatch=useDispatch();
  const[condition, setCondition]=useState("");
//   const[blankpagefolder,setBlankpagefolder]=useState('top_folder');
//   const updateBlankfolder=()=>{
//     setBlankpagefolder('top_folder_update');
//   }

const handleCondition=(event)=>{
  setCondition(event.target.value.toString().replace(/[^a-z0-9_]/, ''));
}


  return (
    <div>
            <Popupfirst trigger={<div>
                {/* className={blankpagefolder} onClick={updateBlankfolder} */}

                <img src={Add}  alt="add"  className="add_button_bottom" /> </div>} >

       {closing=>(
            <form>
              <div>
                <div className='folder_pop'>
        <div className='add_folder'>
            <h2>Add Folder</h2>
        </div>
        <div className='folder_name'>
            <p>Folder Name</p>
            <input className="folder_name_text" value={condition}
            type="text" placeholder='Folder Name' onChange={(event)=>{setSecret(event.target.value); handleCondition(event); }} 
            ></input>
        </div>

        <div className='folder_para'>
            <p>Please enter lowercase alphabets, numbers and underscores only.</p>
        </div>
<div className='folder_button'>
    <button className='cancel' onClick={()=>{closing(); setCondition('')}}>Cancel</button>

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
    </div>
  )
}
