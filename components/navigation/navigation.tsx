"use client";
import { FC } from "react";
import Link from "next/link";
import { Button } from "../modules";
import styles from "./navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <Button
        width={250}
        height={50}
        variant="contained"
        backgroundColor="#F7A631"
      >
        <Link href="/signin">Créer un compte </Link>
      </Button>
      <Button
        width={250}
        height={50}
        variant="contained"
        backgroundColor="#F7A631"
      >
        <Link href="/login"> Se connecter </Link>
      </Button>
    </div>
  );
};

export default Navigation;
