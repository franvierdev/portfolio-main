"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  mensaje: string;
};
const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

export default function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="w-full ">
      <h2 className="text-center pt-20 text-5xl underline font-bold  ">
        Contacto
      </h2>

      <div className="flex justify-center gap-10 max-sm:flex-col my-20 ">
        <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center text-center lg:hidden text-md">
          <p className="">
            Contáctame para conocer, ya sea tu opinión o tu propuesta,
            rellenando el siguiente formulario.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="needs-validation max-sm:self-center font-karla border max-lg:w-5/6 lg:max-w-lg   bg-white rounded-xl p-6 lg:p-8 flex flex-col gap-5"
          noValidate
        >
          <div className="flex max-lg:flex-col gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-xs mb-1">
                Nombre <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className={
                  errors.firstName
                    ? "border-red-400 form-control border-2 class rounded-md"
                    : " form-control border-2 class rounded-md"
                }
                {...register("firstName", {
                  required: { value: true, message: "Este campo es requerido" },
                  maxLength: {
                    value: 20,
                    message: "Puede tener un Maximo de 20 caracteres",
                  },
                  minLength: {
                    value: 3,
                    message: "Debe tener un minimo de 3 caracteres",
                  },
                  pattern: {
                    value: /^[A-Z]+$/i,
                    message: "Solo puede tener letras",
                  },
                })}
              />
              <p className="text-xs text-red-400">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="text-xs mb-1">
                Apellido <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className={
                  errors.lastName
                    ? "border-red-400 form-control border-2 class rounded-md"
                    : " form-control border-2 class rounded-md"
                }
                {...register("lastName", {
                  required: { value: true, message: "Este campo es requerido" },
                  maxLength: {
                    value: 20,
                    message: "Puede tener un Maximo de 20 caracteres",
                  },
                  minLength: {
                    value: 3,
                    message: "Debe tener un minimo de 3 caracteres",
                  },
                  pattern: {
                    value: /^[A-Z]+$/i,
                    message: "Solo puede tener letras",
                  },
                })}
              />
              <p className="text-xs text-red-400">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs mb-1">
              Correo <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="ej: caracola@gmail.com"
              className="form-control border-2 rounded-md ps-3"
              id="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              required
            />
            <p className="text-xs text-red-400">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="Asunto" className="text-xs mb-1">
              Asunto
            </label>
            <input type="text" name="Asunto" className="border-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Message" className="text-xs mb-1">
              Mensaje <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("mensaje", {
                required: { value: true, message: "Este Campo es requerido" },
                maxLength: {
                  value: 321,
                  message: "Puede escribir un maximo de 320 caracteres",
                },
              })}
              id="Message"
              className="form-control border-2 rounded-md max-lg:h-48 h-20"
              required
            ></textarea>
            <p className="text-red-400 text-xs">{errors?.mensaje?.message}</p>
          </div>

          <button
            id="liveToastBtn"
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 duration-500 p-3 mt-5 w-full rounded-md text-white"
          >
            Enviar
          </button>
        </form>
        <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center   max-lg:hidden">
          <p className="font-suse  ">
            Contáctame para conocer, ya sea tu opinión o tu propuesta,
            rellenando el formulario.
            <br></br> También puedes contactarme a través de las siguientes
            plataformas.
          </p>
          <div className="flex max-lg:flex-col max-sm:flex-row justify-around w-52 mx-auto mt-6 sm:mt-10 h-9 max-sm:gap-3 max-sm:mx-7 ">
            <Link href="https://github.com/franvierdev">
              <Image
                src="/imgs/iconos/github2.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-blue-400 hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://wa.link/70sm9h">
              <Image
                src="/imgs/iconos/whatsapp.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-blue-400 hover:bg-slate-300/70  backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="https://www.linkedin.com/in/francisco-salazar-7a91b6292">
              <Image
                src="/imgs/iconos/linkedin.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-blue-400  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
            <Link href="mailto:franccois.dev@gmail.com">
              <Image
                src="/imgs/iconos/email.png"
                alt="e-mail"
                width={32}
                height={32}
                priority={true}
                className="p-1 max-sm:w-9 bg-blue-400  hover:bg-slate-300/70 backdrop-blur-md rounded border-2 border-slate-700 shadow-md shadow-slate-500/70 hover:w-9  duration-150 hover:-translate-y-1 "
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center lg:hidden ">
          <p className="">
            También puedes contactarme a través de las siguientes plataformas.
          </p>
        </div>
      </div>
    </div>
  );
}
