"use client";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="flex justify-center gap-10 max-sm:flex-col">
      <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center lg:hidden">
        Contáctame para conocer, ya sea tu opinión o tu propuesta, rellenando el
        siguiente formulario.
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="needs-validation max-sm:self-center font-karla border max-lg:w-5/6 lg:max-w-lg  my-20 bg-white rounded-xl p-6 lg:p-8 flex flex-col gap-[20px]"
        noValidate
      >
        <div className="font-bold text-2xl">
          <h4 className="font-[700]">Contáctame</h4>
        </div>
        <div className="flex max-lg:flex-col gap-3">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="lg:text-xs mb-2">
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
            <p className="text-xs text-red-400">{errors.firstName?.message}</p>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="lg:text-xs mb-2">
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
          <label htmlFor="email" className="lg:text-xs mb-2">
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
          <label htmlFor="Asunto" className="text-xs mb-2">
            Asunto
          </label>
          <input type="text" name="Asunto" className="border-2 rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Message" className="text-xs mb-2">
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
          className="bg-blue-600 hover:bg-blue-800 duration-500 p-3 mt-6 w-full rounded-md text-white"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center max-lg:hidden">
        Contáctame para conocer, ya sea tu opinión o tu propuesta, rellenando el
        formulario. También puedes contactarme a través de las siguientes
        plataformas.
      </div>
      <div className="flex flex-col max-w-lg max-sm:max-w-sm max-sm:self-center lg:hidden ">
        También puedes contactarme a través de las siguientes plataformas.
      </div>
    </div>
  );
}
