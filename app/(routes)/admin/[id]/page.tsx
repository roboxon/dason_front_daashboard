import React from "react";

interface Props {
  params: { id: number };
}

const AdminDetails = ({ params: { id } }: Props) => {
  return <div>AdminDetails {id}</div>;
};

export default AdminDetails;
