import styled from 'styled-components';

export const Wrapper = styled.section`
    background: ${p => p.theme.colors.mainBackground};  
    margin-top: 10%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: ${p => p.theme.space[5]}px;
    padding: ${p => p.theme.space[5]}px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
`;
