import Head from "next/head";
import { ProductsList } from "../components/products/productsList";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Cuban Foodies</title>
				<meta name="description" content="Created by Yosho" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
					alt="true"
				/>
			</Head>

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

			<main className="m-2 bg-gray-50/50 h-64 rounded-xl shadow-lg  p-4 flex flex-col justify-center items-left ">
				<h3 className="text-xl  text-left p-2 my-2 font-bold text-slate-600">
					Ist not just Food,<br></br>
					<span className="text-2xl text-red-400">Its an Cuban Experience</span>
				</h3>
				<div className="flex text-sm  flex-row ">
					<button className="bg-red-500 border  font-bold px-3 rounded-full text-slate-100">
						Menu
					</button>
					<button className=" mx-4 text-red-500 font-bold  rounded-full p-2 border border-red-500 ">
						Book a Table
					</button>
				</div>
				<div className="flex flex-row gap-3   place-content-center mt-10">
					<span className="rounded-full h-2 w-2 ring cursor-pointer  ring-red-200 bg-red-400"></span>
					<span className="rounded-full h-2 w-2 border cursor-pointer border-red-500"></span>
					<span className="rounded-full h-2 w-2 border cursor-pointer border-red-500"></span>
				</div>
			</main>

			<div className="flex overflow-x-scroll  m-4 text-sm gap-2 p-1  text-center items-center ">
				<div className="border shrink-0 mb-2 flex gap-1 items-center h-10 px-2  bg-red-500 shadow-md text-white  cursor-pointer rounded-lg">
					<i className="las la-hamburger  text-xl  "></i>
					<span className=" ">Burgers</span>
				</div>
				<div className="border shrink-0 mb-2 flex gap-1 items-center h-10 px-2  text-slate-600 rounded-lg">
					<i className="las la-pizza-slice mr-2 text-xl "></i>

					<span className="text-sm">Pizza</span>
				</div>
				<div className="border shrink-0 mb-2 flex gap-1 items-center h-10 px-2  text-slate-600 rounded-lg">
					<i className="las la-concierge-bell mr-2 text-xl "></i>
					<span className="text-sm">Best Choice</span>
				</div>
				<div className="border shrink-0 mb-2 flex  gap-1 items-center h-10 px-2  text-slate-600 rounded-lg">
					<i className="las la-hotdog  text-xl "></i>
					<span className="text-sm">Hot Dogs</span>
				</div>
				<div className="border shrink-0 mb-2  flex  gap-1 items-center h-10 px-2  text-slate-600 rounded-lg">
					<i className="las la-cocktail  text-xl "></i>
					<span className="text-sm">Drinks</span>
				</div>
			</div>

			<ProductsList />

			<section name="contact-section" className="flex container  p-4 m-4 ">
				<div>
					<p>Address Section</p>
					<p>13855 W hillsborough Ave Tampa, Fl 33635</p>
				</div>
				<p></p>
			</section>

			<footer></footer>
		</div>
	);
}
