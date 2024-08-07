import React from "react";
const page = ({
  params,
}: {
  params: { reviewId: string; id: string };
}) => {
  return (
    <div>
      Product id {params.id} and review {params.reviewId}{" "}
    </div>
  );
};
export default page;
