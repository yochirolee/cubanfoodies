export const Header = () => {
	return (
		<header className="flex flex-row justify-between  px-6  h-10    text-slate-500">
			<i className=" flex-1 mt-3 md:hidden las la-bars text-2xl"></i>
			<div className="md:flex hidden  mt-3 ">
				<p className="text-2xl">Cuban</p>
				<p className="text-2xl text-red-500 font-bold">Foodies</p>
			</div>
			<div className="flex gap-2 items-center mt-4  ">
				<div className="text-sm"> John Doe</div>
				<div className="rounded-full justify-end  h-8 w-8 bg-red-100"></div>
				
				<div className="flex relative ">
					<i className="las la-shopping-cart text-2xl  cursor-pointer"></i>
					<span className="absolute text-center justify-center text-xs h-4 w-4 ml-3    text-white     rounded-full  bg-red-500">
						0
					</span>
				</div>
			
			</div>
		</header>
	);
};
