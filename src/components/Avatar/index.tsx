import * as React from 'react';
import { styled } from '../../utils/theme/themeStyledComponents';

interface Props {
    img?: string;
};

const imgUrl = 'https://media.licdn.com/dms/image/C4E03AQGUbpMGgZo7ag/profile-displayphoto-shrink_200_200/0?e=1541030400&v=beta&t=SToow7_rboLQLKMYPFi6IrQzp5o1vpa7vDYDj03ov-I';
const StyledAvatar = styled.img`
    border: 3px solid ${p => p.theme.colors.green};
    border-radius: 50%;
    margin: 15px;
    box-shadow: 2px 2px 0px 2px ${p => p.theme.colors.transparentize(0.7, p.theme.colors.black)};
`;

const Avatar: React.SFC<Props> = ({ img = imgUrl}) => (
    <StyledAvatar src={img}/>
);

export default Avatar;