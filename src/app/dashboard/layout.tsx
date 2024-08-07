export default function DashboardLayout({
  children,
  notifications,
  users,
}: Readonly<{
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}>) {
  return (
    <div>
    <h1>{children}</h1>
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
       <div>{users}</div>
         {/* <div>{revenue}</div> */}
      </div>
      <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
    </div>
  </div>
  );
}
