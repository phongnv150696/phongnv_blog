"use client";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types/user";
import Image from "next/image";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex flex-row justify-stretch items-stretch">
      <div className="grow relative overflow-hidden">
        <Image src="/nature-bg.webp" fill objectFit="cover" objectPosition="center" alt="" quality={100} />
      </div>
      <form
        className="flex flex-col justify-center px-20 gap-4 w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Image src='/logo.png' alt='Phongnv' width={150} height={70} className="block mx-auto mb-4" quality={100} />
        <label className="flex flex-col gap-1">
          <span className='font-bold text-sm tracking-tight'>
            Tên đăng nhập
          </span>
          <input className='bg-gray-100 p-3 rounded' placeholder='Nhập tên đăng nhập....' type="text" {...register("username")} />
        </label>
        <label className="flex flex-col gap-1">
          <span className='font-bold text-sm tracking-tight'>
            Mật khẩu
          </span>
          <input className='bg-gray-100 p-3 rounded' placeholder='Nhập mật khẩu....' type="password" {...register("password")} />
        </label>
        <button type="submit" className="px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white transition">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
