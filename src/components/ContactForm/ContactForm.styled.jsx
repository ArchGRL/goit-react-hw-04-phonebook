import styled from '@emotion/styled';

export const Form = styled.form`
width: 300px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1.5px solid #070236;
`
export const Label = styled.label`
margin-bottom: 20px;
`

export const Input = styled.input`
width: 200px;
display: flex;
flex-direction: column;
margin-top: 5px;
`

export const Button = styled.button`
width: 100px;
background-color: white;
border-width: 1px;
border-radius: 2px;
border-style: inset;
border-color: rgb(133, 133, 133);
&:hover {
    cursor: pointer;
    color: white;
    background-color: #569DAA;
    border-color:569DAA;
  }
`