import React from 'react'
import logo from '../../assets/logo-dio.png'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";

const Header = ({authenticated}) => {
    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/login')
    }

    const navigateSignUp = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"/>
                    {authenticated ? (
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
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" onClick={navigateSignIn}/>
                            <Button title="Cadastrar" onClick={navigateSignUp}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }