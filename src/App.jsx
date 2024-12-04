import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList";
import SelectedContact from "./Components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <>
          <h2>Selected Contact View</h2>
          <SelectedContact
            setSelectedContactId={setSelectedContactId}
            selectedContactId={selectedContactId}
          />
          <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
        </>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;