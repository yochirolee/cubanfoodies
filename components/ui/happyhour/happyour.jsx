export const HappyHour = () => {
	return (
		<section className="flex m-2 p-4 bg-gray-700 place-content-center   items-center    h-48  rounded-t-xl  ">
			<div className=" text-center p-4 ">
				<h3 className=" mb-2  font-bold text-slate-200">Happy Hour</h3>
				<p className=" text-sm text-slate-300 text-center items-center flex">
					<i className="las la-map-marker-alt text-xl mx-2  text-red-500"></i>13855 W hillsborough
					Ave Tampa, Fl 33635
				</p>
				<p className="text-slate-200 text-sm items-center flex justify-center">
					<i className="las la-phone text-xl mx-2 text-center  text-red-500"></i>(813) 475-4493
				</p>
			</div>
		</section>
	);
};
