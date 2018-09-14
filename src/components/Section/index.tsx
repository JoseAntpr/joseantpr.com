import * as React from 'react';
import { styled } from '../../utils/theme/themeStyledComponents';

interface Props {
    title: string;
}

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px; 
    width: 100%;
    align-items: center;

`

const Section: React.SFC<Props> = ( {title, children} ) => {
    return (
        
        <SectionWrapper>
            <h3>{title}</h3>
            {children}
        </SectionWrapper>
    );
};

export default Section;