import PropTypes from 'prop-types';
import { TransactionsTable, TitleContainer, TitleList, TitleItem, TableBody, TableData} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <TransactionsTable>
      <TitleContainer>
        <TitleList>
          <TitleItem>Type</TitleItem>
          <TitleItem>Amount</TitleItem>
          <TitleItem>Currency</TitleItem>
        </TitleList>
      </TitleContainer>

      <TableBody>
        {items.map(({id, type, amount, currency}) => (
          <TitleList key={id}>
            <TableData>{type} </TableData>
            <TableData>{amount} </TableData>
            <TableData>{currency} </TableData>
        </TitleList>
      ))}
        
      </TableBody>
</TransactionsTable>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}