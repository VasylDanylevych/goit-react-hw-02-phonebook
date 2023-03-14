import { List } from "./ContactList.style"


export const ContactList = ({contacts, deleteContact}) => {
    return (
        <List>
          {contacts.map(({id, name, number}) => {
            return <li key={id}>{name}: {number} <button onClick={() => deleteContact(id)}>Delete</button></li>
          })}
        </List>
    )
}