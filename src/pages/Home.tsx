import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1500.5),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2050.2),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3123.45),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>email@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>email@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>email@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 1500.5]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
