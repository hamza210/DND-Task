import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./DragandDrop.css"; // Import the updated CSS file
import * as XLSX from "xlsx";

const DragandDrop = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [types, setTypes] = useState([]);
  const [addTaskPopup, setAddTaskPopup] = useState(false);
  const [addUserPopup, setAddUserPopup] = useState(false);
  const [addTypesPopup, setAddTypesPopup] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [userText, setUserText] = useState("");
  const [typeText, setTypeText] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [editTask, setEditTask] = useState({});

  useEffect(() => {
    if (userFilter || typeFilter || searchText || searchDate) {
      let newTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      let updatedTasks = newTasks
        .filter((t) =>
          userFilter && typeFilter
            ? t.assignee === userFilter && t.type === typeFilter
            : userFilter
            ? t.assignee === userFilter
            : typeFilter
            ? t.type === typeFilter
            : true
        )
        ?.filter((t) =>
          searchText
            ? t.name.toLowerCase().includes(searchText.toLowerCase())
            : true
        )
        ?.filter((t) =>
          searchDate
            ? new Date(t?.created_at).getMonth() ==
                new Date(searchDate).getMonth() &&
              new Date(t?.created_at).getFullYear() ==
                new Date(searchDate).getFullYear()
            : true
        );

      setTasks(updatedTasks);
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
      setUsers(JSON.parse(localStorage.getItem("users")) || []);
      setTypes(JSON.parse(localStorage.getItem("types")) || []);
    }
  }, [userFilter, typeFilter, searchText, searchDate]);

  const onDragOver = (e) => e.preventDefault();

  const onDragStart = (e, name) => {
    e.dataTransfer.setData("name", name);
  };

  const onDrop = (e, category) => {
    let id = e.dataTransfer.getData("name");
    let newTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks = newTasks.map((t) => {
      if (t.name === id) t.category = category;
      return t;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    let filteredTasks = updatedTasks
      .filter((t) =>
        userFilter && typeFilter
          ? t.assignee === userFilter && t.type === typeFilter
          : userFilter
          ? t.assignee === userFilter
          : typeFilter
          ? t.type === typeFilter
          : true
      )
      ?.filter((t) =>
        searchText
          ? t.name.toLowerCase().includes(searchText.toLowerCase())
          : true
      )
      ?.filter((t) =>
        searchDate
          ? new Date(t?.created_at).getMonth() ==
              new Date(searchDate).getMonth() &&
            new Date(t?.created_at).getFullYear() ==
              new Date(searchDate).getFullYear()
          : true
      );
    setTasks(filteredTasks);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    let newTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks = Object.keys(editTask).length > 0
      ? newTasks.map((val) => {
          if (val.id == editTask.id) {
            return editTask;
          }
          return val;
        })
      : [
          ...newTasks,
          {
            name: taskText,
            category: "new",
            assignee: selectedUser,
            type: selectedType,
            created_at: new Date(),
            id: uuidv4(),
          },
        ];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    let filteredTasks = updatedTasks
      .filter((t) =>
        userFilter && typeFilter
          ? t.assignee === userFilter && t.type === typeFilter
          : userFilter
          ? t.assignee === userFilter
          : typeFilter
          ? t.type === typeFilter
          : true
      )
      ?.filter((t) =>
        searchText
          ? t.name.toLowerCase().includes(searchText.toLowerCase())
          : true
      )
      ?.filter((t) =>
        searchDate
          ? new Date(t?.created_at).getMonth() ==
              new Date(searchDate).getMonth() &&
            new Date(t?.created_at).getFullYear() ==
              new Date(searchDate).getFullYear()
          : true
      );
    setTasks(filteredTasks);
    setAddTaskPopup(false);
    setEditTask({});
    setTaskText("");
    setSelectedUser("");
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    let newUsers = JSON.parse(localStorage.getItem("users")) || [];
    let updatedUsers = [...newUsers, userText];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setAddUserPopup(false);
    setUserText("");
  };

  const handleAddTypes = (e) => {
    e.preventDefault();
    let newUsers = JSON.parse(localStorage.getItem("types")) || [];
    let updatedUsers = [...newUsers, typeText];
    localStorage.setItem("types", JSON.stringify(updatedUsers));
    setTypes(updatedUsers);
    setAddTypesPopup(false);
    setTypeText("");
  };

  const handleDeleteTask = (taskName) => {
    let newTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks = newTasks.filter((task) => task.name !== taskName);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    let filteredTasks = updatedTasks
      .filter((t) =>
        userFilter && typeFilter
          ? t.assignee === userFilter && t.type === typeFilter
          : userFilter
          ? t.assignee === userFilter
          : typeFilter
          ? t.type === typeFilter
          : true
      )
      ?.filter((t) =>
        searchText
          ? t.name.toLowerCase().includes(searchText.toLowerCase())
          : true
      )
      ?.filter((t) =>
        searchDate
          ? new Date(t?.created_at).getMonth() ==
              new Date(searchDate).getMonth() &&
            new Date(t?.created_at).getFullYear() ==
              new Date(searchDate).getFullYear()
          : true
      );

    setTasks(filteredTasks);
  };

  const handleKeyDown = (e) => {
    if (
      e.key == "Enter" &&
      taskText.length != 0 &&
      !tasks.some((t) => t?.name == taskText)
    ) {
      handleAddTask(e);
    }
  };

  const handleUserKeyDown = (e) => {
    if (
      e.key == "Enter" &&
      userText.length != 0 &&
      !users.some((t) => t == userText)
    ) {
      handleAddUser(e);
    }
  };

  const handleTypeKeyDown = (e) => {
    if (
      e.key == "Enter" &&
      typeText.length != 0 &&
      !types.some((t) => t == typeText)
    ) {
      handleAddTypes(e);
    }
  };

  const handlepopover = () => {
    setAddTaskPopup(true);
  };

   const handleExport = () => {
    const ab = new Date(searchDate);
      const b = ab.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      const data = tasks.map((user) => {
        return {
          'Task name':user.name,
          'Type':user.type,
          'Assignee':user.assignee,
        };
      });
      
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, `${b} Monthly Report`);
    
      XLSX.writeFile(wb, `${b}_Report.xlsx`);
  };
  return (
    <div className="drag-drop-container">
      <h2>Drag and Drop Task Manager</h2>

      <div className="buttons-container">
        <div className="searchbar">
          <input
            placeholder="Search Task"
            type="search"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <button className="add-button" onClick={() => setAddUserPopup(true)}>
            Add User
          </button>
          <button className="add-button" onClick={() => setAddTaskPopup(true)}>
            Add Task
          </button>
          <button className="add-button" onClick={() => setAddTypesPopup(true)}>
            Add Priority / Type
          </button>
          <button className="add-button" onClick={() => handleExport()}>
           Export data
          </button>
        </div>
      </div>

      <div className="filter-container">
        <div>
          <label htmlFor="userFilter">Filter by Assignee:</label>
          <select
            id="userFilter"
            value={userFilter}
            onChange={(e) => {
              setSelectedUser(e.target.value);
              setUserFilter(e.target.value);
            }}
          >
            <option value="">All Users</option>
            {users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="userFilter">Task Type/Priority:</label>
          <select
            id="typeFilter"
            value={typeFilter}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setTypeFilter(e.target.value);
            }}
          >
            <option value="">All</option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="dateFilter">
          <label htmlFor="userFilter">Date :</label>
          <input
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            type="month"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="board">
        {/* New Column */}
        <div className="column">
          <h3>New Tasks</h3>
          <div className="drop-zone newtask-zone">
            {tasks
              .filter((task) => task.category === "new")
              .map((task) => (
                <div
                  key={task.name}
                  className="task-card newtask"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.name)}
                >
                <p className="task-card_p">

                  {task.name}
                </p>
                  <span className="actions_btn">
                    <span
                      onClick={() => handleDeleteTask(task.name)}
                      className="delete-btn"
                    >
                      &#x2715;
                    </span>
                    <span
                      onClick={() => {
                        setEditTask(task);
                        handlepopover();
                      }}
                      className="delete-btn"
                    >
                      &#9998;
                    </span>
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* WIP Column */}
        <div className="column">
          <h3>Work In Progress</h3>
          <div
            className="drop-zone"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, "wip")}
          >
            {tasks
              .filter((task) => task.category === "wip")
              .map((task) => (
                <div
                  key={task.name}
                  className="task-card"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.name)}
                >
                  {task.name}
                </div>
              ))}
          </div>
        </div>

        {/* Testing Column */}
        <div className="column">
          <h3>Work In Progress</h3>
          <div
            className="drop-zone"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, "testing")}
          >
            {tasks
              .filter((task) => task.category === "testing")
              .map((task) => (
                <div
                  key={task.name}
                  className="task-card"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.name)}
                >
                  {task.name}
                </div>
              ))}
          </div>
        </div>

        {/* Completed Column */}
        <div className="column">
          <h3>Completed</h3>
          <div
            className="drop-zone completed-zone"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, "completed")}
          >
            {tasks
              .filter((task) => task.category === "completed")
              .map((task) => (
                <div
                  key={task.name}
                  className="task-card completed"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.name)}
                >
                  {task.name}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Add Task Popup */}
      {addTaskPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>{Object.keys(editTask).length > 0 ? 'Edit Task' : 'Add Task'} </h3>
            <input
              autoFocus
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Task name"
              value={Object.keys(editTask).length > 0 ? editTask.name : taskText}
              onChange={(e) => {
                if (Object.keys(editTask).length > 0) {
                  setEditTask((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  });
                } else {
                  setTaskText(e.target.value);
                }
              }}
            />
            <select
              disabled={Object.keys(editTask).length > 0 ? false : userFilter ? true : false}
              value={
                Object.keys(editTask).length > 0
                  ? editTask.assignee
                  : userFilter
                  ? userFilter
                  : selectedUser
              }
              onChange={(e) => {
                if (Object.keys(editTask).length > 0) {
                  setEditTask((prev) => {
                    return {
                      ...prev,
                      assignee: e.target.value,
                    };
                  });
                } else {
                  setSelectedUser(e.target.value);
                }
              }}
            >
              <option value="">Select Assignee</option>
              {users.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
            <select
              disabled={Object.keys(editTask).length > 0 ? false : typeFilter ? true : false}
              value={
                Object.keys(editTask).length > 0
                  ? editTask.type
                  : typeFilter
                  ? typeFilter
                  : selectedType
              }
              onChange={(e) => {
                if (Object.keys(editTask).length > 0) {
                  setEditTask((prev) => {
                    return {
                      ...prev,
                      type: e.target.value,
                    };
                  });
                } else {
                  setSelectedType(e.target.value);
                }
              }}
            >
              <option value="">Select Type</option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              disabled={
                Object.keys(editTask).length > 0
                  ? !Object.values(editTask).every((val) => {
                      return val.length > 0;
                    })
                  : taskText.length == 0 ||
                    tasks.some(
                      (t) => t?.name.toLowerCase() == taskText.toLowerCase()
                    ) ||
                    selectedUser.length == 0 ||
                    selectedType.length == 0
                  ? true
                  : false
              }
              onClick={handleAddTask}
            >
             
             {Object.keys(editTask).length > 0 ? 'Edit Task' : 'Add Task'} 
            </button>
            <button
              onClick={() => {
                setAddTaskPopup(false);
                setEditTask({});
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Add User Popup */}
      {addUserPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add User</h3>
            <input
              autoFocus
              onKeyDown={handleUserKeyDown}
              type="text"
              placeholder="User name"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <button
              disabled={
                userText.length == 0 ||
                users.some((t) => t.toLowerCase() == userText.toLowerCase())
                  ? true
                  : false
              }
              onClick={handleAddUser}
            >
              Add User
            </button>
            <button onClick={() => setAddUserPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Add Priority Popup */}
      {addTypesPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Priority / Type</h3>
            <input
              autoFocus
              onKeyDown={handleTypeKeyDown}
              type="text"
              placeholder="Enter Type / Priority"
              value={typeText}
              onChange={(e) => setTypeText(e.target.value)}
            />
            <button
              disabled={
                typeText.length == 0 ||
                types.some((t) => t.toLowerCase() == typeText.toLowerCase())
                  ? true
                  : false
              }
              onClick={handleAddTypes}
            >
              Add Type
            </button>
            <button onClick={() => setAddTypesPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragandDrop;
