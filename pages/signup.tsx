import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/container/Layout/Layout";
import Input from "@/components/posts/FormInput";

//  initial values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

//  validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام و نام خانوادگی را وارد کنید")
    .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
    .required("رمز عبور هم خوانی ندارد"),
});

const SignupForm = () => {
  const router = useRouter();

  //  onSubmit
  const onSubmit = (values: FormikValues) => {
    const { name, email, phoneNumber, password } = values;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>ثبت نام - بلاگ سنتر</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-[#ffc14d] mb-4">ثبت نام</h1>
          <Input label="نام و نام خانوادگی" name="name" formik={formik} />
          <Input label="ایمیل" name="email" formik={formik} />
          <Input
            type="tel"
            label="شماره موبایل"
            name="phoneNumber"
            formik={formik}
            placeholder="09121234567"
          />
          <Input
            label="رمز عبور"
            name="password"
            type="password"
            formik={formik}
          />
          <Input
            label="تکرار رمز"
            name="confirmPassword"
            type="password"
            formik={formik}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-[#ffc14d] text-black cursor-pointer"
          >
            ثبت نام
          </button>
          <Link href="/signin">
            <p className="mt-4 py-4 cursor-pointer">
              قبلا ثبت نام کردی ؟ لاگین کنید
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignupForm;
