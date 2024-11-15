"use server";

import { signIn } from "@/auth";

export const loginWithProvider = async (provider: string) => {
  await signIn(provider);
};