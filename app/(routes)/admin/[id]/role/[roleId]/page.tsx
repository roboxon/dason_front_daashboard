import React from "react";

interface Props {
  params: { roleId: number };
}

const AdminRole = ({ params: { roleId } }: Props) => {
  return <div>AdminRole {roleId}</div>;
};

export default AdminRole;
