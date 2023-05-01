import styled from '@emotion/styled'

export const FriendItem = styled.li`
  height: 80px;
  width: 300px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 30px;
`;

export const FriendName = styled.p`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 700;
  color: darkslategrey;
`;

const setBgColor = ({ status }) => {
  switch (status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'black';
  }
}

export const Chip = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${setBgColor };
`;