import { useState } from "react";

export const Cart = ({ value }) => {
	const [count, setCount] = useState(value);

	const onIncrement = () => {
		setCount((count) => count + 1);
	};

	return (
		<div className="flex relative pt-1" onClick={() => onIncrement()}>
			<i className="las la-shopping-cart text-2xl text-red-500 cursor-pointer"></i>
			<span className="absolute text-center justify-center text-xs h-4 w-4 ml-3    text-white     rounded-full  bg-red-500">
				{count}
			</span>
		</div>
	);
};
