import * as React from 'react';
import styled from '../../utils/theme/themeStyledComponents';

const imgUrl = 'https://media.licdn.com/dms/image/C4E03AQGUbpMGgZo7ag/profile-displayphoto-shrink_200_200/0?e=1541030400&v=beta&t=SToow7_rboLQLKMYPFi6IrQzp5o1vpa7vDYDj03ov-I';
const StyledAvatar = styled.img`
    background-color: red;
    border-radius: 50%;
`

const Avatar = () => (
    <StyledAvatar src={imgUrl}/>
);

export default Avatar;