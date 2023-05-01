import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid darkgray;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, .12),
    0px 1px 1px rgba(0, 0, 0, .14),
    0px 2px 1px rgba(0, 0, 0, .2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin: 20px 0;
`;

export const Avatar = styled.img`
margin: 20px 0;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 120px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: darkgray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: darkgray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  border-top: 1px solid darkgray;
  background-color: beige;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

export const Label = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
  color: darkgray;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
