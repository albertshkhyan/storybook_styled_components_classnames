import React from 'react';
import styled from 'styled-components';


// console.log('styled', styled);
// console.log('styled.h1', styled.h1);
// console.log('styled.h1``', styled.h1``);



////// Create component that'll render tag with some styles
const Title1 = styled.h1`
font-weight:bold;
font-size:2em;
color:${(props) => props.color || 'magenta'};
border:1px solid red;
width:150px;
`;


////Նոր component, որը հիմնված է Title1 կոմպոնենտի վրա, բայց որոշ ավել ոճերով
const Title2 = styled(Title1)`
font-weight:bold;
font-size:2em;
color:tomato;
`;




const Blog = ()  => {
    return (
        <section>
            <Title1>Hello</Title1>
            <Title2>Hello</Title2>
        </section>
    )
}

export default Blog;