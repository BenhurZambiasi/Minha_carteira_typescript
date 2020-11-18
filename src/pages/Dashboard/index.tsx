import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles'


const Dashboard: React.FC = () => {
  const options = [
    { value: 'Benhur', label: 'Benhur' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Pedro', label: 'Pedro' }
  ]
  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#fff">
        <SelectInput options={options} onChange={() => { }} />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;
