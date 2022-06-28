import { Card } from "../ui/card/card";
import { ProductsListData } from "../../assets/productListData";
import { useEffect, useState } from "react";

export const ProductsList = () => {
	

   

	return (
		<div className=" flex flex-row overflow-x-scroll  gap-2 mt-4 pt-4 items-center p-2 lg:px-20 ">
			{ProductsListData.map((product) => (
                console.log(product),
				<Card key={product.id}  product={product}  />
			))}
		</div>
	);
};
