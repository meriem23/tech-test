import Link from "next/link";
import styles from "./greetings.module.scss";

type GreetingsProps = {
  title: string;
  subTitle: string;
  titleLink: string;
  subTitleLink: string;
};

const Greetings = ({
  title,
  subTitle,
  titleLink,
  subTitleLink,
}: GreetingsProps) => {
  return (
    <div className={styles.titles}>
      <h2>{title}</h2>
      <h5>
        {subTitle}
        <span>
          <Link href={`/${subTitleLink}`}>{titleLink}</Link>
        </span>
      </h5>
    </div>
  );
};

export default Greetings;
