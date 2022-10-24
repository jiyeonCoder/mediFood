import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./App.css";

import Main from "./Main";
import DetailPage from "./DetailPage";
import ChatPage from "./ChatPage";
import AdminPage from "./AdminPage";
import ChatUploadPage from "./ChatUploadPage";

function App() {
  const [list, setList] = React.useState(["Banana", "Tomato", "Strawberry"]);

  return (
    <div className="App">
      <Title>MediFood</Title>
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/chatupload" element={<ChatUploadPage />} />
      </Routes>
    </div>
  );
}

const Title = styled.h1`
  color: #42387c;
`;

export default App;
