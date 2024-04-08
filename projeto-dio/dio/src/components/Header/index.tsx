import logo from '../../assets/logo-dio.png'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
    ButtonContainer,
} from './styles';
import { Button } from '../Button';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth();
    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/login')
    }

    const navigateSignUp = () => {
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="Logo da dio"/>
                    </Link>
                    
                    {user.id ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {user.id ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                            <Menu onClick={handleSignOut}>Sair</Menu>                      
                        </>
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <ButtonContainer>
                                <Button title="Entrar" onClick={navigateSignIn}/>
                                <Button title="Cadastrar" onClick={navigateSignUp}/>                                
                            </ButtonContainer>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }