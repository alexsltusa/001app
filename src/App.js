import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const Profile = () => {
  return <h1>Page Profile</h1>;
}
const Messages = () => {
  return <h1>Messages page</h1>;
}
const Settings = () => {
  return <h1>Settings page</h1>;
}
const Friends = ()  => {
  return <h1>Fiends page</h1>;
}

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
          </div>
        </div>
        <div className="col-9"></div>
        <Routes>
          <Route path="/>profile" element={<Profile />} />
          <Route path="/>messages" element={<Messages />} />
          <Route path="/>settings" element={<Settings />} />
          <Route path="/>friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
