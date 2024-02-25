const ListContacts=({contacts})=>{
    return (
        <ol>
          { contacts.map((contact)=>{
               return( 
               <li key={contact.id}>
                <div className="contact-background">
                 
                </div>
                {contact.name}{contact.handle}{contact.avatar}
               </li>
                        )
            } )
          }
        </ol>
    )
}
export default ListContacts;