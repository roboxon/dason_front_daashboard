import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      admin layout
      {children}
    </div>
  );
};

export default AdminLayout;
