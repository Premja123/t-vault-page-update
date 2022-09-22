import React from "react";
import Search from "./search.png";
import Arrow from "./arrow.png";
import Icon from "./icon_image.png";
import Delete from "./delete-xxl.png";
import System from "./System.png";

// import Banner_img from "./Banner_img.png";
import IconFolder from "./icon_folder.png";
// import Circle from "./circle.png";
// import Uparrow from "./uparrow.png";
import File_img from "./file_img.png";
import CreateNewSafe from "../Bodypart/CreateNewSafe";
import CreateFolderPop from "../Bodypart/CreateFolderPop";
import { deleteUser, setCurId } from "../features/Reducer";
// import One_finger from "./one-finger-xxl.png";
import { useDispatch } from "react-redux";
import { removeSecret } from "../features/Reducer";
// import {v4 as uuidV4} from "uuid";
//import CreateFolderPop from "../FolderRight/CreateFolderPop";
import { useSelector } from "react-redux";
import EditPop from "../Bodypart/EditPop";
import BannerUpdate from "./BannerUpdate";
import Add from './add_button_after.png';

export default function Safes() {
  function clearallthing(e) {
    e.stopPropagation();
  }

  const curId = useSelector((state) => state.users.curId);

  const dispatching = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const secretList = useSelector((state) => state.users.value);
  return (
    <div className="safes">
      <div className="safes_left_container">
        <div className="container_1">
          <div className="all_safes">
            <div>
              <p>
                All Safes <span>({userList.length})</span>
              </p>
            </div>
            <div>
              <img src={Arrow} alt="arrow"></img>
            </div>
          </div>

          <div className="searching">
            <img src={Search} alt="search_button" />
            <input type="search" placeholder="Search" id="searchbar"></input>
          </div>
        </div>

        {/* <div className="foot_part">
                <div className="circle">
                  <div className="red_circle">
                    <div className="one_finger">
                      <img src={One_finger} alt="one_finger"></img>
                    </div>
                  </div>
                </div>
                <div className="uparrow">
                  <img src={Uparrow} alt="uparrow" />
                </div>
                <div className="add_box">
                  <p>Create New Safe</p>
                </div>
              </div> */}

        <div className="container_second">
          {userList.length <= 0 && (
            <div>
              <img src={System} className="system" alt="system_logo"></img>
              <div className="create_para">Create a Safe to get Started</div>
            </div>
          )}
          <CreateNewSafe userList={userList} />
        </div>

        <div>
          <p></p>
        </div>

        <div className="bottom_container">
          <div className="bottom_child">
            {userList.map((user) => {
              return (
                <div
                  key={user.id}
                  className={user.id === curId.id ? "Activeone" : "NoActive"}
                  onClick={() => {
                    dispatching(setCurId({ id: user.id }));
                  }}
                >
                  <div className="listing_all">
                    <div className="input_first">
                      <img
                        src={Icon}
                        className="banner_button"
                        alt="icon"
                      ></img>
                      <div className="username">
                      <p>{user.name}</p>
                      <span>Last Updated: a few seconds ago </span>
                      </div>
                    </div>
                    <div className="input_second">
                      <EditPop
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        type={user.type}
                        description={user.description}
                        secret={user.secret}
                      
                      />
                      <img
                        src={Delete}
                        className="delete_button"
                        alt="delete"
                        onClick={(e) => { clearallthing(e);
                          dispatching(deleteUser({ id: user.id }));
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="safes_right_container">
        <BannerUpdate />

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

            <div>{/* <img src={Folder} alt="fold_img" /> */}</div>
          </div>
        </div>
     
        <div>
          {/* {secretList.map((value, index) => {
            return (
              secretList.length !== 0 ||
              (value.id === curId.id && value.secret.length > 0 && (
                <div key={index}>
                  <span id="secretsCount">{value.secret.length} Secrets</span>
                </div>
              ))
            );
          })} */}
        </div>
        {/* <span id="secretsCount">{value.secret.length} Secrets</span> */}

           
        <div>
        
            <div>
           
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

                <div className="add_button"></div>
                <img src={Add}  alt="add"  className="add_button_bottom" /> 
                {/* onClick={updateBlank} className={blankpage} */}
              </div>
            </div>
      
          <CreateFolderPop curId={curId.id} />

          <div>
            {secretList.map((value, index) => {
              return value.id === curId.id ? (
                <div key={index}>
                  {value.secret.map((x, index) => {
                    return (
                      <div key={index} className="secretList">
                        <div className="secretName">
                          <div className="folderIcon">
                            <img
                              className="banner_button_folder"
                              src={IconFolder}
                              alt=""
                            />
                            {/* <img
                          className="folderActive"
                          src={folderActive}
                          alt=""
                        /> */}
                          </div>
                          <div className="secretDetails">
                            <p>{x}</p>
                            <span id="lastUpdated">Last Updated: a few seconds ago</span>
                          </div>
                        </div>
                        <div className="remove">
                          <img
                            src={Delete}
                            className="delete_button"
                            alt="delete"
                            onClick={() =>
                              dispatching(
                                removeSecret({
                                  id: x,
                                })
                              )
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              );
            })}
          </div>
          {/* </div> */}
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
  );
}
