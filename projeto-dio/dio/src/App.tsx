import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home'
import { Login } from './pages/login';
import { Feed } from './pages/feed'
import { SignUp } from './pages/signUp';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/feed" element={<Feed />}></Route>
              <Route path="/cadastro" element={<SignUp />}></Route>
          </Routes>
          </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
