import { useAuth } from '@/src/commons/hooks/useAuth'
import { getConvertedDate } from '@/src/commons/utils/util'
import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ProfileHeaderProps } from './types'
import { useMutation } from '@apollo/client'
import { DELETE_BOARD } from '../../detail/Detail.queries'
import { TMutation, TMutationDeleteBoardArgs } from '@/src/commons/types/generated/types'

export default function ProfileHeader(props: ProfileHeaderProps) {
  const router = useRouter()
  const toast = useToast()
  const { isWrittenBy } = useAuth()

  const [deleteBoard] = useMutation<
    Pick<TMutation, 'deleteBoard'>,
    TMutationDeleteBoardArgs
  >(DELETE_BOARD)

  const onClickMoveToUserPage = () => {
    router.push(`/${props.userData.id}`)
  }

  const onClickMoveToDetailPage = () => {
    router.push(`/boards/${props.boardId}/edit`)
  }

  const onClickDeleteDetailPage = () => {
    deleteBoard({ variables: { boardid: props.boardId } })
      .then(res => res.data?.deleteBoard)
      .then(isCompletion => {
        if (isCompletion) {
          toast({
            title: '성공',
            description: '삭제 완료',
            status: 'success',
            position: 'top',
          })

          router.push(`/`)
        }
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({
            title: '에러',
            description: error.message,
            status: 'error',
            position: 'top',
          })
        }
      })
  }

  return (
    <Flex justify={'space-between'} align={'center'}>
      <HStack spacing={'14px'} onClick={onClickMoveToUserPage} cursor={'pointer'}>
        <Avatar
          w={'40px'}
          h={'40px'}
          src={
            props.userData.picture ? props.userData.picture : 'https://bit.ly/broken-link'
          }
        />
        <Text fontWeight={700} fontSize={16}>
          {props.userData.nickName}
        </Text>
        <Badge bgColor="dPrimary" color="white" fontWeight={'bold'}>
          {props.userData.jobGroup}
        </Badge>
      </HStack>
      <HStack spacing={'10px'}>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getConvertedDate(props.createdAt)}
        </Text>
        {isWrittenBy(props.userData.id) && (
          <>
            <Button
              color="white"
              bgColor="green.500"
              colorScheme="green"
              size={'sm'}
              onClick={onClickMoveToDetailPage}>
              수정
            </Button>
            <Button
              variant={'outline'}
              color="dRed.500"
              borderColor={'dRed.500'}
              colorScheme="dRed"
              size={'sm'}
              onClick={onClickDeleteDetailPage}>
              삭제
            </Button>
          </>
        )}
      </HStack>
    </Flex>
  )
}
