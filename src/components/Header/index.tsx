import * as React from 'react';
import bgImg from '../../assets/img/bg-2.jpg';
import { styled } from '../../utils/theme/themeStyledComponents';
import Avatar from '../Avatar';
import Icon from '../Icon';

const StyledHeader = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const BackgroundImage = styled.div`
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    filter: blur(2px);
    background: linear-gradient(
        90deg,
        rgba(28, 28, 28, 0.65),
        rgba(122, 118, 118, 0.65),
        rgba(26, 187, 156, 0.65)
      ), url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${ p => p.theme.media.desktop`
      margin-left: 50px;
    `}
    ${ p => p.theme.media.onlyMobile`
        justify-content: center;
    `}
`

const InfoContainer = styled.div`
    display: inline-block;
    height: calc(100% - 30px);
    padding: 15px;
    ${p => p.theme.media.desktop`
        margin-left: 10px;
        border-left: 3px solid rgba(26, 187, 156, 0.65);
    `};
    ${p => p.theme.media.onlyMobile`
        width: 100%;
        text-align: center;
    `};
    color: #f7f7f7;
`
const Header = () => (
    <StyledHeader>
        <BackgroundImage />
        <Wrapper>
            <Avatar />
            <InfoContainer>
                <h2>José Antonio Palacios Ramírez</h2>
                <h3>Full Stack Developer</h3>
                <div>
                    <span style={{marginRight: '5px'}}>
                        <i className='fas fa-envelope' />
                    </span>
                    joseantpalaciosramirez@gmail.com
                </div>
                <Icon />
                <Icon />
                <Icon />
            </InfoContainer>
        </Wrapper>
    </StyledHeader>
);

export default Header;