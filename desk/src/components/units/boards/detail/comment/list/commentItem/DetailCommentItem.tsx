import { getDateToRelative } from '@/src/commons/utils/util'
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import { DetailCommentItemProps } from '../DetailCommentList.types'
import DetailCommentReplyList from '../commentReplyItem/DetailCommentReplyList'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function DetailCommentItem(props: DetailCommentItemProps) {
  const commentData = props.commentData
  const { isWrittenBy, myUserInfo } = useAuth()
  const [isOpenReply, setIsOpenReply] = useState(false)

  const onClickShowReply = useCallback(() => {
    setIsOpenReply(isOpen => !isOpen)
  }, [])

  return (
    <VStack pt={'20px'} spacing={'12px'} align={'stretch'}>
      <HStack spacing={'12px'} justifyContent={'space-between'}>
        <HStack spacing={'16px'}>
          <Avatar
            w={'34px'}
            h={'34px'}
            src={commentData.user.picture || 'https://bit.ly/broken-link'}
          />
          <Text
            fontWeight={700}
            fontSize={16}
            color={useColorModeValue('dBlack', 'dGray.light')}>
            {commentData.user.nickName}
          </Text>
        </HStack>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getDateToRelative(commentData.createdAt)}
        </Text>
      </HStack>
      <VStack pl={'52px'} spacing={'12px'} align={'stretch'}>
        <Text
          pr={'52px'}
          fontWeight={500}
          fontSize={16}
          color={useColorModeValue('dBlack', 'dGray.light')}>
          {commentData.content}
        </Text>
        <HStack justify={'space-between'}>
          <Button
            variant={'outline'}
            size={'xs'}
            onClick={onClickShowReply}
            color={isOpenReply ? 'dGray.light' : ''}
            bgColor={isOpenReply ? useColorModeValue('teal.500', 'dPrimary') : ''}>
            {`답글 ${
              (commentData.replies?.length ?? 0) === 0 ? '' : commentData.replies?.length
            }`}
          </Button>
          {isWrittenBy(props.commentData.user.id) && (
            <Button
              variant={'ghost'}
              size={'xs'}
              color={'dRed.400'}
              onClick={props.onClickDeleteComment(commentData.id)}>
              삭제
            </Button>
          )}
        </HStack>
        {/* 대댓글 */}
        <DetailCommentReplyList
          isReplyLoading={props.isReplyLoading}
          commentId={props.commentData.id}
          isOpenReply={isOpenReply}
          replyDatas={commentData.replies ?? []}
          onClickCreateReplyComment={props.onClickCreateReplyComment}
          onClickDeleteReplyComment={props.onClickDeleteReplyComment}
        />
      </VStack>
      <Divider pt={'10px'} />
    </VStack>
  )
}
