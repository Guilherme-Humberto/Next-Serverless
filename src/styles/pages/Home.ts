import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleForm = styled.p`
    font-size: 40px;
    font-weight: bold;
`;

export const DescForm = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    max-width: 500px;
    margin: 10px 0;
`;

export const ContainerForm = styled.div`
    margin: 10px;
    width: 500px;
    max-width: 500px;
`;

export const LabelForm = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
`;

export const Input = styled.input`
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    color: #e1e1e6;
`;

export const Button = styled.button`
    width: 100%;
    margin: 20px 0;
    padding: 10px;
    background: #ccc;
    border: transparent;
    outline: none;
    font-size: 20px;
    font-weight: bold;
`