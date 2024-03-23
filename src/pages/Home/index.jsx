import Header from "../../components/Header"
import background from "../../assets/background.png"
import "./styles.css"
import ItemList from "../../components/ItemList"
import {useState} from 'react'

function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    console.log(newUser)

    if(newUser.name) {
      const { avatar_url, name, bio, login } = newUser
      setCurrentUser({ avatar_url, name, bio, login })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if(newRepos.length) {
        setRepos(newRepos)
      }
      console.log(repos)

    }
  }

  return (
    <div className='App'>
      <Header/>
      <div className="container">
          <img src={background} className="background" alt="background app"/>
          <div className="info">
            <div>
              <input name="usuario" 
              placeholder="@username" 
              value={user} 
              onChange={(event) => setUser(event.target.value)}
              />
              <button onClick={handleGetData}>Buscar</button>
            </div>
            {currentUser?.name ? (
              <>
                <div className="profileContainer">
                  <img src={currentUser.avatar_url} className="profilePicture" alt="foto de perfil"/>
                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
                <hr />
              </>
            ) : null}
          
          {repos?.length ? (
          <div className="repositorios">
            <h4>Repositórios</h4>
            {repos.map(repo => (
              // eslint-disable-next-line react/jsx-key
              <ItemList title={repo.name} description={repo.description} html_url={repo.html_url}/>
            ))}
          </div>
          ) : null}

        </div>
      </div>
    </div>
  )
}

export default App


