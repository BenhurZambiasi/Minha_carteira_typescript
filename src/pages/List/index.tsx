import React, { useEffect, useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import { formatCurrency, formatDate } from '../../utils/formatedCurrency';
import { Container, Content, Filters } from './styles'


interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}
interface IData {
  id: string,
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const { type } = match.params;

  const obj = useMemo(() => {
    return type === "entrada" ? { title: 'Entradas', lineColor: "#f7931b" } : { title: "Saídas", lineColor: "#e44c4e" }
  }, [type]);

  const listData = useMemo(() => {
    return type === "entrada" ? gains : expenses;
  }, [type])

  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ]
  const years = [
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
  ]



  useEffect(() => {
    const formattedDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const response = formattedDate.map(item => {
      return {
        id: String(new Date().getTime()) + item.amount,
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? "#4e41f0" : "#e44c4e",
      }
    })
    setData(response)
  }, [listData, monthSelected, yearSelected]);


  return (
    <Container>
      <ContentHeader title={obj.title} lineColor={obj.lineColor}>
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={({ target }) => setMonthSelected(target.value)} />

        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={({ target }) => setYearSelected(target.value)} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
        <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filters>

      <Content>
        {
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subTitle={item.dateFormatted}
              amount={item.amountFormatted}
            />

          ))
        }
      </Content>
    </Container>
  )
}

export default List;
