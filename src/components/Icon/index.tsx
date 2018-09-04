import * as React from 'react';
import  { styled }  from '../../utils/theme/themeStyledComponents';

interface Props {
    href?: string;
    icon?: string;
}

const linkUrl = 'https://www.linkedin.com/in/joseantpalacios/';
const StyledIcon = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.colors.green};
    color: ${ p => p.theme.colors.white};
    height: 36px;
    width: 36px;
    margin: 10px;
    border-radius: 50%;
    text-align: center;

    &:hover {
        background-color: ${ p => p.theme.colors.hoverColor(p.theme.colors.green)};
    }
`
const Icon: React.SFC<Props> = ( {href = linkUrl, icon = 'fab fa-linkedin-in'} ) => (
    <a href={href} target="_blank" style={{ textDecoration: 'none'}}>
        <StyledIcon> <i className={icon}/> </StyledIcon>
    </a>
)

export default Icon;