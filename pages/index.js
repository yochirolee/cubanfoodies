import Head from "next/head";
import { ProductsList } from "../components/products/productsList";

export default function Home() {
	return (
		<div>
			<Head className="">
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

			<main className="bg-img relative   m-4   h-64  rounded-xl shadow-lg   flex flex-col justify-center items-left ">
				<div className="absolute   bg-gray-800/70  h-64 w-full rounded-xl"></div>
				<h3 className="text-xl z-10 pl-8   text-left p-2 my-2 font-bold text-red-500">
					Ist not just Food,<br></br>
					<span className="text-2xl z-10 text-white">Its an Cuban Experience</span>
				</h3>
				<div className="flex text-sm pl-8  flex-row z-20 ">
					<button className="bg-red-500 border  font-bold px-3 rounded-full text-slate-100">
						Menu
					</button>
					<button className=" mx-4  text-white font-bold  rounded-full p-2 border border-white ">
						Book a Table
					</button>
				</div>
				<div className="flex flex-row gap-3 z-20 rounded-lg bg-gray-600/50   p-2 w-20 mx-auto   place-content-center mt-10">
					<span className="rounded-full h-2 w-2  cursor-pointer  bg-red-500"></span>
					<span className="rounded-full h-2 w-2 border cursor-pointer "></span>
					<span className="rounded-full h-2 w-2 border cursor-pointer"></span>
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

			<section name="contact-section" className="flex flex-col items-center   p-4 m-4 ">
				<div>
					<p className="text-slate-600 items-center flex">
						<i className="las la-map-marker-alt text-xl mx-2  text-red-500"></i>13855 W hillsborough
						Ave Tampa, Fl 33635
					</p>
				</div>
				<div name="social-medias" className="flex p-4 gap-2 text-3xl">
					<i className="lab la-facebook text-blue-700"></i>
					<i className="lab la-instagram text-pink-700"></i>
					<i className="lab la-twitter text-blue-800"></i>
				</div>
			</section>

			<footer></footer>
		</div>
	);
}
