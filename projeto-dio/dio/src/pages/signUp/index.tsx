import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title
, TitleLogin, Wrapper} from './styles'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IFormData } from "../login/types";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const schema = yup.object({
        email: yup.string().email('O e-mail não é válido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
        userName: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    }).required()

const SignUp = () => {
    const {handleSignUp} = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    const onSubmit = async (formData: IFormData) => {
        handleSignUp(formData);
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="userName" errorMessage={errors?.userName?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleSubmit(onSubmit)}/>
                        </form>
                        <Row>
                            <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</EsqueciText>
                            <Link to='/login'>
                                <CriarText>Já tenho conta.</CriarText>
                            </Link>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export  { SignUp };