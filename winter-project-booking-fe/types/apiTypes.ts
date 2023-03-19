/**
 * API 호출 과정에서 발생한 에러 정보 관련 interface
 */
interface ApiErrorFieldData {
  // 에러를 발생시킨 field 요소
  field: string
  // 해당 field에서 발생한 구체적인 에러 원인
  message: string
}

/**
 * API 호출 과정에서 발생한 에러 정보를 담는 interface
 */
export interface ApiError {
  // 백엔드에서 전송한 HTTP Status Code
  code: number
  // 백엔드에서 전송한 에러 메시지
  message: string
  // 백엔드에서 전송한 에러 상세 정보
  data?: {
    errors: ApiErrorFieldData[]
  }
}

/**
 * API 호출 결과 (성공, 실패) 를 나타내는 type
 * @param T 요청 성공 시 인계 받은 데이터 타입
 */
export type ApiResult<T> = Promise<T>
