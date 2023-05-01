import styled from '@emotion/styled'

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  width: 500px;
  margin: 0 auto;
  tr:nth-child(even) {
    background-color: #d5d5d5;
  }
`;

export const TitleContainer = styled.thead`
  background-color: rgb(31, 217, 233);
`;

export const TableBody = styled.tbody``;

export const TitleList = styled.tr`
    td:first-child {
    text-transform: capitalize;
    text-align: left;
    padding-left: 60px;
  }`;

export const TitleItem = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  width: calc(100% / 3);
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-align: center;
  font-size: 12px;
  color: rgb(109, 107, 107);
`;