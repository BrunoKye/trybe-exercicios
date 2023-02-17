import { useState, useEffect } from "react";
import emailList from "./data";
import List from "./components/List";
import { READ, UNREAD } from './constants';
import Controls from "./components/Controls";

function App() {
  const [emails, setEmails] = useState(emailList);

  useEffect(() => {
    const verifyEmails = emails.every(({ status }) => status === READ );
    if (verifyEmails) alert ('Parabéns! Você leu todas suas mensagens!');
  }, [emails]);

  const setEmailStatus = (emailId, newStatus) => {
    const updatedStatus = emails.map((currentEmail) => {
      if (currentEmail.id === emailId) return { ...currentEmail, status: newStatus };
      return currentEmail;
    })

    setEmails(updatedStatus);
  };

  const markAllAsRead = () => {
    const allAsRead = emails.map((email) => ({ ...email, status: READ }));
    setEmails(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsUnread = emails.map((email) => ({ ...email, status: UNREAD }));
    setEmails(allAsUnread);
  };

  return (
    <div>
      <header>
        <h1>TrybeMail</h1>
      </header>

        <Controls
          markAllAsRead={ markAllAsRead }
          markAllAsUnread={ markAllAsUnread }
        />

        <List 
          emails={ emails }
          setEmailStatus={ setEmailStatus }
        />
    </div>
  );
}

export default App;
