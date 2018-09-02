import * as React from 'react';
import bgImg from '../../assets/img/bg-2.jpg';
import styled from '../../utils/theme/themeStyledComponents';
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
    opacity: 0.7;
    filter: blur(5px);
    background: linear-gradient(
        145deg,
        rgba(234, 21, 85, 0.4),
        rgba(21, 152, 234, 0.4)
      ), url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const InfoContainer = styled.div`
    padding: 15px;
`

const Header = () => (
    <StyledHeader>
        <BackgroundImage />
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
        
    </StyledHeader>
);

export default Header;