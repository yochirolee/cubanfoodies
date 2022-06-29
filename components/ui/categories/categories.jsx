import { useState } from "react";

export const Categories = ({categories}) => {
	const [active, setActive] = useState(categories[0].id);
	const onActiveChange = (id) => {
		setActive(id);
	};
	return (
		<div className="flex overflow-x-scroll  m-4 text-sm gap-2 p-1  text-center items-center ">
			{categories.map((cat) => (
				<div
					onClick={() => onActiveChange(cat.id)}
					key={cat.id}
					className={`border shrink-0 mb-2 flex gap-1 items-center h-10 px-2 ${
						active == cat.id && "bg-red-500 shadow-md text-white "
					}   cursor-pointer rounded-lg`}
				>
					<i className={`${cat.icon} text-xl`}></i>
					<span className=" ">{cat.category}</span>
				</div>
			))}
		</div>
	);
};
