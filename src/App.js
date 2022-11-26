import './App.css';
import {
  Box,
  Heading,
  Badge,
  Flex,
  Text,
  useToast,
  Button,
} from '@chakra-ui/react';
import { Setting } from './components/Setting';
import { QuestionsLog } from './components/QuestionsLog';
import { ControlPanel } from './components/ControlPanel';
import { useQuestionList } from './useQuestionList';
import { useSetting } from './hooks/useSetting';
import { useHistory } from './hooks/useHistory';
import { useTechnicalTerm } from './useTechnicalTerm';
import { register } from './serviceWorker';
import { useLog } from './hooks/useLog';
import { useState } from 'react';

function App() {
  const toast = useToast();
  const [selected, setSelected] = useState(0);
  const { showQuestionList } = useQuestionList();
  const questionList = showQuestionList();
  const { showTechnicalTerm } = useTechnicalTerm();
  const technicalTerm = showTechnicalTerm();
  // const {
  //   showSettingDetail,
  //   updateQuestionOrder,
  //   toggleQuestionRange,
  //   updateQuestionMode,
  //   makeSetting,
  //   addWordFilter,
  //   deleteWordFilter,
  //   updateAllSettings,
  // } = useSetting();
  // let settingDetail = showSettingDetail();
  // const {
  //   showHistory,
  //   selectQuestionList,
  //   nextQuestion,
  //   checkAnswer,
  //   reviewQuestion,
  //   reviewAskingQuestion,
  //   loadHistory,
  // } = useHistory();
  const [isAnswered, setIsAnswered] = useState(false);
  const {
    showLog,
    toggleRange,
    changeOrder,
    startNewLesson,
    toggleReview,
    nextQuestion,
  } = useLog();
  const log = showLog();
  // const history = showHistory();
  const thisAppNameTag = 'anywhere-prototype2';
  // ここからWebStorageを利用した設定の引継ぎ
  let loadData = {
    app: `${thisAppNameTag}`,
    latestUpdate: new Date().getTime(),
  };
  if (localStorage.getItem(thisAppNameTag)) {
    loadData = JSON.parse(localStorage.getItem(thisAppNameTag));
  }
  const saveHistory = (latestHistory, newSetting) => {
    let savingHistory = '';
    if (latestHistory && latestHistory.remainingQuestionList) {
      savingHistory = latestHistory.questionNum + ',';
      latestHistory.remainingQuestionList.forEach(question => {
        savingHistory += question.id;
        savingHistory += ',';
      });
      savingHistory = savingHistory.substring(0, savingHistory.length - 1);
    }
    let jsonData = {
      app: `${thisAppNameTag}`,
      latestUpdate: new Date().getTime(),
      status: newSetting,
      history: savingHistory,
    };
    localStorage.setItem(thisAppNameTag, JSON.stringify(jsonData));
    console.log(localStorage.getItem(thisAppNameTag));
  };
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
          Ver.2.0
        </Badge>
        <Badge m={1} mt="0" borderRadius="full" px="2" colorScheme="teal">
          発生再生学
        </Badge>
      </Flex>

      {log.startTime !== '' ? (
        <></>
      ) : (
        <Box maxW={'lg'} mr="auto" ml={'auto'}>
          <Setting
            toast={toast}
            selected={selected}
            setSelected={setSelected}
            questionList={questionList}
            saveHistory={saveHistory}
            log={log}
            toggleRange={toggleRange}
            changeOrder={changeOrder}
            startNewLesson={startNewLesson}
            technicalTerm={technicalTerm}
          />
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
            // loadData={loadData}
            // showHistory={showHistory}
            nextQuestion={nextQuestion}
            // checkAnswer={checkAnswer}
            // showSettingDetail={showSettingDetail}
            // reviewQuestion={reviewQuestion}
            // reviewAskingQuestion={reviewAskingQuestion}
            toggleReview={toggleReview}
            // saveHistory={saveHistory}
            technicalTerm={technicalTerm}
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
