import {
  Stack,
  Button,
  Spacer,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  Text,
  Tag,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Box,
} from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
export const ControlPanel = ({ showSettingDetail, showHistory }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let settingDetail = showSettingDetail();
  let history = showHistory();
  const scrollToTheBottom = () => {
    let element = document.documentElement;
    let bottom = element.scrollHeight - element.clientHeight;
    window.scrollTo({
      top: bottom,
      behavior: 'smooth',
    });
  };
  let isAnsweredPoint = history[history.length - 1].isAnswered ? 0 : 1;
  return (
    <>
      <Stack
        direction="column"
        spacing={4}
        align="center"
        position={'fixed'}
        top="5"
        right={'5'}
        alignItems={'end'}
      >
        {history[history.length - 1].remainingQuestionList.length > 0 ||
        history[history.length - 1].isAnswered === false ? (
          <Button
            // color={'gray.600'}
            borderColor={'white'}
            borderWidth="2px"
            variant="solid"
            borderRadius={'lg'}
            // bgColor={'white'}
            h="45px"
            w={'45px'}
            onClick={onOpen}
            colorScheme="blackAlpha"
            boxShadow="dark-lg"
          >
            <SettingsIcon w={'25px'} h="25px" color={'white'} />
          </Button>
        ) : (
          <Button
            color={'white'}
            opacity="0.9"
            borderColor={'white'}
            borderWidth="2px"
            variant="solid"
            borderRadius={'lg'}
            h="45px"
            w={'45px'}
            onClick={onOpen}
            // bgColor="red"
            background="linear-gradient(#e66465, green);"
            // colorScheme="blackAlpha"
            boxShadow="dark-lg"
          >
            <SettingsIcon w={'25px'} h="25px" color={'white'} />
          </Button>
        )}
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>現在のモード:</Text>
            <Tag colorScheme="teal" m={1}>
              {settingDetail.mode}
            </Tag>
            <Text>出題パターン:</Text>
            <Tag colorScheme="teal" m={1}>
              {settingDetail.questionOrder}
            </Tag>
            <Text>出題範囲:</Text>
            {settingDetail.questionRange.map((year, index) => (
              <Tag colorScheme="teal" m="1" key={index}>
                {year}
              </Tag>
            ))}
            <Text>単語絞り込み:</Text>
            {settingDetail.wordFilter.map((word, index) => (
              <Tag colorScheme="teal" m="1" key={index}>
                {word}
              </Tag>
            ))}
            <Divider orientation="horizontal" mt={3} mb="1" />
            <Text>現在の成績:</Text>
            <Flex ml={'4'} mt={3} mb="-2" alignItems={'center'}>
              <CircularProgress
                color="teal"
                trackColor="gray.200"
                value={
                  (100 *
                    (history[history.length - 1].questionNum -
                      isAnsweredPoint)) /
                  (history[history.length - 1].questionNum +
                    history[history.length - 1].remainingQuestionList.length)
                }
              >
                <CircularProgressLabel>
                  {Math.floor(
                    (100 *
                      (history[history.length - 1].questionNum -
                        isAnsweredPoint)) /
                      (history[history.length - 1].questionNum +
                        history[history.length - 1].remainingQuestionList
                          .length)
                  )}
                  %
                </CircularProgressLabel>
              </CircularProgress>
              <Box ml={2}>
                <Text fontWeight={'bold'} pl="2">
                  現在{history[history.length - 1].questionNum}問目 / 残り
                  {history[history.length - 1].remainingQuestionList.length}問
                </Text>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => document.location.reload(true)}
            >
              タイトルに戻る
            </Button>
            <Button colorScheme="blue" mr={3} ml="1" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Stack
        direction="column"
        spacing={4}
        align="center"
        position={'fixed'}
        bottom="5"
        right={'5'}
        alignItems={'end'}
      >
        <Button
          // colorScheme="teal"
          bgColor={'teal'}
          opacity="0.6"
          variant="solid"
          borderRadius={'full'}
          borderWidth="2px"
          borderColor="white"
          h="50px"
          w={'50px'}
          onClick={scrollToTheBottom}
          boxShadow="dark-lg"
        >
          <ChevronDownIcon w={'40px'} h="40px" color="white" />
        </Button>
      </Stack>
    </>

    // <Stack
    //   bg={'teal'}
    //   p="2"
    //   bottom={'0'}
    //   position={'fixed'}
    //   w="100%"
    //   mt={'auto'}
    //   direction="row"
    // >
    //   <Button colorScheme="teal" variant="solid">
    //     <ArrowBackIcon />
    //   </Button>
    //   <Spacer />
    //   <Button
    //     colorScheme="teal"
    //     variant="solid"
    //     minW={'150px'}
    //     letterSpacing="0.1em"
    //   >
    //     Next
    //   </Button>
    //   <Spacer />
    //   <Button colorScheme="teal" variant="solid">
    //     <CheckIcon />
    //   </Button>
    // </Stack>
  );
};
