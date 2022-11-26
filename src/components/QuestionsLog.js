// history[history.length - 1].askingQuestion.questionSentence
//   .split(new RegExp('(associated)', 'g'))
import {
  Image,
  Box,
  Badge,
  Button,
  Text,
  // useToast,
  IconButton,
  Flex,
  Spacer,
  // useDisclosure,
  Collapse,
  Tooltip,
  Skeleton,
} from '@chakra-ui/react';
import { ArrowDownIcon, RepeatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { ResultBar } from './ResultBar';
import '../App.css';
import { useState } from 'react';

export const QuestionsLog = ({
  // questionList,
  // loadData,
  // showHistory,
  nextQuestion,
  // checkAnswer,
  // hideAnswer,
  // showSettingDetail,
  // reviewQuestion,
  // reviewAskingQuestion,
  toggleReview,
  // saveHistory,
  technicalTerm,
  log,
  questionList,
  toast,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const toast = useToast()
  const toastGoodJob = () => {
    if (log.remaining.length === 0) {
      toast({
        position: 'top-right',
        title: 'GOOD JOB',
        description: '全ての問題が終わりました！',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const toastDictionary = sentence => {
    toast({
      title: `${technicalTerm
        .find(terms => terms.term.indexOf(sentence) !== -1)
        .term.join(' / ')}`,
      description: `${
        technicalTerm.find(terms => {
          return terms.term.indexOf(sentence) !== -1;
        }).explanation
      }`,
      status: 'info',
      containerStyle: {
        maxWidth: 'sm',
      },
      variant: 'left-accent',
      duration: 30000,
      isClosable: true,
      position: 'top-right',
    });
  };
  const makeQuestion = id => {
    return questionList
      .find(
        (group, groupI) =>
          group.groupTag === log.range[parseInt(id.slice(0, 3))]
      )
      .groupContents.reduce((prevContent, curContent, contentI) => {
        if (contentI !== parseInt(id.slice(-3))) return prevContent;
        let randomizedChoices = [];
        if (curContent.choices && curContent.choices.length > 0) {
          for (let i = 0; i < curContent.choices.length; i++) {
            randomizedChoices.splice(
              Math.floor(Math.random() * (i + 1)),
              0,
              curContent.choices[i]
            );
          }
          console.log('randomIndexes:', randomizedChoices);
        }
        return {
          id: id,
          groupTag: log.range[parseInt(id.slice(0, 3))],
          detailInfo:
            curContent.detailInfo && curContent.detailInfo !== ''
              ? curContent.detailInfo
              : `(${contentI + 1})`,
          questionImg: curContent.questionImg ? curContent.questionImg : [],
          questionSentence: curContent.questionSentence,
          randomizedChoices: randomizedChoices,
          answerImg: curContent.answerImg ? curContent.answerImg : [],
          answer:
            curContent.answer && curContent.answer !== ''
              ? curContent.answer
              : '解答準備中',
          commentary:
            curContent.commentary && curContent.commentary !== ''
              ? curContent.commentary
              : '',
        };
      }, {});
  };

  return (
    <>
      <ul>
        {/* {questionList.map((group) =>
          group.groupContents.map((question, index) => ( */}
        {log.asked && log.asked.length > 0 ? (
          // history[history.length - 1].askedQuestionList
          //   .filter(question => question.id)
          log.asked
            .reduce((prevId, curId, index) => {
              if (prevId && prevId.length > 9) return prevId;
              console.log(makeQuestion(curId));

              return [makeQuestion(curId), ...prevId];
            }, [])
            .map((question, index) => (
              <>
                <Box
                  maxW="2xl"
                  bgColor={'white'}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={1}
                  mt="3"
                  key={index + 'QuestionBox'}
                >
                  {question.questionImg !== [] &&
                    question.questionImg.map((image, imageNum) => (
                      <Image
                        src={image}
                        alt="写真読み込みエラー"
                        key={index + imageNum + 'QuestionImage'}
                        fallback={<Skeleton height="100px" />}
                      />
                    ))}
                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        key={index + 'questionBadge'}
                      >
                        {question.groupTag}
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                        key={index + 'QuestionBox2'}
                      >
                        {question.detailInfo}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                    >
                      {question.questionSentence}
                      {question.randomizedChoices !== [] ? (
                        question.randomizedChoices.map(
                          (choice, choiceIndex) => (
                            <Flex ml={4} fontWeight="normal" key={choiceIndex}>
                              <Text>{choiceIndex + 1}.</Text>
                              <Text pl={2}>{choice}</Text>
                            </Flex>
                          )
                        )
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box
                  maxW="2xl"
                  mb={'100px'}
                  borderWidth="2px"
                  borderColor={'red.100'}
                  borderRadius="lg"
                  overflow="hidden"
                  bg={'red.100'}
                  key={index + 'AnswerBox'}
                >
                  <Box w={'100%'} bgColor="white" m={0} p="0">
                    {question.answerImg !== [] &&
                      question.answerImg.map(image => (
                        <Image
                          src={image}
                          alt="写真読み込みエラー"
                          fallback={<Skeleton height="100px" />}
                        />
                      ))}
                  </Box>

                  <Box p="4" pb={0}>
                    <Box display="flex" alignItems="baseline">
                      <Badge variant="solid" colorScheme="red">
                        解答
                      </Badge>
                      <Box
                        color="red.700"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize=""
                        ml="2"
                        key={index + 'AnswerBox2'}
                      >
                        {question.answer}
                      </Box>
                    </Box>
                    <Badge variant="solid" colorScheme="red">
                      解説
                    </Badge>
                    <Box mt="1" as="h4" lineHeight="tight">
                      {question.commentary}
                    </Box>
                  </Box>
                  <Flex pr={4} pb={4}>
                    <Spacer />
                    <Tooltip
                      hasArrow
                      area-label="ボタンを押すと、この質問がもう一度出題し直されます。ランダム出題の場合はランダムに、順番通り出題の場合は順番の最後に回されます。"
                      bg="gray.300"
                      color="black"
                      size={'xs'}
                    >
                      <IconButton
                        colorScheme={'red'}
                        opacity="0.3"
                        variant="ghost"
                        aria-label="review this question"
                        onClick={() => {
                          toggleReview(question.id);
                          toast({
                            title: 'この質問はもう一度出題されます',
                            position: 'top-right',
                            // description: "We've created your account for you.",
                            status: 'info',
                            duration: 9000,
                            isClosable: true,
                          });
                        }}
                        icon={<RepeatIcon boxSize={'1.5em'} color="black" />}
                      />
                    </Tooltip>
                  </Flex>
                </Box>
              </>
            ))
        ) : (
          <></>
        )}
      </ul>
      {/* <ResultBar
        showHistory={showHistory}
        showSettingDetail={showSettingDetail}
      /> */}
      {/* 現在解いている問題askingQuestionはaskedQuestionとは分けて表示している。 */}
      {/* <Collapse animateOpacity> */}
      {log.asking &&
        [makeQuestion(log.asking)].map((question, index) => (
          <>
            <Box
              maxW="2xl"
              bgColor={'white'}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mb={1}
              mt="3"
              className="DownSlideIn"
            >
              {question.questionImg &&
                question.questionImg.map((image, imageNum) => (
                  <Image
                    src={image}
                    alt="画像読み込みエラー"
                    key={imageNum + 'QuestionImage'}
                    fallback={<Skeleton height="100px" />}
                  />
                ))}
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {question.groupTag}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {question.detailInfo}
                  </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {/* ここから辞書のための分の分割＆判定 */}
                  {technicalTerm
                    .reduce(
                      (prev, currentTerms) => {
                        return currentTerms.term.reduce(
                          (previousArray, term) => {
                            // console.log(previousArray)
                            return previousArray.reduce(
                              (previousStr, currentStr) => {
                                // console.log(currentStr)
                                // console.log(
                                // currentStr.split(new RegExp(`(${term})`, 'g')),
                                // )
                                let newStr = [];
                                if (
                                  currentStr.match(new RegExp(`(${term})`, 'g'))
                                ) {
                                  newStr = currentStr.split(
                                    new RegExp(`(${term})`, 'g')
                                  );
                                } else {
                                  newStr = currentStr.split(/(_d.)/g);
                                }
                                return [...previousStr, ...newStr];
                              },
                              ''
                            );
                          },
                          prev
                        );
                      },
                      [question.questionSentence]
                    )
                    .map((sentence, index) => (
                      <>
                        {technicalTerm.find(terms => {
                          return terms.term.indexOf(sentence) !== -1;
                        }) ? (
                          <Button
                            colorScheme={'blue'}
                            key={index + 'b1'}
                            variant="link"
                            fontWeight={'bold'}
                            onClick={() => toastDictionary(sentence)}
                          >
                            {sentence}
                          </Button>
                        ) : (
                          <span key={index + 'n1'}>{sentence}</span>
                        )}
                      </>
                    ))}
                  {/* ここまでが辞書のための文の分割＆判定 */}
                  {question.randomizedChoices !== [] ? (
                    question.randomizedChoices.map((choice, choiceIndex) => (
                      <Flex ml={4} fontWeight="normal">
                        <Text>{choiceIndex + 1}.</Text>
                        <Text pl={2}>{choice}</Text>
                      </Flex>
                    ))
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
            </Box>
            <Collapse in={isOpen} animateOpacity>
              {isOpen === true ? (
                <Box
                  maxW="2xl"
                  borderWidth="2px"
                  borderColor={'red.100'}
                  borderRadius="lg"
                  overflow="hidden"
                  bg={'red.100'}
                  // className="DownSlideIn"
                >
                  <Box w={'100%'} bgColor="white" m={0} p="0">
                    {question.answerImg !== [] &&
                      question.answerImg.map(image => (
                        <Image
                          src={image}
                          alt="写真読み込みエラー"
                          fallback={<Skeleton height="100px" />}
                        />
                      ))}
                  </Box>
                  <Box p="6" pb={0}>
                    <Box display="flex" alignItems="baseline">
                      <Badge variant="solid" colorScheme="red">
                        解答
                      </Badge>
                      <Box
                        color="red.700"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize=""
                        ml="2"
                      >
                        {technicalTerm
                          .reduce(
                            (prev, currentTerms) => {
                              return currentTerms.term.reduce(
                                (previousArray, term) => {
                                  // console.log(previousArray)
                                  return previousArray.reduce(
                                    (previousStr, currentStr) => {
                                      // console.log(currentStr)
                                      // console.log(
                                      //   currentStr.split(
                                      //     new RegExp(`(${term})`, 'g'),
                                      //   ),
                                      // )
                                      let newStr = [];
                                      if (
                                        currentStr.match(
                                          new RegExp(`(${term})`, 'g')
                                        )
                                      ) {
                                        newStr = currentStr.split(
                                          new RegExp(`(${term})`, 'g')
                                        );
                                      } else {
                                        newStr = currentStr.split(/(_d.)/g);
                                      }
                                      return [...previousStr, ...newStr];
                                    },
                                    ''
                                  );
                                },
                                prev
                              );
                            },
                            [question.answer]
                          )
                          .map((sentence, index) => (
                            <>
                              {technicalTerm.find(terms => {
                                return terms.term.indexOf(sentence) !== -1;
                              }) ? (
                                <Button
                                  colorScheme={'blue'}
                                  key={index + 'b'}
                                  variant="link"
                                  fontWeight={'bold'}
                                  onClick={() => toastDictionary(sentence)}
                                >
                                  {sentence}
                                </Button>
                              ) : (
                                <span key={index + 'n'}>{sentence}</span>
                              )}
                            </>
                          ))}
                      </Box>
                    </Box>
                    <Badge variant="solid" colorScheme="red">
                      解説
                    </Badge>
                    <Box mt="1" as="h4" lineHeight="tight">
                      {technicalTerm
                        .reduce(
                          (prev, currentTerms) => {
                            return currentTerms.term.reduce(
                              (previousArray, term) => {
                                // console.log(previousArray)
                                return previousArray.reduce(
                                  (previousStr, currentStr) => {
                                    // console.log(currentStr)
                                    // console.log(
                                    //   currentStr.split(
                                    //     new RegExp(`(${term})`, 'g'),
                                    //   ),
                                    // )
                                    return [
                                      ...previousStr,
                                      ...currentStr.split(
                                        new RegExp(`(${term})`, 'g')
                                      ),
                                    ];
                                  },
                                  ''
                                );
                              },
                              prev
                            );
                          },
                          [question.commentary]
                        )
                        .map((sentence, index) => (
                          <>
                            {technicalTerm.find(terms => {
                              return terms.term.indexOf(sentence) !== -1;
                            }) ? (
                              <Button
                                colorScheme={'blue'}
                                key={index + 'b3'}
                                variant="link"
                                fontWeight={'bold'}
                                onClick={() => toastDictionary(sentence)}
                              >
                                {sentence}
                              </Button>
                            ) : (
                              <span key={index + 'n3'}>{sentence}</span>
                            )}
                          </>
                        ))}
                    </Box>
                  </Box>
                  <Flex pr={4} pb={4}>
                    <Spacer />
                    <Tooltip
                      hasArrow
                      label="ボタンを押すと、この質問がもう一度出題し直されます。ランダム出題の場合はランダムに、順番通り出題の場合は順番の最後に回されます。"
                      bg="gray.300"
                      color="black"
                      size={'xs'}
                    >
                      <IconButton
                        colorScheme={'red'}
                        opacity="0.3"
                        variant="ghost"
                        aria-label="review this question"
                        onClick={() => {
                          // setIsOpen(false);
                          // setTimeout(
                          //   () => reviewAskingQuestion(settingDetail),
                          //   500
                          // );

                          toast({
                            title: 'この質問はもう一度出題されます',
                            position: 'top-right',
                            // description: "We've created your account for you.",
                            status: 'info',
                            duration: 9000,
                            isClosable: true,
                          });
                        }}
                        icon={<RepeatIcon color="black" boxSize={'1.5em'} />}
                      />
                    </Tooltip>
                  </Flex>
                </Box>
              ) : (
                <></>
              )}
            </Collapse>
          </>
        ))}
      {/* </Collapse> */}
      {/* 現在解いている問題の解答に関しても分けて表示する。isAnsweredに依る。 */}

      {isOpen === true && log.remaining && log.remaining.length > 0 ? (
        <Button
          autoFocus
          m={1}
          ml="3"
          rightIcon={<ArrowDownIcon />}
          colorScheme="teal"
          variant={'outline'}
          bgColor="white"
          onClick={() => {
            nextQuestion();
            window.scrollTo({
              bottom: 0,
              behavior: 'smooth',
            });
            setIsOpen(false);
          }}
        >
          次の問題へ
        </Button>
      ) : (
        <></>
      )}
      {isOpen === true ? (
        <></>
      ) : (
        <Button
          autoFocus
          m={1}
          ml="3"
          mt={0}
          rightIcon={<ArrowDownIcon />}
          colorScheme="red"
          variant={'solid'}
          onClick={() => {
            // console.log('setting確認');
            // console.log(settingDetail);
            // checkAnswer();
            setIsOpen(true);
            toastGoodJob();
            // saveHistory(history[history.length - 1], settingDetail);
            // setTimeout(() => scrollToTheBottom(), 500)
          }}
        >
          解答をみる
        </Button>
      )}
    </>
  );
};
