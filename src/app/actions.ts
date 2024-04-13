"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerWaitlist(
  prevState: {
    name: string;
  },
  formData: FormData
) {
  const name = formData.get("name");
  console.log("hello!!", name);

  try {
    // do API call here
  } catch (e) {
    return { message: "Failed to create todo" };
  }

  redirect("/success");
}
