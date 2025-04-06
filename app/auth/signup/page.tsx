import AnotherLogin from "@/components/auth/AnotherLogin";
import FormSignup from "@/components/auth/formSignup";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="w-full h-full flex p-16 justify-center items-center gap-20">
      <div className="hidden md:flex w-1/3 items-center ">
        <Image
          src="/images/auth/signup.svg"
          alt="login"
          width={420}
          height={400}
          className="hidden md:block"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Sign up</h1>
          <p className="text-sm text-grey">Let’s get you all st up so you can access your personal account.</p>
        </div>
        <div>
          <FormSignup />
          <div className="flex justify-center text-sm gap-1 mt-4">
            <p>Already have an account?</p>
            <Link className="text-red cursor-pointer" href="/auth/login">
              Login
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 text-faded_grey">
          <Separator />
          <p className="text-grey text-sm">Or Sign up with</p>
          <Separator />
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <AnotherLogin />
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="flex-1 border-b-1"></div>;
}
