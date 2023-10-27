import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "@/container/Layout/Layout";
import Input from "@/components/posts/FormInput";

//  initial values
const initialValues = {
  email: "",
  password: "",
};

//  validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
});

const SigninForm: React.FC = () => {
  const router = useRouter();
  //  onSubmit
  const onSubmit = (values: FormikValues) => {};

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
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto h-[80vh]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-[#ffc14d] mb-4">ورود</h1>
          <Input label="ایمیل" name="email" formik={formik} />
          <Input
            label="رمز عبور"
            name="password"
            type="password"
            formik={formik}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-[#ffc14d] text-white cursor-pointer"
          >
            ورود
          </button>
          <Link href="/signup">
            <p className="mt-4 py-4 cursor-pointer">
              هنوز ثبت نام نکردی؟ لاگین
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SigninForm;
