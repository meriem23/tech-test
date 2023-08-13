import Navigation from "@/components/navigation/navigation";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Bienvenu dans votre site</h2>
        <Navigation />
      </div>
    </div>
  );
}
