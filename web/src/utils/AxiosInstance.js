import axios from 'axios';

export const BASE_URL = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
export const SERVICE_KEY = '5L168Camcfj7JovVD2U24TKZ8u73YzjCC37AiFFDhHd7ufpbK6/sxaCevNAP0Xv9JeKD1K4UEiDgpO0elvmxvQ==';

export default axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});