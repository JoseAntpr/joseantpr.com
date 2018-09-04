import * as React from 'react';
import  { styled }  from '../../utils/theme/themeStyledComponents';

const linkUrl = 'https://www.linkedin.com/in/joseantpalacios/';
const StyledIcon = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(26, 187, 156);
    color: white;
    height: 36px;
    width: 36px;
    margin: 10px;
    border-radius: 50%;
    text-align: center;

    &:hover {
        background-color: rgba(17, 160, 132);
    }
`
const Icon = ( {href = linkUrl, icon = 'fab fa-linkedin-in'} ) => (
    <a href={href} target="_blank" style={{ textDecoration: 'none'}}>
        <StyledIcon> <i className={icon}/> </StyledIcon>
    </a>
)

export default Icon;