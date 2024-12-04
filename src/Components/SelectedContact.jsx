import { useEffect, useState } from "react";

export default function SelectedContact({ setSelectedContactId, selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getContact() {
      if (!selectedContactId) return;
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }
    getContact();
  }, [selectedContactId]);

  if (!contact) {
    return <p>Loading contact information...</p>;
  }

  return (
    <div>
      <h3>Contact Details</h3>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <p>Address: {`${contact.address.street}, ${contact.address.city}`}</p>
    </div>
  );
}