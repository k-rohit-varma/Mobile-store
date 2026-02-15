import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../utils.js";
import Mobile_view from "../components/Mobile_view.jsx";

const Mobile_overview = () => {
  const [loading, setLoading] = useState(true);
  const [cur_mob, set_cur_mob] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetch_mobile() {
      const response = await axios.post(
        BACKEND_URL + "/mobile/get_id",
        {
          id: id,
        },
        { withCredentials: true },
      );
      console.log("response data :", response.data);
      set_cur_mob(response.data?.mobile);
      setLoading(false);
    }
    fetch_mobile();
  }, [id]);

  if (loading) {
    return <h1> loading...</h1>;
  }
  return (
    <div>
      <div className="p-20">
        <Mobile_view mobile={cur_mob} />
      </div>

      <div>{/* // button to fill the user form after purchase */}</div>
    </div>
  );
};

export default Mobile_overview;
