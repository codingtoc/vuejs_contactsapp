// axios를 이용해 접근할 URL을 미리 상수로 정의함
var BASE_URL = "http://sample.bmaster.kro.kr";

export default {
  // 한 페이지에 보여줄 페이지 사이즈
  PAGESIZE: 5,

  // 자세한 API의 도움말은 http://sample.bmaster.kro.kr 참조
  // 전체 연락처 데이터 요청(페이지 포함)
  FETCH: BASE_URL + "/contacts",
  // 연락처 추가
  ADD: BASE_URL + "/contacts",
  // 연락처 업데이트
  UPDATE: BASE_URL + "/contacts/${no}",
  // 연락처 한건 조회
  FETCH_ONE: BASE_URL + "/contacts/${no}",
  // 연락처 삭제
  DELETE: BASE_URL + "/contacts/${no}",
  // 연락처 사진 업로드->변경
  UPDATE_PHOTO: BASE_URL + "/contacts/${no}/photo"
};
