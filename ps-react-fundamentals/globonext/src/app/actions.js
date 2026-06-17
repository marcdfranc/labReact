"use server";

const { revalidatePath } = require("next/cache");

export const saveHouse = async (house) => {
  console.log("Hello World!!!");
  await fetch("http://localhost:4000/houses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(house),
  });

  revalidatePath("/");
};

export const addBid = async (bid) => {
  try {
    bid.houseId = Number(bid.houseIdStr);

    const response = await fetch("http://localhost:4000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });

    const savedBid = await response.json();

    return savedBid;
  } catch (error) {
    console.log("error on add bid ", error);
    throw error;
  }
};
