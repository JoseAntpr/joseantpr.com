import * as React from 'react';
import bgImg from '../../assets/img/bg-2.jpg';
import { styled } from '../../utils/theme/themeStyledComponents';
import Avatar from '../Avatar';
import Icon from '../Icon';


const StyledHeader = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
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
        ${ p => p.theme.colors.transparentize(0.35, p.theme.colors.black)},
        rgba(122, 118, 118, 0.65),
        ${ p => p.theme.colors.transparentize(0.35, p.theme.colors.green)}
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
        border-left: 3px solid ${p.theme.colors.green};
    `};
    ${p => p.theme.media.onlyMobile`
        width: 100%;
        text-align: center;
    `};
    color: ${p => p.theme.colors.whiteGray};
`
const Header: React.SFC = () => (
    <StyledHeader>
        <BackgroundImage />
        <Wrapper>
            <Avatar />
            <InfoContainer>
                <h2 style={{fontSize: '1.8rem'}}>José Antonio Palacios Ramírez</h2>
                <h3 style={{fontSize: '1.2rem', wordBreak: 'break-word'}}>Full Stack Developer</h3>
                <div style={{fontSize: '1rem', wordBreak: 'break-word'}}>
                    <span style={{marginRight: '5px'}}>
                        <i className='fas fa-envelope' />
                    </span>
                    joseantpalaciosramirez@gmail.com
                </div>
                <Icon href="https://twitter.com/JoseAntPR" icon="fab fa-twitter"/>
                <Icon href="https://github.com/JoseAntpr" icon="fab fa-github"/>
                <Icon />
            </InfoContainer>
        </Wrapper>
    </StyledHeader>
);

export default Header;