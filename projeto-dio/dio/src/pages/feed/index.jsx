import { Header } from "../../components/Header";
import {Container, Column, Title, TitleHighlight} from './styles'
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (
        <div>
            <Header authenticated={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name="Isa" image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                    <UserInfo percentual={80} name="Isa" image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                    <UserInfo percentual={80} name="Isa" image="https://avatars.githubusercontent.com/u/99506836?s=400&u=ad14ced68b75d624fa3455075c12510175883379&v=4"/>
                </Column>
            </Container>
        </div>
    )
}

export  { Feed };