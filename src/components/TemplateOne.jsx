import { useForm } from "react-hook-form"
// импорт хука useForm из библиотеки

export default function TemplateOne () {
  const {
    // методы register handleSubmit watch
    register, 
    handleSubmit,
    watch,
    //  стейт данные в случае ошибки
    formState: { errors },
  } = useForm()  //   вызов хука useForm


// метод onSubmit
  const onSubmit = (data) => console.log('data',data)

// метод следит за изменениями поля 1-го input ...register example
  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      {/* { required: true - делает поле обязательным к заполнению */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {/* Вывод ошибки This field is required если поле 2-го input не заполненно */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}