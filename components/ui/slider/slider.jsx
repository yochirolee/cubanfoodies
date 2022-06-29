import { Bullets } from "../bullets/bullets";

export const Slider = () => {
	return (<>
		<main className="bg-img relative   m-4   h-64   rounded-xl shadow-lg   flex flex-col justify-center items-left md:items-center ">
			<div className="absolute   bg-gray-800/70  h-64 w-full rounded-xl"></div>
			<h3 className="text-xl z-10 pl-8   text-left md:text-center md:text-2xl p-2 my-2 font-bold text-red-500">
				Ist not just Food,<br></br>
				<span className="text-2xl md:text-4xl z-10 text-white">Its an Cuban Experience</span>
			</h3>
			<div className="flex text-sm pl-8  flex-row z-10 ">
				<button className="bg-red-500 border  font-bold px-3 rounded-full text-slate-100">
					Menu
				</button>
				<button className=" mx-4  text-white font-bold  rounded-full p-2 border border-white ">
					Book a Table
				</button>
			</div>
		 <Bullets/>
		</main> </>
	);
};
