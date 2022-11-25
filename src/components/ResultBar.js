import {
  Badge,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from '@chakra-ui/react'

export const ResultBar = ({ showHistory, showSettingDetail }) => {
  let history = showHistory()
  let settingDetail = showSettingDetail()
  let isAnsweredPoint = history[history.length - 1].isAnswered ? 0 : 1
  return (
    <>
      {settingDetail.mode === 'training' ? (
        <Flex ml={'4'} mt={3} mb="-2" alignItems={'center'}>
          {/* <Badge colorScheme="purple" height="100%">
            練習モード
          </Badge> */}
          <CircularProgress
            color="teal"
            trackColor="white"
            value={
              (100 *
                (history[history.length - 1].questionNum - isAnsweredPoint)) /
              (history[history.length - 1].questionNum +
                history[history.length - 1].remainingQuestionList.length)
            }
          >
            <CircularProgressLabel>
              {Math.floor(
                (100 *
                  (history[history.length - 1].questionNum - isAnsweredPoint)) /
                  (history[history.length - 1].questionNum +
                    history[history.length - 1].remainingQuestionList.length),
              )}
              %
            </CircularProgressLabel>
          </CircularProgress>
          <Box ml={2}>
            <Text color={'gray'} pl="2">
              現在{history[history.length - 1].questionNum}問目 / 残り
              {history[history.length - 1].remainingQuestionList.length}問
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex ml={'4'} alignItems="baseline">
          <Badge colorScheme="purple" height="100%">
            テストモード
          </Badge>
          <Text fontSize="md" color={'black'} ml="2">
            正解9/全10問中 正解率90.0%
          </Text>
        </Flex>
      )}
    </>
  )
}
