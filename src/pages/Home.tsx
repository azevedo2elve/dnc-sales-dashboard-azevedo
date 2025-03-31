// COMPONENTS
import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'
import { Container, Grid2 } from '@mui/material'

// HOOKS
import { useGet } from '@/hooks'

// UTILS
import { currencyConverter, highlightTextConverter } from '@/utils'

// TYPES
import { HighlightsData, StarsData, NewsData } from '@/types'

function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

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
        <Grid2 container spacing={4}>
          {!highlightsError && (
            <>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas no mês
                      </StyledH2>
                      <StyledH3 className="mb-1" size={40} lineheight={40}>
                        {currencyConverter(highlightsData[0].value)}
                      </StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <CardComponent
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do mês
                      </StyledH2>
                      <StyledH3
                        className="mb-1"
                        size={40}
                        lineheight={40}
                        color="white"
                      >
                        {currencyConverter(highlightsData[1].value)}
                      </StyledH3>
                      <StyledSpan color="white">
                        {highlightTextConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Leads contactados</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineheight={40}>
                        {highlightsData[2].value}
                      </StyledH3>
                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid2>
            </>
          )}

          <Grid2 size={{ xs: 12, md: 7 }}>
            <CardComponent>
              <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 1500.5]}
                type="line"
              />
            </CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <CardComponent>
              <StyledH2 className="mb-1">Maiores vendedores do mês</StyledH2>
              <AvatarList listData={mockListData} />
            </CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <CardComponent>
              <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
              <CustomTable
                headers={mockTableData.headers}
                rows={mockTableData.rows}
              />
            </CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <CardComponent>
              <StyledH2 className="mb-1">Maiores vendedores por mês</StyledH2>
              <CustomChart
                labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
                data={[1000.12, 2456.54, 986.32, 654.89, 1234.56, 1500.5]}
                type="bar"
              />
            </CardComponent>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default Home
