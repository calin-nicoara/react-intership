import {useEffect, useState} from "react";
import UserFormError from "./UserFormError";

export default function NewUserForm({onCreateUser}) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [usernameNotValid, setUsernameNotValid] = useState(false);

  const [formIsTouched, setFormIsTouched] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking username and age...");
      const errors = [];

      if(formIsTouched) {
        if(username.trim().length === 0) {
          errors.push("Username must have at least one non-empty character!")
          setUsernameNotValid(true);
        } else {
          setUsernameNotValid(false);
        }

        if(age < 13) {
          errors.push("Age less than 13!")
        }
      }

      setErrorMessage(errors.length === 0 ? null : errors.join(", "));
    }, 500)

    return () => clearTimeout(identifier);

  }, [username, age, formIsTouched])

  function onUsernameChangeHandler(event) {
    setFormIsTouched(true);
    setUsername(event.target.value);
  }

  function onAgeChangeHandler(event) {
    setFormIsTouched(true);
    setAge(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const newUser = {
      username: username,
      age: age
    };

    onCreateUser(newUser);

    setFormIsTouched(false);
    setAge('');
    setUsername('');
  }

  return <form onSubmit={onSubmitHandler}>
    <div className="username-control">
      <label htmlFor="username-input"
             style={ {
               color: usernameNotValid ? 'red' : ''
             }}>Username</label>
      <input id="username-input"
             type="text" value={username}
            onChange={onUsernameChangeHandler}/>
    </div>
    <div className="age-control">
      <label htmlFor="age-input">Age</label>
      <input id="age-input"  value={age}
             onChange={onAgeChangeHandler}
             type="number"
             min="0"
             step="1" />
    </div>
    <button disabled={errorMessage !== null} type="submit">Create new user</button>
    <UserFormError errorMessage={errorMessage}/>
  </form>;
}