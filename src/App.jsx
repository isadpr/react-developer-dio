import { useEffect, useState } from 'react'

function App() {
  const[user, setUser] = useState("");
  const[userList, setUserList] = useState(["Pablo", "José", "Manoel"]);
  const [count, setCount] = useState(0);

  useEffect (() => {
    setCount(userList.length)
  }, [userList])

  const handleAddUser = () => {
    setUserList([...userList, user]);
    setUser("");
  }

  return (
    <div className='App'>
      <h1>Hello Dio</h1>
      <h3>Total: {count}</h3>
      <div>
        <input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        />
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      {userList.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <p>{item}</p>
      ))}
    </div>
  )
}

export default App


