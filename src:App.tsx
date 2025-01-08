// src/App.tsx
import React, { useState } from "react";
import "./App.css"; // 样式文件

const App = () => {
  const [serverUrl, setServerUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在这里处理登录逻辑
    console.log("连接到服务器:", serverUrl, username, password);
  };

  return (
    <div className="app">
      <h1>Emby Web Player</h1>
      <form onSubmit={handleSubmit}>
        <label>服务器地址 (IP:端口):</label>
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
          placeholder="http://192.168.1.100:8096"
          required
        />
        <label>用户名:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="用户名"
          required
        />
        <label>密码:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="密码"
          required
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default App;