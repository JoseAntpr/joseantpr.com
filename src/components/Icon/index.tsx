import * as React from 'react';
import  { styled }  from '../../utils/theme/themeStyledComponents';

const linkUrl = 'https://www.linkedin.com/in/joseantpalacios/';
const StyledIcon = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(26, 187, 156, 0.65);
    color: white;
    height: 36px;
    width: 36px;
    margin: 10px;
    border-radius: 50%;
    text-align: center;
`
const Icon = ( {href = linkUrl, icon = 'fab fa-linkedin-in'} ) => (
    <a href={href} target="_blank">
        <StyledIcon> <i className={icon}/> </StyledIcon>
    </a>
)

export default Icon;