const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 style={{ color: "#ff6347" }}>User Management</h1>
      {children}
    </div>
  );
};

export default UserLayout;
