import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { auth, googleProvider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";

const Auth = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  function sendData(formaniMalumoti) {
    console.log(formaniMalumoti);
  }
  function changePasswordShow() {
    setPasswordShow(!passwordShow);
  }
  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      navigate("/");
    });
  }
  return (
    <div className="flex justify-center dark:bg-dark text-xs p-6">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="dark:text-olcha">
          Ro'yxatdan o'tish
        </Typography>
        <Typography className="mt-1 font-normal dark:text-olcha">
          Ro'yxatdan o'tish uchun ma'lumotlarni kiriting.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(sendData)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3 dark:text-olcha">
              Sizning nomeringiz
            </Typography>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  placeholder="Telefon raqamingiz"
                  className=" !border-t-blue-gray-200 dark:text-olcha dark:border-olcha"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...field}
                />
              )}
            />
            <Typography variant="h6" className="-mb-3 dark:text-olcha">
              Parolingiz
            </Typography>
            <div className="relative">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    type={passwordShow ? "text" : "password"}
                    size="lg"
                    placeholder="****"
                    className=" !border-t-blue-gray-200 dark:text-olcha dark:border-olcha"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...field}
                  />
                )}
              />
              {passwordShow ? (
                <BiShow
                  className="absolute right-3 top-3"
                  size={18}
                  onClick={changePasswordShow}
                />
              ) : (
                <BiHide
                  className="absolute right-3 top-3"
                  size={18}
                  onClick={changePasswordShow}
                />
              )}
            </div>
          </div>
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Typography
                variant="small"
                className="font-normal flex justify-end"
              >
                <a href="#" className="font-medium text-blue-500 underline">
                  Parolni unutdingizmi?
                </a>
              </Typography>
            )}
          />
          <Button
            className="mt-6 bg-olcha dark:text-dark"
            fullWidth
            type="submit"
          >
            Tasdiqlash
          </Button>
          <Typography className="mt-4 text-center font-normal flex justify-end">
            <button
              className="dark:text-olcha dark:bg-dark dark:border-olcha flex gap-3 p-1 rounded-xl border"
              onClick={signInWithGoogle}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
                className="w-7 h-7"
              />
              Google orqali kiring
            </button>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
