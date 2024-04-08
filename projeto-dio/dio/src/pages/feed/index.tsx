import { Header } from "../../components/Header";
import {Container, Column, Title, TitleHighlight} from './styles'
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { useAuth } from "../../hooks/useAuth";

const Feed = () => {

    const { user } = useAuth();

    return (
        <div>
            <Header />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card name={user.userName}/>
                    <Card name={user.userName}/>
                    <Card name={user.userName}/>
                    <Card name={user.userName}/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name={user.userName} image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                    <UserInfo percentual={80} name={user.userName} image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                    <UserInfo percentual={80} name={user.userName} image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                </Column>
            </Container>
        </div>
    )
}

export  { Feed };