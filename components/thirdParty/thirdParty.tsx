"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../modules";
import Facebook from "@/public/Svg/facebook";
import Google from "@/public/Svg/google";
import Microsoft from "@/public/Svg/microsoft";
import styles from "./thirdParty.module.scss";

const ThirdParty: FC = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.line_seperators}>
        <hr className={styles.seperator} />
        <h5>ou</h5>
        <hr className={styles.seperator} />
      </div>
      <Button
        width={450}
        height={50}
        variant="outlined"
        textColor="#FFF"
        onClick={onNavigate}
        startIcon={<Google />}
      >
        Connexion avec Google
      </Button>
      <Button
        width={450}
        height={50}
        variant="outlined"
        textColor="#FFF"
        onClick={onNavigate}
        startIcon={<Facebook />}
      >
        Connexion avec Facebook
      </Button>
      <Button
        width={450}
        height={50}
        variant="outlined"
        textColor="#FFF"
        onClick={onNavigate}
        startIcon={<Microsoft />}
      >
        Connexion avec Microsoft
      </Button>
    </div>
  );
};

export default ThirdParty;
