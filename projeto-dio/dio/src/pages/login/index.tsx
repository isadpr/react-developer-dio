import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title
, TitleLogin, Wrapper} from './styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api' 
import { IFormData } from './types'
import { IUser } from './types'

const schema = yup.object({
        email: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    }).required()

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // console.log(isValid, errors)

    //react hook form cria a função handleSubmit que recebe como parametro a função onSumit que tem como parametro os dados inseridos pelo usuario
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data: allUsers } = await api.get('/users');
            const isValidUser = allUsers.find((user:IUser) => user.email === formData.email && user.password === formData.password);
            console.log(isValidUser);
            if(isValidUser) {
                navigate('/feed');
            } else {
                alert('E-mail ou senha inválidos')
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
                        <TitleLogin>Faça o seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary" type="submit" onClick={handleSubmit(onSubmit)}/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export  { Login };