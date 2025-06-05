import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/contact";
import DragandDrop from "./pages/DragandDrop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="draganddrop" element={<DragandDrop />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);


// [
//   {
//     "name": "helloo",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "Bug",
//     "created_at": "2024-02-28T07:01:28.741Z",
//     "id": "1"
//   },
//   {
//     "name": "a",
//     "category": "completed",
//     "assignee": "dhomse",
//     "type": "Bug",
//     "created_at": "2024-02-28T07:01:28.741Z",
//     "id": "2"
//   },
//   {
//     "name": "q",
//     "category": "wip",
//     "assignee": "dhomse",
//     "type": "Bug",
//     "created_at": "2025-02-28T07:01:28.741Z",
//     "id": "3"
//   },
//   {
//     "name": "e",
//     "category": "wip",
//     "assignee": "dhomse",
//     "type": "Bug",
//     "created_at": "2025-02-28T07:01:28.741Z",
//     "id": "4"
//   },
//   {
//     "name": "tanvirr task",
//     "category": "completed",
//     "assignee": "tanvir",
//     "type": "Bug",
//     "created_at": "2024-02-28T07:01:28.741Z",
//     "id": "5"
//   },
//   {
//     "name": "hfhhf",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "Bug",
//     "created_at": "2024-02-28T07:01:28.741Z",
//     "id": "6"
//   },
//   {
//     "name": "pooppo",
//     "category": "wip",
//     "assignee": "tanvir",
//     "type": "Bug",
//     "created_at": "2024-02-28T07:01:28.741Z",
//     "id": "7"
//   },
//   {
//     "name": "mobiold",
//     "category": "wip",
//     "assignee": "prathamesh_karbele",
//     "type": "Bug",
//     "created_at": "2024-01-28T07:01:28.741Z",
//     "id": "8"
//   },
//   {
//     "name": "bebe",
//     "category": "wip",
//     "assignee": "prathamesh_karbele",
//     "type": "Improvement",
//     "created_at": "2024-01-28T07:01:28.741Z",
//     "id": "9"
//   },
//   {
//     "name": "design",
//     "category": "wip",
//     "assignee": "tanvir",
//     "type": "Improvement",
//     "created_at": "2025-01-28T07:01:28.741Z",
//     "id": "10"
//   },
//   {
//     "name": "testing",
//     "category": "wip",
//     "assignee": "rohit",
//     "type": "Improvement",
//     "created_at": "2025-01-28T07:01:28.741Z",
//     "id": "11"
//   },
//   {
//     "name": "developen",
//     "category": "wip",
//     "assignee": "nilesh",
//     "type": "Improvement",
//     "created_at": "2025-01-28T07:01:28.741Z",
//     "id": "12"
//   },
//   {
//     "name": "newtask",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "Improvement",
//     "created_at": "2025-01-28T07:01:28.741Z",
//     "id": "13"
//   },
//   {
//     "name": "developemnt",
//     "category": "completed",
//     "assignee": "ritesh",
//     "type": "Improvement",
//     "created_at": "2025-01-28T07:01:28.741Z",
//     "id": "14"
//   },
//   {
//     "name": "qqq",
//     "category": "new",
//     "assignee": "nilesh",
//     "type": "Bug",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "15"
//   },
//   {
//     "name": "ADD Priority dropdown",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "16"
//   },
//   {
//     "name": "Add search bar",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "16"
//   },
//   {
//     "name": "Add year and month",
//     "category": "completed",
//     "assignee": "hamza",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "17"
//   },
//   {
//     "name": "add export btn",
//     "category": "new",
//     "assignee": "hamza",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "18"
//   },
//   {
//     "name": "popup",
//     "category": "new",
//     "assignee": "tanvir",
//     "type": "Improvement",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "19"
//   },
//   {
//     "name": "testing",
//     "category": "new",
//     "assignee": "",
//     "type": "Improvement",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "20"
//   },
//   {
//     "name": "color",
//     "category": "new",
//     "assignee": "rohit",
//     "type": "Bug",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "21"
//   },
//   {
//     "name": "Edit Task",
//     "category": "wip",
//     "assignee": "hamza",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "22"
//   },
//   {
//     "name": "date tetst",
//     "category": "new",
//     "assignee": "nilesh",
//     "type": "new feature",
//     "created_at": "2025-03-28T07:01:28.741Z",
//     "id": "23"
//   }
// ]