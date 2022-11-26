import { useState } from 'react'
import transcription from './img/answer/transcription.png'
import cellDivision from './img/answer/cellDivision.png'

import q3 from './img/question/220613-3.JPG'
import q4 from './img/question/220613-4.JPG'
import q5 from './img/question/220613-5.JPG'
import q6 from './img/question/220613-6.JPG'
import q7 from './img/question/220613-7.JPG'
import q9 from './img/question/220613-9.JPG'
import q10 from './img/question/220613-10.JPG'
import q11 from './img/question/220613-11.JPG'
import q12 from './img/question/220613-12.JPG'
import q13 from './img/question/220613-13.JPG'
import q14 from './img/question/220613-14.JPG'
import q19 from './img/question/220613-19.JPG'
import q20 from './img/question/220613-20.JPG'
import q22 from './img/question/220613-22.JPG'
import q23 from './img/question/220613-23.JPG'
import q24 from './img/question/220613-24.JPG'
import qq1 from './img/question/220614-1.JPG'
import qq2 from './img/question/220614-2.JPG'
import qq3 from './img/question/220614-3.JPG'
import qq4 from './img/question/220614-4.JPG'
import qq5 from './img/question/220614-5.JPG'
import qq7 from './img/question/220614-7.JPG'
import qq8 from './img/question/220614-8.JPG'
import qq9 from './img/question/220614-9.JPG'
import qq10 from './img/question/220614-10.JPG'
import qq11 from './img/question/220614-11.JPG'
// 0615と0617が逆になっている
import r1 from './img/question/220615-1.JPG'
import r2 from './img/question/220615-2.JPG'
import r3 from './img/question/220615-3.JPG'
import r4 from './img/question/220615-4.JPG'
import r5 from './img/question/220615-5.JPG'
import r6 from './img/question/220615-6.JPG'
import s1 from './img/question/220617-1.JPG'
import s2 from './img/question/220617-2.JPG'
import s3 from './img/question/220617-3.JPG'
import s4 from './img/question/220617-4.JPG'
import s5 from './img/question/220617-5.JPG'
import s6 from './img/question/220617-6.JPG'
import s7 from './img/question/220617-7.JPG'
import s8 from './img/question/220617-8.JPG'
import s9 from './img/question/220617-9.JPG'
import t01 from './img/question/スクリーンショット 2022-06-21 092614.png'
import t02 from './img/question/スクリーンショット 2022-06-21 093203.png'
import t03 from './img/question/スクリーンショット 2022-06-21 093853.png'
import t04 from './img/question/スクリーンショット 2022-06-21 094723.png'
import t05 from './img/question/スクリーンショット 2022-06-21 094756.png'
import t06 from './img/question/スクリーンショット 2022-06-21 095228.png'
import t07 from './img/question/スクリーンショット 2022-06-21 095346.png'
import t08 from './img/question/スクリーンショット 2022-06-21 095447.png'
import t09 from './img/question/スクリーンショット 2022-06-21 100021.png'
import t10 from './img/question/スクリーンショット 2022-06-21 100032.png'
import t11 from './img/question/スクリーンショット 2022-06-21 100310.png'
import t12 from './img/question/スクリーンショット 2022-06-21 100856.png'
import t13 from './img/question/スクリーンショット 2022-06-21 101520.png'
import t14 from './img/question/スクリーンショット 2022-06-21 101548.png'
import t15 from './img/question/スクリーンショット 2022-06-21 101704.png'
import t16 from './img/question/スクリーンショット 2022-06-21 102159.png'
import t17 from './img/question/スクリーンショット 2022-06-21 102346.png'
import t18 from './img/question/スクリーンショット 2022-06-21 102532.png'
import t19 from './img/question/スクリーンショット 2022-06-21 104018.png'
import t20 from './img/question/スクリーンショット 2022-06-21 104122.png'
import t21 from './img/question/スクリーンショット 2022-06-21 104557.png'
import t22 from './img/question/スクリーンショット 2022-06-21 105421.png'
import t23 from './img/question/スクリーンショット 2022-06-21 111138.png'
import t24 from './img/question/スクリーンショット 2022-06-21 111245.png'
import t25 from './img/question/スクリーンショット 2022-06-21 112344.png'
import t26 from './img/question/スクリーンショット 2022-06-21 112527.png'
import t27 from './img/question/スクリーンショット 2022-06-21 112751.png'
import t28 from './img/question/スクリーンショット 2022-06-21 112824.png'
import t29 from './img/question/スクリーンショット 2022-06-21 113128.png'
import t30 from './img/question/スクリーンショット 2022-06-21 113528.png'
import t31 from './img/question/スクリーンショット 2022-06-21 113658.png'
import t32 from './img/question/スクリーンショット 2022-06-21 114808.png'
import t33 from './img/question/スクリーンショット 2022-06-21 114929.png'
import t34 from './img/question/スクリーンショット 2022-06-21 115421.png'
import t35 from './img/question/スクリーンショット 2022-06-21 120204.png'
import t36 from './img/question/スクリーンショット 2022-06-21 120350.png'
import t37 from './img/question/スクリーンショット 2022-06-21 120643.png'
import t38 from './img/question/スクリーンショット 2022-06-21 120858.png'
import t39 from './img/question/スクリーンショット 2022-06-21 121054.png'
import t40 from './img/question/スクリーンショット 2022-06-21 121246.png'
import t41 from './img/question/スクリーンショット 2022-06-21 121338.png'
import t42 from './img/question/スクリーンショット 2022-06-21 121556.png'
import t43 from './img/question/スクリーンショット 2022-06-21 121655.png'
import u1032 from './img/question/スクリーンショット 2022-06-24 103227.png'
import u1038 from './img/question/スクリーンショット 2022-06-24 103828.png'
import u1106 from './img/question/スクリーンショット 2022-06-24 110601.png'
import u1113 from './img/question/スクリーンショット 2022-06-24 111319.png'
import u1130 from './img/question/スクリーンショット 2022-06-24 113055.png'
import u1134 from './img/question/スクリーンショット 2022-06-24 113431.png'
import u1139 from './img/question/スクリーンショット 2022-06-24 113944.png'
import u114006 from './img/question/スクリーンショット 2022-06-24 114006.png'
import u114018 from './img/question/スクリーンショット 2022-06-24 114018.png'
import u1205 from './img/question/スクリーンショット 2022-06-24 120517.png'
import u1212 from './img/question/スクリーンショット 2022-06-24 121206.png'
import u1224 from './img/question/スクリーンショット 2022-06-24 122450.png'
import v01 from './img/question/220702-1.JPG'
import v02 from './img/question/220702-2.JPG'
import v03 from './img/question/220702-3.JPG'
import v04 from './img/question/220702-4.JPG'
import v05 from './img/question/220702-5.JPG'
import v06 from './img/question/220702-6.JPG'
import v07 from './img/question/220702-7.JPG'
import v08 from './img/question/220702-8.JPG'
import v09 from './img/question/220702-9.JPG'
import v10 from './img/question/220702-10.JPG'
import v11 from './img/question/220702-11.JPG'
import v12 from './img/question/220702-12.JPG'
import v13 from './img/question/220702-13.JPG'
import v14 from './img/question/220702-14.JPG'
import v15 from './img/question/220702-15.JPG'
import v16 from './img/question/220702-16.JPG'
import v17 from './img/question/220702-17.JPG'
import v18 from './img/question/220702-18.JPG'
import v19 from './img/question/220702-19.JPG'
import v22 from './img/question/220702-22.jpg'
import w0931 from './img/question/スクリーンショット 2022-07-06 093143.jpg'
import w0935 from './img/question/スクリーンショット 2022-07-06 093544.jpg'
import w0938 from './img/question/スクリーンショット 2022-07-06 093852.jpg'
import w0943 from './img/question/スクリーンショット 2022-07-06 094316.jpg'
import w1000 from './img/question/スクリーンショット 2022-07-06 100035.jpg'
import w1006 from './img/question/スクリーンショット 2022-07-06 100608.jpg'
import w1011 from './img/question/スクリーンショット 2022-07-06 101149.jpg'
import w1027 from './img/question/スクリーンショット 2022-07-06 102718.jpg'
import w102715 from './img/question/スクリーンショット 2022-07-06 102755.jpg'
import w1031 from './img/question/スクリーンショット 2022-07-06 103141.jpg'
import w103157 from './img/question/スクリーンショット 2022-07-06 103157.jpg'
import w1043 from './img/question/スクリーンショット 2022-07-06 104351.jpg'
import w1045 from './img/question/スクリーンショット 2022-07-06 104524.jpg'
import w1054 from './img/question/スクリーンショット 2022-07-06 105414.jpg'
import w105432 from './img/question/スクリーンショット 2022-07-06 105432.jpg'
import w1059 from './img/question/スクリーンショット 2022-07-06 105907.jpg'
import w105927 from './img/question/スクリーンショット 2022-07-06 105927.jpg'
import w1103 from './img/question/スクリーンショット 2022-07-06 110311.jpg'
import w1117 from './img/question/スクリーンショット 2022-07-06 111717.jpg'
import w1121 from './img/question/スクリーンショット 2022-07-06 112116.jpg'
import w112149 from './img/question/スクリーンショット 2022-07-06 112149.jpg'
import w1125 from './img/question/スクリーンショット 2022-07-06 112545.jpg'
import w1126 from './img/question/スクリーンショット 2022-07-06 112631.jpg'
import w1137 from './img/question/スクリーンショット 2022-07-06 113709.jpg'
import w1138 from './img/question/スクリーンショット 2022-07-06 113825.jpg'
import w1144 from './img/question/スクリーンショット 2022-07-06 114445.jpg'
import w114453 from './img/question/スクリーンショット 2022-07-06 114453.jpg'
import w1145 from './img/question/スクリーンショット 2022-07-06 114518.jpg'
import w1152 from './img/question/スクリーンショット 2022-07-06 115237.jpg'
import w1159 from './img/question/スクリーンショット 2022-07-06 115945.jpg'
import w1206 from './img/question/スクリーンショット 2022-07-06 120631.jpg'
import w1208 from './img/question/スクリーンショット 2022-07-06 120859.jpg'
import w1212 from './img/question/スクリーンショット 2022-07-06 121256.jpg'
import w1220 from './img/question/スクリーンショット 2022-07-06 122024.jpg'
import w1221 from './img/question/スクリーンショット 2022-07-06 122150.jpg'

