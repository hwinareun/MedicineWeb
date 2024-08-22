export const LoginNavigation = () => {
  return (
    <div className="flex w-full justify-between mt-2 text-xs">
      <a className="underline" href="/join">
        회원가입
      </a>
      <a className="underline" href="/findUser">
        아이디 / 비밀번호 찾기
      </a>
    </div>
  );
};
