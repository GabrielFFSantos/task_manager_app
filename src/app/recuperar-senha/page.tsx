"use client";
import Input from "src/components/input";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "src/components/button";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "firebaseConfig";

type FormValues = {
  mail: string;
  password: string;
  confirm_password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (data.password != data.confirm_password) {
        setAuthError("As senhas devem ser iguais.");
        throw new Error("As senhas devem ser iguais.");
      }
      await createUserWithEmailAndPassword(auth, data.mail, data.password);
      router.push("/auth");
    } catch (error: any) {
      setAuthError("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <main className={`${styles.container}`}>
      <section className={`${styles.form_section}`}>
        <h2>Registrar-se:</h2>
        <form
          className={`${styles.register_form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name={"mail"}
            type="email"
            placeholder="Email"
            className={`${styles.register_input}`}
            register={register}
            error={errors.mail?.message}
          />
          <Input
            name={"password"}
            type="password"
            placeholder="Senha"
            className={`${styles.register_input}`}
            register={register}
            error={errors.password?.message}
          />
          <Input
            name={"confirm_password"}
            type="password"
            placeholder="Confirmar Senha"
            className={`${styles.register_input}`}
            register={register}
            error={errors.confirm_password?.message}
          />
          {authError && <p className={styles.error_message}>{authError}</p>}
          <Button color="primary" type="submit">
            Cadastrar-se
          </Button>
        </form>
      </section>
    </main>
  );
}
