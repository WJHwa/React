import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Registered() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(watch("firstid"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>아이디</label>
      <input
        name="firstid"
        {...register("firstid", {
          required: true,
          maxLength: 12,
        })}
      />
      {errors.firstid && errors.firstid.type === "required" && (
        <p>This is required</p>
      )}
      {errors.firstid && errors.firstid.type === "maxLength" && (
        <p>아이디를 사용하실수 없습니다.</p>
      )}
      <label>비밀번호</label>
      <input
        name="password"
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>비밀번호를 6자 이상 쓰세요.</p>
      )}
      <label>비밀번호 확인</label>
      <input
        name="password_confirm"
        type="password"
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === password.current,
          minLength: 6,
        })}
      />
      {errors.password_confirm &&
        errors.password_confirm.type === "required" && <p>This is required</p>}
      {errors.password_confirm &&
        errors.password_confirm.type === "validate" && (
          <p>비밀번호를 확인해주세요</p>
        )}
      <label>이름</label>
      <input
        name="name"
        {...register("name", {
          required: true,
          minLength: 2,
          maxLength: 10,
        })}
      />
      {errors.name && errors.name.type === "minLength" && (
        <p>이름을 정확히 작성해주세요</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>이름을 정확히 작성해주세요</p>
      )}
      {errors.name && errors.name.type === "required" && (
        <p>This is required</p>
      )}
      <input type="submit" />
    </form>
  );
}

export default Registered;
