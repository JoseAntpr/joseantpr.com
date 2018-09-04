import * as React from 'react';
import { styled } from '../../utils/theme';

const StyledCard = styled.div`
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
`


const Card: React.SFC = ({children}) => (
    <StyledCard>{children}</StyledCard>
)

export default Card;