import { Metadata } from 'next'

export const metadata:Metadata ={
    title: "All Products",
    // title:{
    //     absolute:'',  // overwrite all often use in child
    //     template:'',  // mix with chiild title='%s | sahil-tut'
    //     default:''  //goes to child
    // }
}

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
  