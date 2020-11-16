import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles'

const List: React.FC = () => {
  const options = [
    { value: 'Benhur', label: 'Benhur' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Pedro', label: 'Pedro' }
  ]
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#fff">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor=" #e44c4e"
          title="Conta de luz"
          subTitle="16/11/2020"
          amount="R$ 130,00"
        />

      </Content>
    </Container>
  )
}

export default List;
