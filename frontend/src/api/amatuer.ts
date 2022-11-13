import client from './client';
import { AmatuerResultParams } from '../models/amatuer';

const dummyData = {
  store: {
    // 2021 년 최신분기 기준
    total: 47, // 해당 동 전체 점포 수 (2021.4분기)
    yearAgo: 42, // 해당 동 전년 전체 점포 수 (2020.4분기)
    gender: [
      // 해당 동 업종별 고객 성비(2021.4분기)
      57, // 남자
      43, // 여자
    ],
    age: [
      // 해당동 업종 대분류별 고객 연령대 비율(2021.4분기)
      1, // 10대
      24, // 20대
      23, // 30대
      18, // 40대
      19, // 50대
      16, // 60대 이상
    ],
  },
  sales: {
    // 2021년 연평균 (단위 : 분기)
    total: [
      // 5년 총매출 추이
      18706825, // 2017년
      18393326, // 2018년
      14410432, // 2019년
      11743280, // 2020년
      14000116, // 2021년
    ],
    top3: [
      '배화여자대학교(박노수미술관)', // top1
      '청운초등학교', // top2
      '경복고등학교', // top3
    ],
    week: [
      535705, // 월
      563983, // 화
      617026, // 수
      608880, // 목
      722370, // 금
      869560, // 토
      679142, // 일
    ],
    time: [
      18239, // 0~6시
      93058, // 6~11
      1018094, // 11~14
      698523, // 14~17
      2241656, // 17~21
      527096, // 21~24
    ],
    age: [14538, 383139, 630181, 895999, 1286732, 1088011],
    gender: [2669374, 1629225],
  },
  living: {
    // 동 기준
    total: [1736007, 3436014, 5142628, 6868115, 8505299],
    top3: ['배화여자대학교(박노수미술관)', '통인시장', '경복고등학교'],
    week: [924623, 292816, 220651, 247934, 298658, 235941, 341186],
    time: [344769, 201591, 189862, 250711, 204535, 712561],
    age: [234241, 237947, 233714, 231936, 232462, 445716],
    gender: [235119, 231769],
  },
  resident: {
    // 동기준
    total: [8561, 16897, 25173, 33267, 41172],
    age: [1210, 1002, 1078, 1402, 1279, 1934],
    gender: [3593, 4312],
    house: 284886724,
  },
  hinterland: {
    living: 6663034,
    work: 21392,
    resident: 23107,
    age: [3685, 2958, 3090, 4012, 3733, 5629],
    gender: [10702, 12405],
  },
  open: {
    // 8분기
    open: [
      // 개업한 점포수
      0, // 2020년 1분기
      0, // 2020년 2분기
      2, // 2020년 3분기
      1, // 2020년 4분기
      4, // 2021년 1분기
      2, // 2021년 2분기
      3, // 2021년 3분기
      3, // 2021년 4분기
    ],
    rate: [
      // 개업율
      0.0, 0.0, 4.7619, 2.381, 8.8889, 4.5455, 6.5217, 6.383,
    ],
  },
  close: {
    close: [4, 0, 0, 1, 1, 2, 1, 2],
    rate: [10.0, 0.0, 0.0, 2.381, 2.2222, 4.5455, 2.1739, 4.2553],
  },
  income: 20552935,
  consumption: {
    total: 3932928724,
    grocery: 980733151,
    clothing: 472542051,
    house: 284886724,
    medical: 492501657,
    traffic: 660176023,
    leisure: 149896022,
    culture: 114446654,
    education: 616267394,
    pleasure: 161479048,
  },
  risk: 1,
  riskRate: 60.16782685,
};

export const getAmatuerResult = async (params: AmatuerResultParams) =>
  dummyData;