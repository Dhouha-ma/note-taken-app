import Note from "./components/Note.vue";
import Login from "./components/Login.vue";

export default [
  {
    name: "Note",
    component: Note,
    path: "/notes",
  },
  {
    name: "Login",
    component: Login,
    path: "/",
  },
];
