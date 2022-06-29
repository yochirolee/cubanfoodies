import { Card } from "../ui/card/card";

export const ProductsList = ({ products }) => {
	return (
		<div className=" flex flex-row overflow-x-scroll  gap-2 mt-4 pt-4 items-center p-2 lg:px-20 ">
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};
