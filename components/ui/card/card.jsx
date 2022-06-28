import { Cart } from "../cart";

export const Card = ({ product }) => {
	const { name, price, image, description } = product;

	return (
		<div className="card  shadow-md shrink-0  rounded-lg p-4 w-1/3 lg:w-1/6">
			<div className=" -mt-8">
				<img alt="beacon" className="object-contain" src={image}></img>
			</div>

			<div className="flex flex-col  items-center">
				<span className="mx-auto text-center  text-slate-600 text-sm mb-2">{name}</span>
				<span className="text-center text-xs mb-3 text-slate-500">{description}</span>
				<div className="flex gap-4 items-center">
					<span className="text-xs text-center ring ring-red-100 bg-red-500 text-white p-1 rounded-lg ">
						$ {price}
					</span>
					<Cart value={0} />
				</div>
			</div>
		</div>
	);
};
