import React from 'react'
import Popupfirst from 'reactjs-popup';
import './Folderpop.css';
import Add from './add.png';

export default function CreateFolderPop() {
  return (
    <div>
          <form>
      <Popupfirst trigger={<img src={Add} className="add_button_bottom" alt="add"/>} >
       {closing=>(
            <form>
              <div>
                <div className='folder_pop'>
        <div className='add_folder'>
            <h2>Add Folder</h2>
        </div>
        <div className='folder_name'>
            <p>Folder Name</p>
            <input className="folder_name_text" type="text" placeholder='Folder Name'></input>
        </div>

        <div className='folder_para'>
            <p>Please enter lowercase alphabets, numbers and underscores only.</p>
        </div>
<div className='folder_button'>
    <button className='cancel' onClick={()=>{closing();}}>Cancel</button>

    <button type="submit" className='save_after'>Save</button>

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
