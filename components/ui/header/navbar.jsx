export const Header = () => {
	return (
		<header className="flex flex-row  items-center  px-2  h-10    text-slate-500">
			<i className=" flex-1 las la-bars text-2xl"></i>
			<div className="flex items-center ">
				<div className="flex relative mr-4 pt-1">
					<i className="las la-shopping-cart text-2xl  cursor-pointer"></i>
					<span className="absolute text-center justify-center text-xs h-4 w-4 ml-3    text-white     rounded-full  bg-red-500">
						0
					</span>
				</div>

				<div className="rounded-full justify-end  h-8 w-8 bg-red-100"></div>
			</div>
		</header>
	);
};
