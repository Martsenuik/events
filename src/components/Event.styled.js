import styled from "styled-components";

export const TitleBox = styled.div`
   background-color: #6f0000ff;
   width: 100vw;
   display: flex;
   justify-content: center;
`;

export const Title = styled.h2`
   color: black;
`;

export const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   background-color: #6f0000ff;
   padding: 55px;
`;

export const Item = styled.li`
   background-color: black;
   display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    width: 249px;
    padding-left: 20px;
    border-radius: 20px;
    &:hover {
    border: 2px solid red;
    box-shadow:
      inset 0 0 45px rgba(255, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.6);
  }
`;

export const Name = styled.li`
   font-size:16px;
   font-weight: bold;
   color: #b10000ff;
`;

export const Text = styled.p`
   color: #9a0000ff;
`;
