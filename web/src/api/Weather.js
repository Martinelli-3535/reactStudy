import instance, {SERVICE_KEY} from '../utils/axiosInstance';

export const getUltraSrtNcst =
    async (param = {
        serviceKey: SERVICE_KEY,
        pageNo: 1,
        numOfRows: 1000,
        dataType: 'JSON',
        base_date: new Date().format('yyyyMMdd'),
        base_time: `${new Date().format('HH')}00`,
        nx: 54,
        ny: 123
    }) => {
    const response = await instance.get(
        `/getUltraSrtNcst`,
        {params: param}
    );
    return response.data;
}