import styled from '@emotion/styled'

export const Table = styled.section`
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: darkgray;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff;
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => {
  return color;
  }};

  &:hover {
    background-color: orange;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;