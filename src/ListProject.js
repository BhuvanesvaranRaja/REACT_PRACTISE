import React from "react";
import { useParams } from "react-router-dom";

export const ListProject = () => {
  const { id } = useParams();
  return <div>Project no :{id} </div>;
};
