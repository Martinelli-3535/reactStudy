import instance, { SERVICE_KEY } from '../utils/AxiosInstance';

export const getUltraSrtNcst = async (
  param = {
    serviceKey: SERVICE_KEY,
    pageNo: 1,
    numOfRows: 1000,
    dataType: 'JSON',
    base_date: new Date().format('yyyyMMdd'),
    //base_time: `${new Date().format("HH")}08`,
    base_time: `1100`,
    nx: 54,
    ny: 123,
  },
) => {
  const response = await instance.get(`/getUltraSrtNcst`, { params: param });
  return response.data;
};

export const getVilageFcst = async (
  param = {
    serviceKey: SERVICE_KEY,
    pageNo: 1,
    numOfRows: 1000,
    dataType: 'JSON',
    base_date: new Date().format('yyyyMMdd'),
    //base_time: `${new Date().format("HH")}00`,
    base_time: `0500`,
    nx: 54,
    ny: 123,
  },
) => {
  const response = await instance.get(`/getVilageFcst`, { params: param });
  return response.data;
};
