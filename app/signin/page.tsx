"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import Validator from "validator";
import { Form, Button, Input } from "../../components/modules";
import Greetings from "@/components/greetings/greetings";
import ThirdParty from "@/components/thirdParty/thirdParty";
import styles from "./page.module.scss";

type SignInUserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  conditions: boolean;
  newsletter: boolean;
  offers: boolean;
};

const SignIn: FC = () => {
  const router = useRouter();
  const methods = useForm<SignInUserState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conditions: false,
      newsletter: false,
      offers: false,
    },
  });
  const { errors, isDirty, isValid } = methods.formState;
  const dataWatch = useWatch({ control: methods.control });
  console.log(dataWatch);
  const onSubmit: SubmitHandler<SignInUserState> = async (data) => {
    console.log(data);
    router.push("/confirmation");
  };
  const list = [
    "J'accepte de recevoir les newsletters",
    "Je veux recevoir des offres commerciales",
    "J'accepte les conditions générale d'utilisateur de la plateforme",
  ];
  return (
    <>
      <Greetings
        title="Inscrivez-vous pour pouvoir continuer votre parcours"
        subTitle="Déjà inscrit ?"
        titleLink="Connectez-vous"
        subTitleLink="login"
      />
      <div className={styles.container}>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.input_container}>
              <div className={styles.input_display}>
                <label>Nom*</label>
                <Input
                  name="firstName"
                  width={223}
                  rules={{
                    required: "Ce champ est obligatoire",
                  }}
                />
              </div>
              <div className={styles.input_display}>
                <label>Prénom*</label>
                <Input
                  name="lastName"
                  width={223}
                  rules={{
                    required: "Ce champ est obligatoire",
                  }}
                />
              </div>
            </div>
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
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "Le mot de passe doit avoir plus de 8 caractéres et contient au moins : une lettre majuscule, une lettre miniscule et un caractére spéciale",
                  },
                }}
              />
            </div>
            <div className={styles.checkbox_display}>
              <label key={1}>
                <input type="checkbox" {...methods.register("newsletter")} />
                J&apos;accepte de recevoir les newsletters
              </label>
              <label key={2}>
                <input type="checkbox" {...methods.register("offers")} />
                Je veux recevoir des offres commerciales
              </label>
              <label key={3}>
                <input
                  type="checkbox"
                  {...methods.register("conditions", {
                    validate: {
                      required: (v: boolean) => v || "Ce champ est obligatoire",
                    },
                  })}
                />
                J&apos;accepte les conditions générale d&apos;utilisateur de la
                plateforme
              </label>
            </div>
            <Button
              width={450}
              height={50}
              variant="contained"
              backgroundColor="#F7A631"
              type="submit"
              onClick={methods.handleSubmit(onSubmit)}
              disabled={!dataWatch.conditions}
            >
              Créer un compte
            </Button>
          </Form>
        </FormProvider>
      </div>
      <ThirdParty />
    </>
  );
};

export default SignIn;
