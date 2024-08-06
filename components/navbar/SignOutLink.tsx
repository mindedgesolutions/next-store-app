"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      title: `Logout successful`,
      description: `Thank you for visiting`,
    });
  };

  return (
    <SignOutButton>
      <Link href={`/`} className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};
export default SignOutLink;
