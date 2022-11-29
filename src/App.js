import './App.css';
import {
  Box,
  Heading,
  Badge,
  Flex,
  Text,
  useToast,
  Button,
  Divider,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Setting } from './components/Setting';
import { QuestionsLog } from './components/QuestionsLog';
import { ControlPanel } from './components/ControlPanel';
import { useQuestionList } from './useQuestionList';
import { useStorage } from './hooks/useStorage';
import { useTechnicalTerm } from './useTechnicalTerm';
import { register } from './serviceWorker';
import { useLog } from './hooks/useLog';
import { useState } from 'react';
import { SearchWord } from './components/SearchWord';
import { History } from './components/History.js';

function App() {
  const toast = useToast();
  const [selected, setSelected] = useState(0);
  const { showQuestionList } = useQuestionList();
  const questionList = showQuestionList();
  const { showTechnicalTerm } = useTechnicalTerm();
  const technicalTerm = showTechnicalTerm();
  const { loadLog } = useStorage();
  const [isAnswered, setIsAnswered] = useState(false);
  const {
    showLog,
    toggleRange,
    toggleAllRange,
    changeOrder,
    startNewLesson,
    toggleReview,
    nextQuestion,
    startLoadedLesson,
  } = useLog();
  const log = showLog();
  // const history = showHistory();
  const appName = 'anywhere-prototype2';
  // ここからWebStorageを利用した設定の引継ぎ
  // let loadData = {
  //   app: `${thisAppNameTag}`,
  //   latestUpdate: new Date().getTime(),
  // };
  // if (localStorage.getItem(thisAppNameTag)) {
  //   loadData = JSON.parse(localStorage.getItem(thisAppNameTag));
  // }
  // const saveHistory = (latestHistory, newSetting) => {
  //   let savingHistory = '';
  //   if (latestHistory && latestHistory.remainingQuestionList) {
  //     savingHistory = latestHistory.questionNum + ',';
  //     latestHistory.remainingQuestionList.forEach(question => {
  //       savingHistory += question.id;
  //       savingHistory += ',';
  //     });
  //     savingHistory = savingHistory.substring(0, savingHistory.length - 1);
  //   }
  //   let jsonData = {
  //     app: `${thisAppNameTag}`,
  //     latestUpdate: new Date().getTime(),
  //     status: newSetting,
  //     history: savingHistory,
  //   };
  //   localStorage.setItem(thisAppNameTag, JSON.stringify(jsonData));
  //   console.log(localStorage.getItem(thisAppNameTag));
  // };
  return (
    <>
      <Heading mt={'3'} ml="3" color="teal" mb={0}>
        どこでも試験対策
      </Heading>
      <Flex>
        <Badge
          m={1}
          mr="0"
          mt={'0'}
          ml={3}
          borderRadius="full"
          px="2"
          colorScheme="teal"
          variant={'outline'}
        >
          Ver.2.0(仮)
        </Badge>
        <Badge m={1} mt="0" borderRadius="full" px="2" colorScheme="teal">
          発生再生学
        </Badge>
      </Flex>

      {log.startTime !== '' ? (
        <></>
      ) : (
        <Box mr="auto" ml={'auto'} justifyContent="center">
          <Setting
            maxW={'lg'}
            toast={toast}
            selected={selected}
            setSelected={setSelected}
            questionList={questionList}
            log={log}
            toggleRange={toggleRange}
            toggleAllRange={toggleAllRange}
            changeOrder={changeOrder}
            startNewLesson={startNewLesson}
            startLoadedLesson={startLoadedLesson}
            technicalTerm={technicalTerm}
            appName={appName}
            loadLog={loadLog}
          />
          <Wrap justify={'center'} mt="80px">
            <WrapItem minW={'2xs'} maxW="xs">
              <History
                loadLog={loadLog}
                questionList={questionList}
                appName={appName}
              />
            </WrapItem>
            <WrapItem w={'sm'}>
              <SearchWord
                toast={toast}
                technicalTerm={technicalTerm}
                questionList={questionList}
              />
            </WrapItem>
          </Wrap>

          <Divider orientation="horizontal" maxW={'lg'} mt="50px" />
          <Text fontSize="xs" textColor={'blackAlpha.700'} ml="4">
            Supported by T.Wada
          </Text>
          <Text fontSize="xs" textColor={'blackAlpha.700'} ml="4">
            ©2022- IgaTatApps
          </Text>
        </Box>
      )}
      {log.startTime !== '' ? (
        <Box maxW="2xl" mr="auto" ml={'auto'}>
          <QuestionsLog
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered}
            toast={toast}
            questionList={questionList}
            log={log}
            loadLog={loadLog}
            nextQuestion={nextQuestion}
            toggleReview={toggleReview}
            technicalTerm={technicalTerm}
            appName={appName}
          />
          <Box h={'300px'} width="100px"></Box>
          <ControlPanel log={log} isAnswered={isAnswered} />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
//   )
// }

export default App;
