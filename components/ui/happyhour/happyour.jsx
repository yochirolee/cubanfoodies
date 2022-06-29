export const HappyHour = () => {
	return (
		<section className="text-slate-200 text-center m-2 p-4 bg-gray-700 place-content-center   items-center    rounded-t-xl  ">
			<p className="text-slate-200">Special Offers</p>
			<div className="flex gap-4 justify-evenly  text-center  p-4 ">
				<div className="flex items-center gap-3 rounded-full ">
					<p className="text-red-500 font-bold">Happy Hours</p>
						<p className="border p-2 items-center text-center flex rounded-md shadow-lg text-red-500 border-red-500 ">
					
						<span className="text-2xl items-center p-2">2</span> 
					</p>
                    
                    <i className="las la-cocktail text-6xl rotate-45 animate-pulse"></i>
				<p className="text-xl">x</p>
                <p className="text-3xl">$7</p>
					<p className="text-red-500">3:00pm to 7:00pm</p>
				</div>
			</div>
		</section>
	);
};
