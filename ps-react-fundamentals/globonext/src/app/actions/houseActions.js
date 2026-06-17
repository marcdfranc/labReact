/* "use server";

const { revalidatePath } = require("next/cache");

export const saveHouse = async (house) => {
  await fetch("http://localhost:4000/houses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(house),
  });

  revalidatePath("/");
};
 */