import TEF from './img/answer/TEF.png'
import glomerulus from './img/answer/glomerulus.png'
import growingLung from './img/answer/growingLung.png'
import growingKidney from './img/answer/growingKidney.png'
import kidneyArtery from './img/answer/kidneyArtery.png'
import mesonephricTubule from './img/answer/mesonephricTubule.png'
import trigonOfBladder from './img/answer/trigoneOfBladder.png'
import midKidney from './img/answer/midKidney.png'
import menstrualCycle from './img/answer/menstrualCycle.png'
import urachalFistula from './img/answer/urachalFistula.png'
import bilaminar from './img/answer/bilaminar.png'
import gastrulation from './img/answer/gastrulation.png'
import LRaxis from './img/answer/LRaxis.png'
import week3 from './img/answer/week3.png'
import after21days from './img/answer/after21days.png'
import after25days from './img/answer/after25days.png'
import after29days from './img/answer/after29days.png'
import embryoStageRisk from './img/answer/EmbryoStageRisk.png'
import segment from './img/answer/segment.png'
import segmentationClock from './img/answer/segmentationClock.png'
import skull from './img/answer/skull.png'
import after30days from './img/answer/after30days.png'
import after4weeks from './img/answer/after4weeks.png'
import diaphragm from './img/answer/diaphragm.png'
import heartCavity from './img/answer/heartCavity.png'
import pericardioperitonealCanal from './img/answer/pericardioperitonealCanal.png'
import pleuropericardialFold from './img/answer/pleuropericardialFold.png'
import after49days from './img/answer/after49days.png'
import face from './img/answer/face.png'
import meckelCartilage from './img/answer/meckelCartilage.png'
import pharyngealArch from './img/answer/pharyngealArch.png'
import pharyngealPouch from './img/answer/pharyngealPouch.png'
import pharyngealTable from './img/answer/pharyngealTable.png'
import pharyngealNerves from './img/answer/pharyngealNerves.png'
import thymus from './img/answer/thymus.png'
import thyroid from './img/answer/thyroid.png'
import tongue from './img/answer/tongue.png'
import placentalBarrier from './img/answer/placentalBarrier.png'
import uterus from './img/answer/uterus.png'
import branchialFistula from './img/answer/branchialFistula.png'
import facialCleft from './img/answer/facialCleft.png'
import after52days from './img/answer/after52days.png'
import after52daysVentricle from './img/answer/after52daysVentricle.png'
import after56days from './img/answer/after56days.png'
import basalGanglia from './img/answer/basalGanglia.png'
import brainVesicle from './img/answer/brainVesicle.png'
import brainVesicle5 from './img/answer/brainVesicle5.png'
import centralBrain from './img/answer/centralBrain.png'
import diencephalon from './img/answer/diencephalon.png'
import medullaOblongata from './img/answer/medullaOblongata.png'
import spinalCord from './img/answer/spinalCord.png'
import after21daysKidney from './img/answer/after21daysKidney.png'
import after56daysPituitaryGland from './img/answer/after56daysPituitaryGland.png'
import pituitaryGland from './img/answer/pituitaryGland.png'
import telencephalon from './img/answer/telencephalon.png'
import testis from './img/answer/testis.png'
import urinaryBladder from './img/answer/urinaryBladder.png'
import after3weeksVertical from './img/answer/after3weeksVertical.png'
import after5weeksKidney from './img/answer/after5weeksKidney.png'
import externalGenitalia from './img/answer/externalGenitalia.png'
import LHFSH from './img/answer/LHFSH.png'
import MullerianDuct from './img/answer/MullerianDuct.png'
import ovary from './img/answer/ovary.png'
import reproductiveRidge from './img/answer/reproductiveRidge.png'
import sexDifferentiation from './img/answer/sexDifferentiation.png'
import SexRelatedSignals from './img/answer/SexRelatedSignals.png'
import testisGrowing from './img/answer/testisGrowing.png'
import testisHormone from './img/answer/testisHormone.png'
import testisMovement from './img/answer/testisMovement.png'
import uterusLigament from './img/answer/uterusLigament.png'
import after33daysLung from './img/answer/after33daysLung.png'
import epiglottis from './img/answer/epiglottis.png'
import larynx from './img/answer/larynx.png'
import lungGrowing from './img/answer/lungGrowing.png'
import tracheaEsophagusSeptum from './img/answer/tracheaEsophagusSeptum.png'
import cochlear from './img/answer/cochlear.png'
import cochlearWide from './img/answer/cochlearWide.png'
import hair from './img/answer/hair.png'
import mammaryGland from './img/answer/mammaryGland.png'
import otocyst from './img/answer/otocyst.png'
import otocystGrowing from './img/answer/otocystGrowing.png'
import semicircularCanal from './img/answer/semicircularCanal.png'
import skin from './img/answer/skin.png'
import tooth from './img/answer/tooth.png'
import toothRidge from './img/answer/toothRidge.png'
import auditoryOssicles from './img/answer/auditoryOssicles.png'
import opticCup from './img/answer/opticCup.png'
import eyeAnatomy from './img/answer/eyeAnatomy.png'
import eyeCup from './img/answer/eyeCup.png'
import eyeGrowing from './img/answer/eyeGrowing.png'
import eyeWide from './img/answer/eyeWide.png'
import iris from './img/answer/iris.png'
import after32days from './img/answer/after32days.png'
import anatomicArtery from './img/answer/anatomicArtery.png'
import aorticArch from './img/answer/aorticArch.png'
import aorticBlockage from './img/answer/aorticBlockage.png'
import doubleAorticArch from './img/answer/doubleAorticArch.png'
import hematopoieticTissue from './img/answer/hematopoieticTissue.png'
import internodeArtery from './img/answer/internodeArtery.png'
import pulmonaryArtery from './img/answer/pulmonaryArtery.png'
import vitellineVessel from './img/answer/vitellineVessel.png'
import wideArtery from './img/answer/wideArtery.png'
import arantius from './img/answer/arantius.png'
import inferiorVenaCava from './img/answer/inferiorVenaCava.png'
import superiorMesentericArtery from './img/answer/superiorMesentericArtery.png'
import vein from './img/answer/vein.png'
import adultCirculation from './img/answer/adultCirculation.png'
import atrialSeptum from './img/answer/atrialSeptum.png'
import cardiacAnomaly from './img/answer/cardiacAnomaly.png'
import cardiacSeptum from './img/answer/cardiacSeptum.png'
import cardiacSeptumMadeWithNeuralCrest from './img/answer/cardiacSeptumMadeWithNeuralCrest.png'
import ebsteinAnomaly from './img/answer/ebsteinAnomaly.png'
import finalVenaCava from './img/answer/finalVenaCava.png'
import firstCardiacSeptum from './img/answer/firstCardiacSeptum.png'
import firstHeart from './img/answer/firstHeart.png'
import heartTube from './img/answer/heartTube.png'
import heartLoopAnatomy from './img/answer/heartLoopAnatomy.png'
import posteriorHeartCavity from './img/answer/posteriorHeartCavity.png'
import secondHeart from './img/answer/secondHeart.png'
import transPericardialSinus from './img/answer/transPericardialSinus.png'
import transverseHeartTube from './img/answer/transverseHeartTube.png'
import venaCava from './img/answer/venaCava.png'
import youngVein from './img/answer/youngVein.png'
import adultForeGut from './img/answer/adultForeGut.png'
import ECJunction from './img/answer/ECJunction.png'
import falciformLigament from './img/answer/falciformLigament.png'
import foreIntestineLoop from './img/answer/foreIntestineLoop.png'
import intestineLoop from './img/answer/intestineLoop.png'
import midIntestineLoop from './img/answer/midIntestineLoop.png'
import organFromIntestine from './img/answer/organFromIntestine.png'
import pancreasBury from './img/answer/pancreasBury.png'
import pancreasGrowing from './img/answer/pancreasGrowing.png'
// import from './img/answer/.png'
import heartLoop from './img/answer/heartLoop.png'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '子宮で、受精卵の受精が起きる場所は？',
          answerImg: [],
          answer: '卵管膨大部',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '子宮内部で、受精卵の透明帯が取れる場所は？',
          answerImg: [],
          answer: '子宮体内腔',
          commentary: '透明帯が取れることで、受精卵の着床が可能となる',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q3],
          questionSentence: '（発生7日の胚）矢印の組織は何か？',
          choices: [
            '胚盤葉上層',
            '羊膜芽細胞',
            '胚盤葉下層',
            '栄養膜細胞層',
            '栄養膜合胞体層',
          ],
          answerImg: [],
          answer: '',
          commentary: '矢印の上の空間が羊膜',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q4],
          questionSentence: '各部位の名称を述べよ',
          answerImg: [],
          answer:
            '1.一次絨毛　2.栄養膜裂孔　3.付着茎　4.羊膜腔　5.二次卵黄嚢　6.胚外壁側中胚葉　7.胚外体腔（絨毛膜腔）　8.内肺葉　9.外胚葉　10.栄養膜合胞体層　11.栄養膜細胞層',
          commentary: 'まだ中胚葉は存在しない（発生2週目）',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q5],
          questionSentence: '発生13日目の胚の断面で、母体由来の細胞を選べ',
          answerImg: [],
          answer: 'E?',
          commentary:
            'A.排外中胚葉？　B.栄養膜細胞層　C.栄養膜裂孔（の白血球）　D.栄養膜合胞体層　E.脱落層？',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q6],
          questionSentence: '絨毛の断面図を示す。発生何日目？',
          answerImg: [],
          answer: '21日目',
          commentary:
            '絨毛Chorionic villiはおよそ21日目で血管を形成し、胚子の血管と連結（絨毛膜動静脈）。三次絨毛は機能的な子宮胎児循環を形成する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q7],
          questionSentence:
            '発生13日の胚の断面で、模式図の2に対応する部位はどこか',
          answerImg: [],
          answer: 'F',
          commentary: '2は栄養膜細胞層で、胚外中胚葉のすぐ外側を覆っている。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence:
            '胞状奇胎hydatidiform moleに関係する記述について正しいものを全て選べ（3つ）',
          choices: [
            '多精子受精は原因になる',
            '完全胞状奇胎では遺伝子量不均衡が起きる',
            '全ての胞状奇胎では、ゲノムのコピー数は父親由来が母親由来の2倍以上である',
            '父親由来ゲノムの1%程度の領域はインプリントされている',
            '胚子組織が子宮内膜に浸潤する',
            'hCGを分泌する',
          ],
          answerImg: [],
          answer:
            '多精子受精は原因になる/全ての胞状奇胎では、ゲノムのコピー数は父親由来が母親由来の2倍以上である/hCGを分泌する',
          commentary:
            '胞状奇胎では、栄養膜が発達して胎盤膜を形成するが、胚子組織がほとんど/まったく存在しない。ゲノムからインプリントされる領域は1%よりもっと少ない。hCGは栄養膜合胞体層から分泌される。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q9],
          questionSentence: '図の空欄を埋めよ',
          answerImg: [],
          answer: '1.原始線条　2.原始結節　3.脊索　4.口咽頭膜　5.排泄腔膜',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q10],
          questionSentence: '図の空欄を埋めよ',
          answerImg: [],
          answer:
            '1.外胚葉　2.羊膜　3.卵黄嚢壁　4.口咽頭膜　5.脊索　6.排泄腔膜　7.尿膜　8.原始窩と神経腸管',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q11],
          questionSentence: '図の空欄を埋めよ',
          answerImg: [],
          answer: '1.外胚葉　2.中胚葉　3.内胚葉　4.脊索',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q12],
          questionSentence: '発生16日胚の横断面で、矢印は何か',
          choices: [
            '中胚葉',
            '胚盤葉上層',
            '胚盤葉下層',
            '内胚葉',
            '胚外中胚葉',
          ],
          answerImg: [],
          answer: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q13],
          questionSentence: '発生16日胚の横断面で、矢印の細胞は何か',
          answerImg: [],
          answer: '中胚葉',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q14],
          questionSentence: '23日胚の横断面で、脊索板はどれか',
          answerImg: [],
          answer: 'D',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: 'ES細胞の起源はどれか',
          choices: [
            '栄養膜',
            '内部細胞塊',
            '羊膜',
            '絨毛膜',
            '原始線条',
            'この中にはない',
          ],
          answerImg: [],
          answer: '内部細胞塊',
          commentary: 'ES細胞は胎盤には分化できない。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '原始線条は将来何になる？（複数選択可）',
          choices: [
            '中枢神経',
            '骨格筋',
            '脊椎',
            '心臓',
            '生殖細胞',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'この中にはない',
          commentary:
            '原始線条は成長の過程で消える。もし残っていると奇種の原因となる。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '上皮と間葉とはそれぞれ何か',
          answerImg: [],
          answer:
            '上皮細胞は互いに密接に連結し、シート、チューブ、細胞索、腺房、導管等を形成。基本的に、外胚葉か内胚葉に由来。　間葉細胞は互いの連結は無いか緩い。それぞれが個別のユニットとして機能する。基本的に、中胚葉か神経堤に由来。',
          commentary: '上皮細胞Epithelial cells　間葉細胞Mesenchymal cells',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence:
            'Which process(es) occurs through epithelial mesenchymal transition?',
          choices: [
            'Implantation',
            'Mesoderm formation',
            'Endoderm formation',
            'Neural crest formation',
            'Blood island formation ',
            'Cancer invasion',
            'None of the above',
          ],
          answerImg: [],
          answer:
            '着床Implantation/中胚葉形成Mesoderm formation/神経堤形成Neural crest formation/ガン浸潤Cancer invasion',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q19],
          questionSentence: '4週胚。破線の断面に含まれないのは？（複数回答可）',
          answerImg: [q20],
          answer: '体節/口咽頭膜/排泄腔膜/卵黄腸管',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [],
          questionSentence: '神経堤に由来しないものは？',
          choices: [
            '膵島',
            '消化管の神経細胞',
            'シュワン細胞',
            '交感神経',
            '副腎髄質',
            'この中にはない',
          ],
          answerImg: [],
          answer: '',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q22],
          questionSentence: '25日胚の横断面で、矢印からできるものを挙げよ',
          answerImg: [],
          answer: '子宮',
          commentary: '矢印は中間中胚葉。泌尿器・生殖器に分化する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q23],
          questionSentence: '29日胚の横断面で、胚内体腔はどれか？',
          answerImg: [],
          answer: 'D',
          commentary: 'Dは側板中胚葉で、体腔の上皮などに分化する。',
        },
        {
          detailInfo: '6/13口頭',
          questionImg: [q24],
          questionSentence: '32日胚の断面で、咽頭弓はどれか？',
          answerImg: [],
          answer: 'CとD',
          commentary:
            '咽頭弓は鰓弓とも呼ばれ、内部を大動脈が通過する。Aは神経管',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '背側腸間膜の形成について正しい記述を全て選べ。理由も述べよ。',
          choices: [
            '沿軸中胚葉由来である',
            '横隔膜に寄与する',
            '体壁に寄与する',
            '腸管を腹腔内に吊り下げる',
            '二枚の腹膜が重なって形成される',
            'この中にはない',
          ],
          answerImg: [],
          answer:
            '横隔膜に寄与する/腸管を腹腔内に吊り下げる/二枚の腹膜が重なって形成される',
          commentary:
            '体腔は側板中胚葉由来。背側腸間膜は体壁と連続しているが、体壁に寄与しているとまでは言えない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '胚内体腔の形成について正しい記述を全て選べ（２つ）。理由も述べよ',
          choices: [
            '羊膜腔に交通する',
            '絨毛膜腔に交通する',
            '卵黄嚢に交通する',
            '外胚葉性の上皮に取り囲まれる',
            '中胚葉性の上皮に取り囲まれる',
            'この中にはない',
          ],
          answerImg: [],
          answer: '絨毛膜腔に交通する/中胚葉性の上皮に取り囲まれる',
          commentary:
            '胚の外側に広がる絨毛膜腔の一部が側板中胚葉に取り囲まれて体腔が形成される。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq1],
          questionSentence:
            '発生19日目の胚の断面図で、将来胸腔になるのはどこ？',
          answerImg: [],
          answer: '2（側板中胚葉）',
          commentary:
            '4は卵黄嚢。1は羊膜。2は側板中胚葉で、ここにできてくる空間が体腔のもとになる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq2],
          questionSentence:
            '28日胚の横断面で、将来腹腔になるのは？（複数選択可）',
          answerImg: [],
          answer: 'CとD',
          commentary:
            'Bが神経管。C＆Dが側板中胚葉。間隙が形成され始めている。Gが原始腸管',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq3],
          questionSentence: '25日胚の横断面で、将来の胸腔はどれか',
          answerImg: [],
          answer: 'D',
          commentary:
            'Dが側板中胚葉で、胚内体腔。下側が臓側中胚葉、上側が壁側中胚葉。Aが神経溝、Eの膨らみは原始心筒（心臓）。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '横中隔について正しい記述を選べ',
          choices: [
            '発生5週から形成が始まる',
            'はじめは心臓よりも前方に形成される',
            '臓側中胚葉由来である',
            '横隔膜の一部を形成する',
            '肝臓細胞索を形成する',
            'この中にはない',
          ],
          answerImg: [],
          answer:
            'はじめは心臓よりも前方に形成される/臓側中胚葉由来である/横隔膜の一部を形成する？',
          commentary:
            '肝臓細胞索≒肝臓の実質。肝臓の実質は内胚葉の前腸に由来する。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq4],
          questionSentence: '25日胚の横断面で、影をつけた部分は何か？',
          answerImg: [],
          answer: '腹腔？',
          commentary:
            '胸膜腔は心膜腔と隔たれて初めて定義される。卵黄嚢は影をつけた部分のさらに下側の部分。心膜腔がその間に筒状に見られる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq5],
          questionSentence: '41日胚の横断面で、矢印の部分は何か？',
          answerImg: [],
          answer: '横隔神経',
          commentary:
            '最上部に見えているのは神経管。その両側が知覚神経、両側に見えて濃く染まっているのが肝臓（を包む腹腔）。最前部の2つの円が心臓。その上が心房のようなもの（血管？）、そのさらに上が肺芽（胸腔）。心膜腔と胸腔を隔てている中隔が胸中隔。知覚神経と同じく濃く染まっているので矢印部分は神経だと推測できる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '胎盤について、正しくない記述を全て上げ、理由を発生機序に関連付けて説明せよ',
          choices: [
            '胎盤関門は、最終的には栄養膜合胞体層、栄養膜細胞層、胎児血管内皮、絨毛の結合組織からなる',
            '胎盤関門は免疫グロブリンを通さない',
            '絨毛膜版には胎児側の血管が通っている',
            '絨毛膜腔には胎児側の血管が循環する',
            'すべて正しい仮設である。',
          ],
          answerImg: [],
          answer:
            '胎盤関門は、最終的には栄養膜合胞体層、栄養膜細胞層、胎児血管内皮、絨毛の結合組織からなる/胎盤関門は免疫グロブリンを通さない/絨毛膜腔には胎児側の血管が循環する',
          commentary:
            '胎盤関門は最終的には栄養膜合胞体層・胎児血管内皮の2層となり、結構色々なものを通す。母体から最も分子量の小さいIgGが胎盤を通して胎児に供給され、それが半年程度残るため乳児は風邪を引かない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq7],
          questionSentence: '妊娠5か月のヒト組織で、矢印の細胞は何か？',
          choices: [
            '赤血球（母体）',
            '赤血球（胎児）',
            'ラングハンス細胞',
            'ランゲルハンス島',
            '合胞体結節',
          ],
          answerImg: [],
          answer: '赤血球（胎児）',
          commentary:
            '映っている組織は胎盤絨毛で、絨毛外側の濃くなっている薄い細胞の層が栄養膜合胞体層（境目が明瞭ではない/hCG産生）で、その内側が栄養膜細胞層（ラングハンス細胞）で、そのさらに内側が結合組織。胎児の赤血球は有核なので本当は核が染まる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq8],
          questionSentence:
            '左右の模式図内（左は発生5週）で、構造1~7の由来をA~Kから選べ。',
          answerImg: [],
          answer: 'C→1絨毛膜板,K→2羊膜,E→3羊膜腔,I→4胚子,B→6臍帯,D→7卵黄嚢',
          commentary:
            '卵黄嚢は腸ループで生理的臍帯ヘルニアを起こす時期がある。絨毛膜と羊膜は融合して羊膜絨毛膜になっていく。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq9],
          questionSentence:
            '発生9日胚で、矢印の部分は将来右の模式図のどこになるか？',
          answerImg: [],
          answer: 'C',
          commentary:
            '中央の球が2層性胚盤で、その上側が円柱状の外胚葉で、胚盤上側の空間が羊膜。また、画面上側が子宮内膜（血管などが見える）。その間の濃い部分が栄養膜で、矢印の細胞は細胞境界が明瞭で、栄養膜細胞層と推定できる。模式図で栄養膜細胞層はC。Dは栄養膜合胞体層で、Eは血管。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq11],
          questionSentence: '妊娠期間中の計測値。矢印は何？',
          choices: [
            '羊水の重量',
            '胎児の体重',
            '胎盤の重量',
            '胎児の頭殿長',
            '母体の重量',
            'この中にはない',
          ],
          answerImg: [],
          answer: '胎児の頭殿長',
          commentary: '妊娠8週だと数センチ。胎児の体重は途中から伸びてくる。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [qq10],
          questionSentence:
            '一卵性双生児の模式図で、発生段階のいつ双生児となったと考えられるか？理由とともに述べよ',
          choices: [
            '1細胞期',
            '2細胞期',
            '桑実胚',
            '胚盤胞',
            '原腸胚',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'この中にはない',
          commentary:
            '胎盤・絨毛膜・羊膜が共通。原始腸管は2つもっている。これは比較的遅い段階（胚盤葉上層が作られた後/原腸形成の前）で双生児となった場合にみられる。原腸形成後では一卵性双生児は発生しない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '母親がD抗原を持たず、胎児がD抗原を持つ場ときに誘発される不適合と、その予防法を解説せよ',
          answerImg: [],
          answer: '',
          commentary:
            '胎児赤芽球症。抗Dグロブリン製剤を注射することで母体側から排除する必要がある。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天異常について、正しい記述は？（複数選択可）',
          choices: [
            '大異常は新生児の3～5%に生ずる',
            '小異常は新生児の3～5%に生ずる',
            '小異常の数と大異常の発生率には有意な相関がない',
            '先天異常の原因は、概ね遺伝性疾患か環境要因によっており、原因が同定されていることが多い',
            '予防可能な先天異常が多い',
          ],
          answerImg: [],
          answer: '大異常は新生児の3～5%に生ずる/予防可能な先天異常が多い',
          commentary:
            '小異常の数と大異常の数には相関がある。小異常が複数みられると、大異常をもっている確率が格段に高まる。特に耳介に異常が見られると危ない。耳介は見た目よりも複雑に（神経堤など）作られているため。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence:
            '症候群Syndromeと連合Associationの相違は何か？（１つ選択）',
          choices: [
            '症候群はいくつかの異常の合併である点で異なる',
            '連合は合併する異常の原因が共通している点で異なる',
            '症候群は診断がつく点で異なる',
            '連合は複数の異常が偶然より高い確率で併発する点で異なる',
            '症候群は遺伝的要因による点で異なる',
            'この中にはない',
          ],
          answerImg: [],
          answer: '症候群は診断がつく点で異なる',
          commentary:
            '両者複数の症状が高い確率で合併する点で共通。症候群は根本的な原因がハッキリしているため、診断がつく。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: 'SNPについて正しい記述は？',
          choices: [
            '個人差は1%である',
            '常染色体にのみ存在する',
            '人種差は発見されていない',
            '最も頻度の高いゲノムの多型である',
            'この中にはない',
          ],
          answerImg: [],
          answer: '最も頻度の高いゲノムの多型である',
          commentary:
            'SNP=一塩基多型Single Nucleotide Polymorphism。SNPは性染色体にも存在し、ゲノムの中に0.1%存在する。人種差に至る変異は当然存在するが、野生動物の中では結構少ない',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '父親の年齢に最も強く依存する先天異常はどれか？',
          choices: [
            'クラインフェルター症候群',
            'ダウン症候群',
            'アペール症候群',
            '猫鳴き症候群',
            '胎児性アルコール症候群',
          ],
          answerImg: [],
          answer: 'アペール症候群',
          commentary:
            'ダウン症候群は21番染色体のトリソミーで基本的に母体年齢に依存する。クラインフェルター症候群はX染色体数の異常。アペール症候群は精子幹細胞の異常で、これが該当する。猫鳴き症候群は5番染色体の欠損で、父親年齢には依存しない。',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天疾患の原因になるものはどれか',
          choices: [
            'ライノウイルス',
            'コロナウイルス',
            'インフルエンザ',
            '風疹',
            '麻疹',
          ],
          answerImg: [],
          answer: '風疹',
          commentary:
            '麻疹は胎盤関門を通過する。風疹は緑内障などの目や心臓の先天異常の原因になる。インフルエンザは流産の原因になることはある。麻疹もワクチン接種推奨',
        },
        {
          detailInfo: '6/14確認問題',
          questionImg: [],
          questionSentence: '先天疾患の原因になるものはどれか',
          choices: [
            'レチノイン酸',
            '葉酸',
            'バルプロ酸',
            'クエン酸',
            '酢酸',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'レチノイン酸、パルプロ酸',
          commentary:
            'レチノイン酸は体節など分節構造を司る重要なシグナル物質である。パルプロ酸も同様。葉酸は足りないことはあっても取りすぎることはない。クエン酸・酢酸は身近に豊富にある。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s1],
          questionSentence: '三葉性胚盤で、胸骨が由来する部位を選べ',
          answerImg: [],
          answer: '3.壁側側板中胚葉',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s2],
          questionSentence: '三葉性胚盤で、椎弓が由来する部位を選べ',
          answerImg: [],
          answer: '7.沿軸中胚葉',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s3],
          questionSentence: '前頭骨が由来する部位を選べ',
          answerImg: [],
          answer: '8.神経堤細胞',
          commentary:
            '神経堤細胞は神経管から形成される。この中にはないという選択も可。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s4],
          questionSentence:
            '図に示す頭蓋骨の異常a~dに対応する縫合を、1~6から選び、その理由を説明せよ',
          answerImg: [],
          answer: 'a→4矢状縫合、b→1冠状縫合、c→、',
          commentary:
            '頭蓋骨の異常は中枢の異常に繋がる。縫合が早く閉じ過ぎることが原因。4の縫合が早期に閉じると後頭部の成長が阻害されて、その周辺が膨らむ（舟状頭蓋）。bの場合（島状頭蓋）、1の縫合が早期に閉じて正中部分が盛り上がる。6はラムダ縫合。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s5],
          questionSentence:
            '以下は、体節横断面の走査電顕像である。将来、椎骨になるのはどこか？',
          answerImg: [],
          answer: '2.沿軸中胚葉椎板',
          commentary: '1が皮板・筋板。2が椎板',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s6],
          questionSentence: '頭蓋骨の中で、神経堤に由来する骨はどれか？',
          answerImg: [],
          answer: '2前頭骨、5上顎骨、6下顎骨',
          commentary:
            '4は側頭骨で、厳密には沿軸中胚葉由来。脊索が頭のトルコ鞍まで来ているので、そこより背側か腹側で由来が分かれる。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence: '耳小骨のうち、キヌタ骨の骨化形式は？',
          choices: ['膜内骨化', '軟骨内骨化', 'この中にはない'],
          answerImg: [],
          answer: '軟骨内骨化',
          commentary: '頭蓋骨はほとんど膜内骨化なので、間違いやすい。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence: '耳小骨のうち、キヌタ骨はどの咽頭弓由来か？',
          choices: [
            '第1咽頭弓',
            '第1咽頭弓および第2咽頭弓',
            '第2咽頭弓',
            '第3咽頭弓',
            'この中にはない',
          ],
          answerImg: [],
          answer: '第1咽頭弓',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s7],
          questionSentence: 'A~Fは図中のどの部位に由来するか？',
          answerImg: [],
          answer: 'A-5（神経管）,B-6この図中にはない,C-2（筋板）',
          commentary:
            '上肢の骨格筋と顔面の骨格筋で由来が違う。顔面の骨格筋は沿軸中胚葉までは共通（骨格筋は全て沿軸中胚葉由来）だが、頭部なので筋板を介さずに体節文節から直接骨格筋が形成される。なので図のような中間的な体節構造を経ていない。',
        },

        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence: '沿軸中胚葉から作られるものは何か？',
          choices: [
            '舌骨下筋',
            '瞳孔括約筋',
            '汗腺の筋上皮',
            '大動脈の筋上皮',
            '粘膜筋板',
            '回外筋',
            '舌筋',
          ],
          answerImg: [],
          answer: '舌骨下筋、回外筋、舌筋',
          commentary:
            '骨格筋は全て沿軸中胚葉由来。粘膜筋板は臓側中胚葉由来。大動脈の筋上皮は平滑筋なので壁側中胚葉由来。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence:
            '体節の分化について、2の腹外側筋前駆細胞について分化する組織をa~gより選べ。',
          choices: [
            '肋骨',
            '胸骨',
            '背部の真皮',
            '上肢の真皮',
            '背筋',
            '外腹斜筋',
            '円回内筋',
          ],
          answerImg: [],
          answer: '2腹外側筋前駆細胞→f外腹斜筋・g円回内筋',
          commentary:
            '背筋は正中に近い筋肉なので、背内側筋前駆細胞から分化する。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [s8],
          questionSentence: '図の中で上直筋はどこに由来するか？',
          answerImg: [],
          answer: '2.筋板？',
          commentary: '骨格筋は原則沿軸中胚葉筋板から分化する。',
        },

        {
          detailInfo: '6/15確認問題',
          questionImg: [s9],
          questionSentence: '図の中で肩甲骨はどこに由来するか？',
          answerImg: [],
          answer: 'この中にはない',
          commentary:
            '（後日訂正）寛骨・肩甲骨含めた体肢の骨は側板中胚葉由来。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence:
            '外胚葉性頂堤AERについて、正しい記述は？（複数選択可）',
          choices: [
            '間葉細胞の軟骨化を促す',
            '遠近軸のパターニングを行う',
            '体肢芽の伸張を促す',
            '側板中胚葉由来である',
            'ZPAからのシグナルを受けて機能する',
            'この中にはない',
          ],
          answerImg: [],
          answer: '遠近軸のパターニングを行う/体肢芽の伸張を促す',
          commentary:
            '外胚葉性頂堤Apical Ectodermal Ridge。AERは外胚葉由来なので4は違う。AERはZPAを生成するので厳密には異なる。AERのシグナルを受けた細胞は未分化の状態で増殖させる。AERに近い細胞と遠い細胞で発現が変わっていくことを遠近軸に対するパターニングいう。',
        },
        {
          detailInfo: '6/15確認問題',
          questionImg: [],
          questionSentence:
            '遺伝子異常と疾患の組み合わせで、7)FBN1の変異によっておこる疾患をa~gから選べ。',
          answerImg: [],
          answer: 'b.マルファン症候群',
          commentary:
            'よく名前の知られた先天性異常疾患。FGFR3→タナトフォリック症候群。いかに末端にHOX遺伝子が影響しているのか。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '二次腹膜後器官を次の中からすべて選べ。',
          choices: [
            '胃',
            '腎臓',
            '尿管',
            '膵臓',
            '十二指腸',
            '空腸',
            '上行結腸',
            '膀胱',
            'S字結腸',
            '直腸',
          ],
          answerImg: [],
          answer: '膵臓・十二指腸・上行結腸・直腸',
          commentary:
            'S状結腸は腸間膜があるので、直腸も腸間膜があったと考える。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '腹膜後器官を次の中からすべて選べ。',
          choices: [
            '胃',
            '腎臓',
            '尿管',
            '膵臓',
            '十二指腸',
            '空腸',
            '上行結腸',
            '膀胱',
            'S字結腸',
            '直腸',
          ],
          answerImg: [],
          answer: '尿管・腎臓・膀胱',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '腹腔内器官を次の中からすべて選べ。',
          choices: [
            '胃',
            '腎臓',
            '尿管',
            '膵臓',
            '十二指腸',
            '空腸',
            '上行結腸',
            '膀胱',
            'S字結腸',
            '直腸',
          ],
          answerImg: [],
          answer: '胃・空腸・S字結腸',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '前腸に由来しないものを全て選べ。',
          choices: [
            '咽頭',
            '咽頭弓',
            '胃',
            '脾臓',
            '肝臓',
            '全て前腸に由来する',
          ],
          answerImg: [],
          answer: '咽頭弓・脾臓',
          commentary:
            '前腸は中腸（上腸間膜動脈支配領域）より上の内胚葉由来の腸管。脾臓は腹膜後器官で、内蔵されている豊富な血球系とともに中胚葉由来の臓器である。咽頭は前腸由来。咽頭弓/鰓弓の棒状の構造は中胚葉由来で、その後神経堤や骨格筋などがmigrationしていく。。肝臓は中胚葉横中隔で成長するが、前腸の肝芽由来であるため密に整列した（上皮のような性質を持つ）肝細胞索を持つ。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '後腸から発生しないものを全て選べ。',
          choices: [
            '肛門',
            '結腸',
            '膀胱',
            '尿膜',
            '尿道',
            '全て後腸に由来する',
          ],
          answerImg: [],
          answer: '全て後腸に由来する',
          commentary:
            '結腸は横行結腸の後1/3より前が中腸（上腸間膜動脈）、後が後腸（下腸間膜動脈など）に分類される。肛門は後腸と外胚葉（排泄腔膜）由来。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '中腸から発生しないものを全て選べ。',
          choices: [
            '肝臓',
            '回腸',
            '虫垂',
            'メッケル憩室',
            '十二指腸',
            '全て中腸に由来する',
          ],
          answerImg: [],
          answer: '肝臓',
          commentary:
            '肝臓は前腸（肝芽）・中胚葉（横中隔）由来。十二指腸は前腸（腹腔動脈系）・中腸（上腸間膜動脈系）由来。盲腸や結腸が中腸由来なので、虫垂（回盲部）は中腸由来。メッケル憩室Meckel diverticulum（卵黄腸管の閉鎖異常による回腸の突出）は内胚葉であるが完全に中腸由来とは言えない',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence:
            '発生4週には、迷走神経叢は前腸の両側の中胚葉の中を通っている。これらの神経は、成人の胃ではどこに位置するか？',
          choices: [
            '右側・左側→背側・腹側',
            '右側・左側→腹側・背側',
            '右側・左側→上側・下側',
            '右側・左側→下側・上側',
          ],
          answerImg: [],
          answer: '右側・左側→背側・腹側',
          commentary:
            '胃が発生過程で水平右回りに90度回転する。前胃間膜内（小弯側）に発生する肝臓が胃の右側に、後胃間膜内（大弯側）に発生する脾臓が胃の左側に位置することとなる。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence:
            '大網はどのようにして形成されるか？（由来・形態変化）',
          // choices: [],
          answerImg: [],
          answer: '',
          commentary:
            '大網は腹腔前側をエプロンのように覆う二重膜構造の腸間膜。胃の大弯から腹壁をつなぐ背側胃間膜由来で、胃の回転運動に伴って横行結腸と小腸の間から腹腔下方向に成長していく。成人では横行結腸間膜と癒合している。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r1],
          questionSentence:
            '32日胚の横断面で、成人の網嚢にあたる部分はどこからできるか？',
          answerImg: [],
          answer: 'C',
          commentary:
            '青色で示している部分に腔が空いている。中央の筒状の空間は胃で、前後に繋がっている。最も腹側の白い空間が心臓で、その後ろの広い赤い領域は肝臓、両側に膨らんでいるのが体肢にあたる。胃の両側の細長いつぶれた空間が腹腔で、ここから回転運動がおこってCが背側に位置し網嚢となる。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r6],
          questionSentence: '36日胚の横断面で、矢印は将来何になるか？',
          answerImg: [],
          answer: '',
          commentary: '矢印は背側胃間膜で、将来脾臓になる。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r2],
          questionSentence: '36日胚の横断面で、矢印の部分は将来何になるか？',
          answerImg: [],
          answer: '胆嚢',
          commentary:
            '矢印の部分は腹側胃間膜で肝臓と胃の間に位置している胆嚢である。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r3],
          questionSentence: '肝シヌソイドになるのはどれか？',
          answerImg: [],
          answer: '2と5',
          commentary:
            '左側の卵黄嚢静脈が変化する。1と4は臍静脈。発生過程では左右対称に形成されていくが、胃の回転とともに変化していく。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '生後、肝円索になるのはどれか？',
          answerImg: [],
          answer: '4',
          commentary:
            '卵黄嚢静脈と臍静脈は左右対称に二本作られるが、基本的には片側しか残存しない。右側の卵黄嚢静脈が残る。臍静脈は左側が残る。肝円索は臍静脈由来なので。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [],
          questionSentence: '膵臓でインスリン分泌細胞の由来は？',
          choices: [
            '神経外胚葉',
            '体幹部神経堤',
            '背側腸間膜',
            '前腸内胚葉',
            '中腸内胚葉',
          ],
          answerImg: [],
          answer: '前腸内胚葉？？',
          commentary:
            'ランゲルハンス島は導管部のところに幹細胞があるといわれていて、膵実質と同じ由来である。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r5],
          questionSentence: '回盲部は図のどこにできるか？',
          answerImg: [],
          answer: '2',
          commentary:
            '卵黄腸管（メッケル憩室）は将来の回腸にできるので、回盲部（虫垂）はそれより尾側に存在する。',
        },
        {
          detailInfo: '6/17確認問題',
          questionImg: [r4],
          questionSentence: '将来の大十二指腸乳頭はどこか？',
          answerImg: [],
          answer: 'A',
          commentary: 'Aが主膵管、Bが副膵管（小十二指腸乳頭）になる。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t01],
          questionSentence: '発生18日胚で、心臓が由来する部位を選べ。',
          answerImg: [],
          answer: '5.側板中胚葉臓側',
          commentary:
            '一次・二次心臓域は頭側・側板中胚葉臓側板から形成される。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '二次心臓域に由来する部位を全て選べ。',
          choices: [
            '左心室',
            '右心房',
            '右心室',
            '左心房',
            '動脈幹',
            '心円錐',
            'この中にはない',
          ],
          answerImg: [],
          answer: '右心室、動脈管、心円錐',
          commentary:
            '右心室RVと流出路OFTが二次心臓域からの寄与。これ以外にも背側心間膜・肺静脈形成にも寄与する。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence:
            '一次心臓域の形成過程と形成位置を「原始線条」を用いて解説せよ。（胚盤葉上層という言葉も用いて）',
          answerImg: [t04],
          answer:
            '胚盤葉上層の予定運命：細胞の運命は、胚盤葉上層の中での位置で概ね決まっている。発生の初期に原始線条を通過し中胚葉を形成する運命の胚盤葉上層がもっとも頭部の心臓中胚葉を形成する。',
          commentary:
            'ただし全ての中胚葉はあらゆる中胚葉への分化能を依然として保持している',
        },

        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence:
            '原始心筒/心筒の形成過程について、「心内膜筒」「胚子の屈曲」という単語を用いて解説せよ（一次心臓域という言葉も用いて）。また、将来、流出路となる部位がどのように形成されるのかも説明せよ。',
          answerImg: [t06, t07],
          answer:
            '胚子の左右の屈曲によって心内膜筒が癒合して原始心筒を形成する。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence:
            '心臓ループにおいて予定された、以下の心臓区画の中で、房室管にもっとも近接しているものはどれか？',
          choices: ['予定右心房', '予定左心房', '予定右心室', '予定左心室'],
          answerImg: [],
          answer: '予定左心房・予定左心室',
          commentary:
            '心筒房室溝→心筒房室管。左心室と左心房の間の部分が房室管を形成する',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '心膜横洞とは何か？',
          answerImg: [],
          answer:
            '背側心間膜の中部がすぐに消失して、流入路と流出路に分離する。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t11],
          questionSentence: '25日胚の横断面で、影を付けた部分は何か？',
          answerImg: [],
          answer: 'A.心臓',
          commentary:
            '重要なのは下側（腹側）の影。下側が卵黄嚢。側板中胚葉が臓側と壁側に既に分かれていて、心膜腔が腹側の空間として形成されている。25日胚なので拍動が既に始まっている。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '背側心間膜に由来する部位を全て選べ。',
          choices: [
            '肺静脈',
            '左心房平滑壁部',
            '冠状動脈',
            '心外膜',
            '動脈管円錐中隔',
            '筋性心室中隔',
            'この中にはない',
          ],
          answerImg: [t13, t14],
          answer: '肺静脈、左心房平滑壁部、冠状動脈、心外膜',
          commentary:
            '他にも心房中隔の一部（前庭棘/心房棘）も背側心間膜に由来する。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '心内膜隆起に由来する部位を全て選べ。',
          choices: [
            '心室中隔膜性部',
            '右心房平滑壁部',
            '冠状動脈',
            '房室管',
            '動脈管円錐中隔',
            '筋性心室中隔',
            'この中にはない',
          ],
          answerImg: [t16, t17],
          answer: '心室中隔膜性部、房室管（中隔）、動脈管',
          commentary:
            '心内膜の細胞が結合組織に変わっていく。心内膜由来細胞だけでなく神経堤由来細胞も形成に関わる。筋性心室中隔は心筋由来。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t18],
          questionSentence: '発生7週の図で、卵円孔はどれか？(1つ選択)',
          answerImg: [],
          answer: '6（二次中隔の開放部分）',
          commentary:
            '4が一次中隔の一次孔（その後アポトーシスにより二次孔が形成される）。その後形成される硬い二次中隔の組織の開口部が6.卵円孔で、この2枚構造が心房中隔を形成する。右→左心房へは血液を流すが、出生後左心房内圧が高まるとシャントが閉じる。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '外胚葉からの寄与が重要な部位を全て選べ。',
          choices: [
            '一次中隔',
            '二次中隔',
            '冠状動脈',
            '心外膜',
            '動脈幹円錐中隔',
            '筋性心室中隔',
            'この中にはない',
          ],
          answerImg: [t19],
          answer: '動脈幹円錐中隔',
          commentary:
            '外胚葉（神経堤）の寄与が重要。動脈管の方から心円錐へらせん状に結合が進んでいく。これらが最終的に膜性心室中隔を形成する。神経堤に異常が起こると顔面の異常と心臓異常が同時に見られることは珍しくない。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t20, t21],
          questionSentence:
            '図は、胎児循環の模式図である。出生時に閉塞する血管を1～5から全て選び、その役割を解説せよ。',
          answerImg: [t22],
          answer:
            '2.動脈管索）出生に伴う肺呼吸の開始　5.静脈管索）出生に伴う臍帯の断絶',
          commentary:
            '胎盤循環から肺循環の切り替えに伴う血流変化。胎児循環は臍静脈から入る動脈血を全身に送り出すだけでよいが、出生後は肺循環に送った血液を再び体循環に送出しなければならない。出生後最初の呼吸でこの劇的な変化が一瞬で起こる。その他臍動脈は臍動脈索、臍静脈は閉鎖して肝円索に。　ラングマンp221～',
        },

        {
          detailInfo: '6/21確認問題',
          questionImg: [t24],
          questionSentence:
            '成人の大動脈模式図で、影を付けた部分は、胚性期にはどの動脈、咽頭弓動脈に由来するか？（AとB)',
          answerImg: [t25],
          answer:
            'A.右鎖骨下動脈）第4大動脈弓右側　B.左鎖骨下動脈）第7節間動脈',
          commentary:
            '左右の鎖骨下動脈近位部はともに第4大動脈弓由来というわけではない。第4大動脈弓左側は大動脈弓の一部（左総頚動脈と左鎖骨下動脈の間の区間）を構成することになる。第7節肝動脈は下行大動脈の分岐として出現し、成長とともに分岐部が上へ進む　ラングマンp212,211,210',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t26],
          questionSentence:
            '成人の大動脈模式図で、影を付けた部分は、胚性期にはどの動脈、咽頭弓動脈に由来するか？（右総頚動脈）',
          answerImg: [t27],
          answer: '第3大動脈弓から頚動脈系が形成される',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t28],
          questionSentence:
            '成人の大動脈模式図で、影を付けた部分は、胚性期にはどの動脈、咽頭弓動脈に由来するか？（動脈管索）',
          answerImg: [t30],
          answer: '第6大動脈弓左側',
          commentary: 'ラングマンp210',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t29],
          questionSentence:
            '成人の大動脈模式図で、影を付けた部分は、胚性期にはどの動脈、咽頭弓動脈に由来するか？（左肺動脈）',
          answerImg: [t30],
          answer: '第6大動脈弓',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence:
            '次の空欄を埋めよ。迷走神経の分枝である反回神経recurrent laryngeal nerveは、右側は（　）を回り、左側は（　）を回って上行する。これは、（　）の消失過程が左右で異なるためである。',
          answerImg: [],
          answer: '右鎖骨下動脈、大動脈弓、第6大動脈弓',
          commentary:
            '左側は動脈管索の下側（外側）を回って上行する。第6大動脈弓に発生初期では引っかかっているが、発生過程で右側では第6・第5大動脈弓が消失して第4大動脈弓（→右鎖骨下動脈）に引っかかるようになり、左側では動脈管索に引っかかることとなる。ラングマンp211,213',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t33],
          questionSentence: '発生32日胚の断面図で、第2咽頭弓はどこか？',
          answerImg: [],
          answer: 'C',
          commentary:
            '前後の空間が神経幹で、そのすぐ内側の小さな空間が脊索（トルコ鞍まで）。脊索の両側に2対あるのが背側大動脈。咽頭弓は内部に大動脈弓（咽頭弓動脈）が通過する。第一咽頭弓は断面で切れていない（第2咽頭弓と第3咽頭弓が断面で映っている）。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t34],
          questionSentence:
            '管前大動脈縮窄に動脈管開存が併発しなかった場合、何が起きるか？',
          answerImg: [t35],
          answer: 'C.下半身のチアノーゼ',
          commentary:
            '大きな動脈の縮窄は生命維持に関わるので重要。縮窄が動脈管の前の部分で起こっているのか、後の部分で起こっているのかが重要。今回は動脈管の前の部分で血液が止まってしまう。この場合、動脈管が閉じてしまう（動脈管開存症ではない）と、大動脈の下半身へ流れる部分に一切血液が流入しなくなってしまう。動脈管開存の場合は右心からの血液が動脈管から下半身へ流れるので、血行不良ではあるがチアノーゼにはならない。大動脈の狭窄なので肺高血圧症とは無関係。迂回路は肋間動脈や内胸動脈。ラングマンp212~216',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t37],
          questionSentence: '発生4週胚で、肝円索になるのはどれか？',
          answerImg: [],
          answer: '6.左臍静脈',
          commentary:
            '静脈に関しては最初は対称に作られるが左右差が出てくる。左臍静脈が残存して肝円索を形成する。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [t38],
          questionSentence: '発生4週胚で、上腸間膜静脈になるのはどれか？',
          answerImg: [],
          answer: '右側卵黄嚢静脈',
          commentary:
            '上腸間膜動脈は右側から腸管へ接続する。この後胃と胃間膜が回転することで上腸間膜動脈は胃腸の背側へ隠れることになる。',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '下大静脈の由来を全て選べ。',
          choices: [
            '右卵黄嚢静脈',
            '左卵黄嚢静脈',
            '後主静脈',
            '主上静脈',
            '主下静脈',
            '右臍静脈',
            'この中にはない',
            '前主静脈',
          ],
          answerImg: [t40],
          answer: '右卵黄嚢静脈、後主静脈、主下静脈、主上静脈',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '半奇静脈の由来を一つ選べ。',
          choices: [
            '右卵黄嚢静脈',
            '主上静脈',
            '主下静脈',
            '後主静脈',
            '前主静脈',
            '右臍静脈',
            'この中にはない',
            '左卵黄嚢静脈',
          ],
          answerImg: [t42],
          answer: '主上静脈',
        },
        {
          detailInfo: '6/21確認問題',
          questionImg: [],
          questionSentence: '鎖骨下静脈の由来を選べ。',
          choices: [
            '右卵黄嚢静脈',
            '左卵黄嚢静脈',
            '後主静脈',
            '前主静脈',
            '主上静脈',
            '主下静脈',
            '右臍静脈',
            'この中にはない',
          ],
          answerImg: [],
          answer: '前主静脈',
          commentary:
            '上半身の静脈は比較的単純（そのまま出生後の静脈を担当する）',
        },
        {
          detailInfo: '6/21追加',
          questionImg: [],
          questionSentence:
            '「患者は14歳女児。大きな既往症はない。学校の健康診断で高血圧を指摘され、受診した。上肢は高血圧を呈するが、下肢の血圧は低かった。胸部放射線画像で骨侵食rib notchingが見つかった。」（１）上記が発生異常だとすると、どんな異常か？ ',
          choices: [
            '鎖骨下動脈起始異常',
            '二重大動脈弓',
            '大動脈縮窄',
            '重複下大静脈',
          ],
          answerImg: [],
          answer: '大動脈縮窄',
          commentary:
            '大動脈縮窄症Coarctation of the aortaは大動脈の管径が左鎖骨下動脈の起始部以下で著しく狭められている状態である。この状態に伴う典型的な臨床症状は、右腕の高血圧と下肢の低血圧が併発することである。ラングマンp213',
        },
        {
          detailInfo: '6/21追加',
          questionImg: [],
          questionSentence:
            '「患者は14歳女児。大きな既往症はない。学校の健康診断で高血圧を指摘され、受診した。上肢は高血圧を呈するが、下肢の血圧は低かった。胸部放射線画像で骨侵食rib notchingが見つかった。」（２）上記の異常に随伴すると考えられる心臓の異常は何か？ ',
          choices: ['心室中隔欠損', '心房中隔欠損', '左心室肥大', '右心室肥大'],
          answerImg: [],
          answer: '左心室肥大？',
          commentary:
            '上肢の血圧が高いので、ここへ血液を拍出する左心室への負荷が大きくなる。',
        },
        {
          detailInfo: '6/21追加',
          questionImg: [],
          questionSentence: '嚥下困難を起こす異常は次のうちどれか？',
          choices: [
            '大動脈弓遮断',
            '重複大動脈弓',
            '右大動脈弓',
            '動脈管開存',
            '右鎖骨下動脈起始異常',
          ],
          answerImg: [],
          answer: '重複大動脈弓',
          commentary:
            '重複大動脈弓Double aortic archでは、右の背側大動脈が右第7節間動脈の分岐部と、左の背側大動脈との結合部の間で残存する。これにより食道と気管を取り囲む血管輪が生じ、しばしばこれらの器官を圧迫し、呼吸困難や嚥下困難を引き起こす。ラングマンp214',
        },
        {
          detailInfo: '6/21追加',
          questionImg: [],
          questionSentence: '大動脈弓遮断に随伴する心臓異常は何か？',
          choices: [
            '一次口欠損',
            '二次口欠損',
            '卵円孔開存',
            '心室中隔欠損',
            '動脈管開存',
          ],
          answerImg: [],
          answer: '動脈管開存、心室中隔欠損',
          commentary:
            '左側第4大動脈弓異常消失パターンにより起こる大動脈弓遮断の3型は、いずれも下半身に至る下行大動脈に血液を供給するため動脈管開存PDAがあり、心室中隔欠損VSDも存在する。その理由は流出路を二分する円錐動脈幹中隔が上手く伸びず、房室管中の腹側心内膜隆起に癒合できなかったためである。ラングマンp215',
        },
        {
          detailInfo: '6/21確認問題未出題',
          questionImg: [t23],
          questionSentence:
            '成人の大動脈の模式図で、影をつけた部分は胚性期にはどの動脈・咽頭弓動脈に由来するか？（大動脈弓の右鎖骨下動脈より近位側）',
          answerImg: [heartLoop],
          answer: '心臓動脈幹',
          commentary:
            '心球遠位部（動脈幹）は大動脈根・大動脈・肺動脈の近位部を形成する。※咽頭弓第4大動脈弓は、左側では左総頚動脈-左鎖骨下動脈間の大動脈弓を、右側では右鎖骨下動脈の最も近位の部分を形成する。',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: 'プラコードに由来する器官は？',
          choices: [
            '外有毛細胞',
            '前庭階',
            '鼓室階',
            '蝸牛管',
            'この中にはない',
          ],
          answerImg: [u1032],
          answer: '蝸牛管、外有毛細胞',
          commentary:
            '前庭階・鼓室階は蝸牛管を取り囲む神経堤に由来する間葉(軟骨包)由来。蝸牛管上皮細胞に2つの隆起（内側隆起→らせん板縁、外側隆起→コルチ器）が生じ、その外側隆起が内外有毛細胞を形成する。間葉細胞は中胚葉か神経堤由来であるが、頭部の間葉細胞は神経堤由来である可能性が高い。ラングマンp353',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u1038],
          questionSentence: '発生30日胚断面で、耳胞を同定せよ。',
          answerImg: [],
          answer: '背側（上側）神経管の左右で膨らんでいる部分',
          commentary:
            '緑の線の切片を上から見ている。切片後方の突起ができつつある耳胞で、これを断面で同定する問題。耳胞は左右両方にできる。プラコードは神経上皮と外皮が肥厚してできたもの。上側神経管左右にある球状の膨らみが耳胞である。その下側の濃い領域は神経堤由来の間葉で、中枢神経や耳胞と協調して脳神経（CN内耳神経や顔面神経）へ分化する。耳管は前腸（断面中央の管）内胚葉由来',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: '蝸牛神経節に由来が最も近いのは？',
          choices: [
            '耳介',
            'エウスタキオ管',
            'ツチ骨',
            '蝸牛管',
            'この中にはない',
          ],
          answerImg: [u1106],
          answer: '蝸牛管',
          commentary:
            '蝸牛は内耳の感覚器官。蝸牛管は耳板/プラコード由来。蝸牛神経はプラコードと神経堤由来。耳胞形成中に、耳板の壁から小細胞群が分離して、内耳神経節を形成し後にらせん神経節に分化する。ツチ骨は第1咽頭弓の軟骨由来。エウスタキオ管は日本語で耳管を指し、第一咽頭嚢（内胚葉）由来。耳介は第一咽頭弓・第二咽頭弓の神経堤由来の間葉細胞由来。ラングマンp344,354',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: '鼓膜の形成過程を解説せよ',
          answerImg: [u1113],
          answer:
            '鼓膜は外耳道底における1)外胚葉性上皮被膜、2)鼓室の内胚葉性上皮被膜、3)線維層を形成する結合組織の中間層からなる。',
          commentary:
            '鼓膜eardrumは外肺葉層・内胚葉層・その間の間葉（おそらく神経堤）由来結合組織の三層構造。音の情報は耳小骨を伝わって蝸牛に伝わり有毛細胞から内耳神経へ伝わる。ラングマンp356',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: '網膜の由来は何か',
          choices: [
            '外胚葉性のプラコード',
            '前脳',
            '中脳',
            '菱脳',
            'この中にはない',
          ],
          answerImg: [],
          answer: '前脳',
          commentary:
            '目のプラコードは陥入して水晶体を形成する。前脳間脳域（脳下垂体など）の神経ヒダの折れこみ→眼胞→眼杯→眼杯内層が網膜へ分化。ラングマンp361',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u1130],
          questionSentence: '発生30日胚断面で、眼胞を同定せよ',
          answerImg: [],
          answer: '断面下側（腹側）の神経管の左右の膨らみ',
          commentary: '残された神経管は前脳（間脳）を形成する。',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u1134],
          questionSentence:
            '発生36日胚の断面で、眼杯・水晶体・視神経を同定せよ。また網膜はどこに由来するか？',
          answerImg: [u1139],
          answer: '図参照',
          commentary:
            '断面下側（腹側）の神経管（前脳）から左右に眼胚が分岐する。この断面では眼杯がおわん状になっていて、眼杯と前脳の間の部分が視神経に分化する。水晶体は表皮から分離しかけている。ラングマンp362,363',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: '神経外胚葉由来の組織を全て選べ。',
          choices: [
            '毛様体筋',
            '水晶体',
            '瞳孔散大筋',
            '網膜',
            'この中にはない',
          ],
          answerImg: [],
          answer: '（毛様体筋）、瞳孔散大筋、網膜',
          commentary:
            '瞳孔括約筋・瞳孔散大筋は眼杯下層神経外胚葉由来。毛様体筋は眼杯を包む間葉層（神経堤=神経上皮）由来。網膜は神経管由来。水晶体は眼プラコード由来。',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u114006],
          questionSentence:
            '発生56日胚の断面で、1.網膜色素上皮、2.硝子体動脈、3.結膜嚢、4.眼瞼、5.強膜を同定せよ。',
          answerImg: [u114018],
          answer: '図参照',
          commentary:
            '強膜は脳硬膜と同様眼を取り囲む間葉（神経堤・中胚葉）からの由来、網膜色素上皮は眼杯外層由来、硝子体は眼杯裂から進入した間葉組織由来ゼラチン様物質で、硝子体動脈はその中で水晶体を栄養するための動脈。胎生期中に閉塞し、硝子体管が遺残する。結膜は上皮の陥入で生じ、眼瞼はその表層に発生する。',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u1205],
          questionSentence: '組織図で、外胚葉由来の細胞を選べ。',
          answerImg: [],
          answer: 'A.表皮有棘層、C.小汗腺',
          commentary: 'B.真皮結合組織、D.皮下脂肪は中胚葉由来',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [u1212],
          questionSentence:
            '体幹の皮下脂肪と皮脂腺の由来について正しく組み合わせよ。',
          choices: ['外胚葉', '中胚葉', '内胚葉', '神経堤'],
          answerImg: [],
          answer: '中胚葉→皮下脂肪、外胚葉→皮脂腺',
          commentary:
            '皮脂腺は外胚葉由来の上皮性毛包からできる。皮下脂肪は間葉系の中でできるので中胚葉由来。',
        },
        {
          detailInfo: '6/24確認問題',
          questionImg: [],
          questionSentence: '神経堤に由来する細胞を全て選べ。',
          choices: [
            'ランゲルハンス島',
            'メラノサイト',
            '副腎皮質',
            '三叉神経',
            '自律神経',
            'この中にはない',
          ],
          answerImg: [u1224],
          answer: 'メラノサイト、三叉神経、自律神経',
          commentary:
            '膵臓実質は内胚葉前腸由来。ランゲルハンス島は導管末梢部にある幹細胞由来なので同じく内胚葉由来。副腎髄質は神経堤由来。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '喉頭口の形成にかかる咽頭弓を二つ挙げ、それらに由来する軟骨を挙げよ',
          answerImg: [],
          answer: '第4・第6咽頭弓',
          commentary: '喉頭軟骨は中胚葉由来（咽頭弓由来）といえる。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence: '気管食道中隔の形成過程を解説せよ',
          answerImg: [],
          answer: '気管食道稜が呼吸憩室と前腸を分割する。',
          commentary: 'なので気管は内胚葉由来',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v01],
          questionSentence:
            '33日胚の断面で、咽頭口・喉頭嚢はどこか？また、甲状軟骨はどこからできるか？',
          answerImg: [],
          answer:
            '断面中央のT字型の空間が咽頭口、その両側の密な空間が咽頭嚢、背側が咽頭蓋へ分化する。',
          commentary:
            '断面上が背側、下が頭側。最も腹側の空間は心膜腔で、その背側に大動脈嚢や咽頭嚢が見える。断面中央のひしゃげたT字型の空間は、喉頭口へ分化する。その左右の細胞密集領域は披裂隆起へ分化する。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v02],
          questionSentence:
            '32日胚の断面で、気管・食道・気管食道中隔を同定せよ。',
          answerImg: [],
          answer:
            '断面中央の縦に2つ並ぶ楕円（背側が食道、腹側が気管）その間が中隔。',
          commentary:
            '断面上が背側、下が腹側。最も背側の空間が神経管、その下に横に2つ並ぶ卵型の空間が大動脈？、断面中央の縦に2つ並ぶ2つの楕円型の空間は食道と気管（腹側）である。その間の空間が気管食道中隔である。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence: '気管食道瘻について正しい記述を全て選べ',
          choices: [
            '胚芽の発生異常によっておこる',
            '心臓の異常を伴う事が多い',
            '羊水過少症を伴うことが多い',
            '食道下部が気管と瘻をなすことが多い',
            'この中にはない',
          ],
          answerImg: [TEF],
          answer:
            '心臓の異常を伴う事が多い/食道下部が気管と瘻をなすことが多い。',
          commentary:
            'VACTERL連合 VACTERL	association	(脊椎異常 vertebral	anomaly,	肛⾨閉鎖 anal	atresia,	⼼臓異常 cardiac	defect,	気管⾷道瘻 tracheoesophageal	fistula,	⾷道閉鎖 esophageal	atresia,	腎臓異常 renal	anomaly,	体肢異常 limb	defect)',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '出生前超音波検査で羊水過多が明らかになった。出生時に、胎児は口の中に多量の液体を含んでいた。どのような型の異常が考えられるか？',
          answerImg: [TEF],
          answer: '食道閉鎖',
          commentary:
            '食道閉鎖が起こると、飲み込んだ羊水が胃腸に達しないため、羊水過多症を合併することがある。すぐに手術をする必要がある。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '肺芽の形成過程を、胚内体腔の分割に関係づけて解説せよ',
          answerImg: [growingLung],
          answer:
            '発生5週に体壁から隆起した胸心膜ヒダが、内側へ成長し正中で癒合し食道の中胚葉とも癒合。同時に胸心膜ヒダの根が腹壁へ移動し、結果として原始心膜腔は心膜腔と左右の胸腹腔に分割される。',
          commentary:
            '心膜腔と腹腔との間は横中隔が一部分割するが、残った部分は心腹膜管として残存し、最終的には胸腹膜ヒダによって分離される（胸腹膜ヒダ+横中隔=横隔膜）。原始心膜腔が肺の成長に合わせて心膜腔と胸膜腔に分割されていく。肺芽を取り囲む構造は臓側中胚葉由来。原始心膜腔と原始胸膜腔を分けるのが胸心膜ヒダ。横隔神経が胸心膜ヒダに中に発生するので、最終的に横隔神経が心膜の中を通ることになる。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v04],
          questionSentence:
            '横隔膜模式図で、影を付けた部分（腱中心）の由来は何か？',
          choices: [
            '胸心膜ヒダ',
            '胸腹膜ヒダ',
            '心腹膜管',
            '横中隔',
            '体節（頚分節）',
            '体節（胸分節）',
            '食道間膜',
          ],
          answerImg: [],
          answer: '横中隔',
          commentary:
            '横隔膜は横中隔・胸腹膜ヒダ・食道間膜から形成されるが、その腱中心は横中隔由来。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v05],
          questionSentence:
            '妊娠26週と27週で新生児生存率が大きく異なるのはなぜか？（27週目には救命率が90%以上となる）',
          answerImg: [],
          answer:
            '肺胞やⅡ型肺胞上皮細胞が形成され始めるのがこの時期（終末嚢期）だから',
          commentary:
            '第3期になるまで肺胞が完成しない。数として十分そろうわけではない',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '産科領域で、肺機能が十分に成熟していると判断されるのは妊娠第何週からか？',
          answerImg: [],
          answer: '34週？',
          commentary:
            '34週を越えてくるとほとんど障害が起こらない（→帝王切開可能）',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v07],
          questionSentence: '29日胚の横断面で、尿管はどこからできるか？',
          answerImg: [],
          answer: '神経管両側最外側の密の領域',
          commentary: '尿管は中間中胚葉由来',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v08],
          questionSentence: '29日胚の横断面で、尿道や膀胱はどこからできるか？',
          answerImg: [],
          answer: '画面中～下部（腹側）の排泄腔',
          commentary:
            '尿道や膀胱は中間中胚葉由来ではなく、内胚葉（後腸の排泄腔）由来。後腸の内胚葉は尿膜と連続していて、膀胱形成後尿膜は閉鎖される（正中臍索）',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v09],
          questionSentence:
            '33日胚の縦断面で、将来精巣輸出管となるのはどこか？',
          answerImg: [mesonephricTubule],
          answer:
            '中腎管から中腎へ繋がる中腎細管。断面を左右に短く走っている。',
          commentary:
            '断面左右の濃い領域は中腎で、縦に走っている管が中腎管。中腎と中腎管をつなぐ横走する管は中腎細管であり、後の精巣輸出管である。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v10],
          questionSentence:
            '39日胚横断面で、1)中腎の腎小体、2)中腎細管、3)中腎管、4)生殖堤を同定せよ。',
          answerImg: [midKidney],
          answer:
            '1)断面左右中央の濃い胞状の部分　2)断面左右やや上方の真横に走っている管部分　3)断面左右で中腎細管から続いている小さめの丸い円部分　4)断面左右やや下方で下方向へ膨らんでいるやや濃い部分',
          commentary:
            '中央のつぶれた管がaortaで（内部に赤血球が詰まっている）、そこから左右前方（下方）に細静脈が伸び、胞状の糸球体を形成する。糸球体のあたりからさらに左右に伸びているのが中腎細管→中腎管（輪切りに切れている）。糸球体の背側（上側に見えているのが後主静脈postcardinal.vで、これらの周りを中腎堤の空間が囲んでいる。断面最も腹側に見えているのが腸管と上腸間膜動脈sup.mesenteric a.である',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v11],
          questionSentence: '49日胚横断面後腎で、矢印のA,B,Cは何か？',
          answerImg: [glomerulus],
          answer: 'A.糸球体、B.ボーマン嚢、C.集合管（尿管）',
          commentary:
            '後腎組織に尿管が進入し、糸球体とそれを覆うボーマン嚢が形成されている。ボーマン嚢は後腎間葉組織（帽状の後腎芽組織）由来、集合管は尿管由来。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '常染色体劣性多発性腎嚢胞ARPKDと、常染色体優性多発性腎嚢胞ADPKDの違いについて',
          choices: [
            'ARPKDは小児期に腎不全が起きる点で異なる',
            'ARPKDは線毛に関する遺伝子異常が原因である点で異なる',
            'ARPKDはネフロンに嚢胞が生じる点で異なる',
            'ARPKDの方が頻度が高い',
            'この中にはない',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'ADPKDのDはDominant。劣性ARPKDは集合管から嚢胞が生じる。優性遺伝病ADPKDは自然淘汰圧を受けるため成人後に発症する。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v12],
          questionSentence: '49日胚（男性）横断面で、1)腎臓、2)精巣を同定せよ',
          answerImg: [v13],
          answer:
            '1)断面左右にC字型に濃く染まっているのが腎臓、2)その下方（腹側）で全体が濃染している卵型の部分が精巣',
          commentary:
            '精巣が下行し始めている。胎児の肝臓は大きいためこの断面でも腹側右側に大きく映っている。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v16],
          questionSentence: '骨盤腎を栄養する動脈はどこに起始するか？',
          answerImg: [],
          answer: 'C.腹部大動脈下部',
          commentary:
            '腎臓は仙骨のあたりで発生し、成熟過程で外旋し上行するが、動脈群の通過に失敗したものが取り残されたものが骨盤腎である。腎臓は上行中、絶えずより高い部位から起始する大動脈に栄養され、下位になった血管は退化する。',
        },

        {
          detailInfo: '6/30確認問題',
          questionImg: [v17],
          questionSentence: '成人の膀胱三角の上皮の由来は何か',
          choices: ['中腎', '中腎管', '傍中腎管', '臓側中胚葉', '後腸'],
          answerImg: [trigonOfBladder],
          answer: '中腎管',
          commentary:
            '膀胱三角とは膀胱の拡大に伴い尿管の一部が広がって膀胱壁を構成するようになったもので、膀胱三角も移行上皮（後に内胚葉性上皮に置換されるため）であるが、伸展性に乏しく表面が滑らか。尿管は中腎管由来で、中腎管から尿管芽が出て後腎へ進入する。膀胱三角の形成によって尿管は直接膀胱に接続するようになる。中腎管は最終的に射精管となる。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v18],
          questionSentence:
            '17日胚子の矢状断面模式図で、尿膜管瘻はどこに由来するか？',
          answerImg: [urachalFistula],
          answer: 'B.尿膜（※後日訂正：Dが尿膜）',
          commentary:
            '模式図下側が卵黄嚢で、黄色が内胚葉。A.は外胚葉と内胚葉が直接繋がる部分で後咽頭膜を構成する。C.は尾側で内胚葉と外胚葉が直接並んで排泄腔膜（→肛門）を構成する。尿膜管瘻は臍帯から尿生殖洞（膀胱）へ繋がる尿膜管の閉鎖不全であるので、尿膜であるDが正解。※腸管ループと尿膜は最終的には同じ臍帯内に共存する事になるが、由来は中腸と後腸の末端でまったく異なる。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '集合細管と由来が最も近いものを選択肢から選び、その理由を腎臓の発生機序に関係づけて説明せよ。',
          choices: [
            '膀胱',
            '尿管',
            '尿道',
            'ヘンレループ',
            'ボーマン嚢',
            'この中にはない',
          ],
          answerImg: [growingKidney],
          answer: '尿管',
          commentary:
            '膀胱と尿道は内胚葉由来。尿細管とボーマン嚢後腎間葉組織（中間中胚葉）由来',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '線毛の異常を伴う疾患を選択肢から全て選び、それぞれの異常の発生機序に関連づけて理由を説明せよ。',
          choices: [
            '馬蹄腎',
            '停留精巣',
            'WAGR症候群',
            'ARPKD',
            'Kartagener症候群',
            'この中にはない',
          ],
          answerImg: [],
          answer: 'ARPKD、Kartagener症候群',
          commentary:
            'WAGR症候群）ウィルムス腫瘍 Wilms	tumor、無虹彩症 aniridia、⽣殖芽腫瘍gonadoblastoma、知的障害 mental	retardationの合併で線毛病ではない。Kartagener症候群は内臓逆位・慢性副鼻腔炎・不妊症などを併発する線毛病。馬蹄腎は下腸間膜動脈や臍動脈などの通過失敗による腎臓の位置の異常で、線毛病ではない。停留精巣は精巣の下行不全であるが、線毛の異常ではない。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence:
            '次の細胞と内分泌因子産生の組み合わせで正しいものを選べ(卵胞膜黄体細胞・顆粒層細胞・内卵胞膜細胞・セルトリ細胞・ライディッヒ細胞)→(テストステロン・エストロン・AMH・FSH・プロゲステロン)',
          answerImg: [],
          answer:
            'ライディッヒ細胞→テストステロン、セルトリ細胞→AMH、顆粒層細胞→プロゲステロン？、卵胞膜黄体細胞→エストロン、内卵胞膜細胞→テストステロン',
          commentary:
            'AMH:アンチミュラー管ホルモン（弾性では傍中腎管が退化する）。SRY遺伝子由来。内卵胞膜細胞（女性固有）がテストステロンを産生し、顆粒層細胞がそれを芳香化しエストロゲンに変える。',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [],
          questionSentence: '男性生殖器の由来について正しい組み合わせを選べ',
          answerImg: [],
          answer:
            'ライディッヒ細胞←生殖堤間葉、精巣輸出管←中腎管、精管←中腎管、精嚢・精巣網←中腎管、前立腺←後腸内胚葉、セルトリ細胞←髄質索？',
        },
        {
          detailInfo: '6/30確認問題',
          questionImg: [v22],
          questionSentence:
            '56日胚（男性）の横断面で、1)腎盂、2)小腎盃、3)腎小体、4)精巣を同定せよ',
          answerImg: [v15],
          answer:
            '1)腎臓中央で横に切れている太い管が腎盂で、2)そこから枝分かれして腎皮質付近にまで放射状に伸びているのが腎杯、3)腎小体はC字型に分布する腎皮質で多数断面が見える。4)精巣は腎臓の下方（前方）で卵型に切れている。内部の精細管が所々見える。',
          commentary:
            '断面左右上方のC字型に濃染している部分が腎臓で、その間の管が大動脈と下大静脈、画面下方の絨毛が豊富な管が十二指腸・空腸で、その下方右側で斜めに切れているのが結腸である。',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '第1咽頭嚢に由来する器官はどれか？',
          choices: [
            '蝸牛',
            '胸腺',
            '甲状腺',
            '鼓室',
            '外耳道',
            '上上皮小体',
            '下上皮小体',
            '口蓋扁桃',
            '鰓後体',
            '頚洞',
            'この中にはない',
          ],
          answerImg: [w0931],
          answer: '鼓室',
          commentary:
            '第一咽頭嚢から鼓室、耳管、鼓膜の内側を形成する。外耳道は第一咽頭溝由来、頚洞は第二/第三咽頭溝由来で発生過程で消滅する（咽頭溝は外側で外胚葉由来、咽頭嚢は内側で内胚葉由来）。口蓋扁桃は第二咽頭嚢由来。胸腺・下上皮小体は第三咽頭嚢由来。上上皮小体や鰓後体は第四咽頭嚢由来。ラングマンp293',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '第2咽頭嚢に由来する器官はどれか',
          choices: [
            '蝸牛',
            '胸腺',
            '甲状腺',
            '鼓室',
            '外耳道',
            '上上皮小体',
            '下上皮小体',
            '口蓋扁桃',
            '鰓後体',
            '頚洞',
            'この中にはない',
          ],
          answerImg: [w0935],
          answer: '口蓋扁桃',
          commentary:
            '第一咽頭嚢から鼓室、耳管、鼓膜の内側を形成する。外耳道は第一咽頭溝由来、頚洞は第二/第三咽頭溝由来で発生過程で消滅する（咽頭溝は外側で外胚葉由来、咽頭嚢は内側で内胚葉由来）。口蓋扁桃は第二咽頭嚢由来であるが、リンパ組織であるため完全に内胚葉由来とはいえない。胸腺・下上皮小体は第三咽頭嚢由来。上上皮小体や鰓後体は第四咽頭嚢由来。蝸牛は耳板由来。ラングマンp293',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '第3咽頭嚢に由来する器官はどれか？',
          choices: [
            '蝸牛',
            '胸腺',
            '甲状腺',
            '鼓室',
            '外耳道',
            '上上皮小体',
            '下上皮小体',
            '口蓋扁桃',
            '鰓後体',
            '頚洞',
            'この中にはない',
          ],
          answerImg: [w0938],
          answer: '胸腺、下上皮小体',
          commentary:
            '第一咽頭嚢から鼓室、耳管、鼓膜の内側を形成する。外耳道は第一咽頭溝由来、頚洞は第二/第三咽頭溝由来で発生過程で消滅する（咽頭溝は外側で外胚葉由来、咽頭嚢は内側で内胚葉由来）。口蓋扁桃は第二咽頭嚢由来であるが、リンパ組織であるため完全に内胚葉由来とはいえない。胸腺・下上皮小体は第三咽頭嚢由来で、その後下行してそれぞれの位置へ。この間に下上皮小体と上上皮小体の上下関係が入れ替わる。上上皮小体や鰓後体は第四咽頭嚢由来。蝸牛は耳板由来。ラングマンp293',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '第4咽頭嚢に由来する器官はどれか？      ',
          choices: [
            '蝸牛',
            '胸腺',
            '甲状腺',
            '鼓室',
            '外耳道',
            '上上皮小体',
            '下上皮小体',
            '口蓋扁桃',
            '鰓後体',
            '頚洞',
            'この中にはない',
          ],
          answerImg: [w0943],
          answer: '上上皮小体、鰓後体',
          commentary:
            '第一咽頭嚢から鼓室、耳管、鼓膜の内側を形成する。外耳道は第一咽頭溝由来、頚洞は第二/第三咽頭溝由来で発生過程で消滅する（咽頭溝は外側で外胚葉由来、咽頭嚢は内側で内胚葉由来）。口蓋扁桃は第二咽頭嚢由来。胸腺・下上皮小体は第三咽頭嚢由来。上上皮小体や鰓後体は第四咽頭嚢由来で、神経堤細胞とともに甲状腺傍濾胞細胞を形成する。蝸牛は耳板由来。ラングマンp293',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '発生5週とそれ以降の、咽頭弓の形態を解説せよ',
          answerImg: [w1000],
          answer:
            '鰓のような鰓ではない弓状の咽頭弓と、隣接する咽頭弓間の咽頭嚢・咽頭溝で構成される。咽頭溝は第一咽頭溝（→外耳道）以外は第2咽頭弓の拡大により最終的に消失する',
          commentary:
            '咽頭弓/鰓弓pharyngeal archは発生4週～5週に出現し始め、その後癒合し外部からは見えなくなる。ラングマンp287～頭・頚部',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '各咽頭弓に固有の脳神経要素をそれぞれ挙げて、支配する筋肉を述べよ',
          answerImg: [w1006],
          answer:
            '第一咽頭弓）三叉神経下顎枝/咀嚼筋など、第二咽頭弓）顔面神経/表情筋など、第三咽頭弓）舌咽神経/茎突咽頭筋など、第四・第六咽頭弓）迷走神経の上喉頭神経・反回神経・下喉頭神経/輪状甲状筋など',
          commentary: '各咽頭弓は固有の筋要素・脳神経要素・動脈要素を持つ',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w1011],
          questionSentence:
            '30日胚断面で、1)第一咽頭弓、2)第一咽頭嚢、3)第一咽頭溝、4)第一大動脈弓、5)背側大動脈を同定せよ',
          answerImg: [w1027],
          answer:
            '第一咽頭弓→G、第一咽頭嚢→I、第一咽頭溝→F、第一大動脈弓→H、背側大動脈→B',
          commentary:
            '第一咽頭弓・第二咽頭弓ができ始めている段階。胚が屈曲しているため斜めの断面になっている（Dorsal/Posterior方向が上側）。中央左右の管は2本の管が斜めに切れている。Aは神経管、Eは第二咽頭弓（Anteriorの第一咽頭弓が断面の下側に位置している）',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w102715],
          questionSentence: '32日胚断面で、第一～第四咽頭弓を同定せよ',
          answerImg: [w1031],
          answer: '第一咽頭弓-G、第二咽頭弓-F、第三咽頭弓-E、第四咽頭弓-D',
          commentary: 'Bが背側大動脈。D~GのうちよりAnteriorにあるGが第一咽頭弓',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w103157],
          questionSentence: '32日胚断面で、舌隆起と甲状腺の原基を同定せよ',
          answerImg: [],
          answer:
            'E.外側舌隆起、F.無対舌結節（正中隆起）→舌体、G.舌盲孔→甲状腺',
          commentary:
            '第一咽頭弓Dと第二咽頭弓Cが正中で合わさって舌盲孔を形成する。Gの上の空間は前腸。ラングマンp301',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '知覚性神経節が外胚葉性プラコードからなる脳神経を全て挙げよ',
          answerImg: [w1043],
          answer:
            '耳プラコード→内耳神経、三叉神経プラコード→三叉神経、第一咽頭弓プラコード→顔面神経、第三咽頭弓・第四咽頭弓プラコード→迷走神経',
          commentary: 'それ以外の脳神経は大体は神経堤由来。ラングマンp343-344',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w1045],
          questionSentence:
            '7週胚前面で、1)上顎隆起、2)内側鼻隆起、3)外側鼻隆起、4)鼻涙溝を同定せよ',
          answerImg: [w1054],
          answer: 'E.上顎隆起、D.内側鼻隆起、G.外側鼻隆起、B.鼻涙溝',
          commentary: 'A.鼻窩（外側鼻隆起と内側鼻隆起の間）、C.口窩、F.眼',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w105432],
          questionSentence:
            'これらの異常が起きる時期として最も適するものを1つ選び、発生過程に関係づけて理由を説明せよ',
          choices: ['3～4週', '4～6週', '7～10週', '16～20週', '20週以降'],
          answerImg: [w1059],
          answer: '7～10週',
          commentary:
            '上顎隆起と内側鼻隆起の癒合の欠如。口蓋の形成は7～10週の間に作られる。',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w105927],
          questionSentence:
            'A~Cそれぞれの異常の機序として適するものを全て選び、発生過程に関連づけて理由を説明せよ',
          answerImg: [w1103],
          answer:
            'A.内側鼻隆起と上顎隆起の癒合不全および一次口蓋と二次口蓋の癒合不全、B.Aの両側、C.二次口蓋の癒合不全',
          commentary:
            'A.上顎裂、B.一次口蓋と二次口蓋間の裂、C.二次口蓋裂。ラングマンp308~',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w1117],
          questionSentence:
            '発生2か月末の脳の模式図で、大脳半球はどこから発生するか？',
          answerImg: [w1121],
          answer: 'A.終脳',
          commentary:
            '二次脳胞。B.中脳。小脳半球はC.小脳板から。ラングマンp327',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w112149],
          questionSentence:
            '発生2か月末脳の模式図で、迷走神経の神経核はどこにあるか？最も近いものを選べ。',
          answerImg: [w1125, w1126],
          answer: 'D.髄脳（→延髄）',
          commentary:
            '12対の脳神経のうち、嗅神経、視神経、動眼神経を除く9対が、菱脳域（後脳・髄脳）から起始する。ラングマンp327',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '脳の発生に関する以下の記述のうち、正しくないものを全て選べ。',
          choices: [
            '小脳板では、基板と翼板が明確に区別される',
            '髄脳では、基板と翼板が明確に区別される',
            '脊髄では、基板と翼板が明確に区別される',
            '中脳は、基板を欠く',
            '間脳は、基板を欠く',
            '終脳は、基板を欠く',
            'すべて正しい',
          ],
          answerImg: [w1137, w1138],
          answer:
            '髄脳では、基板と翼板が明確に区別される/脊髄では、基板と翼板が明確に区別される/間脳は、基板を欠く/終脳は、基板を欠く',
          commentary:
            '基板は腹側で運動性前角を、翼板は背側で知覚性後角を形成。菱脳の主に翼板が小脳板へ（小脳の役割を理解する）。同様に終脳など（上位中枢）は肥厚した翼板からなり基板を欠く。髄脳（→延髄）では基板と翼板が明確に区別される。',
        },

        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '髄脳と間脳の組織的な形態の違いを説明せよ',
          answerImg: [w1144, w114453],
          answer:
            '髄脳は翼板と基板が明確に区別でき、間脳は蓋板と翼板からなり底板と基板を欠く',
          commentary:
            '髄脳→延髄、間脳→視床・視床下部・眼杯・下垂体など。ラングマンp391',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w1145],
          questionSentence:
            '56日胚横断面で、1)翼板、2)基板、3)後根神経節、4)白質を同定せよ',
          answerImg: [w1152],
          answer: 'A.翼板、E.基板、C.後根神経節、B.白質',
          commentary:
            '神経管（脊髄）が横断面中央に位置し、そのDorsal側の翼板がA。F.椎体で、椎弓はその背側に発生途中。ちなみに赤い四角で囲った部分は肺。',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [w1159],
          questionSentence: '前脳域に由来するものを全て選べ',
          choices: ['古皮質', '小脳', '視床', '海馬', '橋', 'この中にはない'],
          answerImg: [],
          answer: '古皮質、視床、海馬',
          commentary: '古皮質は大脳半球の一部。前脳→終脳・間脳',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence: '間脳に由来する脳の主要な部位を全てあげよ',
          answerImg: [w1206],
          answer:
            '視床・視床下部・松果体・眼杯・視交叉・下垂体・第三脳室など...',
          commentary:
            '内分泌（下垂体・視床下部・メラトニン分泌の松果体）や感覚器（眼杯:網膜）など幅広い領域に分化していく',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '髄鞘を作る細胞の由来について、中枢と末梢の違いを述べよ',
          answerImg: [w1208],
          answer:
            'オリゴデンドロサイト）神経上皮由来。シュワン細胞）神経堤由来',
          commentary:
            '髄鞘:myeline。中枢）オリゴデンドロサイト、末梢）シュワン細胞。中枢の髄鞘は社会生活に合わせて遅れて髄鞘化される',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '腰椎穿刺をL4~L5の高さで行う理由を、脊柱と脊髄の発生過程に関係づけて説明せよ',
          answerImg: [w1212],
          answer:
            '発生過程で脊髄は椎骨に比べて伸長が小さいので、最終的にL4~L5の高さには脊髄のない馬尾が分布することになる。',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '発生7か月と9か月における大脳半球外側面の形態の相違を説明せよ',
          answerImg: [w1220],
          answer:
            '発生7か月の時点では平滑だった大脳半球表面は成長に伴って折れ曲がり、複雑な回gyrusと溝sulcusを形成する',
          commentary:
            '発生8週までには神経の大部分が形成されるが、大脳半球は遅い時期に成長するラングマンp334~335',
        },
        {
          detailInfo: '7/6確認問題',
          questionImg: [],
          questionSentence:
            '副腎髄質の由来として最も適したものを選び、副腎の発生過程に関係づけて理由を説明せよ',
          choices: [
            '表皮外胚葉',
            '神経外胚葉',
            '神経堤',
            '沿軸中胚葉',
            '中間中胚葉',
            '壁側中胚葉',
            '臓側中胚葉',
            '内胚葉',
          ],
          answerImg: [w1221],
          answer: '神経堤',
          commentary: '副腎皮質は中間中胚葉由来',
        },
      ],
    },
    {
      groupTag: '確認問題1 遺伝学',
      groupContents: [
        {
          answer: 'D.30億塩基対',
        },
        {
          answer: '1番染色体',
          commentary: '常染色体22対のうち最も小さいのは21番染色体',
        },
        {
          answer: '女性',
          commentary:
            '核型は通常(46,XX)または(46,XY)と示され、性染色体を1つ欠いている場合に45,Xと示される。この状態はモノソミー/ターナー症候群と呼ばれる',
        },
        {
          answer: '最も頻度の高いゲノムの個人差',
          commentary: '個人差は1%よりはるかに小さい',
        },
        {
          answer: 'トランスポゾン',
          commentary:
            'ゲノムプロジェクトの進行により、ヒトやマウスのゲノムにおいて40% 以上はトランスポゾンが占めていることがわかってきた。',
        },
        {
          answer: '約1.5%',
          commentary:
            'ゲノムプロジェクトの進行により、ヒトやマウスのゲノムにおいてタンパク質をコードする領域は 1% 程度であることがわかってきた。',
        },
        {
          answerImg: [transcription],
          answer: 'ポリAテイル、5’キャップ',
          commentary:
            '転写過程でmRNAの5’末端にはキャップ構造が、3’末端にはポリA配列が形成される',
        },
        {
          answer: '約20,000',
        },
        {
          answer: '塩基除去修復、ヌクレオチド修復？',
          commentary:
            '塩基除去修復修復は小さな損傷、ヌクレオチド除去修復は比較的大きな損傷に対して作用するDNA修復機構である。相同組み換えは相同染色体間の修復、ミスマッチ修復や校正は主にDNA複製時の作用。',
        },
        {
          answer: '4^6塩基対？',
          commentary:
            '4種類TACGを6塩基分繋げたときの場合の数は4^6通り→約4^6個の塩基が並んでいると1か所で切れる',
        },
        {
          answer: 'C.女性。5番染色体の短腕に欠失',
          commentary:
            'del(n)/t(n):n番染色体に欠失/転座、p/q:染色体短腕/染色体長腕（部位に数字が付く）',
        },
        {
          answer: 'A.1番染色体の長腕と19番染色体の短腕の間で相互転座',
          commentary:
            'ins(n)/t(n):n番染色体に挿入/転座、p/q:染色体短腕/染色体長腕（部位に数字が付く）。複数ある場合は「；」で区切る',
        },
        {
          answerImg: [transcription],
          answer: '166',
          commentary:
            '2400-1800-99=501 501/3=167 終止コドンは翻訳されないので166',
        },
        {
          answer: '(14,21)と(14q21q)',
          commentary:
            'rob(14;21)...ロバートソン型転座が14番染色体と21番染色体の間で生じた。14p21p（短鎖同士の繋がり）上の遺伝子は無視できるほど少なく、よって14q21qは14と21を合わせた遺伝子量と同じ量をもち、遺伝子量不均衡が生じないため減数分裂後の(14,21)(14q21q)の核型はどちらも次世代個体生存可能。逆に(14,14q21q)や(14q21q,21)は遺伝子量が多すぎ、(14)や(21)は染色体欠損のため次世代個体生存不可能（モノソミーはXO以外生存不可能）',
        },
        {
          answer: 'AとB両方多い',
          commentary:
            'rob(14;21)(q1;p1)...ロバートソン型転座が14番染色体のq1バンドと21番染色体のp1バンドで起こった。できた14q21q染色体は21番染色体由来のセントロメアをもっているので、正常21番染色体とシナプトメア複合体を形成しやすい。→正常21番染色体とは別の細胞に分配されやすい。ただし、残りの14番染色体(と14p21p)のシナプトメア複合体がどちらにどう分配されるかについては明確な差がなく、AとBの発生確率に大きな差はない。',
        },
        {
          answer: 'E.+21',
          commentary: '21番染色体のトリソミー（ダウン症）47,XX',
        },
        {
          answer: 'Microsatellite',
          commentary:
            'SNP:Single Nucleotide Polymorphisms, VNTR:variable number of tandem repeats(=minisatellite), indel=insertion and deletion',
        },
        {
          answer: 'VNTR',
          commentary:
            '減数分裂時に相同染色体がずれやすく多型になりやすい。SNP:Single Nucleotide Polymorphisms, VNTR:variable number of tandem repeats(=minisatellite), indel=insertion and deletion',
        },
        {
          answer: 'SNP',
          commentary:
            '最も一般的な多型。SNP:Single Nucleotide Polymorphisms, VNTR:variable number of tandem repeats(=minisatellite), indel=insertion and deletion',
        },
        {
          answer: 'D.重複',
          commentary: '逆向きの重複。タンデム重複という',
        },
        {
          detailInfo: '分子生物学的手法',
          answer: '1.9^10',
          commentary: 'DNAは指数関数的に増幅する',
        },
        {
          detailInfo: '分子生物学的手法',
          answer: 'A',
          commentary:
            'バンドの数からEで切れるのは2か所、Hは1か所。Eで切った時の短いほうの断片がHでさらに切れていることから、Aが答えだと考察できる。',
        },
        {
          detailInfo: '分子生物学的手法',
          answer: 'D',
        },
        {
          detailInfo: '分子生物学的手法',
          answer: 'C',
          commentary:
            '対立遺伝子2ではプローブで検出される断片が5kbであるため。Aは対立遺伝子1の結果',
        },
        {
          detailInfo: '分子生物学的手法',
          answer: 'A.AA',
          commentary:
            '試料3では制限部位があるため300bpと200bpに切断されている→AA。試料2は全く切断されておらず、SSと推測される。試料1や試料4はマーカーだと思うが、内容物としてはASである。',
        },
        {
          detailInfo: '有糸分裂',
          questionImg: [],
          questionSentence: '',
          answerImg: [cellDivision],
          answer: '中期はD',
          commentary: '染色体が一列に並んでいる',
        },
        {
          detailInfo: '有糸分裂',
          questionImg: [],
          questionSentence: '',
          answerImg: [cellDivision],
          answer: 'S期はG',
        },
        {
          detailInfo: '有糸分裂',
          questionImg: [],
          questionSentence: '',
          answerImg: [cellDivision],
          answer: '前期はC',
          commentary:
            '染色体が凝縮して観察可能となる。前中期がA、中期がD、後期がB、終期がF、Eは細胞質分裂。',
        },
        {
          detailInfo: '有糸分裂',
          questionImg: [],
          questionSentence: '',
          answerImg: [cellDivision],
          answer: 'S期',
          commentary:
            '矢印の部分はDNA量は中程度で該当細胞数は少ない。G1→S→G2→M期の細胞周期の中で、DNA量がちょうど1倍になるのがG1期（+ G0期）,その2倍になるのがG2期・M期。残りのS期はDNA合成の進行度合いに応じてDNA量が変化するため、それぞれのDNA量にちょうど該当する細胞数はかなり少なくなる。（DNA量の少ない側の山がG0・G1期、DNA量の多い側の山がG2・M期）',
        },
        {
          detailInfo: '遺伝病',
          answer: '25%',
          commentary:
            '嚢胞性繊維症は常染色体劣性遺伝疾患のため、両親ともにキャリアAa。',
        },
        {
          detailInfo: '遺伝病',
          answer: '25%',
          commentary:
            '血友病はX染色体上の遺伝疾患（劣性）のため、因子を母親から受け継いだ男の子は全員発症する。母方の叔父が罹患者=母の母がAaのキャリアであることから、母の母(Aa)→母→男の子の2回分の減数分裂でともに因子aが引き継がれたときのみ発症する。よって1/4',
        },
        {
          detailInfo: '遺伝病',
          answer: '50%',
          commentary:
            'ハンチントン病は常染色体優性遺伝のため、両親の片方もしくは両方がAaまたはaa。数万人に1人の割合であることを考慮すると、親の片方がAaで、aが遺伝されると発病',
        },
        {
          detailInfo: '遺伝病',
          answer: 'ここでは無視して良い確率',
          commentary:
            '母親由来の15番染色体が一部欠損することにより、UBE3Aの働きが失われることにより起こります。 アンジェルマン症候群の約70％がこのタイプ（ゲノムインプリンティング）です。ただし母親がアンジェルマン/プラダーウィリー症候群でない場合は突然変異だと考えられる。※もし母親がプラダーウィリー症候群の場合は遺伝しているため、母親の染色体次第（Aaの場合は50%,aaの場合は100%）である',
        },
        {
          detailInfo: '遺伝病',
          answer: 'ここでは無視して良い確率',
          commentary:
            'ミトコンドリア脳筋症MELASはミトコンドリアDNAの遺伝子異常により発病する疾患で、基本的に母性遺伝である。今回の場合は突然変異だと考えられるので、妹の確率は低い。',
        },
        {
          detailInfo: '遺伝病',
          answer:
            'F：3-b-β(XXY-クラインフェルター症候群-高身長・不妊・知的障害を伴わない)',
          commentary:
            'ターナー症候群はXの1本欠損、クラインフェルター症候群はXの過剰、ダウン症候群は21番染色体のトリソミー、アンジェルマン症候群は15番染色体の異常',
        },
        {
          detailInfo: '遺伝病',
          answer: '常染色体顕性遺伝病',
          commentary:
            '突然変異とはいえない。男女で有意差（伴性遺伝病）なし。母性遺伝（ミトコンドリア病）ではない。インプリンティング遺伝子は、その発現が両親のいずれかによって決定される遺伝子のことで、メンデルの遺伝の法則の例外である（例：アンジェルマン症候群とプラダーウィリー症候群）が、やはり男女差はない。劣性遺伝だとするとaa発病者の配偶者が全員Aaキャリアでないといけない。常染色体優性遺伝病だと考えるのが最も合理的。14は遺伝因子を持っていない可能性がある',
        },
        {
          detailInfo: '遺伝病',
          answer: '常染色体潜性遺伝病',
          commentary:
            '突然変異ではないと思われる。母性遺伝（ミトコンドリア病）ではない。インプリント病ではない（キャリアは存在しない）。発病者は全員女性。Ⅵ世代の2から遺伝したと考えられるが、2は発病していないので優性遺伝ではない。劣性遺伝とすると、Ⅵ世代4でaa発病した遺伝子が、キャリアAaの状態でⅠ世代からずっと受け継がれAa同士の子孫に4分の1の確率で発病する。このように、近親交配は劣性遺伝病のリスクが増す。',
        },
        {
          detailInfo: '遺伝病',
          answer: 'ミトコンドリア病',
          commentary: '母性遺伝（母親→子）がみられる。',
        },
        {
          detailInfo: '遺伝病',
          answer: '伴性潜性遺伝病',
          commentary:
            '発病していない両親から多数の子どもが発病しているので、優性遺伝・ミトコンドリア病ではない。発病者は全員女性なので、常染色体が原因ではない。',
        },
        {
          detailInfo: '性染色体と性',
          answer: '男性',
          commentary:
            'クラインフェルター症候群とは、二つ以上のＸ染色体と、Ｙ染色体を一つ持つ性染色体異常疾患の一つです。 核型としては47，ＸＸＹが最も多く、その他モザイク型も見られます。 表現型（外見）は男性で、一般には高身長、やせ型、長い手足となることが多いといわれています。',
        },
        {
          detailInfo: '性染色体と性',
          answer: 'C',
          commentary:
            '女性は片方のXを不活化して遺伝子量を調節している。トリソミーX症候群では2本のXが不活化されるため、致命的な症状なく生活できる。',
        },
        {
          detailInfo: '性染色体と性',
          answer: 'A？',
          commentary:
            '男性では、PARを除いて、X染色体とY染色体相互間の遺伝的組換えが起こりにくい。しかしながら、Y染色体は回文配列（パリンドローム構造）を内部に多く含むため、同一染色体内部で高い頻度の組換えを起こすことが可能である。擬似常染色体領域(PAR)はX染色体・Y染色体の両端に2か所あり、短腕端のものをPAR1（270万塩基対）、長腕端のものをPAR2（33万塩基対）と呼んでいる[17]。二つのPARには少なくとも29個の遺伝子座が存在している[18]。MSYはY染色体の約94%（約4,800万塩基対）を占める（右図）。',
        },
        {
          detailInfo: '減数分裂',
          answer: '2^23',
          commentary: '22対+1の染色体それぞれが母由来・父由来の2本あるため',
        },
        {
          detailInfo: '減数分裂',
          answer:
            '減数分裂第一分裂で観察される / 4本の染色体からなる / 複糸期に観察される？ / DNAの切断と修復が起きる',
          commentary:
            '相同染色体が2組で取る構造が二価染色体。減数分裂では二価染色体が対合し交叉する。',
        },
        {
          detailInfo: '減数分裂',
          answer: '精母細胞の減数分裂第二分裂',
          commentary:
            'Y遺伝子は男性からしか遺伝しない(X/YYの引継ぎ)。XXYY→XX/YY→X/X/Y/Yの第二減数分裂の不分離',
        },
        {
          detailInfo: '減数分裂',
          answer: '相同組み換え',
          commentary:
            'セントロメアは中心部分に形成され、キネトコアは細胞分裂時に、染色体のセントロメアと呼ばれる領域に形成される層状の構造体。',
        },
        {
          detailInfo: '減数分裂',
          answer: 'C？',
          commentary: '転座していない遺伝子が4本中2本',
        },
        {
          detailInfo: '減数分裂',
          answer:
            '卵祖細胞は有糸分裂する / キアズマではDNAが切断される / 極体も減数分裂する',
        },
        {
          detailInfo: 'エピジェネティックス・インプリント',
          answer: '母由来ゲノムのメチル化',
          commentary:
            'インプリンティングは遺伝情報に恒久的変化を与えず、世代ごとに新たにプログラムされるので、遺伝とは異なるエピジェネティック（epigenetic）な現象である。',
        },
        {
          detailInfo: 'エピジェネティックス・インプリント',
          answer: 'B？',
          commentary:
            'メチル化酵素は二重らせん構造の一方の鎖のメチル基を認識し、もう一方の鎖にメチル基を付加する。最初の細胞にはメチル化酵素が存在しないのでMO（メチル化酵素はないが、一度メチル化されたDNAが元に戻るわけではない？）だが、分裂後の新たな細胞にはDNMTが発現しているので付加されMMとなる。',
        },
        // {
        //   detailInfo: '有糸分裂',
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '確認問題2 発生学序論',
      groupContents: [
        {
          answer: '4.13~26週',
          commentary:
            '受精齢（発生学で用いられる数え週）で13~、月経齢（産科学など臨床医学で用いられる、満で表される）で14～',
        },
        {
          answer: '4.内・中・外',
        },
        {
          answer: '5.4日以降',
          commentary:
            'おおよそ受精後7日程度かけて受精卵が子宮内膜にもぐりこむ。それまでに受精卵は細胞分裂を開始し胚盤胞を形成する。',
        },
        {
          answer: '羊膜腔',
        },
        {
          detailInfo: '配偶子形成',
          answer: '発生3週に卵黄嚢壁に見いだされる ',
          commentary:
            '始原生殖細胞は発生3週に卵黄嚢壁に見いだされる。生殖巣の分化（8週以降？）に必須で、精子形成は発生6週～思春期まで休止状態だが卵子形成は発生7か月まで大規模に続く。（第一減数分裂前期複糸期で停止）精祖細胞・卵祖細胞は体細胞分裂できる。',
        },
        {
          detailInfo: '配偶子形成',
          answer: '2回の減数分裂で1個の卵細胞を生ずる',
          commentary: '卵細胞になれなかったものは極体として残る',
        },
        {
          answer: 'どれも間違い',
          commentary:
            '卵祖細胞の増殖は発生5か月までで終了し、第一減数分裂前期複糸期で停止し思春期まで休眠する。およそ3周期前から卵胞の成長は始まるが、一次卵胞までは下垂体からの性腺刺激ホルモンを必要としない。（→2次卵胞以降はFSHなどに依存）',
        },
        {
          answer: '出生時には第一減数分裂前期で停止している。 ',
          commentary: '思春期まで第一減数前期複糸期で停止している。',
        },
        {
          answer: '2回の減数分裂で4個の精子を生ずる',
          commentary: '精子の10%は異常があるとされる。正常な運動性を欠く。',
        },
        {
          answer: '作られ始めた後は生涯にわたり精細管で作られる',
        },
        {
          answer: '精子細胞は第二分裂を完了している。',
          commentary:
            '卵子の第2分裂が完了するのは受精後である。1次精母細胞→2次精母細胞が第1減数分裂。極体は基本的には減数分裂しない（なので成熟卵母細胞には極体が最大2個）',
        },
        {
          answer: '一次精母細胞、二次精母細胞',
          commentary:
            '～一次精母細胞までは体細胞分裂、1次精母細胞→2次精母細胞→精子細胞が減数分裂2回、それ以降は分裂しない。',
        },
        {
          answer: 'Primary spermatocytes,Secondary spermatocytes',
          commentary: 'meiotic:減数分裂の、または減数分裂に関する。',
        },
        {
          answer: '一次卵母細胞、二次卵母細胞',
          commentary:
            '出生までに全て一次卵母細胞に分化し第一減数分裂前期複糸期で停止、思春期以降各卵巣周期ごとに10個ほどの卵胞が減数分裂を再開し二次卵母細胞（+一次極体）へ。第二減数分裂中期で再び停止し、受精後まで完了しない。',
        },
        {
          answer: 'Primary oocyte,Secondary oocyte',
        },
        {
          answer: '二次卵母細胞と第一極体、受精卵と第二極体',
          commentary:
            '二次卵母細胞は第二減数分裂できる細胞のことで、第二極体はそれによってできる副産物',
        },

        {
          answer:
            'Secondary oocyte & First polar body,Fertilized oocyte & Second polar bodies',
        },
        {
          answer:
            '一次卵胞と立方上皮の顆粒層細胞、胞状卵胞と立方上皮の顆粒層細胞、胞状卵胞と卵丘細胞',
          commentary:
            '原始卵胞は卵母細胞+卵胞上皮細胞、一次卵胞は一次卵母細胞+透明帯+卵胞上皮細胞、二次卵胞は一次卵母細胞+顆粒層細胞+卵胞腔など。卵丘が見え始めるのは成熟卵胞（二次卵母細胞）以降。原始卵胞が成長を始めると、卵胞上皮細胞は立方形に変化し、増殖して数層になる（→顆粒層細胞）',
        },
        {
          answer: '一次卵胞',
          commentary:
            '卵胞上皮細胞が分泌するムコ多糖類によって一次卵母細胞と卵胞上皮細胞との間に透明帯が形成され始める。卵母細胞を保護するはたらきがある。',
        },
        {
          answer: 'Primary follicle',
        },
        {
          answer:
            'ライディッヒ細胞がテストステロンを産生する。 / 内卵胞膜がテストステロンを産生する。 / 顆粒層細胞がβエストラジオールを産生する。',
          commentary:
            'ライディッヒ細胞はコレステロールからテストステロンを産生する。顆粒層細胞はテストステロンからエストラジオール（エストロゲン）を産生する。莢膜細胞（内卵胞膜）はそのテストステロンを産生する',
        },
        {
          answer: '準備中',
        },
        {
          answer: '一次卵母細胞と複糸期',
          commentary:
            '第一減数分裂前期複糸期の状態で思春期まで停止状態となる。思春期以降卵巣周期ごとに再開し、第二減数分裂中期で再び停止し排卵される。',
        },
        {
          answer: '二次卵母細胞。二次精母細胞',
          commentary:
            '第二減数分裂中期まで子宮ですすみ、その後排卵され受精後第二減数分裂が完了する。',
        },
        {
          answer: 'Secondary oocytes,Secondary spermatocytes',
        },
      ],
    },
    {
      groupTag: '確認問題3 発生第一週',
      groupContents: [
        {
          answer: 'エストロゲン,プロゲステロン',
          commentary: 'FSH,LHは性腺刺激ホルモン',
        },
        {
          answerImg: [menstrualCycle],
          answer: 'エストロゲン,LH,FSH',
          commentary:
            'エストラジオールの血中濃度が200~300pg/mL以上の値が24~36時間以上続くと、視床下部に対する正のフィードバック調節がはたらき、GnRHの大量放出→LHの大量放出（LHサージ）が起こる。',
        },
        {
          answer: 'エストロゲン・プロゲステロン',
          commentary:
            'ヒト絨毛性ゴナドトロピンhCGは胚子栄養膜から分泌され、受精卵の着床を伝達し黄体維持を誘導する。エストロゲンは内卵胞膜細胞・顆粒層細胞が産生し、排卵後は黄体が産生する。プロゲステロンは月経後半分泌期を中心に黄体から分泌され、妊娠の維持を誘導する。',
        },
        {
          answer: 'hCG',
          commentary:
            'ヒト絨毛性ゴナドトロピンhCGは胚子栄養膜から分泌され、受精卵の着床を黄体に伝える。',
        },
        {
          answer:
            'テストステロンを産生する / 排卵後は黄体の一部を形成する / 黄体ではプロゲステロンを産生する。 / 卵胞形成期には立方上皮になる',
          commentary:
            '内卵胞膜細胞は顆粒層細胞の外側で卵胞膜（一次卵胞）が厚くなって形成される。莢膜細胞とも呼ばれ、コレステロール→テストステロンを産生する。排卵後は卵胞膜黄体細胞として、顆粒層細胞とともにプロゲステロン・エストロゲンを産生する。',
        },
        {
          answer: '20個？',
          commentary:
            '思春期以降、各卵巣周期ごとに10個程度の卵胞が成長段階に入り、このうち1個の主席卵胞以外は成長が止まり卵胞閉鎖に至る。原始卵胞自体は思春期で約20～30万個（出生時には200万）あり、このうち排卵に至るのは400~500個という考えから、1個あたり約400~500個 or 4000~5000個が閉鎖卵胞に至るという考え方もできる？',
        },
        {
          answer: '染色体異常',
          commentary:
            '卵母細胞は比較的染色体異常を起こしやすく、自然流産の40~50%は染色体異常が原因。',
        },
        {
          answerImg: [menstrualCycle],
          answer: '28時間,38時間',
          commentary:
            'サージの立ち上がりから24~36時間後、LH分泌のピークからは18~24時間後に排卵がおこるとされる【正常構造・生殖器】発生学スライドでは38時間で排卵と記載【おそらくラングマン】',
        },
        {
          answer: '24時間',
          commentary:
            '排卵後、卵母細胞と卵丘細胞の複合体は卵管采によってかきとられ、卵管膨大部にて24時間受精を待つ。',
        },
        {
          answer: '3時間',
          commentary:
            'LH(FSH)サージから20時間後までに第一減数分裂中期に進み、35時間後までに第二減数分裂中期で停止（減数分裂が完了するのは受精後）、38時間後に排卵',
        },
        {
          answer: 'B.第一減数分裂の再開',
          commentary:
            '卵核胞は卵母細胞が成熟分裂を開始する前に見られる核で、未成熟卵の指標となる。LH/FSHサージの15時間後に崩壊し第一減数分裂を再開する',
        },
        {
          answer: '月経周期の第2週の終わり',
          answerImg: [menstrualCycle],
        },
        {
          answer: 'LHサージの約40時間後',
          commentary:
            'LH/FSHサージの20時間後に第一減数分裂を再開し、35時間後までに第二減数分裂で休止する。38時間後に排卵が行われる。',
        },
        {
          answer: 'A.1-a / F.2-c / H.2-a',
          commentary:
            '顆粒層黄体細胞は顆粒層細胞由来、卵胞膜黄体細胞は内卵胞膜/莢膜細胞由来で、ともに排卵後は黄体としてプロゲステロン・エストロゲンを持続的に産生する。プロゲステロン=黄体ホルモン、エストロゲン=卵胞ホルモンで、厳密にはプロゲステロンは両方で、エストロゲンは卵胞膜黄体細胞で主に産生される。',
        },
        {
          answer: 'プロゲステロン / エストロゲン / アンドロステンジオン？',
          commentary:
            '矢印の組織の内側に見える淡色で細胞密度が低い組織が顆粒層黄体細胞に見える。よって矢印の細胞は卵胞膜黄体細胞と思われる。卵胞膜黄体細胞は黄体ホルモン（プロゲステロン）・卵胞ホルモン（エストロゲン）を産生する。卵胞刺激ホルモンFSHは下垂体から分泌される上位のホルモン。アンドロステンジオンはテストステロンやエストロゲンの前駆体で、おそらく内卵胞膜や卵胞膜黄体細胞でも産生される',
        },
        {
          answer: 'プロゲステロン',
          commentary:
            '矢印の組織は細胞密度が低く淡色な顆粒層黄体細胞。黄体ホルモン（プロゲステロン）を主に産生する。顆粒層細胞（卵胞上皮細胞）由来。',
        },
        {
          answer: '絨毛性ゴナドトロピン',
          commentary: '胎盤の栄養膜合胞体層で、着床後hCGを分泌する',
        },
        {
          answer: 'A.1-a / F.2-c / H.2-a',
          commentary:
            'Granulosa lutein cells -> Progesterone | Theca lutein cells -> Progesterone,Estrogen',
        },
        {
          answer: '3.卵管膨大部',
        },

        {
          answer: 'B',
          commentary:
            'In Vitro Fertilization:体外受精 in vitro:試験管内で　人工授精はAIH/Artificial Insemination of Husband',
        },
        {
          answer: 'C.ZP3',
          commentary:
            '先体反応は卵子透明帯の成分ZP3と精子表面のタンパク質SED1の結合を介して起こる。',
        },
        {
          answer: '精母細胞の第二減数分裂',
          commentary: '胎児の性は精子の持つ性染色体によって決定される',
        },
        {
          answer: '4.6日',
          commentary: '排卵後1日以内に受精、受精後約6日で着床初期',
        },
        {
          answer: '8日以上',
          commentary:
            '妊娠が起こらなければ、排卵後14日目には黄体は退縮して結合組織に置き換わり白体になる。',
        },
        {
          answer: '5.子宮体',
          commentary:
            '受精後約3日で桑実胚となり（子宮腔に達する）、受精後約4.5日で初期胚盤胞となり、透明帯が消失する。',
        },
        {
          answer: '3.胚盤胞',
          commentary:
            '受精後約3日で桑実胚となり（子宮腔に達する）、受精後約4.5日で初期胚盤胞となり、透明帯が消失する。',
        },
        {
          answer: '8細胞期',
          commentary:
            '8細胞期の初めに、外側の割球が隣の割球と固く接着するようになる。',
        },
        {
          answer: 'C.栄養膜細胞層',
          commentary:
            'ラングハンス細胞とも。胚盤胞外側の細胞は主に胎盤に分化していく。',
        },
        {
          answer: 'A.生殖細胞？',
          commentary:
            '霊長類の始原生殖細胞の起源は、初期の羊膜芽細胞だと考えられている。矢印の内細胞塊はやがて羊膜腔や二層性胚盤を形成する。尿膜や卵黄嚢は羊膜腔の反対側、胚盤葉下層の扁平な細胞から分化する。胚体外腔膜はさらにその外側。',
        },
        {
          answer: '内腔',
          commentary:
            '8細胞期初めにコンパクションにより外側の割球がとなりの割球と固く接着するようになり、胚の内側・外側の概念が生じる。',
        },
        {
          answer: 'C.3',
          commentary: '前置胎盤となった場合は帝王切開を要する。',
        },
        // {
        //   detailInfo: '',
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '確認問題4 発生第二週',
      groupContents: [
        {
          answer: '3.卵管膨大部',
        },
        {
          answer: '5.子宮腔',
          commentary:
            '受精後4.5日～5日目。初期胚盤胞期に透明帯が消失し、着床（受精後6日）への準備が進む。',
        },
        {
          answer: '6.この中にはない（胚盤胞）',
          commentary:
            '受精卵→→8細胞期→桑実胚(16~32細胞期)→胚盤胞→原腸胚で、厳密には胚盤胞と原腸胚の間といわれている（授業中解説）',
        },
        {
          answer: 'B.胚盤葉上層',
          answerImg: [bilaminar],
        },
        {
          answer:
            '1.一次絨毛　2.栄養膜裂孔　3.付着茎　4.羊膜腔　5.二次卵黄嚢　6.胚外壁側中胚葉　7.胚外体腔　8.胚盤葉下層　9.胚盤葉上層　10.栄養膜合胞体層　11.栄養膜細胞層',
          answerImg: [bilaminar],
        },
        {
          answer: 'E.脱落膜',
          commentary:
            'Bが栄養膜細胞層、Dが栄養膜合胞体層。Cはその境の栄養膜裂孔？と推定',
        },
        {
          answer: '21日目',
          commentary: '絨毛に血管が侵入するのは三次絨毛以降',
        },
        {
          answer: 'F',
          commentary: '2は栄養膜細胞層',
        },
        {
          answer: '準備中（A,D,E？）',
          commentary:
            '早期の胎盤発生には父親由来の遺伝子が、胚発生には母親由来の遺伝子が重要（遺伝子コンフリクト仮説）。単為発生細胞は生殖細胞、脳、心、腎、脾などで高い寄与率を示すが、骨格筋、肝、膵には分化できない。',
        },
        {
          answer: 'A,C,F',
          commentary:
            '胞状奇胎では、胚子組織がほとんど/まったく存在しない。完全胞状奇胎の場合は2倍体であっても遺伝子が全て父親由来で、部分胞状奇胎であっても3倍体のうち2セットは父親由来。インプリント領域は1%よりもっと少ない。',
        },
        {
          answer: '栄養膜細胞層と栄養膜合胞体層の形成過程を解説せよ。',
          commentary:
            '胚盤胞の外細胞塊が2層の栄養膜に分化する。栄養膜細胞層は内側で単核細胞で、有糸分裂を行い一部は栄養膜合胞体層に分化する。妊娠後期になると数を減らし層構造を保てなくなる。栄養膜合胞体層は外側で多核細胞層で有糸分裂しない。栄養膜裂孔を生じ母体血を流入させることで胎盤構造を形成する。',
        },
        {
          answer: '羊膜芽と羊膜の形成過程を説明せよ。',
          commentary:
            '二層性胚盤の上層に空間が生じ、外側（栄養膜側）が羊膜芽細胞・内側が胚盤葉上層に分化する。発生に伴って空間は広がり、羊膜腔（羊膜）と呼ばれるようになる。三層性胚盤以降もこの羊膜芽細胞と胚盤葉（外胚葉）に囲まれた羊膜の構造は変わらず成長を続け、最終的に外胚葉が胎児を1周囲むのに伴って羊膜腔が完全に胎児の外側を取り囲み、絨毛膜と癒合して羊膜絨毛膜を形成する。',
        },
        // {
        //   detailInfo: '',
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '確認問題5 発生第三週',
      groupContents: [
        {
          answer: '1.原始線条　2.原始結節　3.脊索突起　4.口咽頭膜　5.排泄腔膜',
          answerImg: [week3],
        },
        {
          answerImg: [week3],
          answer:
            '1.神経板　2.羊膜　3.卵黄嚢壁　4.口咽頭膜　5.脊索突起　6.排泄腔膜　7.尿膜　8.神経腸管',
          commentary:
            '原始線条部分では上皮間葉転換EMTを起こして内胚葉をもつ三層性胚盤を形成する。原始窩は内胚葉正中部分を進み（神経腸管）、脊索管（脊索ではない）を形成する。　口咽頭膜・排泄腔膜は外胚葉と内胚葉が直接接している点で重要。付着茎（→臍帯）への内胚葉の突出は尿膜へ分化する。',
        },
        {
          answerImg: [week3],
          answer: '1.脊索板　2.中胚葉（胚内中胚葉）　3.内胚葉　4.脊索',
          commentary:
            '（脊索板→）脊索は内胚葉が正中で入り込んでできた索状の構造で、その後の体節形成誘導に重要な役割を果たす。ラングマンp66',
        },
        {
          answer: '中胚葉',
          commentary: '胚内中胚葉。発生三週目には三層性胚盤が形成されている。',
        },
        {
          answerImg: [gastrulation],
          answer: '陥入中の中胚葉細胞',
          commentary:
            '尾側正中の原始線条部分で外胚葉が一部内部へ陥入し中胚葉を形成する。',
        },
        {
          answerImg: [week3],
          answer: '脊索板はD（Fは脊索管？）',
          commentary:
            '脊索突起の内部に脊索間という細長い内腔が形成され、その腹側壁が消失して脊索板が形成される。つまり脊索板自体は中胚葉由来の脊索管の背側の壁。Dは腹側壁消失後で脊索板が形成されており（神経腸管とも考えられる）、Fは形成前の脊索管、Eは内胚葉。',
        },
        {
          answer: '内部細胞塊',
          commentary: 'ES細胞は直接胎盤には分化しない。',
        },
        {
          answer: '6.この中にはない',
          commentary:
            '原始線条は成長の過程で消える。もし残っていたら奇腫の原因となる。',
        },
        {
          answerImg: [gastrulation],
          answer:
            '上皮は互いに密接に連結し、基本的に体表を覆い、外胚葉・内胚葉由来。間葉は、互いの連結が弱く、それぞれ個別のユニットとして機能し、基本的に中胚葉か神経堤に由来する。',
          commentary: '上皮→間葉を上皮間葉転換という。',
        },
        {
          answer:
            'B.Mesoderm formation, D.Neural crest formation, F.Cancer invasion',
          commentary: '上皮間葉転換:EMT',
        },
        {
          answer: 'E.前後軸→背腹軸→左右軸→内外軸',
          commentary:
            'まず前後軸がAVEによって決定され、次に背腹軸がBMPによって、左右軸が線毛の回転運動を利用して決定される。その後、内外軸→遠近軸の流れで決定される。',
        },
        {
          answer: 'D.左右軸の決定',
          answerImg: [LRaxis],
          commentary:
            'NVP:nodal vesicular parcelによる濃度勾配が左右軸を決定する。線毛病は内臓逆位・慢性副鼻腔炎・不妊症などを併発し、Kartagener症候群などと呼ばれる。',
        },
        {
          answer: '準備中',
        },
        {
          answer: 'A.Nodalの抑制',
          commentary:
            'AVE:前方内臓性内胚葉。AVEはシグナル因子Cerberus,Lefty1を発現し、原始結節からのシグナル因子Nodalのけっせうを抑制することで、胚の頭端を確立する。尾側ではAVEからのNodal抑制シグナルが届かないので、頭側化が起きず、原始線条が形成される。',
        },
        {
          answerImg: [LRaxis],
          answer: 'A B D F G ',
          commentary:
            '左右軸形成不全→内臓逆位、尿細管上皮の一次線毛→腎嚢胞、気管上皮には線毛が豊富→気管支拡張症・慢性副鼻腔炎、精子・卵管の線毛→不妊。軟骨無形成症は主に成長ホルモンが原因',
        },
      ],
    },
    {
      groupTag: '確認問題6 胚子期',
      groupContents: [
        {
          answerImg: [after25days],
          answer: '体節 / 口咽頭膜 / 排泄腔膜 / 卵黄腸管',
          commentary:
            '断面の頭部に神経菅構造は存在するが、体節構造は存在しない。口咽頭膜はのちに口腔の開口部を構成する部分で、断面より頭側。排泄腔膜はのちに肛門を構成する部分で、尾側。卵黄腸管は中腸と卵黄嚢を連絡する部分（→憩室）で、断面より尾側。',
        },
        {
          answer: '5.膵頭',
          commentary:
            '副腎髄質への交感神経には節後線維が存在せず、副腎髄質が節後線維とよく似た発生・役割を担う。膵島は内胚葉由来',
        },
        {
          answerImg: [after25days],
          answer:
            '1.前神経孔　2.第1,2咽頭弓　3.後神経孔　4.卵黄嚢　5.付着茎（尿膜）',
          commentary: '発生25日胚では神経管の形成が終わっていない。',
        },
        {
          answerImg: [after21days],
          answer:
            '1.中間中胚葉　2.羊膜　3.胚内体腔　4.臓側中胚葉　5.内胚葉　6.脊索　7.沿軸中胚葉　8.神経菅',
          commentary:
            '側板中胚葉→壁側・臓側中胚葉へ分化。背側と腹側から胚内体腔を包み、胸腔・腹腔などを形成する',
        },
        {
          answerImg: [segment],
          answer:
            '1.体幹の真皮　2.上肢の骨格筋　3.肋骨　4.この中にはない　5.脊髄',
          commentary:
            '1.皮板　2.筋板　3.椎板　4.脊索　5.神経菅　沿軸中胚葉→皮板・筋板・椎板　胸骨は側板中胚葉由来',
        },
        {
          answerImg: [after21days],
          answer: 'C.沿軸中胚葉',
          commentary:
            '左右で切れ方が異なっているが、最も正中のものから順に（神経ヒダ→）沿軸→中間→側板中胚葉。',
        },
        {
          answer: 'E.気管軟骨',
          commentary:
            '矢印部分は側板中胚葉。神経堤→メラノサイト、沿軸中胚葉など→骨格筋（筋板）・椎骨（椎板）、内胚葉→食道→肺芽→肺胞上皮。一方で胸腔や気管軟骨は肺を囲む（臓側）側板中胚葉由来',
        },
        {
          answerImg: [after21days],
          answer: 'D.子宮',
          commentary:
            '矢印部分は中間中胚葉。神経堤→メラノサイト、沿軸中胚葉など→骨格筋、内胚葉→食道→肺芽→肺胞上皮、（臓側）側板中胚葉→気管軟骨。子宮は中間中胚葉→中腎傍管→子宮・卵管だが、膣前庭は後腸尿生殖洞（内胚葉）由来',
        },
        {
          answer: 'B',
          commentary:
            '断面上が背側。A.神経菅　C.外胚葉　D.中間？中胚葉　E.内胚葉',
        },
        {
          answerImg: [after29days],
          answer: 'D',
          commentary:
            'A.神経管の内部　B.沿軸中胚葉　C.間葉組織　E.静脈洞　F.卵黄嚢　断面より少し尾側の断面図（上の図）ではDは外側の羊膜腔と繋がっており、Dのような側板中胚葉の環状構造が外側から切れて胚内体腔へと形成されていく途中経過を見ることができる。',
        },
        {
          answer: 'CとD',
          commentary:
            'Anterior側から第2・第3咽頭弓と推測できる。第一咽頭弓は断面では見えない。',
        },
        {
          answer: 'E.40対以上',
          commentary:
            '発生21日に4~7対だった体節は発生が進むにつれて数を増し、最終的に42～44対形成される。発生の早期には体節の数で発生時期を決定することができる。',
        },
        {
          answerImg: [skull],
          answer: 'C.頭頂骨　D.頚椎　E.上腕骨',
        },
        {
          answer: 'A.葉酸',
          commentary: '多因子性だが、葉酸欠乏が有意な因子。',
        },
        {
          answerImg: [segmentationClock],
          answer: 'レチノイン酸とFGF8とWnt3a',
          commentary:
            '表皮外胚葉からのWNT,BMPが外胚葉（神経管）の背側化を誘導。脊索からのSHHが外胚葉（神経管）の腹側化を誘導、体節からのFGFが前後のパターン形成に寄与。各体節の境界はレチノイン酸（頭側で高濃度）、FGF8,Wnt3a（尾側で高濃度）の濃度勾配の組み合わせで制御される。',
        },
        {
          answer: 'C',
          commentary:
            '卵黄嚢で造血細胞が出現するのは発生16~18日、第一・第二咽頭弓が出現するのは発生22~23日、眼胞形成は発生24~25日。後神経孔が閉鎖するのが発生26～27日。最終的に42~44対となる体節が、ある程度（30～35対）形成完了するのが発生28~30日後。手足に指放線が出現するのは発生36~42日。全体として循環器や神経は比較的早期に完成し、呼吸器や四肢は比較的出産直前まで成長が続く。',
        },
        {
          answer:
            '感覚器や神経節を作る外胚葉の肥厚部。例えば鼻板・耳板・水晶体板。咽頭弓上プラコードがある。',
          commentary:
            '外胚葉の肥厚から頭部の特殊な部位（鼻・耳・水晶体など）が形成される。',
        },
        {
          answer:
            '外胚葉の正中部に神経管が形成される際に、陥没した神経ヒダの稜線に神経堤が形成される。神経管が形成されると神経堤細胞は他の地域に遊走して、副腎髄質やメラノサイト、頭蓋骨の一部など様々な部分を形成する。',
        },
        {
          answerImg: [embryoStageRisk],
          answer:
            '胚子期には神経・頭部など特に重要な出来事が次々に起こるため、先天異常リスクが最も高い。しかしながら、母親がまだ妊娠に気づいていない場合も多い。',
          commentary: '胚子期は発生第3～8週',
        },
      ],
    },
    {
      groupTag: '確認問題7 腸管と体腔',
      groupContents: [
        {
          answerImg: [diaphragm],
          answer:
            '2.食道間膜が横隔膜に寄与する。4.体壁と腸管をつなぐことで腸管を腹腔内に吊り下げる。5.腸管の左右を包んだ二枚の腹膜が重なって形成される。',
          commentary:
            '背側腸間膜dorsal mesenteryは臓側中胚葉由来で壁側中胚葉と繋がる。前腸の尾側端から後腸の終わりまで続く。横隔膜は横中隔+胸腹膜ヒダ+食道間膜（+体壁からの取り込み）で形成される。体壁から連続しているが体壁に寄与するとはいえない。腸間膜は腸管を腹腔内で固定するのに寄与していて、腸管への血管・神経などは二重構造の腸間膜の間を通過する。',
        },
        {
          answerImg: [after4weeks],
          answer:
            '2.形成時に絨毛膜腔に交通する。5.中胚葉性の上皮（壁側中胚葉・臓側中胚葉）に取り囲まれる',
          commentary:
            '羊膜腔が接するのは外胚葉。絨毛膜腔は妊娠後期に羊膜腔と融合する、さらに外側の胚外体腔で、腸管形成時に交通がある。卵黄嚢（内胚葉）は臓側中胚葉に包まれ胚内体腔との交通はない。胚内体腔は臓側中胚葉と壁側中胚葉が繋がってできる空間である。',
        },
        {
          answerImg: [after29days],
          answer: '2.側板中胚葉',
          commentary:
            '1.羊膜　3.背側大動脈？　4.卵黄嚢　5.脊索　胸腔は側板中胚葉由来の壁側中胚葉と臓側中胚葉に囲まれて形成される。図のように環状構造の外側が胚外体腔に開くことで臓側・壁側中胚葉に分化していく。',
        },
        {
          answerImg: [after21days],
          answer: 'D.側板中胚葉',
          commentary:
            'A.羊膜　B.神経管　C.中間中胚葉　D.側板中胚葉　E.胚外中胚葉　F.卵黄嚢　G.脊索か卵黄嚢　側板中胚葉の細胞間隙が、臓側・壁側中胚葉へ分化していく。',
        },
        {
          answerImg: [after4weeks],
          answer: 'D.側板中胚葉の細胞間隙',
          commentary:
            'A.神経管　B.羊膜　C.沿軸中胚葉　E.大動脈か間葉組織　F.卵黄嚢（→腸管）　側板中胚葉の細胞間隙→臓側・壁側中胚葉に分化してそれが再び腹側で癒合することで胸腔や腹腔が形成される。',
        },
        {
          answerImg: [diaphragm],
          answer:
            '2.はじめは心臓より前方に形成される。3.臓側中胚葉由来である。4.横隔膜の一部を形成する。',
          commentary:
            '横中隔は発生三週の終わり～4週にかけて発生し、心臓を囲む臓側中胚葉由来で（はじめ、肺の頭側端に形成される）、胎児の頭屈に伴って、原始胸膜腔と原始腹膜腔の間に位置するようになる。横中隔の中で肝細胞索（内胚葉由来）が発達する。横中隔から横隔膜の腱中心・肝臓の結合組織・腹側腸間膜が生じる。',
        },
        {
          answerImg: [heartCavity],
          answer: 'E',
          commentary: 'A.外胚葉　B.沿軸中胚葉　C.脊索？　D.前腸？',
        },
        {
          answerImg: [heartCavity],
          answer: 'C.前腸',
          commentary:
            '腹側に心臓、背側に中胚葉などで囲まれた空間なので内胚葉由来の前腸と推測される。心筒や心筋細胞は左右臓側中胚葉が正中で繋がって起こるので、それより背側の部分は内胚葉（複数ある場合は胚内体腔=壁側・臓側中胚葉）',
        },
        {
          answerImg: [diaphragm, pericardioperitonealCanal],
          answer:
            '横中隔より背側に存在する、横中隔によって仕切られた胸腔と腹腔を連絡する管状の通り道。発生に伴って主に胸心膜ヒダにより完全に閉じられる（横隔膜/7週ごろ）',
        },
        {
          answerImg: [after30days],
          answer: 'L.横中隔septum transversum',
          commentary:
            '横中隔のすぐ背側にある左右1対の空間は静脈群で、その背側の左右1対の空間が心腹膜管peritoneal cavity。中央細長い環状構造は腸管だろう。',
        },
        {
          answerImg: [after30days],
          answer: 'F.心腹膜管peritoneal cavity',
        },
        {
          answerImg: [after30days],
          answer: 'C.中腸',
          commentary: '内胚葉由来',
        },
        {
          answerImg: [growingLung],
          answer:
            '1.胸膜腔　2.肺芽　3.臓側中胚葉（臓側胸膜）　4.心膜腔　5.胸腹膜ヒダ',
        },
        {
          answerImg: [growingLung],
          answer: 'E.横隔神経',
          commentary:
            '横隔神経は頚神経叢から出て心膜や横隔膜を支配する。成人では心臓のすぐ側面を通過する',
        },
        {
          answerImg: [growingLung, pleuropericardialFold],
          answer:
            '3.胸心膜ヒダの癒合によって、胸腔は2つに分割される。5.胸心膜ヒダには、心臓に入る血管が通っている。',
          commentary:
            '1)心腹膜管をふさぐ胸腹膜ヒダも発生5週ごろに形成される（胸腔・腹腔・心膜腔の分離がほぼ同時に起こる）。2)胸心膜ヒダは原始心膜腔を腹側と背側に（心膜腔と胸腔に）分割する。3)胸心膜ヒダの癒合によって胸膜の左右分割も同時に行われる。4)肺芽は中胚葉（前腸）由来、肺や気管支を囲む軟骨・筋・結合組織は臓側中胚葉由来で、肺芽は前腸内胚葉より腹側（～両側）に形成される。5)胸心膜ヒダには総主静脈や横隔神経が通過する',
        },
        {
          answerImg: [diaphragm],
          answer: '1.心腹膜管を閉じる　4.横隔膜の一部になる。　5.筋性である。',
          commentary:
            '胸心膜ヒダが心膜腔と胸腔を分割（+胸膜を左右分割）し、胸腹膜ヒダが胸腔と腹腔を分割（=心腹膜管を閉鎖）する。ともに体壁の壁側中胚葉由来の上皮が左右から伸びてきて形成されるヒダ構造だが、胸腹膜はのちにC3~C5由来の筋が細胞が侵入し横隔膜の筋性部を形成する（～発生第7週）。',
        },
        {
          answer:
            'カントレル五徴症とは、1)正中腹壁欠損、2)前横隔膜ヘルニア、3)胸骨裂、4)心周囲異常、5)心室中隔欠損　の5つで構成され、腹側体壁欠損が原因。',
        },
        {
          answer:
            '臍帯ヘルニアでは飛び出した腸が膜状の袋（臍帯の一部）に包まれているが、腹壁破裂では腸は体壁に空いた孔から突出している。',
          commentary:
            '臍帯ヘルニアは腸管再構成時の腸管の生理的脱出に伴うもので、飛び出た腸管が臍帯に包まれているが、腹壁破裂は臍帯より体壁の形成がうまくいかないことに起因するので、膜状の袋に包まれていない。カントレル五徴症は5つの特徴的な症状で構成される',
        },
        {
          answer:
            '腹部臓器が胸膜腔に脱出することで、心臓・肺が押しやられ発育不全になり、肺の低形成や機能不全に至ると死亡率が高くなる。',
          commentary:
            '先天性横隔膜ヘルニアは心腹膜管の閉鎖不全（胸腹膜の形成不全）で、陰圧側の肺部分へ腹部臓器が脱出する異常。ほとんどの場合で心臓のある左側に起こる。',
        },
        {
          answerImg: [diaphragm],
          answer:
            '1.胸腹膜ヒダ　2.食道間膜　3.横中隔　4.体壁からの筋の内方成長',
        },
      ],
    },
    {
      groupTag: '確認問題8 胎児と胎盤',
      groupContents: [
        {
          answerImg: [placentalBarrier],
          answer:
            '2.胎盤関門はIgGを通す。　4.絨毛膜板には母体側の血管が通っている。',
          commentary:
            '1）胎盤関門は、初期は栄養膜合胞体層・細胞層・結合組織・血管内皮細胞で構成されるが、最終的には栄養膜合胞体層・血管内皮細胞のみで構成されるようになる。2）胎盤関門はIgGを通し、出生後半年間胎児の免疫を支える。3）絨毛膜板には胎児側の血管が通り、4）絨毛間腔内に母体側らせん動脈が開口する。',
        },
        {
          answerImg: [placentalBarrier],
          answer: 'B.胎児側赤血球',
          commentary:
            '濃い合胞体の層が絨毛最外層の栄養膜合胞体層で、これより外側が母体血の循環する絨毛管腔となる。ラングハンス細胞は栄養膜細胞層と呼ばれ、栄養膜合胞体層の内側で細胞分裂を行っている。',
        },
        {
          answerImg: [placentalBarrier],
          answer: 'D.ラングハンス細胞',
          commentary:
            'ランゲルハンス細胞は核を伸ばしたような形の樹状細胞のひとつで、皮膚など外界と接する部位に存在しており、免疫システムの重要な役割を担当している。',
        },
        {
          answerImg: [placentalBarrier],
          answer: 'A.母体側赤血球',
          commentary:
            '濃い合胞体の層が絨毛最外層の栄養膜合胞体層で、これより外側が母体血の循環する絨毛管腔となる。',
        },
        {
          answerImg: [uterus],
          answer:
            '1.基底脱落膜　2.絨毛膜有毛部　3.羊膜腔　4.卵黄嚢　5.絨毛膜無毛部　6.被包脱落膜　7.絨毛膜腔',
          commentary:
            '脱落膜までが母体子宮側の組織で、絨毛膜より内側は胎児由来の（母体から見た時の）異物。そしてその境界に胎盤関門が当たる。',
        },
        {
          answerImg: [uterus],
          answer:
            '1.絨毛膜→C　2.羊膜→J　3.羊膜腔→K　4.胚子→I　5.絨毛膜腔→E　6.臍帯/付着茎→B　7.卵黄嚢→D',
          commentary:
            '外胚葉が体表全てを構成するようになるのに伴い羊膜も体表全てを覆うようになる。卵黄嚢は成長に伴い縮小を続ける。',
        },
        {
          answerImg: [placentalBarrier],
          answer: '矢印部分は栄養膜合胞体層で、これはDに相当する。',
          commentary:
            '栄養膜合胞体層に母体側の血管が侵入することで栄養膜裂孔を形成し、後に絨毛間腔となる。',
        },
        {
          answerImg: [placentalBarrier],
          answer: '矢印部分は栄養膜細胞層（ラングハンス細胞）で、Cに相当する',
          commentary:
            '栄養膜細胞層は細胞分裂を繰り返した後に栄養膜合胞体層へと分化する。妊娠後期には細胞層は目立って減少し、胎盤関門を構成する層が減る。',
        },
        {
          answerImg: [placentalBarrier],
          answer: '母体側脱落層にあるらせん動脈で、Bに相当する',
          commentary: 'らせん状は血行を止めやすくするための構造。',
        },
        {
          answer: '4.胎児の頭殿長',
          commentary:
            '妊娠期を通して身長は伸びる。一方で体重は妊娠後期に際立って増加する。→二乗三乗の法則',
        },
        {
          answer: '3.体壁破裂',
          commentary:
            '臍帯の中で膜状の袋に包まれた状態で腸管が脱出する異常が臍帯ヘルニア、発生過程で長い腸管を折りたたんで収納するため一時的に臍帯へ腸管が脱出する正常な現象が生理的臍帯ヘルニア（これが戻らないと臍帯ヘルニア）、体壁の形成がうまくいかず、腸管が腹壁の外へ出てしまう異常が体壁破裂。カントレル五徴症のような記述は見当たらない。',
        },
        {
          answer: '2.腸回転異常症',
          commentary:
            '腸管が腹腔の外に飛び出しているので、腸回転異常を併発する可能性が高い。カントレル五徴症なら心臓奇形もあり得るがそのような記述はない。遺伝病という記述もない。',
        },
        // {
        //   answerImg:[],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '確認問題9 先天異常',
      groupContents: [
        {
          answer:
            '1.大異常は新生児の3~5%の生ずる。5.予防可能な先天異常も多い。',
          commentary:
            '大異常は3%程度、小異常は15%程度の規模で発生する。小異常があるからといって大異常が見つかるわけではないが、大異常がある場合は高確率で小異常が合併する。原因が特定されていない先天異常は多いが、一部の先天異常に関しては、例えば葉酸摂取で神経管閉鎖障害リスクを低下できたりなど、予防可能な先天異常も存在する',
        },
        {
          answer:
            '1.一卵性双生児の一致率は8~40%。3.単一遺伝子疾患に比べて頻度が高い。5.多因子遺伝病は遺伝や環境要因から特定の原因が見つからない',
          commentary:
            '例えば「糖尿病になりやすい家系」など、多くの因子の組み合わせで先天異常が生じるかどうかが決まっているため、単一遺伝子疾患のようなわかりやすい分布とはならないと考えられているが、近親者ほどリスクが高かったり、環境次第で発症率が変動したりと、それなりの共通点を持っている。',
        },
        {
          answer: '2.3～8週',
          commentary:
            '最も感受性が高い時期は、発生3～8週の胚子期である。（主要な器官形成が行われる時期）発生異常の表現型は、発生毒性因子に暴露された量と時間に影響される。',
        },
        {
          answer: 'C.症候群は診断がつく点で異なる。',
          commentary:
            '症候群・連合ともに高い確率で複数の症状が合併して起こる点で共通している。症候群はこれらの症状が共通する原因が医学的に解明されているので、診断がつく。',
        },
        {
          answer: '4.最も頻度の高いゲノムの多型である',
          commentary:
            'SNP=一塩基多型Single Nucleotide Polymorphism。SNPは性染色体にも存在し、ゲノムの中に0.1%存在する。人種に関わる多型も発見されているが、野生動物のなかで見たときにヒトの遺伝子多型は比較的少ない部類に入る。（現在の約80億人は少ない人数グループの祖先から広がったと考えられている：ボトルネック）',
        },
        {
          answer: 'アペール症候群',
          commentary:
            'ダウン症候群は21番染色体のトリソミーで基本的に母体年齢に依存する。クラインフェルター症候群はX染色体数の異常。アペール症候群は精子幹細胞の異常で、これが該当する。猫鳴き症候群は5番染色体の欠損で、父親年齢には依存しない。',
        },
        {
          answer: 'B.一般的に、3週～8週の胚子期に最も感受性が高い。',
          commentary:
            '発生毒性因子への感受性は、受胎産物（胚子or胎児 + 胎盤・胎膜）と母親の遺伝型と環境要因の相互作用に影響される →多因子性。発生異常の表現型は、発生毒性因子に暴露された量と時間に影響される。風疹rubellaのワクチン接種により先天異常を予防できる。',
        },
        {
          answer: 'D.風疹　F.サイトメガロウイルス',
          commentary:
            '風疹はワクチン接種も妊婦にできない（生ワクチン）。先天性サイトメガロウイルス感染症は母体初感染の場合に発生しやすく、低体重・小頭症・難聴・発達障害などを引き起こす。新生児B型肝炎ウイルス感染症は分娩時の感染によって発生する。B型肝炎の予防接種は妊娠にいっさい影響を与えない（不活化ワクチン）。',
        },
        {
          answer: 'A.レチノイン酸　C.バルプロ酸',
          commentary:
            'レチノイン酸は体節など分節構造を司る重要なシグナル物質である。パルプロ酸も同様（バルプロ酸は抗けいれん薬などに用いられる）。葉酸は足りないことはあっても取りすぎることはない。クエン酸・酢酸は身近に豊富にある。',
        },
        {
          answer: '全て発生毒性因子',
          commentary:
            'アルコールは胎児性アルコール症候群を引き起こし、短眼瞼裂・上顎骨発育不全・心臓異常・知的障害の原因となる。妊娠中の女性だけでなく、男性も薬物乱用によって精子・胎盤・発育中の胎児に悪影響を与え、生まれてくる子どもへ影響を及ぼす。',
        },
        {
          answer:
            'B.ACE阻害剤　D.サリドマイド　E.クラリス　F.ストレプトマイシン',
          commentary:
            '妊婦はインフルエンザで重症化しやすく、同意後に躊躇なくタミフルを投与することが推奨されている（日本産婦人科医会）。高血圧症で用いられるACE阻害剤の妊婦への投与で胎児の先天異常が継続的に報告されている（PMDA/2014年）。テオドールは経口摂取の喘息治療薬だが、妊娠中でも使用できると考えられている。サリドマイド薬害事件1959～1962年により、新薬に対する審査が厳格となった。クラリスロマイシンはマクロライド系抗生物質だが、ペニシリン系抗生物質に比べ主要な先天異常のリスクが高く、心血管の先天異常のリスクも高いので回避すべき。ストレプトマイシンはアミノグリコシド系抗結核薬だが、非可逆性第神経障害・先天性聴力障害が報告されている。',
        },
        {
          answer: 'A.糖尿病　C.肥満　F.フェニルケトン尿症',
          commentary:
            '妊婦の糖尿病は放置すると胎児に先天異常（奇形・巨大児・低カルシウム血症・黄疸など）が起こるが、インスリン製剤で血糖コントロールを行えば糖尿病のない人と同じように妊娠出産が可能になった。双極性障害は、その治療薬（炭酸リチウムやバルプロ酸）が胎児に悪影響を与える。肥満の母親から生まれる子どもは、心臓や生殖器の先天性形成不全などの深刻な出生異常を引き起こす可能性が高くなる（2017年スウェーデン研究）。花粉症自体は影響ないが、治療薬は妊娠4か月まで投与非推奨（症状は強いときは薬物以外の、ステロイドなどの点鼻薬が推奨される）。前置胎盤とは、胎盤が正常より低い子宮の壁に形成され、子宮の出口を覆ったり、出口の辺縁に及ぶものを指し、帝王切開で分娩する必要がある。フェニルケトン尿症はフェニルアラニン→チロシンに変える酵素の働きが生まれつき弱く、体にフェニルアラニンが蓄積しチロシンが少なくなる先天疾患で、胎児の脳障害心奇形が報告されており、健全児を生むためには妊娠前からの治療が必要。',
        },
        {
          answer:
            'ハンチントン病は両親の片方が発病していると50%の確率で遺伝するが、嚢胞性繊維症は両親がともに発病していなくても、両親ともに保因者（キャリア）ならば25%の確率で遺伝する。',
          commentary:
            'ハンチントン病は常染色体優性遺伝で、嚢胞性線維症は劣性遺伝。',
        },
        {
          answer:
            '共通点）ともに15番染色体の同じ領域の欠失（15q11-q13 deletion）。相違点）欠失した15番染色体が母親由来（アンジェルマン症候群）or父親由来（プラダーウィリー症候群）',
          commentary:
            'アンジェルマン症候群は母親由来の15番染色体の欠損で、知的障害・重度の言語障害・てんかんを伴う。プラダーウィリー症候群は父親由来の15番染色体の欠損で、知的障害・筋緊張低下・肥満・性腺発達不全・精巣下降不全を伴う。ゲノムインプリンティングと呼ばれ、一部の表現型は両親の片方の遺伝子のみで決定される。これは精子や卵子でそれぞれ固有のDNAメチル化などの修飾によるもの（→epigenetic）なので、これらの異常は遺伝時に再構築される（例えばアンジェルマン症候群の父親をもつ子どもは、50%の確率でプラダーウィリー症候群を発症する）',
        },
        {
          answer: '5.胚性致死である',
          commentary:
            '染色体数の異常は異数体aneuploidyと呼ばれ、正常より1本多いものは特にtrisomyと呼ばれるが、遺伝子量不均衡でほとんどが胚性致死を迎える。最小の染色体である21番染色体（→ダウン症候群）とX染色体（→XXYクラインフェルター症候群）とY染色体のみ生存可能で、他18番染色体（エドワーズ症候群）・13番染色体（パドー症候群）は生後早期に死亡する。',
        },
        {
          answer: '1.正常に成人する',
        },
        {
          answer: '3.成人しうるが、多様な先天疾患を持つ',
          commentary:
            '受精卵はXOモノソミーとなり、ターナー症候群と呼ばれる。モノソミーとしては唯一生存可能とされる。卵巣欠如・低身長・翼状頚・四肢リンパ水腫などで知的障害は伴わない場合が多く、思春期まで気づかれないこともある。',
        },
        {
          answer:
            '男性は1本で機能するX染色体が、女性には2本存在しているため、過剰な遺伝子発現を避けるために片方のX染色体を不活化している現象。',
          commentary:
            '不活化されるX染色体はモザイク状に決定される（→三毛猫）。X染色体上に原因を持つ遺伝病は男性の方が発症しやすい。',
        },
      ],
    },
    {
      groupTag: '確認問題13 消化器系',
      groupContents: [
        {
          answerImg: [pancreasBury],
          answer:
            'A.腹腔内器官）1,6,9　B.腹膜後器官）2,3,8,10　C.二次腹膜後器官）4,5,7',
          commentary:
            '膵臓・十二指腸・上行結腸など一部の臓器は腸間膜を途中で消失して後腹壁に埋まる。',
        },
        {
          answerImg: [organFromIntestine],
          answer: '2.咽頭弓　4.脾臓',
          commentary:
            '肝臓・膵臓は腸管から発生するが、脾臓は背側腸間膜から発生し前腸に由来しない。前腸は総胆管が十二指腸に開口する部位のすぐ尾側までの領域で、肝臓は含まれる。',
        },
        {
          answerImg: [pancreasBury],
          answer: '5.脾臓',
          commentary:
            '内胚葉→原始腸管→前腸・中腸・後腸など。脾臓は背側腸間膜から発生する',
        },
        {
          answerImg: [organFromIntestine],
          answer: '6.全て後腸に由来する',
          commentary: '',
        },
        {
          answerImg: [midIntestineLoop],
          answer: '1.肝臓',
          commentary:
            '中腸は総胆管が十二指腸に開口する部位のすぐ尾側から始まり、横行結腸の近位2/3までの上腸間膜動脈支配域。肝臓は前腸から発生する。メッケル憩室は卵黄腸管の遺残物なので中腸に含まれる。',
        },
        {
          answerImg: [foreIntestineLoop],
          answer: 'A.（右側・左側）→（背側・腹側）',
          commentary:
            '前腸は90度回転するので腹側の肝臓は右へ、背側の膵臓脾臓は左へ位置するようになる。左臍静脈も腹側へ。',
        },
        {
          answerImg: [pancreasBury],
          answer:
            '大網は背側胃間膜由来で、胃の回転に伴い下方に膨出し、そのまま下方に成長を続け、横行結腸と小腸の前でエプロンのように拡がる二重壁の嚢を形成する。この二重の嚢が大網でのちに二葉は癒合する。',
          commentary: '大網の後葉は、横行結腸間膜と癒合している。',
        },

        {
          answerImg: [foreIntestineLoop],
          answer: 'C.右側腹腔',
          commentary: 'このあと前腸が90度回転して右側腹腔は背側に移動する',
        },
        {
          answerImg: [foreIntestineLoop],
          answer: 'A.右側腹腔',
        },
        {
          answerImg: [adultForeGut],
          answer: 'B.網嚢孔の縁を形成する',
          commentary: ' 通るのは固有肝動脈・総胆管・門脈',
        },
        {
          answerImg: [foreIntestineLoop],
          answer: '大網（背側胃間膜）',
          commentary: '',
        },
        {
          answerImg: [foreIntestineLoop],
          answer: '脾臓原基',
          commentary: '',
        },
        {
          answerImg: [foreIntestineLoop],
          answer: '小網',
          commentary: '腹側胃間膜の、胃と肝臓の間の部分',
        },
        {
          answerImg: [foreIntestineLoop],
          answer:
            '脾臓は背側胃間膜の中胚葉の増殖として出現し、胃の回転とともに向きを変えることで後腹壁と癒合する。',
        },
        {
          answerImg: [falciformLigament],
          answer:
            '肝細胞索が横中隔内で成長すると、横中隔は膜状になり肝鎌状間膜を形成する。',
        },
        {
          answerImg: [falciformLigament],
          answer: '内胚葉',
          commentary:
            '前腸末端→肝芽→肝細胞索。クッパー細胞と肝臓の結合組織は横中隔の中胚葉由来',
        },
        {
          answerImg: [superiorMesentericArtery],
          answer: '2.右卵黄嚢静脈',
          commentary: '左卵黄嚢静脈は最終的に消失する',
        },
        {
          answerImg: [superiorMesentericArtery],
          answer: '2.右卵黄嚢静脈',
          commentary:
            '上腸間膜動脈は右卵黄嚢静脈由来、下腸間膜静脈は臍静脈由来',
        },
        {
          answerImg: [superiorMesentericArtery],
          answer: '4.左臍静脈',
          commentary: '右側の臍静脈は最終的に消失する',
        },
        {
          answerImg: [pancreasGrowing],
          answer: 'A.腹側膵(鈎状突起)　B.背側膵(膵臓の本体)',
        },
        {
          answerImg: [pancreasGrowing],
          answer: 'A',
        },
        {
          answer: 'D.前腸内胚葉',
          commentary:
            '膵臓発生の初期から、グルカゴンやインスリンを含有する顆粒を持つ細胞が、未熟な膵導管の末梢部から出芽する→内胚葉由来',
        },
        {
          answerImg: [intestineLoop],
          answer: 'E.6週～13週',
        },
        {
          answerImg: [intestineLoop],
          answer:
            '2.最初の90度の中腸回転は正常に起きるが、中腸が腹腔内に復帰するとき、正常な発生の反対向きに180度回転する。',
        },
        {
          answerImg: [intestineLoop],
          answer:
            '1.最初の90度の中腸回転は正常に起きるが、中腸が腹腔内に復帰するとき、回転が起きない',
          commentary:
            '正常であれば中腸が腹腔内に復帰するとき180度回転が起こる。',
        },
        {
          answerImg: [midIntestineLoop],
          answer: '2.卵黄腸管（→メッケル憩室）より尾側',
        },
        {
          answerImg: [organFromIntestine],
          answer: '2',
          commentary:
            '尿膜管は最終的に閉鎖して正中臍索となる。閉塞しないと尿膜管瘻となる。',
        },
        {
          answerImg: [pancreasBury],
          answer: 'B.横行結腸間膜と大網（背側胃間膜）',
        },
        {
          answer:
            'a.腹腔動脈→1.食道・2.胃・4.肝臓・5.膵臓。　b.上腸間膜動脈→3.十二指腸尾側・6.空腸・7.回腸・8.虫垂・9.上行結腸10.横行結腸吻側。　c.下腸間膜動脈→11.下行結腸・12.直腸',
          commentary:
            'bの領域が中腸（総胆管開口部より尾側～横行結腸近位2/3）と重なる。',
        },
        {
          answer: 'B,C,D',
          commentary:
            '上腸間膜動脈支配域が中腸（総胆管開口部より尾側～横行結腸近位2/3）と重なる。',
        },
        {
          answer:
            '中腸回転により、固有腸間膜は上腸間膜動脈の起始部のまわりでおおきくねじれる。',
        },
        {
          answerImg: [ECJunction],
          answer: 'C',
          commentary:
            '排泄腔膜は外胚葉と内胚葉がじかに接する部位であり、重層扁平上皮が単層円柱上皮に移行するE-C Junctionがみられる。',
        },
        {
          answerImg: [ECJunction],
          answer:
            '排泄腔膜は外胚葉と内胚葉がじかに接する部位であり、この外胚葉側が表皮とつながる肛門（の下部1/3）、内胚葉側が腸管とつながる直腸（と肛門上部）へ分化し、両者の境界には重層扁平上皮が単層円柱上皮に移行するE-C Junctionがみられる。',
        },
        {
          answer:
            '原因：筋間神経節（アウエルバッハ神経叢）と粘膜下神経節（マイスネル神経叢）の両方の完全喪失　症状：便排泄遅延、腹部膨満、腸の完全or部分閉塞',
        },
      ],
    },
    {
      groupTag: '確認問題14 心臓脈管系',
      groupContents: [
        {
          answerImg: [firstHeart],
          answer: '5.側板中胚葉臓側板',
        },
        {
          answerImg: [secondHeart],
          answer: '3.右心室　5.動脈幹　6.心円錐',
          commentary:
            '二次心臓野は一次心臓野の根本に発生し、右心室と流出路（心円錐・動脈幹）を形成する',
        },
        {
          answerImg: [firstHeart],
          answer:
            '心臓前駆細胞は胚盤葉上層の、原始線条の頭端の直筋に存在する。ここから細胞は原始線条を通って遊走して側板中胚葉臓側板に至り、その一部は神経ヒダ頭方で一次心臓域を形成する',
          commentary:
            '最初に上皮間葉転換を起こして原始結節から潜り込んだ中胚葉が頭側で心臓や頭部を形成する細胞になるといわれている。',
        },
        {
          answerImg: [heartTube],
          answer:
            '胚子の屈曲は頭尾方向だけでなく外側方でも起こる。その結果、二本の心内膜筒が尾側で合流する。同時に馬蹄形の筒の中央部分が拡張して、将来の流出路と心室域を形成する。',
        },
        {
          answerImg: [heartLoopAnatomy],
          answer: '3.予定右心室',
        },
        {
          answerImg: [heartLoopAnatomy],
          answer: '2.予定左心房　4.予定左心室',
          commentary:
            '房室管は初期の心室と共通心房とを連絡している。最も近いのはこの両端の左心室と左心房',
        },
        {
          answerImg: [firstHeart],
          answer:
            '一次心臓域の位置は神経ヒダ頭方にあるが、頭部の体屈曲によって心筒は頚部から胸郭内に移動するため、発生第四週における心臓の位置は胸郭内にある。',
          commentary:
            '前後左右方向に胚子が屈曲することにより、頭側の外側の側板中胚葉だった一次心臓域は胸郭前方に集まってくる。',
        },
        {
          answerImg: [transPericardialSinus],
          answer:
            '心膜横洞とは、心膜腔の両側を連絡する穴。背側の間膜の中部が消失することで形成される。',
        },
        {
          answerImg: [heartTube],
          answer: 'A.心臓',
        },
        {
          answerImg: [secondHeart, posteriorHeartCavity],
          answer: '1.肺静脈　2.左心房平滑壁部　3.冠状動脈　4.心外膜',
        },
        {
          answerImg: [posteriorHeartCavity],
          answer: '7.房室中隔',
          commentary:
            '心臓には中隔が数多く形成されるが、心内膜隆起が成長・接近・癒合して形成されるもの（房室域・円錐動脈幹・心室中隔膜性部）と、心臓壁に生じた稜以外の部分が拡張することで形成されるもの（心室中隔筋性部・心房中隔）とがある。3は後者の方式で形成された一次中隔が一部アポトーシスを起こして形成された構造である。',
        },
        {
          answerImg: [cardiacSeptum],
          answer: '1.心室中隔膜性部　4.房室管中隔　5.動脈管円錐中隔　',
          commentary:
            '心臓には中隔が数多く形成されるが、心内膜隆起が成長・接近・癒合して形成されるもの（房室域・円錐動脈幹・心室中隔膜性部）と、心臓壁に生じた稜以外の部分が拡張することで形成されるもの（心室中隔筋性部・心房中隔）とがある。',
        },
        {
          answerImg: [atrialSeptum],
          answer:
            '4）まず一次中隔が心房を二分し一次口を形成する。一次中隔が心内膜隆起と癒合すると、一次中隔の一部が細胞死することで二次口が形成される。最後に二次中隔と卵円孔がその右側に形成されることで胎児の心房中隔ができあがる。',
        },
        {
          answerImg: [atrialSeptum],
          answer: '6.卵円孔',
        },
        {
          answerImg: [cardiacSeptumMadeWithNeuralCrest],
          answer: '（神経堤の寄与が重要な部位は）5.動脈幹円錐中隔',
          commentary:
            '菱脳域の神経ヒダの縁から遊走してきた心臓形成神経堤細胞が第三・第四・第六咽頭弓を通って心臓の流出領域に遊走し、ここに進入する。この場所で神経堤細胞は心円錐と動脈管の両方での心内膜隆起形成に寄与する。そのほか、房室中隔の形成にも寄与する。両者ともに心内膜隆起から形成される中隔という点で共通している。',
        },
        {
          answerImg: [firstCardiacSeptum],
          answer: '4.一次口（一次中隔）が最初',
        },
        {
          answerImg: [atrialSeptum],
          answer: '4,2,3,7,5,6,1?',
          commentary:
            '心室中隔は筋性部（胎生第四週末）→膜性部の順。心房中隔は一次口（胎生第四週末）→二次口→卵円孔の順。動脈幹に内膜隆起が現れるのは第五週中。房室心内膜隆起は胎生第四週末。',
        },
        {
          answerImg: [adultCirculation],
          answer:
            '2.動脈管/肺動脈から大動脈弓に繋がる血管で、機能していない肺を経由せずに血液を全身に送る通り道。　5.静脈管/胎盤の血液を下大静脈に送る役割。',
        },
        {
          answerImg: [adultCirculation],
          answer:
            '動脈管が閉鎖されると、右心室の拍出血液が肺循環に送られるようになる。静脈管が閉鎖されると、胎盤からの血液が途絶える。',
          commentary: 'ほか、臍静脈由来の肝円索も存在する',
        },
        {
          answerImg: [posteriorHeartCavity],
          answer: '1.背側心間膜内で形成される。　3.心房への開口部を4つもつ。',
        },
        {
          answerImg: [transPericardialSinus],
          answer: '1.心外膜　.冠状動脈の平滑筋',
          commentary: 'これらは心外膜原基由来',
        },
        {
          answerImg: [venaCava],
          answer: '1.前主静脈（右側）→上大静脈',
          commentary:
            '右卵黄嚢静脈VIT→下大静脈、前主静脈ACV（右側）→上大静脈、左側総主動脈CCV→左静脈洞角→冠状静脈洞。左卵黄嚢静脈と右臍静脈は消失する',
        },
        {
          answerImg: [venaCava],
          answer: '4.右卵黄嚢静脈→下大静脈',
          commentary:
            '右卵黄嚢静脈VIT→下大静脈、前主静脈ACV（右側）→上大静脈、左側総主動脈CCV→左静脈洞角→冠状静脈洞。左卵黄嚢静脈と右臍静脈は消失する',
        },
        {
          answerImg: [finalVenaCava],
          answer: '9.総主静脈（左側）→冠状静脈洞',
          commentary:
            '右卵黄嚢静脈VIT→下大静脈、前主静脈ACV（右側）→上大静脈、左側総主動脈CCV→左静脈洞角→冠状静脈洞。総主静脈は前主静脈と後主静脈が合流した部分。',
        },

        {
          answerImg: [youngVein],
          answer: 'F.臍静脈',
        },
        {
          answerImg: [venaCava],
          answer: 'D.静脈洞角',
        },
        {
          answerImg: [heartTube],
          answer: 'D.背側大動脈',
        },
        {
          answerImg: [heartTube],
          answer: 'C',
        },
        {
          answerImg: [heartTube],
          answer: 'C.心臓',
        },
        {
          answerImg: [heartTube],
          answer: 'E.背側大動脈',
        },
        {
          answerImg: [transverseHeartTube],
          answer:
            '3.卵黄嚢壁での血島の形成、4.最終的脊索の形成？　(※心筒が形成されるより前の出来事で、拍動開始がいつかは不明)',
          commentary:
            '心筒が形成されるのは発生22日ごろの8体節期。最初の血球が作られる卵黄嚢壁の血島は19日までには作られる。頭側神経孔の閉鎖は18~20体節期（発生25日）で、その後一次脳胞が形成される。尾側神経孔は28日ごろまで閉鎖せず、脊索は三葉性胚盤の頃に形成されるので発生21日には完成している。',
        },
        {
          detailInfo: '心臓異常',
          answerImg: [atrialSeptum],
          answer: 'C.二次中隔欠損',
        },
        {
          detailInfo: '心臓異常',
          answerImg: [atrialSeptum],
          answer: 'A.一次口欠損',
          commentary: '房室心内膜隆起の癒合不全に基づく一次口欠損',
        },
        {
          detailInfo: '心臓異常',
          answerImg: [cardiacAnomaly],
          answer: 'C.心室中隔欠損　E.動脈管開存　G.大血管転換',
          commentary:
            '大血管転換は円錐動脈幹中隔が正常のらせん状走行をとりそこね、まっすぐに下行するために起こり、その結果、大動脈が右心室から、肺動脈が左心室から出る。多くは神経堤細胞の傷害が原因のため心室中隔膜性部の欠損もともなう。',
        },
        {
          detailInfo: '心臓異常',
          answerImg: [cardiacAnomaly],
          answer: 'C.心室中隔欠損　E.動脈管開存　F.ファロー四徴症',
          commentary:
            'ディジョージシークエンスは21q11欠失症候群でみられる異常の例で、神経堤の異常発生に起因する異常の組み合わせパターンを特徴とする。患児は顔面異常等のほか動脈管開存やファロー四徴症をしめす。神経堤細胞は心臓では心内膜隆起によって形成される中隔（心円錐中隔・房室中隔・心室中隔膜性部）に含まれる。',
        },
        {
          detailInfo: '心臓異常',
          answerImg: [cardiacAnomaly],
          answer:
            'A.ファロー四徴症、D.肥大性心筋症、H.大動脈弁閉鎖症、I.肺動脈弁狭窄',
          commentary:
            '動脈管が開存するのは大動脈と肺動脈への血流分配が偏った場合なので、動脈幹内の狭窄・閉鎖に伴うことが多い。三尖弁閉鎖症は三尖弁が閉鎖され心室中隔・心房中隔が開存する先天異常であるが、動脈管は閉鎖することが多い。',
        },
      ],
    },
    {
      groupTag: '確認問題15 動脈系',
      groupContents: [
        {
          answerImg: [aorticArch],
          answer: '心臓動脈幹',
        },
        {
          answerImg: [aorticArch],
          answer: '大動脈嚢左角',
          commentary:
            '左右に分岐した部分から左の第6咽頭弓動脈の起始までの部分。大動脈嚢は腹側大動脈と肺動脈幹に分割された部分から左右の角を形成し、引き続きそれぞれ腕頭動脈・大動脈弓の近位部を生じる。',
        },
        {
          answerImg: [aorticArch],
          answer: '大動脈嚢右角',
          commentary:
            '大動脈嚢は腹側大動脈と肺動脈幹に分割された部分から左右の角を形成し、引き続きそれぞれ腕頭動脈・大動脈弓の近位部を生じる。',
        },
        {
          answerImg: [anatomicArtery],
          answer: 'A.第四大動脈弓、B.第七節間動脈',
          commentary:
            '右鎖骨下動脈遠位部と左鎖骨下動脈は各側の第七節間動脈より形成。',
        },
        {
          answerImg: [aorticArch],
          answer: '第三大動脈弓',
          commentary: '第三大動脈→総頚動脈・内頚動脈起始部',
        },
        {
          answerImg: [aorticArch],
          answer: '第四大動脈',
          commentary:
            '第四大動脈左側→大動脈弓（左総頚動脈分岐部から左鎖骨下動脈分岐部まで）',
        },
        {
          answerImg: [aorticArch],
          answer: '背側大動脈（左側）',
        },
        {
          answerImg: [aorticArch],
          answer: '第六大動脈弓（左側）',
          commentary: '第六大動脈弓左側→左肺動脈・動脈管',
        },
        {
          answerImg: [aorticArch],
          answer: '第六大動脈弓（左側）',
          commentary: '第六大動脈弓左側→左肺動脈・動脈管',
        },
        {
          answerImg: [after32days],
          answer: '咽頭原基（前腸）',
          commentary: 'pharynx primordium:咽頭原基。前腸由来',
        },
        {
          answerImg: [after32days],
          answer: '神経管',
          commentary: 'P側の神経管は脊髄へ、A側の神経管は脳胞へ。',
        },
        {
          answerImg: [after32days],
          answer: '脊索',
          commentary: '内胚葉由来',
        },
        {
          answerImg: [after32days],
          answer: '背側大動脈',
          commentary: '背側大動脈は背側に左右一対ある。',
        },
        {
          answerImg: [after32days],
          answer: 'C',
          commentary:
            '実は断面（緑の横線）では第一咽頭弓は切れていない。よってもっとも断面腹側（頭側）で切れている咽頭弓は第二咽頭弓。',
        },
        {
          answerImg: [aorticArch],
          answer: 'A.右鎖骨下動脈　B.大動脈弓　C.第六大動脈弓',
          commentary:
            '右側で、第六大動脈弓の遠位部と第五大動脈弓が消失した後、右反回神経は右鎖骨下動脈をかぎ型にぐるりと回る。左側では反回神経はもとの位置にとどまったまま、動脈管索をかぎ型に回る',
        },

        {
          answerImg: [aorticArch, pulmonaryArtery],
          answer:
            '発達中の胚芽に対して第六大動脈弓が重要な枝を出し、動脈管を残して背側大動脈との連絡を絶ち肺動脈幹が形成される。その先の原始肺動脈は毛細血管網を発達させ肺動脈を形成する。',
        },
        {
          answerImg: [internodeArtery, wideArtery],
          answer:
            '（背側節間動脈）肋間動脈・腰動脈・右鎖骨下動脈遠位部・左鎖骨下動脈・椎骨動脈、（外側節間動脈）横隔膜動脈・腎動脈・精巣動脈・卵巣動脈、（腹側節間動脈）腹腔動脈・上腸間膜動脈・下腸間膜動脈',
          commentary:
            '右鎖骨下動脈遠位部と左鎖骨下動脈は各側の第七節間動脈より形成。節間動脈は体節とともに形成される。節間動脈の方向と、大動脈から出てくる動脈の方向が概ね一致している。',
        },
        {
          answerImg: [vitellineVessel, hematopoieticTissue],
          answer:
            '造血幹細胞は最初、卵黄嚢の血管で出現し、すぐにAGMに移動する。胎児齢2ヶ月になると肝臓に移動し、7ヶ月になると骨髄に移動する。',
          commentary:
            '造血幹細胞は大動脈-生殖巣-中腎域(Aorta-Gonad-Mesonephros region)と呼ばれる発生中の中腎付近にある大動脈を囲む中胚葉に由来する。',
        },
        {
          answerImg: [doubleAorticArch],
          answer: 'B.重複大動脈弓',
          commentary:
            '重複大動脈弓（二重大動脈弓）では、右の背側大動脈が右第七節間動脈の分岐部と、左の背側大動脈との結合部の間で残存する。これにより食道と血管を取り囲む血管輪が生じ、しばしばこれらの器官を圧迫し、呼吸困難や嚥下困難を引き起こす',
        },
        {
          answerImg: [aorticBlockage],
          answer: 'D.心室中隔欠損、E.動脈管開存',
          commentary:
            '大動脈弓遮断はきわめてまれな異常で、左右第四大動脈弓消失パターンの異常によって起こる。遮断部位により3型あるが、いずれも基本的に心室中隔欠損+動脈管開存を伴うことで下半身への血流を保つ。開存しない場合は内胸動脈などで下半身への血流を補う場合がある。',
        },
        {
          answerImg: [aorticBlockage],
          answer: 'C.下半身のチアノーゼ',
          commentary:
            '管前大動脈縮窄とは動脈管より前（心臓側）の部分でおこった大動脈縮窄のこと。本来は動脈管開存で血流を補えるパターンなのだが...',
        },
        {
          answerImg: [],
          answer: 'B.上半身の高血圧',
          commentary:
            '管後大動脈縮窄では動脈管より末端（末梢側）で大動脈が縮窄しているため、動脈管開存は伴わない。その結果下半身への血流は減少し、本来全身に回るはずだった血液が上半身に集中することになる。（内胸動脈などで下半身への血流が補われた場合でも、まず拍出血液が全て上半身に流れることになる）',
        },
      ],
    },
    {
      groupTag: '確認問題16 静脈系',
      groupContents: [
        {
          answerImg: [arantius],
          answer:
            '静脈管は胎児期に臍静脈から下大静脈へつなぐ肝臓に位置する静脈。出生後肺循環を始めるまでの間、胎盤（母体）からの血液を心臓へ届ける唯一の通路としてはたらく。',
          commentary:
            '臍静脈から胎児に入る血液の大部分は、静脈管というバイパスを通って下大静脈に入る。静脈系の血管であるが流れる血液は胎児内で最も酸素に富んだ動脈血であることに注意',
        },
        {
          answerImg: [superiorMesentericArtery],
          answer: '4.右卵黄嚢静脈',
          commentary:
            '十二指腸のまわりの右卵黄嚢静脈が上腸間膜静脈と脾静脈に分化する。左卵黄嚢静脈は消失する。右卵黄嚢静脈の上流は肝シヌソイドを形成するため、これらは門脈系を形成する。',
        },
        {
          answerImg: [superiorMesentericArtery, arantius],
          answer: '6.左臍静脈',
          commentary:
            '臍帯からの血液は臍静脈が運ぶ。右臍静脈の多くの部分は早期に消失するので、左臍静脈が胎盤から胎児（肝臓）へ血液を送る唯一の血管となる。生後に閉鎖し、臍から肝臓の部分は肝円索、肝臓内部で下大静脈へ繋がる部分は静脈管索となる。',
        },
        {
          answerImg: [inferiorVenaCava],
          answer: '1.右卵黄嚢静脈　3.後主静脈　5.主上静脈　6.主下静脈',
          commentary: '参考：下大静脈',
        },
        {
          answerImg: [superiorMesentericArtery],
          answer: '2.卵黄嚢静脈',
          commentary:
            '上腸間膜動脈は卵黄嚢動脈由来で、腹側節間動脈（腹腔動脈・上下腸間膜動脈）のひとつ。下腸間膜動脈は臍動脈由来。',
        },
        {
          answerImg: [vein],
          answer: '5.主上静脈',
          commentary: '主上静脈は奇静脈・半奇静脈を形成する比較的背側の静脈',
        },
        {
          answerImg: [vein],
          answer: '4.前主静脈',
          commentary:
            '発生4週ごろ、静脈系は卵黄嚢静脈・前主静脈・後主静脈・総主静脈（前後主静脈の合流）に分類される。',
        },
        {
          answerImg: [vein],
          answer: '3.上大静脈',
          commentary: '腕頭静脈は前主静脈由来なので、同じ頭側の静脈を選ぶ。',
        },
      ],
    },
    {
      groupTag: '確認問題17 視覚器',
      groupContents: [
        {
          answerImg: [opticCup],
          answer: 'B.前脳',
          commentary: '前脳→間脳（→網膜・視神経など）・大脳半球',
        },
        {
          answerImg: [opticCup],
          answer: '断面上の、神経菅の左右に一対の球状の空間',
          commentary:
            '眼胞は前脳神経管由来で、眼プラコードではない。（耳胞は耳プラコード由来）',
        },
        {
          answerImg: [eyeCup],
          answer:
            '眼杯は断面中央前脳から左右側面まで隆起した、C字状の部分。水晶体は断面左側の眼杯に囲まれた球状の部分。視神経は前脳から眼杯へと伸びる眼茎の部分',
          commentary:
            '前脳からの隆起 → 眼胞 → 眼杯・眼茎 → 網膜・瞳孔・視神経など。一方で眼プラコードは水晶体を形成する。',
        },
        {
          answerImg: [eyeGrowing],
          answer:
            '断面下から2番目の左右一対の空間がガラス体、その腹側の球状の濃い領域が水晶体、その背側周囲の濃い領域（の最内側）が網膜神経層（外側の濃い領域は網膜色素上皮層、最も濃い線は脈絡膜？）',
          commentary:
            '網膜神経層は視神経の末端が分布する網膜の中心的な役割を担う層。水晶体は眼プラコード由来の部分。ガラス体は眼球を満たす透明・粘稠なゲル状組織で、中に見える断片は硝子体血管で、胎生期中に閉塞し消失する。断面最下部の左右一対の空間は大脳半球前端で、胎児が前屈しているため神経管は断面最上部にも見える。',
        },
        {
          answerImg: [eyeWide, eyeAnatomy],
          answer:
            '網膜色素上皮)網膜の最内側を占めるやや薄いC字状の部分。　硝子体動脈)眼の内側を埋める硝子体に点在する部分。　結膜嚢)断面右下に見える薄い2重壁の部分。　眼瞼)結膜嚢の外側（断面右下）の部分。　強膜)眼球の黒い線（脈絡層）の外側のやや濃い部分。',
          commentary:
            '網膜色素上皮層は網膜最外層で、眼杯二重壁の外側の壁から発生する。成人ではこのすぐ内側に光受容器をもつ桿体細胞・錐体細胞が刺さっている。硝子体動脈は眼杯裂から入り込んだ間葉由来の血管で、硝子体内の部分は胎生期に閉塞・消失するが眼茎に入り込んだ部分は網膜中心動脈となる。結膜嚢は外胚葉上皮由来で、眼瞼の裏側を形成し腺が豊富。眼瞼はまぶたのこと。強膜・脈絡膜は眼周囲の間葉由来で、組織切片では脈絡膜が最も濃く、胸膜がその外側で若干濃く映る。',
        },
        {
          answerImg: [eyeAnatomy],
          answer: 'C.瞳孔散大筋、D.網膜',
          commentary:
            '筋は基本中胚葉・神経堤（毛様体筋などの頭部）由来であるが、例外として瞳孔括約筋・瞳孔散大筋（神経外胚葉由来）・汗腺乳腺中の筋組織（外胚葉性上皮由来）が挙げられる。',
        },
        {
          answerImg: [eyeAnatomy],
          answer: 'B.間脳',
          commentary:
            '前脳→大脳半球・間脳。前脳の左右への隆起から眼胞や視神経が発生する。',
        },
        {
          answerImg: [],
          answer: 'C.瞳孔括約筋',
          commentary:
            '筋の由来は神経堤（頭部）・体節中胚葉（頚部と後頭域）・側板中胚葉壁側板（体壁と体肢）・側板中胚葉臓側板（心筋・腸管など）であるが、例外として瞳孔括約筋・瞳孔散大筋・汗腺乳腺中の筋組織は外胚葉起源である。',
        },
        {
          answerImg: [iris],
          answer: 'B.神経管',
          commentary:
            '虹彩の平滑筋は瞳孔括約筋・瞳孔散大筋で、神経外胚葉由来。他の頭部の筋は基本神経堤由来。',
        },
        {
          answerImg: [eyeAnatomy],
          answer:
            '眼胞との相互作用による体表外胚葉の肥厚によって水晶体板は形成される。水晶体胞は水晶体板陥入・発達により形成される。',
        },
        {
          answerImg: [eyeCup],
          answer:
            '眼杯の陥入により眼杯裂が形成され、硝子体動脈が眼茎の中心部に到達する。その後眼杯裂が腹側で閉じて硝子体動脈を取り囲む。',
          commentary: '硝子体動脈は眼茎の中心部で網膜中心動脈などを形成する。',
        },
        {
          answerImg: [eyeAnatomy],
          answer:
            '眼杯の内層は網膜神経層に、外層は網膜色素上皮にそれぞれ分化する。',
          commentary:
            '眼杯の二重壁はそれぞれ別の機能を持つが、全体として網膜を形成し、その外側の脈絡膜・強膜とは由来が異なる。',
        },
        {
          answerImg: [eyeWide, iris],
          answer: '水晶体の前面を覆う間葉が内部で分離して前眼房が形成される。',
          commentary:
            '水晶体は眼プラコード由来、角膜や結膜は外胚葉性上皮由来。その間や周囲の前眼房・眼瞼などは間葉由来',
        },
      ],
    },
    {
      groupTag: '確認問題18 平衡聴覚器',
      groupContents: [
        {
          answerImg: [cochlear, cochlearWide],
          answer: '1.外有毛細胞、4.蝸牛管',
          commentary:
            '耳胞→球形嚢・蝸牛管・卵形嚢・半規管・内リンパ管（膜迷路）。ただし蝸牛の前庭階・鼓室階などは蝸牛管を取り囲む間葉由来',
        },
        {
          answerImg: [otocyst],
          answer: '断面下側の神経管の左右の膨らみ部分が耳胞',
          commentary:
            '緑の線の切片を上から見ている。切片後方の突起ができつつある耳胞で、これを断面で同定する問題。耳胞は左右両方にできる。プラコードは神経上皮と外皮が肥厚してできたもの。上側神経管左右にある球状の膨らみが耳胞である。その下側の濃い領域は神経堤由来の間葉で、中枢神経や耳胞と協調して脳神経（CN内耳神経や顔面神経）へ分化する。耳管は前腸（断面中央の管）内胚葉由来',
        },
        {
          answerImg: [cochlear],
          answer: 'D.蝸牛管',
          commentary: '耳胞→内耳神経節・前庭蝸牛神経節・蝸牛管など。',
        },
        {
          answerImg: [meckelCartilage],
          answer: 'B.エウスタキオ管',
          commentary:
            '第一咽頭嚢→耳管（エウスタキオ管）・原始鼓室（中耳腔）。第一咽頭弓→ツチ骨・キヌタ骨。耳介は第一咽頭弓と第二咽頭弓の背側端から発生する（6個の神経堤の増殖から耳介小丘が発生）。由来の遠さは判断が難しいが、エウスタキオ管は内胚葉由来なので最も遠いかもしれない。',
        },
        {
          answerImg: [otocyst, pharyngealNerves],
          answer:
            '耳胞）断面中央にある左右一対の球状の空間。　脳神経Ⅷ内耳神経）耳胞と神経管の間の濃い領域',
          commentary:
            '耳胞は菱脳付近の外胚葉の肥厚から始まる。内耳神経節も耳胞由来',
        },
        {
          answerImg: [semicircularCanal],
          answer:
            '耳胞が分化し、背側に卵形嚢が形成される。発生6週中に卵形嚢の扁平突出として半規管は出現し、突出部の壁の中央部は接着し消滅するため、3つの半規管が形成される。',
        },
        {
          answerImg: [auditoryOssicles],
          answer:
            '耳小骨は胎生前半期に形成されたのち、8か月に周囲の組織が融解するまで間葉の中に埋没している。原始鼓室内腔の内胚葉性上皮が新しくできた腔の表面に広がり、腸間膜のように耳小骨を鼓室壁に結びつける。',
        },
        {
          answerImg: [auditoryOssicles],
          answer:
            '外耳道と鼓室間の中胚葉（または神経堤）由来の間葉が薄化し、外側は外耳道底の外胚葉性上皮、内側は鼓室の内胚葉性上皮に覆われることで鼓膜は形成される。',
          commentary:
            '鼓膜は外耳道と中耳の仕切りで、外耳道側は外胚葉→第一咽頭溝由来、鼓室側は内胚葉→第一咽頭嚢由来、中間層は中胚葉由来',
        },
        {
          answerImg: [auditoryOssicles],
          answer: 'B.外耳の発生異常は心臓の先天疾患を合併する事が多い。',
          commentary:
            '耳介は第一・第二咽頭弓の背側端にあって第一咽頭溝を取り囲む６つの耳介小丘（神経堤由来）から発生する。神経堤は顔面・心臓・頭蓋など他のたくさんの器官も形成するので、これらの異常は同時に発生する事が多い。難聴には感音性難聴（蝸牛や神経の異常）・伝音性難聴（外耳道や鼓膜・耳小骨の異常）があり、先天性難聴の大部分は感音性難聴（例外：トリーチャー・コリンズ症候群・ダウン症候群などは伝音性難聴）。鼓膜は外胚葉・中胚葉・内胚葉由来の層で構成される。',
        },
        {
          answerImg: [otocystGrowing, semicircularCanal, cochlear],
          answer: '1.外有毛細胞、4.蝸牛管',
          commentary:
            '耳プラコード（外胚葉性上皮肥厚）=耳板→耳胞→内耳神経節・前庭蝸牛神経節・卵形嚢・三半規管・蝸牛管・球形嚢・内外リンパ管',
        },
        {
          answerImg: [cochlearWide],
          answer:
            '共通点）蝸牛管の上皮細胞と、前庭膜・基底板は耳胞由来で共通している。　相違点）蝸牛管内の構造は耳胞（外胚葉の肥厚）由来であるが、前庭階や鼓室階は蝸牛管を取り囲む間葉組織由来。',
          commentary:
            '蝸牛管のみ耳プラコード由来で、前庭階・鼓室階は付近の間葉組織由来。',
        },
        {
          answerImg: [pharyngealNerves, meckelCartilage],
          answer:
            'ツチ骨-鼓膜張筋-Ⅴ三叉神経下顎枝支配、アブミ骨-アブミ骨筋-Ⅶ顔面神経支配',
          commentary:
            'ツチ骨・キヌタ骨は第一咽頭弓由来、アブミ骨は第二咽頭弓由来なので、付く筋も同じ咽頭弓由来のもの。',
        },
      ],
    },
    {
      groupTag: '確認問題19 外皮系',
      groupContents: [
        {
          answerImg: [skin],
          answer: 'A,C',
          commentary:
            'Aは表皮有棘層、Bは真皮の組織、Cは小汗腺（腺は表皮由来）、Dは皮下脂肪。 表皮は外胚葉由来だが真皮は側板中胚葉（体肢と体壁）・沿軸中胚葉（背部）・神経堤（顔面と頚部）由来。',
        },
        {
          answerImg: [hair],
          answer: 'D.皮下脂肪-中胚葉、G.皮脂腺-外胚葉',
          commentary: '皮下脂肪は中胚葉由来、皮脂腺は表皮由来',
        },
        {
          answerImg: [mammaryGland],
          answer:
            '3.思春期にエストロゲンとプロゲステロンの作用により発達する。',
          commentary:
            '出生時には乳管には腺房がなく、したがって分泌装置がないが、思春期にはエストロゲンとプロゲステロンの濃度が高まることで乳管からの分枝が刺激され、腺房と分泌細胞が形成される。',
        },
        {
          answer: 'B.メラノサイト、D.三叉神経、E.自律神経',
          commentary:
            '表皮は神経堤起源の細胞の侵入を受ける。これらの細胞はメラノソーム内にメラニン色素を合成する。メラノソームが蓄積すると、メラニン細胞の樹状突起へ輸送され、表皮のケラチン細胞や毛球へと細胞間輸送される。このように、皮膚と毛の色素はもともとあるものではなく、獲得されたものである。ほか、副腎髄質も神経堤由来である。',
        },
        {
          answerImg: [hair],
          answer: 'E.この中にはない',
          commentary:
            '上皮性毛包・脂腺は上皮由来である。立毛筋・汗腺の平滑筋・瞳孔括約筋も例外的に外胚葉由来である。',
        },
        {
          answer: 'B.魚鱗癬',
          commentary:
            'ワーデンブルグ症候群は、皮膚や髪の毛の色素沈着・青い眼・感音性難聴を特徴とする遺伝的疾患。魚鱗癬は重度の皮膚の乾燥の一種（遺伝性・後天性両方存在）。まだら症とはおでこや生え際の所にできる皮膚の白い変化で、その部分だけ白髪になる遺伝性の病気。多毛症は毛包の過剰形成で、遺伝性/薬物など多様な原因が存在する。（皮膚と毛の色素はもともとあるものではなく、獲得されたものである。）',
        },
        {
          answerImg: [tooth],
          answer: 'C.ゾウゲ芽細胞',
          commentary:
            '歯は口腔を覆う上皮と神経堤由来の間葉細胞との相互作用で形成される。具体的には歯堤・内・外エナメル上皮・エナメル結節が外胚葉由来、歯乳頭・ゾウゲ質が神経堤由来。',
        },
        {
          answerImg: [hair],
          answer: 'A.表皮',
          commentary:
            '筋の由来は神経堤（頭部）・体節中胚葉（頚部と後頭域）・側板中胚葉壁側板（体壁と体肢）・側板中胚葉臓側板（心筋・腸管など）がほとんどだが、例外として、瞳孔括約筋・散大筋・乳腺および汗腺中の筋組織は外胚葉起源である。',
        },
        {
          answerImg: [tooth, toothRidge],
          answer:
            '歯自体は口腔を覆う上皮とその下層にある神経堤由来の間葉細胞との相互作用で形成される。口腔上皮の基底層が落ち込み歯堤・内外エナメル上皮を形成する一方で、神経堤由来の間葉が歯乳頭を形成し、後にゾウゲ芽細胞（→象牙質）に分化する。歯の外面では歯根部の象牙質と接触している間葉細胞がセメント芽細胞（→セメント質）や歯根膜を形成し、歯をその位置にしっかりと固定すると同時に衝撃の吸収装置として働く。',
          commentary: '神経堤→歯乳頭・ゾウゲ質・セメント質など',
        },
        {
          answerImg: [mammaryGland],
          answer:
            '思春期において、男性ではエストロゲン量が少なくテストステロン量が多いため乳腺は形成されない。女性ではエストロゲンが多くテストステロンが少ないため、エストロゲンやプロゲステロンにより乳腺が形成される。',
          commentary: 'エストロゲン→乳管の発育、プロゲステロン→腺葉の肥大',
        },
        {
          answerImg: [mammaryGland],
          answer:
            '乳腺も汗腺と同じく表皮由来で、発生7週ごろ上肢の基部から下肢まで両側に複数できた乳腺堤の1対だけが残存して下層の間葉中に侵入し、乳管・上皮小窩を形成する。乳頭は出生後に上皮小窩の下層の間葉の増殖によって形成される。腺房や分泌細胞は思春期まで形成されない。',
        },
      ],
    },
    {
      groupTag: '確認問題20 呼吸器系',
      groupContents: [
        {
          answerImg: [larynx],
          answer: '第4・第6咽頭弓＿甲状軟骨・輪状軟骨・披裂軟骨',
          commentary:
            '喉頭内面を覆う上皮は内胚葉由来であるが、軟骨と筋は第4および第6咽頭弓の間葉に由来する。この間葉が急速に増殖する結果、喉頭口の外観は矢状方向の細隙から、T字型の隙に変化する（図A）。その後、２つの咽頭弓の間葉が、甲状軟骨・輪状軟骨・披裂軟骨に形を変えると特徴ある成人型の喉頭口がみられるようになる（図B）。',
        },
        {
          answerImg: [tracheaEsophagusSeptum],
          answer:
            'はじめ肺芽は前腸と広く交通している。呼吸器憩室が尾側に拡張すると、左右に気管食道稜が発生し前腸から分離されはじめ、その後これらの稜が癒合して、気管食道中隔が形成される。',
          commentary:
            '気管は食道が分割されたものであるため、両者の間には漿膜が存在しない。',
        },
        {
          answerImg: [after33daysLung, larynx],
          answer:
            '咽頭口)T字型の隙の部分　喉頭蓋)T字型の隙の断面下側の部分　甲状軟骨)T字型の隙の左右やや下側の部分',
          commentary:
            'T字型の隙の背側（断面上側）は前腸、腹側（断面下側）部分は前腸から出た喉頭larynxの分岐部。喉頭の両側に後の喉頭を形成する組織（第4・第6咽頭弓間葉組織由来）が凝集している（laryngeal condensation）。喉頭蓋隆起は喉頭口よりやや頭側（第4咽頭弓頭側）に位置していることから、断面では喉頭口の断面下側のlaryngeal condensationに位置していると推測される。甲状軟骨はそれよりやや尾側なので、喉頭口の左右あたりのlaryngeal condensationに位置していると推測される。甲状軟骨はそれよりやや尾側なので、喉頭口の左右あたりのlaryngeal condensation に位置しているのでは？',
        },
        {
          answerImg: [tracheaEsophagusSeptum],
          answer:
            '気管)横長の楕円状の管　食道)縦長楕円状の管　気管食道中隔)その間の隔たり',
          commentary:
            '神経管がある断面上側が背側。神経管の前に2つの卵型の管の血管が通っていて、その前方に縦長の前腸（→食道）、横長の呼吸器憩室（→気管）が見える。これらを左右から分割するのが気管食道稜（→気管食道中隔）。連続切片では左右に分岐し肺構造の原型を形成している気道と、変わらず一本の管で下降していく食道が対照的に映っている。',
        },
        {
          answerImg: [pleuropericardialFold, pericardioperitonealCanal],
          answer:
            '胸心膜ヒダ)総主静脈をふくむ左右のヒダ状の部分　胸腹膜管)左右の胸心膜ヒダのそれぞれすぐ上側の空間　肺芽)左右の胸腹膜管に囲まれた部分の、中央の対になっている2つの管状の空間　食道)肺芽の上方の薄い1本の管の部分。',
          commentary:
            '胸心膜ヒダは胸腔と心膜腔を分割（+胸膜を左右２つに分割）する体壁からの隆起で、胸腹膜管は胸腔と腹腔を分割する（+横隔膜の一部となる）体壁からの隆起。胸心膜ヒダにはC3~C5由来の横隔神経と、心臓へ入る総主静脈が含まれている。断面上側に神経管が見えるので背側。その前方に（小さな脊索と）２つの血管、その腹側が胸腔→心膜腔である。',
        },
        {
          answer:
            '腺様期：5~16週、管状期：16～26週、終末嚢期：26週～出生、肺胞期：生後8か月～小児期',
          commentary:
            '肺胞が形成される26週から呼吸できるようになり、28週ごろからⅡ型肺胞上皮細胞のサーファクタント分泌が始まる。新生児の呼吸切迫症候群RDSは新生児期の全死亡の2割を占める。',
        },
        {
          answerImg: [pleuropericardialFold],
          answer:
            'はじめ肺芽は前腸から分岐し胸心膜腔の背側で主に気管を形成する（管状期）が、胸心膜ヒダや心腹膜管遮断によって胸膜腔が独立すると、肺は胸膜腔内で膨張し肺胞を形成する。（終末嚢期）',
        },
        {
          answerImg: [TEF],
          answer:
            '気管食道中隔の異常：気管上部が盲嚢に終わり、下部が気管と瘻で繋がるという異常が考えられる。',
          commentary:
            '正常な胎児は子宮内で羊水をある程度飲み込んでいるが、食道が閉鎖していると飲み込めず羊水過多症を合併する。食道が気管とだけ繋がっている場合は羊水が気管に入り肺炎を引き起こす場合がある。',
        },
        {
          answerImg: [TEF],
          answer:
            '2.心臓の異常を伴うことが多い。4.食道下部が気管と瘻をなす事が多い。',
          commentary:
            'VACTERL連合:Vertebral anomaly + Anal atresia + Cardiac defect + Tracheoesophageal fistula + Esophageal atresia + Renal anomaly + Limb defect',
        },
        {
          answerImg: [diaphragm],
          answer: 'D.横中隔',
          commentary: '横中隔が横隔膜の腱中心を形成する。',
        },
        {
          answerImg: [pleuropericardialFold],
          answer:
            '横隔神経は初めは発育中の胸心膜ヒダ内を通って中隔に入っている。最終的に胸心膜ヒダは線維性心膜の一部となるため、横隔神経は心膜の中を通るようになる。',
          commentary:
            '横隔神経は線維性心膜（外側の心膜）の体性感覚も支配している。',
        },
        {
          answerImg: [pericardioperitonealCanal],
          answer:
            '3.胸腹膜の形成不全　腹膜腔と胸膜腔は体の後壁に沿い互いに連続している（胸腹膜管が閉鎖していない）異常で、腹部内臓が胸腔内に侵入してくる。',
          commentary:
            '正常児では胸腹膜管は左右からの胸腹膜ヒダによって完全に閉鎖され、横隔膜が形成されるが、これが形成不全だと陰圧である胸腔内に腹部臓器が侵入してくる。',
        },
        {
          answerImg: [pleuropericardialFold, diaphragm],
          answer:
            '胸腔)断面中央の左右1対の空間。　気管支)断面中央の肺芽のなかにみられる複数の管。　食道)胸腔正中にみられる1本の管。　食道間膜)食道などと胸腔後壁とをつなぐ腸間膜。　下大静脈)肝臓から心臓にむかって合流していく血管。　大動脈)胸腔背側正中に見られる一本の管。　',
          commentary:
            '下大静脈は（心臓）→右卵黄嚢静脈由来部分→主下静脈部分→主上静脈部分→後主静脈部分の4部分で最終的に形成される。このうち右卵黄嚢静脈部分は肝臓シヌソイドも形成するので、ここから心臓にかけて合流していく管が右卵黄嚢静脈由来の下大静脈と推定される。大動脈より背側で神経管の前方に小さな脊索が見られることがあるので注意。',
        },
        {
          answerImg: [pleuropericardialFold, pericardioperitonealCanal],
          answer:
            '胸心膜ヒダ)下大静脈の上で左右から気管に向けて胸腔と心膜腔を分割している左右一対のヒダ。　心腹膜管)胸腔背側の左右一対の管。　気管支芽)胸腔中央の左右一対の管（壁が厚い）。　食道)胸腔中央の1本の管。',
          commentary:
            'その背側（断面上側）に左右一対の背側大動脈や神経管・体節構造がみえる',
        },
        {
          answer:
            '医療技術の進歩により早産児の生存率は世界トップクラスに向上したが、後遺症に苦しむケースは依然として多いということ。',
          commentary:
            '新生児医療が目標とするインタクトサバイバル、これは「後遺症なき生存」のことをいいます。 ',
        },
        {
          answerImg: [lungGrowing],
          answer:
            'このころに気管末端の立方細胞が薄くなり、毛細血管などと密に隣接した原始肺胞（終末嚢）が形成されるから',
          commentary:
            '臨床でいう妊娠齢は、最終月経の第1日目から起算した満週数・満日数であり、妊娠26週は発生25週と同義。このころに肺胞が形成され呼吸が可能にはなるが、サーファクタントが分泌される28週までは虚脱が起こり治療が必要。参考：呼吸窮迫症候群RDS',
        },
        {
          answerImg: [lungGrowing],
          answer:
            'サーファクタントが不十分な量しかないと、空気-溶液（血液）境界面の表面膜張力が高くなり、呼息中に肺胞の一部が虚脱するリスクが高い。これが原因で肺胞が部分的に虚脱するのが呼吸窮迫症候群Respiratory distress syndrome:RDSである。',
          commentary:
            'Ⅱ型肺胞上皮細胞から分泌されるサーファクタントは表面張力によって大小異なる肺胞の内圧差を減らす働きがあり、吸気時に肺が広がりやすくなる。',
        },
        {
          answerImg: [lungGrowing],
          answer:
            '管状期（16~26週）に、終細気管支から2本以上の呼吸細気管支に分かれ、次に呼吸細気管支から3～6の肺胞管に分かれる。終末嚢期（26週～出生）に原始肺胞が形成され、毛細血管が密接、肺胞期（生後8か月～小児期）に肺胞が成熟し、肺胞上皮と毛細血管内皮との接触が発達。',
        },
        {
          answerImg: [diaphragm],
          answer: 'D.横中隔',
        },
        {
          answer: '妊娠34週以降',
          commentary:
            '妊娠26週前後から肺胞が形成され始め、28週ごろから肺サーファクタント分泌が始まる。',
        },
        {
          answer:
            '肺を正常に機能させるためには肺胞内の表面張力を下げる必要があるが、妊娠7か月未満で生まれた児はサーファクタントを十分に産生できないから。',
          commentary: '妊娠6か月=約180日=約25～26週',
        },
      ],
    },
    {
      groupTag: '確認問題21 生殖器系',
      groupContents: [
        {
          answerImg: [testisHormone, LHFSH],
          answer:
            'A.卵胞膜黄体細胞→テストステロン、B.顆粒層細胞→エストロン、C.セルトリ細胞→AMH',
          commentary:
            'AMH:アンチミュラー管ホルモン。男性のセルトリ細胞や、女性の前胞状卵胞の顆粒膜細胞から分泌されるホルモン。他、GnRH(性腺刺激ホルモン/視床下部)→FSH(卵胞刺激ホルモン/下垂体前葉),LH(黄体ホルモン/下垂体前葉)、顆粒層細胞（卵胞や黄体）→エストロン・エストラジオール、内卵胞膜（莢膜/黄体）エストロゲン・アンドロステンジオン。エストロゲンはエストロン・エストラジオール・エストリオールなどの総称。',
        },
        {
          answer: '1-a,2-b,4-c',
          commentary: '前問題(1)参考',
        },
        {
          answerImg: [SexRelatedSignals],
          answer: 'A.SF1、E.SRY',
          commentary:
            'SF1:Steroid-genesis factor 1、セルトリ細胞とライディッヒ細胞の分化を誘導し、ライディッヒ細胞のテストステロン産生を促進する。SRY:Sex-determining region Y/Y染色体性決定領域遺伝子で、精巣発達を司り、その産物は転写因子。常染色体上の転写調節因子SOX9と協調してSF1の発現をアップレギュレートする。SF1とSOX9が共同してAMHの濃度をあげ、ミュラー管を退縮させる。逆にWNT4は卵巣決定遺伝子',
        },
        {
          answer: 'B.SF1、C.SOX9、D.SRY',
          commentary:
            'SF1:Steroid-genesis factor 1、セルトリ細胞とライディッヒ細胞の分化を誘導し、ライディッヒ細胞のテストステロン産生を促進する。SRY:Sex-determining region Y/Y染色体性決定領域遺伝子で、精巣発達を司り、その産物は転写因子。常染色体上の転写調節因子SOX9と協調してSF1の発現をアップレギュレートする。SF1とSOX9が共同してAMHの濃度をあげ、ミュラー管を退縮させる。逆にWNT4は卵巣決定遺伝子',
        },
        {
          answerImg: [reproductiveRidge],
          answer: 'E.8週',
          commentary:
            '胚子の遺伝子的性は受精時に決定されるが、発生第7週までは生殖腺には男性または女性の形態的特徴が現れない。始原生殖細胞が第3週までに卵黄嚢壁に出現し、第5週初めに原始生殖腺に達し、第6週に生殖堤に進入し、その後生殖腺を卵巣または精巣に発達させる誘導的影響を及ぼす。',
        },
        {
          answerImg: [testis],
          answer:
            'a.中腎細管→精巣輸出管、b.中腎管（ウォルフ管）→精管・精嚢・精巣上体、c.生殖堤間葉→ライディッヒ細胞、d.髄質索→セルトリ細胞・精細管・精巣網、e.内胚葉→前立腺',
        },
        {
          answerImg: [ovary],
          answer:
            '卵巣皮質索→1.一次卵胞、中腎傍管（ミュラー管）→2.子宮体・3.卵管、中腎細管（中腎管？）→4.卵巣上体、中腎管→5.ガルトナー管嚢腫、中腎傍管・内胚葉→6.膣',
          commentary:
            'ガルトナー管嚢腫は膣室嚢胞の約一割を占め、発生段階における中腎管=ウォルフ管の遺残から発生する。多くは小さく無症状であるが増大し症状を有することもある。膣は膣円盤を含む上部が中腎傍管由来、下部が尿生殖洞由来',
        },
        {
          answerImg: [MullerianDuct],
          answer: 'B',
        },
        {
          answer: '背側',
          commentary: '右の卵巣が右側に（子宮円索は腹側を通るから）',
        },
        {
          answerImg: [sexDifferentiation],
          answer:
            '1.AMH→中腎傍管の退縮、2.エストロゲン→卵管の分化、3.ジヒドロテストステロン→男性外生殖器の分化、4.テストステロン→精管の分化',
        },
        {
          answerImg: [testisMovement],
          answer: 'B.12週',
          commentary:
            '精巣下降。正常では、精巣は12週に鼡径部に来て、28週までに鼡径管を通過し、33週までに陰嚢に到達する。卵巣も同様に導管に導かれて下降するが、導管の一部が子宮上部に付着するため、子宮円索と固有卵巣索に分かれる。',
        },
        {
          answerImg: [testisMovement],
          answer: 'F.32週',
          commentary:
            '精巣下降。正常では、精巣は12週に鼡径部に来て、28週までに鼡径管を通過し、33週までに陰嚢に到達する。卵巣も同様に導管に導かれて下降するが、導管の一部が子宮上部に付着するため、子宮円索と固有卵巣索に分かれる。',
        },
        {
          answerImg: [testisMovement],
          answer: 'B.壁側中胚葉',
          commentary: '矢印は精巣鞘膜で、壁側中胚葉（体壁）由来。',
        },
        {
          answerImg: [externalGenitalia],
          answer: '陰嚢-大陰唇、陰茎-小陰唇、亀頭-陰核',
        },
        {
          answerImg: [reproductiveRidge, testis, MullerianDuct],
          answer:
            '4.始原生殖細胞の性染色体がXX,生殖巣体細胞がXYであれば、卵形成が起きる',
          commentary:
            '始原生殖細胞は胎生第3週の終わりに卵黄嚢後壁に出現し、生殖腺の原基は肺内体腔に面した中間中胚葉から発生する。生殖堤で産生される因子に導かれて、始原生殖細胞は第6週には生殖堤に到達し、増殖を開始する。発生第7週までは男女の形態的特徴が現れないが、精巣は第8週以降ミュラー管抑制物質やテストステロン産生などを通して生殖管や外生殖器を男性型に誘導する。逆にこれらが無ければ生殖管・外生殖器は女性型になる。生殖巣体細胞とはセルトリ細胞もしくは顆粒層細胞などのこと（セルトリ細胞はミュラー管抑制因子を産生し中腎傍管を抑制する）。',
        },
        {
          answerImg: [testisGrowing],
          answer: '4.精巣傍体',
          commentary:
            '精巣輸出管は中腎細管由来、精管は中腎管由来、精原細胞は始原生殖細胞由来',
        },
        {
          answerImg: [ovary],
          answer: '3.子宮頸',
        },
        {
          answerImg: [trigonOfBladder],
          answer: '3.射精管',
          commentary: '上が尿管。正中臍索が尿膜管由来。',
        },
        {
          answerImg: [sexDifferentiation],
          answer:
            '1.AMHはセルトリ細胞から分泌される。3.AMHは卵胞から分泌される。4.テストステロンは中腎管に男性生殖管への発生を促す。',
          commentary:
            'テストステロンを産生するのは間質のライディッヒ細胞。AMH（抗ミュラー管ホルモン）は女性の前胞状卵胞の顆粒膜細胞から分泌されるホルモンからも分泌され、卵巣予備能の診断に利用されている。',
        },
        {
          answerImg: [uterusLigament],
          answer: '1.上縁には卵管が通る。2.ダグラス窩の腹側の壁をなす',
          commentary:
            'ダグラス窩＝直腸子宮窩。左右中腎傍管の癒合の拡大に伴って、中腎傍管が後側体壁から離れると、腹膜ヒダを引っ張って子宮広間膜を形成する。',
        },
        {
          answerImg: [testisHormone, LHFSH],
          answer: '2.顆粒層細胞',
          commentary:
            'セルトリ細胞は生殖巣体細胞とよばれ、女性では顆粒層細胞が該当する。',
        },
        {
          answerImg: [testisHormone, LHFSH],
          answer: '3.卵胞膜細胞',
          commentary:
            'ライディッヒ細胞は、生殖堤のもとの間葉に由来し、8週までにテストステロン産生を開始する。中腎管は男性では精管・精嚢・前立腺などへと発達し、女性ではガルトナー管として残る。LHに反応しテストステロンを産生する細胞は、女性では卵胞膜細胞（莢膜細胞）が該当する。',
        },
        {
          answer: '4.ミュラー管の癒合不全',
          commentary: '子宮体は中腎傍管ミュラー管由来',
        },
        {
          answerImg: [testisMovement],
          answer: '鞘状突起が閉鎖せず、腸ループが陰嚢内に下降するのが原因。',
        },
      ],
    },
    {
      groupTag: '確認問題22 泌尿器系',
      groupContents: [
        {
          answerImg: [after21daysKidney],
          answer: '中間中胚葉の部分（神経管の両側の沿軸中胚葉の外側）',
          commentary: '中間中胚葉→中腎管（ウォルフ管）→尿管',
        },
        {
          answerImg: [urinaryBladder],
          answer: '内胚葉の部分',
          commentary: '内胚葉→排泄腔→尿生殖洞→膀胱・尿道',
        },
        {
          answerImg: [testis],
          answer: '横方向の管部分',
          commentary:
            '横方向の管は中腎（→精巣）と中腎管（→精管）をつなぐ中腎細管（→精巣輸出管）、縦方向の管は中腎（→精巣）と尿生殖洞（→膀胱）をつなぐ中腎管（→精管）',
        },
        {
          answerImg: [midKidney],
          answer:
            '1)断面左右中央の濃い胞状の部分　2)断面左右やや上方の真横に走っている管部分　3)断面左右で中腎細管から続いている小さめの丸い円部分　4)断面左右やや下方で下方向へ膨らんでいるやや濃い部分',
          commentary:
            '中央のつぶれた管がaortaで（内部に赤血球が詰まっている）、そこから左右前方（下方）に細静脈が伸び、胞状の糸球体を形成する。糸球体のあたりからさらに左右に伸びているのが中腎細管→中腎管（輪切りに切れている）。糸球体の背側（上側に見えているのが後主静脈postcardinal.vで、これらの周りを中腎堤の空間が囲んでいる。断面最も腹側に見えているのが腸管と上腸間膜動脈sup.mesenteric a.である',
        },
        {
          answer:
            '1)断面左右にC字型に濃く染まっているのが腎臓、2)その下方（腹側）で全体が濃染している卵型の部分が精巣',
          commentary:
            '精巣が下行し始めている。胎児の肝臓は大きいためこの断面でも腹側右側に大きく映っている。',
        },
        {
          answerImg: [glomerulus],
          answer: 'A.糸球体、B.ボーマン嚢、C.集合管（尿管）',
          commentary:
            '後腎組織に尿管が進入し、糸球体とそれを覆うボーマン嚢が形成されている。ボーマン嚢は後腎間葉組織（帽状の後腎芽組織）由来、集合管は尿管由来。',
        },
        {
          answerImg: [kidneyArtery],
          answer:
            '1)腎臓中央で横に切れている太い管が腎盂で、2)そこから枝分かれして腎皮質付近にまで放射状に伸びているのが腎杯、3)腎小体はC字型に分布する腎皮質で多数断面が見える。4)精巣は腎臓の下方（前方）で卵型に切れている。内部の精細管が所々見える。',
          commentary:
            '断面左右上方のC字型に濃染している部分が腎臓で、その間の管が大動脈と下大静脈、画面下方の絨毛が豊富な管が十二指腸・空腸で、その下方右側で斜めに切れているのが結腸である。',
        },
        {
          answer: 'A.ARPKDは小児期に腎不全が起きる点で異なる。',
          commentary:
            'ADPKDのDはDominant。劣性ARPKDは集合管から嚢胞が生じる。優性遺伝病ADPKDは自然淘汰圧を受けるため成人後に発症する。',
        },
        {
          answerImg: [kidneyArtery],
          answer: 'C',
          commentary:
            '骨盤腎とは腎臓の上昇中に、左右の臍動脈や下腸間膜動脈の通過に失敗したもので、腎臓が総腸骨動脈知覚の骨盤内にとどまる。腎臓は上行中に近くの動脈を乗り換えながら供給を受けるので、骨盤近くの動脈が答えとなる。',
        },
        {
          answerImg: [trigonOfBladder],
          answer: 'B',
          commentary:
            '膀胱三角の上皮は中腎管や尿管の上皮の出口が拡がってできたものなので、中腎管由来（尿管も中腎管由来）。ただし、後に尿管同様内胚葉性上皮に置き換わる。',
        },
        {
          answerImg: [after3weeksVertical, urachalFistula],
          answer: 'D',
          commentary:
            'Aは口咽頭膜、Bは卵黄嚢と腸管の連続部分となるが、尿膜管瘦ではない。尿膜管はこの後卵黄嚢の縮小（胚の成長）とともに体腹部へ上行していき、最終的に臍帯に位置したのち閉鎖して正中臍索となって役割を終える。閉鎖し損なうと尿膜管瘻となる。',
        },
        {
          answerImg: [glomerulus],
          answer: '2.尿管',
          commentary:
            '尿管～集合管～集合細管までが尿管由来、S状細管～ボーマン嚢が後腎芽組織由来',
        },
        {
          answerImg: [after21daysKidney],
          answer: '9.中間中胚葉',
          commentary:
            '中間中胚葉→中腎（→生殖器）・後腎（上行して腎臓へ）ほか副腎皮質など。',
        },
        {
          answerImg: [growingKidney, after5weeksKidney],
          answer: '3.後腎、4.ウォルフ管',
          commentary:
            '後腎→ボーマン嚢・尿細管、（中間中胚葉→）ウォルフ管（中腎管）→尿管→集合管・集合細管の２つの由来がある。その他、副腎髄質は神経堤由来、生殖器は中腎由来。',
        },
        {
          answerImg: [midKidney, mesonephricTubule],
          answer: '3.尿生殖堤の構成要素である、4.尿管の由来である',
          commentary:
            '永久腎は後腎由来。最終的な集合管は中腎管（ウォルフ管）由来である。尿生殖堤かは不明だが、生殖堤・生殖器は中腎と関係がある。尿生殖洞（→膀胱）は内胚葉由来。尿管は中腎管からの分岐であるが、最終的には膀胱三角の形成とともに中腎（→精管）とは別で膀胱・尿道に接続するようになる。',
        },
        {
          answer: 'ARPKD、Kartagener症候群',
          commentary:
            'WAGR症候群）ウィルムス腫瘍 Wilms	tumor、無虹彩症 aniridia、⽣殖芽腫瘍gonadoblastoma、知的障害 mental	retardationの合併で線毛病ではない。Kartagener症候群は内臓逆位・慢性副鼻腔炎・不妊症などを併発する線毛病。馬蹄腎は下腸間膜動脈や臍動脈などの通過失敗による腎臓の位置の異常で、線毛病ではない。停留精巣は精巣の下行不全であるが、線毛の異常ではない。',
        },
        {
          answerImg: [urinaryBladder],
          answer:
            'A.直腸と尿管の分割不全による直腸尿道瘻、B.直腸と尿生殖洞の分割不全による直腸膀胱瘻、C.肛門の狭窄による肛門閉鎖。',
          commentary:
            '卵黄嚢～尿膜管まで一本道だった腸管は排泄腔膜のところで外部へ開口する肛門を形成し、肛門直腸管と尿生殖洞（→膀胱）からの尿管は最終的に完全に独立してそれぞれが会陰に開口するようになる。尿膜管はどれも正常に閉鎖しているので尿膜管瘻は該当なし。Aは直腸から尿道への直腸瘻（直腸と尿管の分割不全）なので、直腸尿道瘻。Bは直腸から膀胱への直腸瘻（直腸と尿生殖洞の分離不全）なので、直腸膀胱瘻。Cは肛門が十分に開口されていないので、肛門閉鎖（肛門狭窄）。A,Bの高さで狭窄が生じた場合は、直腸狭窄となる（これらの高さでは肛門自体が形成されていない）。',
        },
        {
          answerImg: [kidneyArtery],
          answer: '3.下腸間膜動脈',
          commentary:
            '永久腎は後腎由来で、後腎が向きを90度変えながら動脈を変えながら腹腔を上行して最終的な位置にたどり着く。この間に腎臓が左右の臍動脈や下腸間膜動脈の通過に失敗すると骨盤腎を発症する。ちなみに、成人で左腎静脈をせき止めて血尿を生じさせる（ナッツクラッカー現象）動脈は上腸間膜動脈。',
        },
      ],
    },
    {
      groupTag: '確認問題23 頭頚部',
      groupContents: [
        {
          answerImg: [pharyngealArch],
          answer: '4.鼓室',
          commentary: '耳管～鼓室までは内胚葉由来',
        },
        {
          answerImg: [pharyngealPouch],
          answer: '5.外耳道　10.頚洞',
          commentary:
            '咽頭溝は外胚葉由来。耳の構造は複雑で、鼓膜までの外耳道は第一咽頭溝由来。最終的な構造に関与するのは第一咽頭溝のみで、第二～第四咽頭溝は頚洞などを形成するが最終的には消失する。',
        },
        {
          answerImg: [pharyngealPouch],
          answer: '8.口蓋扁桃',
        },
        {
          answerImg: [thymus],
          answer: '2.胸腺　7.下上皮小体',
          commentary:
            '胸腺は最終的に第四咽頭嚢由来の上上皮小体よりさらに尾側に移動し胸腺や下上皮小体を形成する。',
        },
        {
          answerImg: [thymus],
          answer: '6.上上皮小体　9.鰓後体',
        },
        {
          answerImg: [tongue],
          answer: '準備中',
          commentary: '舌盲孔、すなわち甲状腺原基の起始部に注意',
        },
        {
          answerImg: [pharyngealNerves, pharyngealTable],
          answer: '表参照',
          commentary:
            '支配筋肉は位置関係より支配神経に依存している。つまり、各咽頭弓は形を変え位置を入れ替えながら複雑に混ざり頭頚部を構成する。',
        },
        {
          answer:
            '第一咽頭弓→G、第一咽頭嚢→I、第一咽頭溝→F、第一大動脈弓→H、背側大動脈→B',
          commentary: '咽頭嚢は内胚葉由来、咽頭溝は外胚葉由来',
        },
        {
          answerImg: [pharyngealPouch],
          answer: '第二咽頭弓→E、第二咽頭嚢→J、第二大動脈弓→D、背側大動脈→B',
          commentary:
            '第二咽頭弓は第一咽頭弓より背側→断面上側で根元で切れている。第二咽頭嚢は第2・第3咽頭弓の境界に存在しているので、さらにやや断面上側。',
        },
        {
          answerImg: [pharyngealArch],
          answer: '第一咽頭弓→G、第二咽頭弓→F、第三咽頭弓→E、第四咽頭弓→D',
          commentary:
            'この断面は前後がそのまま背腹を表しているのでわかりやすい',
        },
        {
          answerImg: [tongue],
          answer: '（外側）舌隆起→E、甲状腺原基→G',
          commentary:
            '舌隆起は第一咽頭弓腹側部に形成される。甲状腺原基は舌盲孔（第1咽頭弓と第2咽頭弓の間）の高さで発生し、第一気管軟骨の高さまで下降する。Eが外側舌隆起、Fが舌結節と対応する',
        },
        {
          answerImg: [pharyngealNerves],
          answer: 'Ⅴ三叉神経、Ⅶ顔面神経、Ⅸ舌咽神経、Ⅹ迷走神経',
        },
        {
          answerImg: [face],
          answer:
            '顔面隆起は神経堤由来の間葉からなり、主として第一咽頭弓由来。口窩を第一咽頭弓が囲み、口窩の尾側で上顎隆起、側方で下顎隆起が起こり、上顎隆起・下顎隆起が形成される。',
        },
        {
          answerImg: [face],
          answer: '口窩→G、上顎隆起→F、下顎隆起→E',
        },
        {
          answerImg: [meckelCartilage],
          answer:
            '第一咽頭弓は、眼の下方を前方に伸びる上顎隆起とメッケル軟骨を含む下顎突起からなる。その後の発達中にメッケル軟骨は背側部の２つの小部分を除いて退化消失するが、残存した２つはキヌタ骨とツチ骨を形成する。また、上顎突起の間葉は、顎前骨、上顎骨、頬骨、および側頭骨の一部を膜性骨化により生じる。下顎骨もメッケル軟骨を取り巻く間葉組織の膜性骨化により形成される。',
        },
        {
          answerImg: [meckelCartilage],
          answer:
            'ライヘルト軟骨はアブミ骨・側頭骨の茎状突起・茎突舌骨靭帯・舌骨小角・舌骨体の上部を形成する。',
          commentary:
            '第一咽頭弓軟骨はメッケル軟骨と呼ばれるのに対して、第二咽頭弓軟骨はライヘルト軟骨と呼ばれ、アブミ骨・茎状突起・茎突舌骨靭帯・舌骨小角になる。',
        },
        {
          answerImg: [meckelCartilage],
          answer: '甲状軟骨・輪状軟骨・披裂軟骨・小角軟骨・楔状軟骨',
          commentary:
            '第4および第6咽頭弓の軟骨要素は癒合して咽頭の甲状軟骨・輪状軟骨・披裂軟骨・小角軟骨・楔状軟骨を形成する。',
        },
        {
          answer: '3.甲状腺',
          answerImg: [thymus],
          commentary:
            '甲状腺原基は第1・第2境界の咽頭弓腹側の舌盲孔の高さで発生し、第一気管軟骨の高さまで下降して形成される。副甲状腺（上皮小体）は第3～第4咽頭嚢由来',
        },
        {
          answerImg: [thyroid, after49days, tongue],
          answer: 'D',
          commentary:
            '甲状舌管thyroglossal ductは甲状腺と舌盲孔をつなぐ内胚葉由来の構造。甲状腺が下行する間存在し、その後消失する。断面中央に口腔が見え、その中に舌構造が見える。舌盲孔は外側舌隆起+舌結節と、結合節の間に見られる孔。',
        },
        {
          answerImg: [meckelCartilage, thymus],
          answer: '3.甲状腺',
          commentary:
            '舌骨下部は第三咽頭弓から派生する。甲状腺は第一咽頭嚢～第二咽頭嚢腹側正中部の舌盲孔から発生し、甲状舌管を伴いながら本来の第一気管軟骨の高さまで下降する。このときに甲状舌管や甲状腺の一部が残り、甲状舌管嚢胞や異所性甲状腺組織と呼ばれる。胸腺・上皮小体・鰓後体も移動中に組織が残存する事があるが、正中ではない。',
        },
        {
          answerImg: [branchialFistula],
          answer: 'B.頚洞',
          commentary:
            '咽頭溝は本来第一咽頭溝のみが最終的な構造に寄与し（→外耳道）、他は頚洞などを形成しながらやがて消失するが、第二咽頭弓が第三・第四咽頭弓を超えて尾側に伸長し損なうと、第二・第三・第四咽頭溝の遺残物が細い管で体表と連絡したままになってしまう：鰓瘻branchial fistula。このような瘦管は胸鎖乳突筋の前で頚の側面で見いだされ、通常は側頚嚢胞の排液路となる。',
        },
        {
          answerImg: [pharyngealNerves],
          answer: 'C,E,K',
          commentary:
            '第一咽頭弓→三叉神経、第二咽頭弓→顔面神経、第三咽頭弓→舌咽神経、第四咽頭弓→迷走神経',
        },
        {
          answerImg: [pharyngealPouch],
          answer:
            '第一咽頭嚢→c,d　第二咽頭嚢→g　第三咽頭嚢→i(f)　第四咽頭嚢→(f),h',
          commentary: '上上皮小体は第四咽頭嚢、下上皮小体は第三咽頭嚢由来。',
        },
        {
          answerImg: [meckelCartilage],
          answer:
            '第一咽頭弓→A,C,D,G,H　第二咽頭弓→B　第三咽頭弓→E　第四咽頭弓→F',
        },
        {
          answerImg: [face],
          answer: '上顎隆起→E、内側鼻隆起→D、外側鼻隆起→G、鼻涙溝→B',
        },
        {
          answerImg: [facialCleft],
          answer:
            'A.4～6週、B.4～6週（上顎隆起と内側鼻隆起が癒合不全によって起こる異常のため）、C.7～10週（口蓋突起の癒合不全によって起こるため）',
          commentary: '口唇・口蓋ともに7～10週の間に作られる。',
        },
        {
          answerImg: [facialCleft],
          answer: 'A→2、B→2、C→5',
        },
      ],
    },
    {
      groupTag: '確認問題24 中枢神経系',
      groupContents: [
        {
          answerImg: [brainVesicle],
          answer: 'A.終脳',
          commentary:
            '前脳→終脳（→大脳半球）・間脳（→視床下部・眼杯・下垂体・視床・松果体など）',
        },
        {
          answerImg: [brainVesicle],
          answer: 'C',
          commentary: '菱脳→後脳→小脳（背側）・橋（腹側）',
        },
        {
          answerImg: [brainVesicle],
          answer: 'D',
          commentary:
            'CN-X迷走神経は第四咽頭弓内部に発生し、最終的に延髄中部の孤束核などから外側に出て頚静脈孔を通過する脳神経となる。菱脳→後脳・髄脳（→延髄）',
        },
        {
          answerImg: [brainVesicle5],
          answer:
            '頭屈：中脳胞で、脳神経管の腹側への屈曲。頚屈：髄脳で、脳神経管の腹側への屈曲。橋屈：将来の小脳領域で、背側への屈曲',
          commentary:
            '第5週では5脳胞（終脳・間脳・中脳・後脳・髄脳）に分化している。',
        },
        {
          answerImg: [brainVesicle5],
          answer:
            '二次脳胞の構成要素は、終脳・間脳・中脳・後脳・髄脳である。終脳→大脳半球、間脳→眼胞・視床・視床下部・下垂体、中脳→中脳やその上丘・下丘、後脳→小脳・橋、髄脳→延髄に分化する。',
          commentary:
            '4週末までに一次脳胞（前脳・中脳・菱脳）、5週中には二次脳胞（終脳・間脳・中脳・後脳・髄脳）に分化する。',
        },
        {
          answerImg: [medullaOblongata],
          answer: 'B,C,E,F',
          commentary:
            '基板は脊髄でいう前角で、主に遠心性の神経が存在する。翼板は脊髄でいう後角で、主に求心性の神経が存在する。基板・翼板ともに存在するのは脊髄・髄脳・後脳（橋）・中脳までで、間脳や終脳（上位中枢）は基板や底板を欠く。',
        },
        {
          answerImg: [medullaOblongata, diencephalon],
          answer:
            '髄脳は翼板と基板を持ち明確に区別されるが、間脳は蓋板と肥厚した翼板からなり基板と底板を持たない。',
          commentary:
            '脊髄～中脳に存在する基板は運動ニューロンの細胞体（や運動系脳神経核）に分化するが、上位中枢では直接筋肉へ信号を伝えるニューロンが存在しない。',
        },
        {
          answerImg: [spinalCord],
          answer: '翼板→A、基板→E、後根神経節→C、白質→B',
          commentary:
            '基板は運動ニューロンの細胞体、翼板は感覚ニューロンなどの二次ニューロン、後根神経節は感覚ニューロンなどの一次ニューロンの細胞体、白質はニューロンの有髄軸索（ミエリン）が通過する',
        },
        {
          answerImg: [spinalCord],
          answer: '翼板→G、基板→E、神経上皮→B、後根神経節→F',
          commentary:
            '神経上皮は中心管（髄液）に面する神経管由来の上皮（上衣細胞）。',
        },
        {
          answerImg: [brainVesicle],
          answer: '3.視床　4.海馬',
          commentary:
            '前脳→終脳（大脳半球/海馬などの大脳辺縁系含む）・間脳（視床・視床下部・下垂体・松果体など）',
        },
        {
          answerImg: [brainVesicle5],
          answer: '眼杯・眼茎・下垂体・視床・視床下部・松果体',
          commentary: '水晶体は眼プラコード由来で、網膜や視神経は間脳由来。',
        },
        {
          answerImg: [diencephalon],
          answer: '側脳室→C、第三脳室→A',
          commentary:
            'E.脈絡膜、B.終脳　第三脳室は間脳由来、側脳室は終脳由来。',
        },
        {
          answerImg: [after52days],
          answer: '視床→C、視床下部→B、線条体→D、脈絡叢→E、大脳半球→F',
          commentary:
            'この時期の胚子は腹側へ屈曲しているため、断面下側が頭頂部、断面上側が頭底部の断面。BからFにかけて間脳視床下部hypothalamusから大脳半球へ上下逆さまに切れている断面。',
        },
        {
          answerImg: [after52daysVentricle],
          answer: '海馬→F、モンロー室間孔→D',
          commentary:
            'モンロー孔は側脳室と第三脳室をつなぐ水道interventricular foremen。',
        },
        {
          answerImg: [after56days, centralBrain, basalGanglia],
          answer: '図参照',
          commentary:
            'これも前屈姿勢のため上下反対の断面となっている。淡蒼球globus pallidus+被殻putamenはレンズ核で、被殻+尾状核caudate nucleusは線条体を構成する。内包（成人では錐体路の一部）はレンズ核よりさらに内側の間脳領域であるため、矢印では示されていない（問題作成途中！？）',
        },
        {
          answer:
            '中枢のオリゴデンドロサイトは、神経上皮細胞由来。末梢のシュワン細胞は、神経堤由来である。',
        },
        {
          answer:
            '3.神経堤由来　胎生皮質形成中に神経堤細胞が副腎に侵入して形成される。',
          commentary:
            '交感神経節前線維が直接副腎髄質に進入し、副腎髄質のクロム親和性細胞が実質的な節後線維として、ノルアドレナリンやアドレナリン分泌を行う。皮質は中間中胚葉由来',
        },
        {
          answer:
            '5.中間中胚葉　二次的に中間中胚葉由来の体腔上皮から細胞移動が起こり、胎生皮質を取り囲んで最終的な皮質になる。',
          commentary:
            '中間中胚葉はほかに、中腎（→精巣・卵巣・ウォルフ管・ミュラー管）・後腎（→腎臓）などに分化する。',
        },
        {
          answerImg: [pituitaryGland],
          answer: 'F.ラトケ嚢',
          commentary:
            '下垂体前葉となる。オキシトシン・バソプレシンなどを分泌する下垂体後葉は神経管由来で、視床下部域から直接神経線維が伸びてくる。',
        },
        {
          answerImg: [pituitaryGland],
          answer: 'E.第三脳室',
          commentary: '下垂体・第三脳室はどちらも間脳',
        },
        {
          answerImg: [pituitaryGland],
          answer: '下垂体後葉→C、下垂体前葉→B、ラトケ嚢→A（B）',
          commentary:
            'E.視床下部、D.間脳腔？、C.漏斗、A.ラトケ嚢後壁（→下垂体中間部）、B.ラトケ嚢前壁（ラトケ嚢と下垂体漏斗がまだ隣り合っていない）。ラトケ嚢は下垂体へ伸びた口腔の壁の一部だが、外胚葉由来',
        },
        {
          answerImg: [after56days],
          answer: '側脳室→D、第三脳室→C',
          commentary: '断面下側が頭頂部、断面上側が頭底部',
        },
        {
          answerImg: [after56daysPituitaryGland],
          answer: 'B',
          commentary:
            '脳底動脈:basilar a. トルコ鞍の背:dorsum sellae 下垂体:neurohypophysis',
        },
        {
          answer: 'B.視神経、D.下垂体後葉',
          commentary:
            '12対の脳神経のうち最初の2対（視神経と嗅神経）は厳密な意味では末梢神経ではなく、中枢神経の突起である。',
        },
        {
          answerImg: [brainVesicle],
          answer: 'B.視神経、C.嗅神経、F.動眼神経',
          commentary:
            '菱脳→後脳（橋・小脳）・髄脳（延髄）。Ⅰ嗅神経・Ⅱ視神経は前脳由来、Ⅲ動眼神経は中脳に神経核を持つ。Ⅴ三叉神経以降は橋～延髄。（Ⅳ滑車神経は後脳に出現後、中脳へ移動）',
        },
        {
          answer: 'F.第四脳室',
          commentary:
            '菱脳→後脳（橋・小脳）・髄脳（延髄）。シルヴィウス水道＝中脳水道。側脳室は終脳、第三脳室は間脳、モンロー孔はその間。',
        },
        {
          answer:
            '胎齢が進むにつれて、脊柱と硬膜が神経管より急速に成長し、出生時には脊髄の末端は第3腰椎の高さになる。よってL4~L5なら脊髄を傷つけることなく穿刺を行うことができる。',
        },
        {
          answerImg: [telencephalon],
          answer:
            '大脳半球は成長に伴って、大脳皮質は折れ曲がり、複雑な回と溝を形成する。',
        },
        {
          answerImg: [pharyngealNerves],
          answer: 'C.顔面神経、E.舌咽神経',
          commentary:
            '咽頭弓由来の神経が三叉神経（第一咽頭弓）・顔面神経（第二咽頭弓）・舌咽神経（第三咽頭弓）・迷走神経（第四咽頭弓）であり、このうち神経節が咽頭弓上プラコードに由来するのは顔面神経・舌咽神経・迷走神経',
        },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
