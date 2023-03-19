import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios'

import { ApiResult, ApiError } from '../types/apiTypes'
import config from '../config'

export enum HttpStatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  UnprocessableEntity = 422,
  InternalServerError = 500,
}

const API = axios.create({
  baseURL: `${config.BASE_URL}`,
  responseType: 'json',
})

/**
 * API 통신 과정에서 발생한 에러를 클라이언트에 객체로 인계하는 함수
 * @param err API 통신 과정에서 발생한 에러 데이터
 * @returns 클라이언트에게 인계할 에러 객체 (ApiError)
 */
function handleApiError(err: unknown): ApiError {
  // isAxiosError 조건이 true 라면, err는 AxiosError로 타입이 좁혀진다.
  if (isAxiosError(err)) {
    // 요청을 전송하여 서버에서 응답을 받았으나, 에러가 발생한 경우
    if (err.response) {
      // 서버의 Error Response 의 body를 참고하여 데이터 추가.
      const { data: errResponse }: AxiosResponse<ApiError, any> = err.response
      return {
        code: err.response.status,
        message: errResponse.message,
        data: errResponse.data ?? undefined,
      }
    }
    // 요청을 전송하였으나 서버에서 응답을 받지 못한 경우
    if (err.request) {
      return {
        code: -1,
        message: '서버와의 통신 과정에서 문제가 발생했습니다.',
      }
    }
  }
  // axios 오류가 아닌 다른 케이스의 오류일 경우
  return {
    code: 0,
    message: '원인 미상의 오류가 발생했습니다.',
  }
}

export async function getAsync<T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResult<T> {
  const response = await API.get<T, AxiosResponse<T, any>, any>(url, {
    ...config,
  })
  return response.data
}
