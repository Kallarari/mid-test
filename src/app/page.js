import styles from "./page.module.css";
import Header from "../components/header"
import TestSelector from "../components/testSelector"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TestSelector />
    </main>
  );
}
