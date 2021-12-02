import React from "react";

const Footer = () => {
    
  return (
    <div>
      <div className="footer">
        <div className="contact-info">
          <h5 className="Text-Style-15 ">what happened</h5>
          <p>[공지] 개인 정보 처리 방침 변경 사전 안내 </p>
          <p>[공지] 29CM 강남 스토어 영업 종료 </p>
          <p>[공지] 개인 정보 처리 방침 변경 사전 안내 </p>
          <p>[공지] iOS 10 이하 버전 지원 중단 안내</p>
          <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
        </div>
        <div className="more-info">
          <div className="info">
            <h5 className="Text-Style-15 ">about us</h5>
            <p>회사 소개 </p>
            <p>인재 채용</p>
            <p>상시 할인 혜택</p>
          </div>
          <div className="info">
            <h5 className="Text-Style-15">my order</h5>
            <p>내 주문</p>
            <p>주문 배송</p>
            <p>취소 / 교환 / 반품 내역</p>
            <p>상품 리뷰 내역</p>
            <p>증빙 서류 발급</p>
          </div>

          <div className="info">
            <h5 className="Text-Style-15 ">my account</h5>

            <p>회원 정보 수정</p>
            <p>회원 등급</p>
            <p>마일리지 현황</p>
            <p>쿠폰</p>
          </div>
          <div className="info">
            <h5 className="Text-Style-15 ">help</h5>
            <p>1 : 1 상담 내역</p>
            <p>상품 Q & A 내역</p>
            <p>공지 사항</p>
            <p>자주하는 질문</p>
            <p>고객의 소리</p>
          </div>
        </div>
      </div>
      {/* <br className="break-line" /> */}
      <div className="about-company">
        <span className="address">
          <p className="Text-Style-1">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </p>
        </span>
        <div className="social-media-link">
          <a href="#" className="social-media-icon">
            <img src="/images/snsicon-01.png" alt="" />
          </a>
          <a href="#" className="social-media-icon">
            <img src="/images/snsicon-02.png" alt="" />
          </a>
          <a href="#" className="social-media-icon">
            <img src="/images/snsicon-03.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
