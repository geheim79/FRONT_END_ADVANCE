import { useForm } from "react-hook-form";

export default function TemplateThree() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   метод onSubmit выполняется когда все поля ввода прошли на валидность
  //    если все правильно в консоль возвращается обьект data
  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* указание максим длинны в 20 символов */}
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {/* валидация поля по допустимым символам - регулярные выражения */}
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      {/* валидация поля по возрасту */}
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
