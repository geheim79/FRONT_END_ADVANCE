import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// вызов yup
const schema = yup
  // задания создания обьекта с полями firstName и age
  //  а также с заданными парамтерами для этих полей
  .object({
    ownerName: yup.string().required().min(2),
    ownerEmail: yup.string().email().required(),
    ownerPass: yup.string().required().min(8),
    submitPass: yup.string().required().oneOf([yup.ref('ownerPass')], 'Пароль не совпадает, проверьте правильность.'),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("ownerName")} />
      <p>{errors.ownerName?.message}</p>

      <input {...register("ownerEmail")} />
      <p>{errors.ownerEmail?.message}</p>

      <input {...register("ownerPass")} />
      <p>{errors.ownerPass?.message}</p>

      <input {...register("submitPass")} />
      <p>{errors.submitPass?.message}</p>

      <input type="submit" />
    </form>
  );
}
