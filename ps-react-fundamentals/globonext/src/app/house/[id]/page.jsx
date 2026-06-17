import { currencyFormatter } from "@/app/helpers/currencyFormatter";
import Image from "next/image";
import React from "react";
import { Bids } from "./Bids";

const House = async ({ params }) => {
  const { id } = await params;
  const house = await fetch(
    `http://localhost:4000/houses/${id}?_embed=bids`,
  ).then((r) => r.json());

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          {
            <Image
              className="img-fluid"
              width="300"
              height="200"
              src={
                house.photo
                  ? `/houseImages/${house.photo}.jpeg`
                  : "defaultPhoto.png"
              }
              alt="House pic"
            />
          }
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
        <div className="row">
          <Bids bids={house.bids} houseId={id} />
        </div>
      </div>
    </div>
  );
};

export default House;
