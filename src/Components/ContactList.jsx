import React, { useEffect, useState } from "react"; 
import ContactRow from "./ContactRow";

export default function ContactList  ({setSelectedContactId})  {
    const [contacts, setContacts] = useState([]);
    console.log("Contacts: ", contacts);

    useEffect(() => {
        async function getContacts(){
            try {
                const response = await fetch 
                    ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.log("Error fetching contacts:", error);
            
            }
        }
        getContacts();
    }, []);

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
            })}
          </tbody>
        </table>
    ); 
}
