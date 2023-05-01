import PropTypes from 'prop-types';
import { Table, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import { getRandomColor } from 'components/getRandomColor'

export const Statistics = ({ title, data }) => {
  console.log(data)
  return (
    <Table>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <Item color={getRandomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage >{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Table>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}

