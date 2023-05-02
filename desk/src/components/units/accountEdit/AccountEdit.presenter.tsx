import FileUpload from '@/src/components/ui/fileUpload'
import SignoutModalButton from '@/src/components/units/accountEdit/components/signoutModalButton'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  IconButtonProps,
  Input,
  Link,
  Text,
  VStack,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react'
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'

import { BsLink45Deg } from 'react-icons/bs'
import { AccountEditUIProps } from './AccountEdit.types'

export default function AccountEditUI(props: AccountEditUIProps) {
  return (
    <Box maxW="776px" m={'120px auto 0'} p={'0 20px 0'}>
      <Flex direction="column" justify={'space-between'} gap="25px">
        <Flex>
          <Box w="40%">
            <Center w="80%">
              <FileUpload
                type="profile"
                width="125px"
                height="125px"
                fileUrl=""
                onChangeFile={props.onChangeFile}
                onChangeFileUrl={props.onChangeFileUrl}
                fileUploadRef={props.fileUploadRef}
              />
            </Center>
          </Box>
          <Box w="60%" ml="55px" my={'auto'}>
            <Button
              color={useColorModeValue('#fff', '#1A202C')}
              bgColor={'dPrimary'}
              _hover={{ bg: 'dPrimaryHover.dark' }}
              onClick={props.onClickUploadButton}>
              이미지 업로드
            </Button>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="dGray.medium" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="26px" fontWeight="700">
                책상 주인
              </Text>
              <Badge>IT</Badge>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Editable
              textAlign="start"
              defaultValue="Rasengan ⚡️"
              fontSize="26px"
              fontWeight="700"
              isPreviewFocusable={false}>
              <Flex
                justify={'space-between'}
                align="center"
                fontSize="26px"
                fontWeight="700">
                <EditablePreview />
                <Input as={EditableInput} focusBorderColor={'dPrimary'} />
                <props.EditableControls />
              </Flex>
            </Editable>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="20px" fontWeight="500">
                한 줄 소개
              </Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Text fontSize="20px" fontWeight="500">
              <Editable
                textAlign="start"
                defaultValue="Rasengan ⚡️"
                fontSize="20px"
                fontWeight="500"
                isPreviewFocusable={false}>
                <Flex justify={'space-between'} fontSize="20px" fontWeight="500">
                  <EditablePreview />
                  <Input as={EditableInput} focusBorderColor={'dPrimary'} />
                  <props.EditableControls />
                </Flex>
              </Editable>
            </Text>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="18px" fontWeight="500">
                email
              </Text>
              props.
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <Text fontSize="18px">abc@google.com</Text>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="18px" fontWeight="500">
                SNS 계정
              </Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            {/* <Link href="https://www.example.com" isExternal> */}
            <Flex direction="column" alignItems="stretch" justifyContent="flex-start">
              {/* <Text fontSize="16px">sns 링크로 이동하기</Text> */}
              {/* SNS 계정 추가하기 */}
              <VStack align="stretch">
                {props.snsLinks.map(link => (
                  <Flex
                    key={link.id}
                    direction="row"
                    justifyContent="space-between"
                    align="center">
                    <Flex align="center">
                      <Icon size="16px" as={BsLink45Deg} mr={1} />
                      <Link>
                        <Input
                          id={`${link.id}`}
                          variant="unstyled"
                          placeholder="SNS 계정 추가 (최대 3개)"
                          onChange={props.onChangeLink}
                        />
                      </Link>
                    </Flex>
                    {link.id === props.nextId.current ? ( // 추가 될 링크
                      props.snsLinks.length >= props.SnsLinkCount.MAX ? (
                        <Button
                          id={`${link.id}`}
                          w={'40px'}
                          h={'40px'}
                          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                          onClick={() => props.deleteSnsLink(link.id)}>
                          <MinusIcon boxSize={3} />
                        </Button>
                      ) : (
                        <Button
                          w={'40px'}
                          h={'40px'}
                          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                          onClick={props.addSnsLink}>
                          <AddIcon boxSize={3} />
                        </Button>
                      )
                    ) : props.snsLinks.length <= props.SnsLinkCount.MIN ? ( // 기존 링크
                      <Button
                        w={'40px'}
                        h={'40px'}
                        bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                        onClick={props.addSnsLink}>
                        <AddIcon boxSize={3} />
                      </Button>
                    ) : (
                      <Button
                        id={`${link.id}`}
                        w={'40px'}
                        h={'40px'}
                        bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                        onClick={() => props.deleteSnsLink(link.id)}>
                        <MinusIcon boxSize={3} />
                      </Button>
                    )}
                  </Flex>
                ))}
              </VStack>
            </Flex>
          </Box>
        </Flex>
        <Divider border="1px" borderColor="#bababa" />
        <Flex>
          <Box w="40%">
            <Center flexDirection="column" w="80%">
              <Text fontSize="18px" fontWeight="500">
                회원 탈퇴
              </Text>
            </Center>
          </Box>
          <Box w="60%" ml="55px">
            <SignoutModalButton />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}