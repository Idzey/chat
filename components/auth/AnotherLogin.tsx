"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function AnotherLogin() {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <AnotherItem src="/images/auth/facebook.svg" alt="facebook" />
      <AnotherItem
        onClick={() => signIn("google", { callbackUrl: "/chat" })}
        src="/images/auth/google.svg"
        alt="google"
      />
      <AnotherItem src="/images/auth/apple.svg" alt="apple" />
    </div>
  );
}

function AnotherItem({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex-1 py-2 flex items-center justify-center border-1 border-blue rounded-sm"
    >
      <Image className="h-6 w-6" src={src} alt={alt} width={20} height={20} />
    </div>
  );
}
