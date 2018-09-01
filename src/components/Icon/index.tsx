import * as React from 'react';
import styled from '../../utils/theme/themeStyledComponents';

const linkUrl = 'https://www.linkedin.com/in/joseantpalacios/';
const StyledIcon = styled.span`
    display: inline-block;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 50%;
    text-align: center;
`
const Icon = ( {href = linkUrl, icon = 'fab fa-linkedin-in'} ) => (
    <a href={href} target="_blank">
        <StyledIcon> <i className={icon}/> </StyledIcon>
    </a>
)

export default Icon;