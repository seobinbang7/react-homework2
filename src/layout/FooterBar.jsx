import { useState } from "react";

function FooterBar() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="p-5 grid place-content-center bg-slate-200">
      <small className="text-base text-slate-700">
        새벽의 빛
      </small>
    </footer>
  );
}

export default FooterBar;
