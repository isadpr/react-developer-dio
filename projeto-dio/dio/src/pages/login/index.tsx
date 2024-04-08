import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title
, TitleLogin, Wrapper} from './styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IFormData } from './types'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const schema = yup.object({
        email: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    }).required()

const Login = () => {
    const {handleLogin} = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    //react hook form cria a função handleSubmit que recebe como parametro a função onSumit que tem como parametro os dados inseridos pelo usuario
    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
    };
    

    return (
        <div>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça o seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary" type="submit" onClick={handleSubmit(onSubmit)}/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <Link to='/cadastro'>
                                <CriarText>Criar conta</CriarText>
                            </Link>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export  { Login };