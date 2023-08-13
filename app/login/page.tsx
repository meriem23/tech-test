"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Validator from "validator";
import { Form, Button, Input } from "../../components/modules";
import Greetings from "@/components/greetings/greetings";
import ThirdParty from "@/components/thirdParty/thirdParty";
import styles from "./page.module.scss";

type LoginUserState = {
  email: string;
  password: string;
};

const LogIn: FC = () => {
  const router = useRouter();
  const methods = useForm<LoginUserState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginUserState> = async (data) => {
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Greetings
        subTitle="Pas de compte ?"
        title="Connectez-vous"
        titleLink="Inscrivez-vous"
        subTitleLink="signin"
      />
      <div className={styles.container}>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.input_display}>
              <label>Adresse email*</label>
              <Input
                name="email"
                width={450}
                rules={{
                  required: "Ce champ est obligatoire",
                  validate: (value: string) =>
                    Validator.isEmail(value) || "l'email n'est pas valide",
                }}
              />
            </div>
            <div className={styles.input_display}>
              <label>Mot de passe*</label>
              <Input
                name="password"
                width={450}
                rules={{
                  required: "Ce champ est obligatoire",
                }}
              />
            </div>
            <Button
              width={450}
              height={50}
              variant="contained"
              backgroundColor="#F7A631"
              type="submit"
              onClick={methods.handleSubmit(onSubmit)}
            >
              Connexion
            </Button>
          </Form>
        </FormProvider>
      </div>
      <ThirdParty />
    </>
  );
};

export default LogIn;
