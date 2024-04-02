import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title
, TitleLogin, Wrapper} from './styles'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api' 

const schema = yup.object({
        email: yup.string().email('O e-mail não é válido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
        userName: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    }).required()

const SignUp = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // console.log(isValid, errors)

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválidos')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
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
                            <CriarText>Já tenho conta.</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export  { SignUp };