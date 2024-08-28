"use client";
import Input from "src/components/input";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "src/components/button";

type FormValues = {
  mail: string;
  password: string;
};

export default function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {};
  return (
    <main className={`${styles.container}`}>
      <section className={`${styles.form_section}`}>
        <form
          className={`${styles.login_form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Login:</h2>
          <Input
            name={"mail"}
            type="email"
            placeholder="Email"
            className={`${styles.login_input}`}
            // register={register}
            error={errors.mail?.message}
          />
          <Input
            name={"password"}
            type="password"
            placeholder="Senha"
            className={`${styles.login_input}`}
            // register={register}
            error={errors.password?.message}
          />
          <div className={`${styles.links_container}`}>
            <p className={`${styles.form_links}`}>
              Não tenho conta? {""}
              <a href="recuperar-senha">Registrar-se</a>
            </p>
            <a href="recuperar-senha" className={`${styles.form_links}`}>
              Esqueci minha senha
            </a>
          </div>
          <Button color="primary" type="submit">
            Entrar
          </Button>
        </form>
      </section>
      <section className={`${styles.informative_section}`}></section>
    </main>
  );
}
