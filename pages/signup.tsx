import type { NextPage } from 'next';
import Link from 'next/link';
import AuthForm from '../components/AuthForm';
import Layout from '../components/Layout';
import SocialLoginButtons from '../components/SocialLoginButtons';
import styles from '../styles/Signup.module.css';

const Signup: NextPage = () => {
  return (
    <Layout title="creddit: 회원가입">
      <div className={styles.container}>
        <h1>회원가입</h1>
        <AuthForm
          type="signup"
          emailInput="이메일"
          nicknameInput="닉네임"
          passwordInput="비밀번호"
          authFormBtn="회원가입"
        />

        <SocialLoginButtons />
        <div className={styles.alreadyJoin}>
          <span>이미 회원이신가요?</span>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
