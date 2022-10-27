import React, { useState, useEffect } from "react";
import point from "../services/PointSDK";

function ShowComments({ data }) {
  const [identityName, setIdentityName] = useState("");
  const [address, setAddress] = useState(undefined);
  
  const getAccount = async () => {
    try {
      let wallet = await point.getIdentity();
      setIdentityName(wallet['identity']);
      setAddress(wallet['address']);
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    } finally {
    }
  };
      console.log("its me",data)
       return(
       <div className="comment">
            <p className="identity">
              {identityName}
            </p>
            <p className="address">
              {data[0].substring(0, 2) +
                " ... " +
                data[0].substring(data[0].length, data[0].length - 3)}
            </p>
            <p className="comment-details">{data[1]}</p>
          </div>)
}
export default ShowComments;
