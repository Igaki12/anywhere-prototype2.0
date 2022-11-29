import { useState } from 'react';
import { useStorage } from './useStorage';

export const useLog = () => {
  const { saveLog, loadLog } = useStorage();
  const [log, setLog] = useState({
    startTime: '',
    order: 'ascend',
    range: [],
    wordFilter: [],
    asked: [],
    asking: '',
    remaining: [],
    review: [],
    // isAnswered: false,
  });
  // 方針：1つのボタンにつき関数１つ
  const showLog = () => {
    return log;
  };
  const toggleRange = groupTag => {
    if (groupTag === '') return;
    let newLog = log;
    if (log.range && log.range.indexOf(groupTag) !== -1) {
      newLog.range.splice(log.range.indexOf(groupTag), 1);
    } else {
      newLog.range.push(groupTag);
    }
    setLog(newLog);
  };
  const toggleAllRange = questionList => {
    let newLog = log;
    if (
      questionList &&
      questionList.every(group => {
        return group.groupTag && group.groupContents;
      }) &&
      newLog.range !==
        questionList.reduce(
          (prevGroup, curGroup) => [...prevGroup, curGroup.groupTag],
          []
        )
    ) {
      console.log(questionList);
      newLog.range = questionList.reduce(
        (prevGroup, curGroup) => [...prevGroup, curGroup.groupTag],
        []
      );
    } else {
      newLog.range = [];
    }
    setLog(newLog);
  };
  const changeOrder = newOrder => {
    if (newOrder === '') return;
    let newLog = log;
    newLog.order = newOrder;
    setLog(newLog);
  };
  const toggleReview = (id, appName) => {
    if (log.asked.indexOf(id) === -1 && log.asking !== id) return;
    let newLog = log;
    if (log.review.length > 0 && log.review.indexOf(id) !== -1) {
      newLog.review.splice(log.review.indexOf(id), 1);
    } else {
      newLog.review.push(id);
    }
    setLog(newLog);
    saveLog(appName, newLog);
  };
  const nextQuestion = appName => {
    let newLog = log;
    if (newLog.remaining && newLog.remaining.length > 0) {
      let i = 0;
      if (newLog.order === 'random') {
        i = Math.floor(Math.random() * newLog.remaining.length);
        // console.log('random i:', i);
      }
      if (newLog.asking && newLog.asking !== '') {
        newLog.asked.unshift(newLog.asking);
        newLog.asking = '';
      }
      newLog.asking = newLog.remaining[i];
      newLog.remaining.splice(i, 1);
      if (appName) {
        saveLog(appName, newLog);
        // console.log('nextQuestion', newLog.remaining.length);
      }
    }
  };
  const startNewLesson = (questionList, appName) => {
    if (log.range && log.range !== []) {
    } else {
      return;
    }
    let newLog = log;
    newLog.remaining = log.range.reduce((prevRange, curRange, rangeIndex) => {
      if (questionList.every(group => group.groupTag !== curRange)) {
        return prevRange;
      }
      return [
        ...prevRange,
        ...questionList.reduce((prevGroup, curGroup) => {
          if (curGroup.groupTag === curRange) {
            return [
              ...prevGroup,
              ...curGroup.groupContents.map((content, contentIndex) => {
                return (
                  ('000' + rangeIndex).slice(-3) +
                  ('000' + contentIndex).slice(-3)
                );
              }),
            ];
          }
          return prevGroup;
        }, []),
      ];
    }, []);
    if (newLog.remaining === []) return;
    newLog.remaining.sort();
    nextQuestion();
    newLog.startTime = new Date().getTime();
    setLog(newLog);
    // console.log(newLog);
    saveLog(appName, newLog);
  };
  const startLoadedLesson = (questionList, appName, startTime) => {
    let newLog = log;
    if (
      loadLog(appName) &&
      loadLog(appName).logs &&
      loadLog(appName).logs.length > 0 &&
      loadLog(appName).logs.find(log => {
        if (log && log.startTime && log.remaining) {
          return log.startTime === startTime;
        }
        return false;
      })
    ) {
      newLog = loadLog(appName)
        .logs.reduce((prevLog, curLog, index) => {
          if (curLog && curLog.startTime) {
            return [
              // ...prevLog,
              {
                startTime: curLog.startTime,
                order: curLog.order,
                range: curLog.range,
                wordFilter: curLog.wordFilter,
                asked: curLog.asked.filter(id =>
                  questionList.find(
                    group =>
                      group.groupTag ===
                        curLog.range[parseInt(id.slice(0, 3))] &&
                      group.groupContents.length > parseInt(id.slice(-3))
                  )
                ),
                asking:
                  curLog.asking &&
                  questionList.find(
                    group =>
                      group.groupTag ===
                        curLog.range[parseInt(curLog.asking.slice(0, 3))] &&
                      group.groupContents.length >
                        parseInt(curLog.asking.slice(-3))
                  )
                    ? curLog.asking
                    : '',
                remaining: curLog.remaining.filter(id =>
                  questionList.find(
                    group =>
                      group.groupTag ===
                        curLog.range[parseInt(id.slice(0, 3))] &&
                      group.groupContents.length > parseInt(id.slice(-3))
                  )
                ),
                review: [],
                // curLog.review.filter(id =>
                //   questionList.find(
                //     group =>
                //       group.groupTag ===
                //         curLog.range[parseInt(id.slice(0, 3))] &&
                //       group.groupContents.length > parseInt(id.slice(-3))
                //   )
                // ),
              },
              ...prevLog,
            ];
          }
          return prevLog;
        }, [])
        .find(log => {
          if (log && log.startTime) {
            return log.startTime === startTime;
          }
          return false;
        });
    } else {
      return;
    }
    if (newLog.asking === '') {
      nextQuestion();
    }
    setLog(newLog);
    // console.log(newLog);
    newLog.startTime = new Date().getTime();
    saveLog(appName, newLog);
  };
  const reviewLoadedLesson = (questionList, appName, startTime) => {
    let newLog = log;
    if (
      loadLog(appName) &&
      loadLog(appName).logs &&
      loadLog(appName).logs.length > 0 &&
      loadLog(appName).logs.find(log => {
        if (log && log.startTime && log.remaining) {
          return log.startTime === startTime;
        }
        return false;
      })
    ) {
      newLog = loadLog(appName)
        .logs.reduce((prevLog, curLog, index) => {
          if (curLog && curLog.startTime) {
            return [
              // ...prevLog,
              {
                startTime: curLog.startTime,
                order: curLog.order,
                range: curLog.range,
                wordFilter: curLog.wordFilter,
                asked: [],
                asking: curLog.review.filter(id =>
                  questionList.find(
                    group =>
                      group.groupTag ===
                        curLog.range[parseInt(id.slice(0, 3))] &&
                      group.groupContents.length > parseInt(id.slice(-3))
                  )
                )[0],
                remaining:
                  curLog.review.filter(id =>
                    questionList.find(
                      group =>
                        group.groupTag ===
                          curLog.range[parseInt(id.slice(0, 3))] &&
                        group.groupContents.length > parseInt(id.slice(-3))
                    )
                  ).length > 1
                    ? curLog.review
                        .filter(id =>
                          questionList.find(
                            group =>
                              group.groupTag ===
                                curLog.range[parseInt(id.slice(0, 3))] &&
                              group.groupContents.length >
                                parseInt(id.slice(-3))
                          )
                        )
                        .splice(1)
                    : [],
                review: [],
                // curLog.review.filter(id =>
                //   questionList.find(
                //     group =>
                //       group.groupTag ===
                //         curLog.range[parseInt(id.slice(0, 3))] &&
                //       group.groupContents.length > parseInt(id.slice(-3))
                //   )
                // ),
              },
              ...prevLog,
            ];
          }
          return prevLog;
        }, [])
        .find(log => {
          if (log && log.startTime) {
            return log.startTime === startTime;
          }
          return false;
        });
    } else {
      return;
    }
    newLog.startTime = new Date().getTime();
    console.log('%PUBLIC_URL%');
    setLog(newLog);
    saveLog(appName, newLog);
  };
  return {
    showLog,
    toggleRange,
    toggleAllRange,
    toggleReview,
    changeOrder,
    nextQuestion,
    startNewLesson,
    startLoadedLesson,
    reviewLoadedLesson,
  };
};
