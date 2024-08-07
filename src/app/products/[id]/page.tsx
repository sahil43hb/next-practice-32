import React from "react";
import { Metadata } from "next";

type props = { params: { id: string } };

export const generateMetadata = ({ params }: props) => {
  return {
    title: `Product ${params?.id}`,
  };
};
// export const generateMetadata = async ({
//   params,
// }: props): Promise<Metadata> => {
//   const title = await new Promise((res) => {
//     setTimeout(() => {
//       res(`iphone ${params.id}`);
//     }, 1000);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };

const page = ({ params }: props) => {
  return <div>Product id {params.id}</div>;
};

export default page;
