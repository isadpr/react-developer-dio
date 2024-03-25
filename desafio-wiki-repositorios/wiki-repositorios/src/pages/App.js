import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import { Container } from './styles';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { useState } from "react";
import { api } from '../services/api';


function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('') // o que está sendo pesquisado

  const handleSearchRepo = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)

      if(data.id) {
        const isExist = repos.find(item => item.id === data.id)
        if(!isExist) {
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
          return
        } else {
          alert('Repositorio ja foi adicionado')
        }
      } 
    } catch (e) {
      alert('Repositorio nao encontrado')
    }
    
  }

  const handleRemoveRepo = (itemIdToDelete) => {
    const updatedRepos = repos.filter(item => item.id !== itemIdToDelete);
    setRepos(updatedRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo  handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      
    </Container>
  );
}

export default App;
