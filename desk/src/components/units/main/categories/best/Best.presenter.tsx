import { Center } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import MainBoardSlider from '../../components/mainBoardSlider'
import { BestUIProps } from './Best.types'

export default function BestUI(props: BestUIProps) {
  const { categoryTitle, images, titles, writers } = props

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={false} />
      <Center m={2}>
        <MainBoardSlider images={images} titles={titles} writers={writers} />
      </Center>
    </>
  )
}
