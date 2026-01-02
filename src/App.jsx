import { useState } from "react";
import eventData from "../upcoming-events.json";
import { PageBoard } from "./components/PageBoard";

function App() {
  return (
    <>
      <PageBoard eventData={eventData} />
    </>
  );
}

export default App;
