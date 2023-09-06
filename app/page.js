import Hero from '../components/Hero'
import styles from '../styles';

const Page = () => (
  <div className={`${styles.xPaddings} relative z-10`}>
    <Hero />
  </div>
);

export default Page;
