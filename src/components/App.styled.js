import styled from 'styled-components';

export const Div = styled.div`  
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    padding: ${p => p.theme.space[5]}px;
    background: ${p => p.theme.colors.mainBackground};  
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;


