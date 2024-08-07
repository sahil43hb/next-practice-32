export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          {/* <h1>Header1</h1> */}
          {children}
          {/* <h1>Footer1</h1> */}
         </>
    );
  }
  