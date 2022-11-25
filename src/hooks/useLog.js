import { useState } from 'react';

export const useLog = () => {
  const [log, setLog] = useState({
    startTime: '',
    order: 'ascend',
    range: [],
    wordFilter: [],
    asked: [],
    asking: '',
    remaining: [],
    review: [],
    isAnswered: false,
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
  const changeOrder = newOrder => {
    if (newOrder === '') return;
    let newLog = log;
    newLog.order = newOrder;
    setLog(newLog);
  };
  const toggleReview = id => {
    if (log.asked.indexOf(id) === -1 && log.asking !== id) return;
    let newLog = log;
    if (log.review.length > 0 && log.review.indexOf(id) !== -1) {
      newLog.review.splice(log.review.indexOf(id), 1);
    } else {
      newLog.review.push(id);
    }
    setLog(newLog);
  };
  const nextQuestion = () => {
    let newLog = log;
    if (newLog.remaining && newLog.remaining.length > 0) {
      let i = 0;
      if (newLog.order === 'random') {
        i = Math.floor(Math.random() * newLog.remaining.length);
        console.log('random i:', i);
      }
      if (newLog.asking && newLog.asking !== '') {
        newLog.asked.unshift(newLog.asking);
        newLog.asking = '';
      }
      newLog.asking = newLog.remaining[i];
      newLog.remaining.splice(i, 1);
    }
  };
  const startNewLesson = questionList => {
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
    newLog.remaining.sort();
    nextQuestion();
    setLog(newLog);
    console.log('newLog.asking:', newLog.asking);
  };
  return {
    showLog,
    toggleRange,
    toggleReview,
    changeOrder,
    startNewLesson,
  };
};
