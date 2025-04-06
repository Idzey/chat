
import AnotherLogin from "@/components/auth/AnotherLogin";
import FormLogin from "@/components/auth/formLogin";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex p-16 justify-center items-center gap-20">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
        <div className="flex flex-col gap-4 mb-4">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="text-sm text-grey">Login to access your account</p>
        </div>
        <div>
          <FormLogin />
          <div className="flex justify-center text-sm gap-1 mt-4">
            <p>Don&apos;t have account?</p>
            <Link className="text-red cursor-pointer" href="/auth/signup">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 text-faded_grey">
          <Separator />
          <p className="text-grey text-sm">Or login with</p>
          <Separator />
        </div>

        <AnotherLogin />
      </div>

      <div className="hidden md:flex w-1/3 items-center justify-end">
        <Image
          src="/images/auth/login.svg"
          alt="login"
          width={450}
          height={420}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}

function Separator() {
  return <div className="flex-1 border-b-1"></div>;
}