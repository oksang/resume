import styles from "../styles.module.css";

import Header from "../components/Header";

export default function Resume() {
  return (
    <article className={styles.container}>
      <Header
        name="엄일경"
        summary="스타트업 근무 경험이 있는 3년차 웹개발자. 2년간 SPA와 API 개발을 경험하고 업무 프로세스 개선을 목표로 매니징 업무를 담당했습니다. 지금은 lighthouse를 이용한 최적화와 바람직한 마크업, 스타일링 기법에 관심을 두고 있습니다."
        github="https://github.com/oksang"
        blog="https://oksang.dev"
        mail="aumilkyeong@gmail.com"
        place="경기도 성남시"
        updated="2021.02.25"
      />
      <section>
        <h1>Experience</h1>
        <h2>Marketit</h2>
        <table>
          <tbody>
            <tr>
              <td>기간</td>
              <td>16.10 ~ 20.03</td>
            </tr>
            <tr>
              <td>직무</td>
              <td>웹개발자, 매니저</td>
            </tr>
            <tr>
              <td>프로젝트</td>
              <td>Marketit AD, Marketit API, M.Shop</td>
            </tr>
          </tbody>
        </table>
        <h3>Marketit AD</h3>
        <p>인플루언서 마케팅 광고주 플랫폼</p>
        <ul>
          <li>16.10 ~ 19.09</li>
          <li>angularJS, ES5, Bootstrap을 활용한 UI 개발</li>
        </ul>
        <h3>Marketit API</h3>
        <p>인플루언서 및 광고주 플랫폼, 백오피스에서 사용하는 API</p>
        <ul>
          <li>16.10 ~ 19.09</li>
          <li>
            php를 활용한 서드파티(결제, 배송추적, sms) 서비스 통합 기능, 데이터
            CRUD 기능 개발
          </li>
          <li>mysql 쿼리 최적화 및 인덱싱</li>
        </ul>
        <h3>M.Shop</h3>
        <p>인플루언서 공동구매 서비스</p>
        <ul>
          <li>16.10 ~ 19.09</li>
          <li>vue.js, ES5, Bootstrap을 활용한 UI 개발</li>
        </ul>
      </section>
      <section>
        <h1>Education</h1>
        <h2>Codesoom</h2>
        <p>20.06 ~ 20.09 소프트웨어 개발의 지혜 리액트편</p>
      </section>
    </article>
  );
}
