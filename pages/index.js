import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, toggleChangeAction } from "../redux/reducer";
import { useQueryClient } from "react-query";
import { deleteEmployee, getEmployee } from "../library/helper";
import DeleteComponent from "../Components/DeleteComponent";

export default function Home() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryclient = useQueryClient();
  const handleChange = () => {
    dispatch(toggleChangeAction());
  };
  const deleteHandler = async () => {
    if (deleteId) {
      await deleteEmployee(deleteId);
      await queryclient.prefetchQuery("users", getEmployee);
      await dispatch(deleteAction(null));
    }
  };

  const cancelHandler = async () => {
    console.log("cancel");
    await dispatch(deleteAction(null));
  };
  return (
    <section>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handleChange}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>

        {/* collapsable form */}
        {isVisible ? <Form /> : <></>}

        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
