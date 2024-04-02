import React from 'react'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture}  from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                        <div>
                            <h4>Isa</h4>
                            <p>Há 8 minutos</p>
                        </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>projeto pipipopo <strong>Saiba mais...</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>HTML CSS JS</h4>
                    <p>
                        <FiThumbsUp /> 16
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }