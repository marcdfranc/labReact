"use client";

import React, { useState } from "react";
import { currencyFormatter } from "../helpers/currencyFormatter";
import { saveHouse } from "@/app/actions";

export const AddHouseButton = ({ callBack }) => {
  const [showForm, setShowForm] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const [houseToSave, setHouseToSave] = useState({
    address: "",
    country: "",
    description: "",
    photo: "164558",
    price: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonEnabled(false);
    try {
      await saveHouse(houseToSave);
    } catch (error) {
      console.log("error on save house", error);
    } finally {
      setButtonEnabled(true);
      cancelForm();
    }
  };

  const addHouse = () => {
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
  };

  const updatePrice = (value) => {
    setHouseToSave({ ...houseToSave, price: Number(value.replace(/\D/g, "")) });
  };

  return (
    <>
      {showForm ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                value={houseToSave.address}
                onChange={(e) =>
                  setHouseToSave({ ...houseToSave, address: e.target.value })
                }
                className="form-control"
                id="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                value={houseToSave.country}
                onChange={(e) =>
                  setHouseToSave({ ...houseToSave, country: e.target.value })
                }
                className="form-control"
                id="country"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                value={houseToSave.description}
                onChange={(e) =>
                  setHouseToSave({
                    ...houseToSave,
                    description: e.target.value,
                  })
                }
                className="form-control"
                id="description"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Photo
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                value={houseToSave.photo}
                onChange={(e) =>
                  setHouseToSave({
                    ...houseToSave,
                    photo: e.target.value,
                  })
                }
                className="form-control"
                id="photo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                value={currencyFormatter.format(houseToSave.price)}
                onChange={(e) => updatePrice(e.target.value)}
                className="form-control"
                id="price"
              />
            </div>
            <div className="d-inline-flex gap-2">
              <button onClick={cancelForm} className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="submit"
                disabled={!buttonEnabled}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={addHouse} className="btn btn-primary">
          Add
        </button>
      )}
    </>
  );
};
