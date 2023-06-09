import { Grid, GridItem, Wrap, WrapItem } from '@chakra-ui/react'
import LoginForm from '@/src/components/units/auth/login/components/LoginForm'

export default function LoginUI() {
  return (
    <Wrap justify={'center'}>
      <WrapItem bg={'red.100'} w={'500px'}>
        <Grid w={'100%'} templateColumns={'repeat(1, 1fr)'} gap={3} bg={'red.300'}>
          <GridItem w={'100%'} bg={'azure'}>
            <LoginForm />
          </GridItem>
        </Grid>
      </WrapItem>
    </Wrap>
  )
}
