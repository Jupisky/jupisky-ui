import { ReactElement } from 'react'
import { Button, Card, Title, Text } from '@jupisky/jupisky-react-components'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import Img from 'src/components/layout/Img'
import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import { LOAD_SAFE_ROUTE, OPEN_SAFE_ROUTE } from 'src/routes/routes'

import Logo from './logo.png'

function Welcome(): ReactElement {
  const jupiskyLink = "/"+process.env.REACT_APP_JUPISKY_CHAIN+":"+process.env.REACT_APP_JUPISKY_ADDRESS+"/balances"
  return (
    <Page align="center">
      <Block>
        <Title size="md" strong>
          Welcome to Jupisky.
        </Title>
        <CardsContainer>
          <StyledCard>

            <CardContentContainer>
              <Img alt="Jupisky" height="100%" src={Logo} />
            </CardContentContainer>

            <Divider orientation="vertical" flexItem />

            {/* Load Jupisky */}
            <CardContentContainer>

              <Title size="sm" strong withoutMargin>
                Jupisky
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">
                    You can load jupisky multisig wallet here.
                </Text>
              </CardDescriptionContainer>
              <Button
                variant="bordered"
                iconType="safe"
                iconSize="sm"
                size="lg"
                color="primary"
                component={Link}
                to={jupiskyLink}
              >
                <StyledButtonLabel size="xl" color="secondary">
                  Jupisky on Polygon
                </StyledButtonLabel>
              </Button>
              <br />
              <Button
                iconType="safe"
                iconSize="sm"
                size="lg"
                color="secondary"
                component={Link}
                to={jupiskyLink}
                disabled={true}
              >
                <StyledButtonLabel size="xl" color="primary">
                  Jupisky on BSC
                </StyledButtonLabel>
              </Button>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer>
      </Block>
    </Page>
  )
}

export default Welcome

const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
`

const StyledCard = styled(Card)`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`

const StyledButtonLabel = styled(Text)`
  min-width: 130px;
`

const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`
