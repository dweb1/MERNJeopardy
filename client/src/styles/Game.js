import styled from 'styled-components';

export const GameStyle = styled.div`
  text-align: center;
  h1, h3{
    margin: 4px;
  }
`;

export const GameBoardStyles = styled.div`
  background-color: black;
  height: 80vh;
  width: 90vw;
  margin: 0 auto;
  color: white;
`;

export const TileStyle = styled.div`
  box-sizing: border-box;
  border: 3px solid black;
  background: #2A3698;
  height: 16.67%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Lato';
  font-weight: 700;
  color: ${props => props.question ? "#ffff5f" : "FFF"}
`;

export const CategoryStyle = styled.div`
  height: 100%;
  width: 20%;
`;
