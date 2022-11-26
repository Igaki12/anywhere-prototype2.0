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
export const ControlPanel = ({ log, isAnswered }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const scrollToTheBottom = () => {
    let element = document.documentElement;
    let bottom = element.scrollHeight - element.clientHeight;
    window.scrollTo({
      top: bottom,
      behavior: 'smooth',
    });
  };
  let achievementRate = Math.floor(
    (100 * (log.asked.length + (isAnswered ? 1 : 0))) /
      (log.asked.length + log.remaining.length + 1)
  );
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
        {log.remaining.length > 0 || isAnswered === false ? (
          <Button
            // color={'gray.600'}
            borderColor={'white'}
            borderWidth="2px"
            variant="solid"
            borderRadius={'lg'}
            // bgColor={'white'}
            h="45px"
            w={'45px'}
            onClick={() => {
              onOpen();
              console.log(isOpen);
            }}
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
            <Text>出題パターン:</Text>
            <Tag colorScheme="teal" m={1}>
              {log.order}
            </Tag>
            <Text>出題範囲:</Text>
            {log.range.map((year, index) => (
              <Tag colorScheme="teal" m="1" key={index}>
                {year}
              </Tag>
            ))}
            <Text>単語絞り込み:</Text>
            {log.wordFilter.map((word, index) => (
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
                value={achievementRate}
              >
                <CircularProgressLabel>
                  {achievementRate}%
                </CircularProgressLabel>
              </CircularProgress>
              <Box ml={2}>
                <Text fontWeight={'bold'} pl="2">
                  現在{log.asked.length + 1}問目 / 残り
                  {log.remaining.length}問
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
  );
};
