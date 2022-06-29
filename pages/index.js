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
					<span className="text-sm">Cocktails</span>
				</div>
				<div className="border shrink-0 mb-2  flex  gap-1 items-center h-10 px-2  text-slate-600 rounded-lg">
					<i className="las la-coffee  text-xl "></i>
					<span className="text-sm">Coffees</span>
				</div>
			</div>

			<ProductsList />

			<section className="flex m-4 w-5/6 mx-auto items-center   h-32  rounded-xl shadow-lg   ">
				<div className=" border-r text-center p-4 ">
					<h3 className=" mb-2 font-bold text-slate-600">Location and Phone</h3>
					<p className="text-slate-600 text-center items-center flex">
						<i className="las la-map-marker-alt text-xl mx-2  text-red-500"></i>13855 W hillsborough
						Ave Tampa, Fl 33635
					</p>
					<p className="text-slate-600 items-center flex justify-center">
						<i className="las la-phone text-xl mx-2 text-center  text-red-500"></i>(813) 475-4493
					</p>
				</div>
				<div className="flex flex-col justify-center">
					<h3 className=" text-center font-bold text-slate-600">Socials</h3>

					<div name="social-medias" className="flex p-4 gap-2 text-3xl">
						<i className="lab la-facebook text-blue-700"></i>
						<i className="lab la-instagram text-pink-700"></i>
						<i className="lab la-twitter text-blue-800"></i>
					</div>
				</div>
			</section>

			<section
				name="contact-section"
				className="flex flex-col gap-4 text-sm items-center   p-4 m-4 "
			>
				<div name="hours" className="flex flex-col border rounded-lg text-center p-4">
					<h3 className="border-b font-bold text-slate-600 text-center mb-2">Opening Hours</h3>
					<div className="flex items-center  m-2 p-1">
						<span className=" text-center text-slate-500 flex-1   ">Mon - Wed - Thur </span>

						<p className="text-green-600">
							<i className="las la-clock text-green-600 mx-2"></i>9:00 am - 8:00 pm
						</p>
					</div>
					<div className="flex items-center">
						<span className="text-red-500 text-center  flex-1 m-2 p-1 rounded-lg ">Tuesday</span>
						<p className="text-red-600">
							<i className="las la-times-circle mx-2"></i>Sorry We Are Close
						</p>
					</div>
					<div className="flex items-center  m-2 p-1">
						<span className=" text-center text-slate-500 flex-1   ">Friday - Sat </span>
						<p className="text-green-600">
							<i className="las la-clock mx-2"></i>9:00 am - 8:30 pm
						</p>
					</div>
					<div className="flex items-center  m-2 p-1">
						<span className=" text-center text-slate-500 flex-1   ">Sunday </span>
						<p className="text-green-600">
							<i className="las la-clock mx-2"></i>9:00 am - 6:00 pm
						</p>
					</div>
				</div>
			</section>

			<footer></footer>
		</div>
	);
}
