import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;

/*
USING REACT FRAGMENTS, WRAPPERS:
Vzdycky je potreba v JSX kodu ty elementy wrapnout do nejakeho hlavniho elementu.
napr.:
<div>
    <h2></h2>
</div>

Jenze se muze stat, ze ve vysledku budu mit moc divu za sebou (v nejake vetsi aplikaci)
a muze to rozbit styly, navic to vytvari prazdne html elementy, ktere muzou zpomalovat stranku,
proto vytvorime slozku Helpers a v ni Wrapper.

Kazdopadne v Reactu existuje takovy prvek uz sam o sobe: <React.Fragment></React.Fragment>
nebo: <> </>

*/

/*
USING REACT PORTALS:
Tohle neni uplne spravne:
<>
  <MyModal />
  <MyInputForm />
</>

Sice to muze fungovat, pokud amme dobre nastavene styly, ale ten MyModal by mel byt nejak samostatne,
protoze se jedna o prvek, ktery by mel celou stranku prekryt. Takhle to pusobi, ze se ma vyvolat Modal
a za nim MyInputForm. Neni tedy dobre mit ten Modal takhle nested.
=> proto pouzivame ReactPortals:
Nejdrive v zalozce public v index.html, pridame tyhle radky za <noscript>: 
<div id="backdrop-root"></div>
<div id="modal-root"></div>

Pak si v ErrorModal.js vytvorime const ModalOVerLay a const Backdrop, do kterych dame to,
co bylo puvodne v returnu pro ErrorModal.
A v returnu pro ErrorModal se na to odkazeme pomoci createPortal. A musime tam taky popsat ty props.
*/

/*
USING REFS:
Je lepsi je pouzit ve forms misto useState (ty tam ted mame nastavene tak ze se aktualizuji pri kazdem key stroku)

V AddUser:
const nameInputRef=useRef();
const ageInputRef=useRef();

  <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
*/


