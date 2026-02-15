import React from "react";
import Topbar from "./Topbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Customer_Card from "./Customer_Card";

const View_all_customers = () => {
  const [customers, setCustomers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch_customers() {
      const response = await axios.get(BACKEND_URL + "/customer/get_all", {
        withCredentials: true,
      });
      setCustomers(response.data.customers);
      setLoading(false);
    }
    fetch_customers();
  }, [loading]);
  if (loading) {
    return (
      <>
        <Topbar />
        <h1>loading ...</h1>
      </>
    );
  }
  return (
    <div>
      <Topbar />
      <div className="flex flex-row gap-3 p-10">
        {customers.map((customer) => {
          return <Customer_Card customer={customer} />;
        })}
      </div>
    </div>
  );
};

export default View_all_customers;
