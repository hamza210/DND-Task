import * as React from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSubmit = (key, value) => {
    const newParams = new URLSearchParams(searchParam);
    newParams.set(key, value);
    setSearchParam(newParams, { replace: true });
  };

  return (
    <div>
      user
      <div>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <div>
        <button onClick={() => navigate("/about")}>about</button>
      </div>
      <div>
        <button onClick={() => navigate(-2)}>back 2 </button>
      </div>
      <div>
        <button onClick={() => handleSubmit("page_no", "2")}>
          setsearchParam
        </button>
      </div>
      <div>
        <button>{searchParam}</button>
      </div>
      <div>
        <button
          onClick={() => {
            handleSubmit("page_size", "50");
          }}
        >
          append
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleSubmit("page_size", "100");
          }}
        >
          change page size
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/contact")}>contact</button>
      </div>
    </div>

    // import React, { useEffect, useState } from "react";
    // const DragandDrop = () => {
    //   const [tasks, setTasks] = useState([]);
    //   const [users, setUsers] = useState([]);
    //   const [addTaskPopup, setAddTaskPopup] = useState(false);
    //   const [addUserPopup, setAddUserPopup] = useState(false);
    //   const [taskText, setTaskText] = useState("");
    //   const [userText, setUserText] = useState("");
    //   const [selecteduser, setselectedUser] = useState("");
    //   const [userfilter, setUserFilter] = useState("");

    //   useEffect(() => {
    //     if (userfilter) {
    //       let newtask = JSON.parse(localStorage.getItem("tasks")) || [];
    //       let updatedtasks = newtask?.filter((t) => {
    //         return t.assignee === userfilter;
    //       });
    //       setTasks(updatedtasks);
    //     } else {
    //       setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    //       setUsers(JSON.parse(localStorage.getItem("users")) || []);
    //     }
    //   }, [userfilter]);

    //   const onDragover = (e) => {
    //     e.preventDefault();
    //   };

    //   const onDragstart = (e, name) => {
    //     e.dataTransfer.setData("name", name);
    //   };

    //   const ondrop = (e, name) => {
    //     let id = e.dataTransfer.getData("name");
    //     let newtask = JSON.parse(localStorage.getItem("tasks")) || [];
    //     let updatedtasks = newtask?.map((t) => {
    //       if (t?.name === id) {
    //         t.category = name;
    //       }
    //       return t;
    //     });
    //     localStorage.setItem("tasks", JSON.stringify(updatedtasks));
    //     let filtertaaskuser = updatedtasks?.filter((t) => {
    //       if (userfilter) {
    //         return t.assignee === userfilter;
    //       } else {
    //         return t;
    //       }
    //     });
    //     setTasks(filtertaaskuser);
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newtask = JSON.parse(localStorage.getItem("tasks")) || [];
    //     let updatedTaskArr = [
    //       ...newtask,
    //       { name: taskText, category: "wip", assignee: selecteduser },
    //     ];
    //     localStorage.setItem("tasks", JSON.stringify(updatedTaskArr));
    //     let filtertaaskuser = updatedTaskArr?.filter((t) => {
    //       if (userfilter) {
    //         return t.assignee === userfilter;
    //       } else {
    //         return t;
    //       }
    //     });
    //     setTasks(filtertaaskuser);
    //     setAddTaskPopup(false);
    //     setTaskText("");
    //     setselectedUser("");
    //   };

    //   const handleUserSubmit = (e) => {
    //     e.preventDefault();
    //     let oldusers = JSON.parse(localStorage.getItem("users")) || [];
    //     let updatedUserArr = [...oldusers, userText];
    //     localStorage.setItem("users", JSON.stringify(updatedUserArr));
    //     setUsers(updatedUserArr);
    //     setAddUserPopup(false);
    //     setUserText("");
    //   };

    //   const handleKeyDown = (e) => {
    //     if (
    //       e.key == "Enter" &&
    //       taskText.length != 0 &&
    //       !tasks.some((t) => t?.name == taskText)
    //     ) {
    //       handleSubmit(e);
    //     }
    //   };

    //   const handleUserKeyDown = (e) => {
    //     if (
    //       e.key == "Enter" &&
    //       userText.length != 0 &&
    //       !users.some((t) => t == userText)
    //     ) {
    //       handleUserSubmit(e);
    //     }
    //   };

    //   const handleDelete = (name) => {
    //     let newtask = JSON.parse(localStorage.getItem("tasks")) || [];
    //     let updatedtasks = newtask?.filter((t) => {
    //       return t?.name !== name;
    //     });
    //     localStorage.setItem("tasks", JSON.stringify(updatedtasks));
    //     let filtertaaskuser = updatedtasks?.filter((t) => {
    //       if (userfilter) {
    //         return t.assignee === userfilter;
    //       } else {
    //         return t;
    //       }
    //     });
    //     setTasks(filtertaaskuser);
    //   };

    //   return (
    //     <div
    //       style={{
    //         width: "1024px",
    //         margin: "50px auto",
    //         border: "1px solid darkcyan",
    //         height: "auto",
    //         minHeight: "600px",
    //         display: "flex",
    //         flexDirection: "column",
    //         padding: "10px",
    //         position: "relative",
    //       }}
    //     >
    //       {addTaskPopup && (
    //         <div
    //           style={{
    //             zIndex: "1",
    //             top: "10px",
    //             left: "0",
    //             position: "absolute",
    //             width: "100%",
    //             height: "100%",
    //             margin: "auto",
    //           }}
    //         >
    //           <dialog
    //             style={{
    //               backgroundColor: "#f9f9f9",
    //               height: "250px",
    //               width: "500px",
    //               color: "#000",
    //               padding: "20px",
    //               display: "flex",
    //               flexDirection: "column",
    //               rowGap: "15px",
    //               borderRadius: "10px",
    //             }}
    //             open
    //           >
    //             <div
    //               style={{
    //                 height: "20px",
    //                 width: "100%",
    //                 color: "#000",
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <p
    //                 style={{
    //                   width: "450px",
    //                   height: "20px",
    //                   fontWeight: "600",
    //                   fontSize: "16px",
    //                   textAlign: "center",
    //                   color: "#000",
    //                 }}
    //               >
    //                 Add Task
    //               </p>
    //               <p
    //                 onClick={() => {
    //                   setTaskText("");
    //                   setselectedUser("");
    //                   setAddTaskPopup(false);
    //                 }}
    //                 style={{
    //                   cursor: "pointer",
    //                   height: "50px",
    //                   fontWeight: "600",
    //                   color: "#000",
    //                 }}
    //               >
    //                 &#x2715;
    //               </p>
    //             </div>

    //             <div
    //               style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 rowGap: "10px",
    //               }}
    //             >
    //               <label htmlFor="name">Name </label>
    //               <input
    //                 autoFocus
    //                 onKeyDown={handleKeyDown}
    //                 placeholder="Enter name"
    //                 value={taskText}
    //                 onChange={(e) => setTaskText(e.target.value)}
    //                 id="name"
    //                 style={{
    //                   backgroundColor: "#f9f9f9",
    //                   padding: "5px",
    //                   fontSize: "16px",
    //                   borderRadius: "10px",
    //                   color: "#000",
    //                   border: "1px solid black",
    //                 }}
    //                 type="text"
    //               />

    //               <select
    //                 disabled={userfilter ? true : false}
    //                 required
    //                 value={userfilter ? userfilter : selecteduser}
    //                 onChange={(e) => {
    //                   setselectedUser(e.target.value);
    //                 }}
    //                 style={{
    //                   height: "40px",
    //                   maxHeight: "100px",
    //                   overflowY: "scroll",
    //                   width: "100%",
    //                   padding: "8px 12px",
    //                   border: "1px solid #34495e",
    //                   borderRadius: "6px",
    //                   backgroundColor: "#2c3e50",
    //                   color: "#f9f9f9",
    //                   fontSize: "14px",
    //                   cursor: "pointer",
    //                   outline: "none",
    //                   transition: "all 0.3s ease-in-out",
    //                 }}
    //                 name="userdropdown"
    //                 id="userdropdown"
    //               >
    //                 <option value="" disabled>
    //                   Select User
    //                 </option>
    //                 {users.map((usr) => {
    //                   return (
    //                     <option
    //                       key={usr}
    //                       style={{
    //                         height: "40px",
    //                         backgroundColor: "#ecf0f1",
    //                         color: "#2c3e50",
    //                         fontSize: "14px",
    //                         padding: "8px",
    //                       }}
    //                       value={usr}
    //                     >
    //                       {usr}
    //                     </option>
    //                   );
    //                 })}
    //               </select>
    //             </div>
    //             <button
    //               disabled={
    //                 taskText.length == 0 ||
    //                 tasks.some((t) => t?.name == taskText) ||
    //                 selecteduser.length == 0
    //                   ? true
    //                   : false
    //               }
    //               onClick={handleSubmit}
    //               style={{
    //                 height: "40px",
    //                 width: "100%",
    //                 borderRadius: "10px",
    //                 backgroundColor:
    //                   taskText.length == 0 ||
    //                   tasks.some((t) => t?.name == taskText) ||
    //                   selecteduser.length == 0
    //                     ? "#707070"
    //                     : "#69b76f",
    //               }}
    //             >
    //               ADD
    //             </button>
    //           </dialog>
    //         </div>
    //       )}
    //       {addUserPopup && (
    //         <div
    //           style={{
    //             zIndex: "1",
    //             top: "10px",
    //             left: "0",
    //             position: "absolute",
    //             width: "100%",
    //             height: "100%",
    //             margin: "auto",
    //           }}
    //         >
    //           <dialog
    //             style={{
    //               backgroundColor: "#f9f9f9",
    //               height: "200px",
    //               width: "500px",
    //               color: "#000",
    //               padding: "20px",
    //               display: "flex",
    //               flexDirection: "column",
    //               rowGap: "15px",
    //               borderRadius: "10px",
    //             }}
    //             open
    //           >
    //             <div
    //               style={{
    //                 height: "20px",
    //                 width: "100%",
    //                 color: "#000",
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <p
    //                 style={{
    //                   width: "450px",
    //                   height: "20px",
    //                   fontWeight: "600",
    //                   fontSize: "16px",
    //                   textAlign: "center",
    //                   color: "#000",
    //                 }}
    //               >
    //                 Add User
    //               </p>
    //               <p
    //                 onClick={() => {
    //                   setUserText("");
    //                   setAddUserPopup(false);
    //                 }}
    //                 style={{
    //                   cursor: "pointer",
    //                   height: "50px",
    //                   fontWeight: "600",
    //                   color: "#000",
    //                 }}
    //               >
    //                 &#x2715;
    //               </p>
    //             </div>

    //             <div
    //               style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 rowGap: "10px",
    //               }}
    //             >
    //               <label htmlFor="username">User Name</label>
    //               <input
    //                 autoFocus
    //                 onKeyDown={handleUserKeyDown}
    //                 placeholder="Enter userText name"
    //                 value={userText}
    //                 onChange={(e) => setUserText(e.target.value)}
    //                 id="username"
    //                 style={{
    //                   backgroundColor: "#f9f9f9",
    //                   padding: "5px",
    //                   fontSize: "16px",
    //                   borderRadius: "10px",
    //                   color: "#000",
    //                   border: "1px solid black",
    //                 }}
    //                 type="text"
    //               />
    //             </div>
    //             <button
    //               disabled={
    //                 userText.length == 0 || users.some((t) => t == userText)
    //                   ? true
    //                   : false
    //               }
    //               onClick={handleUserSubmit}
    //               style={{
    //                 height: "40px",
    //                 width: "100%",
    //                 borderRadius: "10px",
    //                 backgroundColor:
    //                   userText.length == 0 || users.some((t) => t == userText)
    //                     ? "#707070"
    //                     : "#69b76f",
    //               }}
    //             >
    //               ADD
    //             </button>
    //           </dialog>
    //         </div>
    //       )}

    //       <div
    //         style={{
    //           textAlign: "center",
    //           fontSize: "20px",
    //           fontWeight: "bold",
    //           color: "#f9f9f9",
    //           height: "50px",
    //           position: "relative",
    //         }}
    //       >
    //         <div
    //           style={{
    //             position: "absolute",
    //             left: "10px",
    //             top: "0px",
    //             width: "auto",
    //           }}
    //         >
    //           <select
    //             required
    //             value={userfilter}
    //             onChange={(e) => {
    //               setUserFilter(e.target.value);
    //               setselectedUser(e.target.value);
    //             }}
    //             style={{
    //               height: "40px",
    //               maxHeight: "100px",
    //               overflowY: "scroll",
    //               width: "100%",
    //               padding: "8px 12px",
    //               border: "1px solid #34495e",
    //               borderRadius: "6px",
    //               backgroundColor: "#2c3e50",
    //               color: "#f9f9f9",
    //               fontSize: "14px",
    //               cursor: "pointer",
    //               outline: "none",
    //               transition: "all 0.3s ease-in-out",
    //             }}
    //             name="userdropdown"
    //             id="userdropdown"
    //           >
    //             <option value="">All User</option>
    //             {users.map((usr) => {
    //               return (
    //                 <option
    //                   key={usr}
    //                   style={{
    //                     height: "40px",
    //                     backgroundColor: "#ecf0f1",
    //                     color: "#2c3e50",
    //                     fontSize: "14px",
    //                     padding: "8px",
    //                   }}
    //                   value={usr}
    //                 >
    //                   {usr}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </div>
    //         Drag and Drop
    //         <div
    //           onClick={() => setAddTaskPopup(!addTaskPopup)}
    //           style={{
    //             position: "absolute",
    //             right: "70px",
    //             top: "0px",
    //             height: "40px",
    //             width: "40px",
    //             backgroundColor: "#f9f9f9",
    //             cursor: "pointer",
    //             borderRadius: "20px",
    //           }}
    //         >
    //           <div
    //             style={{
    //               color: "#000",
    //               fontSize: "30px",
    //               marginTop: "-5px",
    //             }}
    //             title="Add Task"
    //           >
    //             +
    //           </div>
    //         </div>
    //         <div
    //           onClick={() => setAddUserPopup(!addUserPopup)}
    //           style={{
    //             position: "absolute",
    //             right: "10px",
    //             top: "0px",
    //             height: "40px",
    //             width: "40px",
    //             backgroundColor: "#f9f9f9",
    //             cursor: "pointer",
    //             borderRadius: "20px",
    //           }}
    //         >
    //           <div
    //             style={{
    //               color: "#000",
    //               fontSize: "30px",
    //               marginTop: "-5px",
    //             }}
    //             title="Add User"
    //           >
    //             &#128100;
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           minHeight: "520px",
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: "100%",
    //             border: "1px solid red",
    //             textAlign: "center",
    //             color: "#f9f9f9",
    //             height: "auto",
    //             display: "flex",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <div
    //             style={{
    //               padding: "20px",
    //               borderBottom: "1px solid red",
    //               textAlign: "center",
    //               color: "#f9f9f9",
    //             }}
    //           >
    //             WIP
    //           </div>
    //           <div
    //             //   this make it container for dropable
    //             onDragOver={(e) => onDragover(e)}
    //             //   on drop handle
    //             onDrop={(e) => ondrop(e, "wip")}
    //             style={{
    //               height: "100%",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 display: "flex",
    //                 flexWrap: "wrap",
    //                 padding: "10px",
    //                 gap: "10px",
    //                 maxHeight: "100%",
    //                 overflowY: "auto",
    //               }}
    //             >
    //               {Object.groupBy(tasks, (t) => t?.category)?.wip?.map((task) => {
    //                 return (
    //                   <div
    //                     onDragStart={(e) => onDragstart(e, task.name)}
    //                     draggable
    //                     style={{
    //                       height: "36px",
    //                       borderRadius: "10px",
    //                       width: "auto",
    //                       padding: "5px 10px",
    //                       backgroundColor: "#3a5686",
    //                       color: "#f9f9f9",
    //                     }}
    //                   >
    //                     {task.name}
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           style={{
    //             width: "100%",
    //             border: "1px solid red",
    //             textAlign: "center",
    //             color: "#f9f9f9",
    //             height: "auto",
    //             display: "flex",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <div
    //             style={{
    //               borderBottom: "1px solid red",
    //               padding: "20px",
    //               textAlign: "center",
    //               color: "#f9f9f9",
    //               padding: "20px",
    //             }}
    //           >
    //             Completed
    //           </div>
    //           <div
    //             //   this make it container for dropable
    //             onDragOver={(e) => onDragover(e)}
    //             //   on drop handle
    //             onDrop={(e) => ondrop(e, "completed")}
    //             style={{
    //               height: "100%",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 display: "flex",
    //                 flexWrap: "wrap",
    //                 padding: "10px",
    //                 gap: "10px",
    //                 maxHeight: "100%",
    //                 overflowY: "auto",
    //               }}
    //             >
    //               {Object.groupBy(tasks, (t) => t?.category)?.completed?.map(
    //                 (task) => {
    //                   return (
    //                     <div
    //                       onDragStart={(e) => onDragstart(e, task.name)}
    //                       draggable
    //                       style={{
    //                         height: "36px",
    //                         borderRadius: "10px",
    //                         width: "auto",
    //                         display: "flex",
    //                         columnGap: "10px",
    //                         padding: "5px 10px",
    //                         backgroundColor: "#69b76f",
    //                         color: "#f9f9f9",
    //                       }}
    //                     >
    //                       {task.name}
    //                       <span
    //                         onClick={() => handleDelete(task.name)}
    //                         style={{ cursor: "pointer" }}
    //                       >
    //                         {" "}
    //                         &#x2715;
    //                       </span>
    //                     </div>
    //                   );
    //                 }
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
    // export default DragandDrop;
  );
};

export default User;
