import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import JobGroupCategoryBox from '../../components/jobGroupCategoryBox'
import { JobGroupUIProps } from './JobGroup.types'

export default function JobGroupUI(props: JobGroupUIProps) {
  return (
    <>
      <Box pt={4}>
        <CategoryHeader categoryTitle={props.categoryTitle} moreButtonHidden={false} />
      </Box>
      <Flex pb={6} m="auto" maxW="1080px" justifyContent="center">
        <SimpleGrid columns={7} gap={4}>
          {props.jobGroupName.map((job, index) => (
            <JobGroupCategoryBox
              key={index}
              job={job}
              onClick={props.onClickMoveToJobGroupMore}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}