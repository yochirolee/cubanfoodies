import Head from "next/head";
import { ProductsList } from "../components/products/productsList";
import { Categories } from "../components/ui/categories/categories";
import { Header } from "../components/ui/header/navbar";
import { Slider } from "../components/ui/slider/slider";
import { ProductsListData } from "../assets/productListData";
import { CategoriesListData } from "../assets/categoriesListData";
import { BookTableDialog } from "../components/dialogs/bookTableDialog";

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
			<Header />
			<Slider />
			<Categories categories={CategoriesListData} />
			<ProductsList products={ProductsListData} />
			<BookTableDialog />

			<section
				name="socials"
				className=" m-2 p-4 bg-gray-50  items-center   h-32  rounded-xl shadow-lg"
			>
				<div className="flex flex-col justify-center mt-4">
					<h3 className=" text-center font-bold text-slate-600">Socials</h3>

					<div name="social-medias" className="flex place-content-center p-4 gap-2 text-3xl">
						<i className="lab la-facebook text-blue-700"></i>
						<i className="lab la-instagram text-pink-700"></i>
						<i className="lab la-twitter text-blue-800"></i>
					</div>
				</div>
			</section>

			<section className="flex m-2 p-4 bg-gray-50  items-center   h-32  rounded-xl shadow-lg   ">
				<div className=" text-center p-4 ">
					<h3 className=" mb-2  font-bold text-slate-600">Location and Phone</h3>
					<p className=" text-sm text-slate-500 text-center items-center flex">
						<i className="las la-map-marker-alt text-xl mx-2  text-red-500"></i>13855 W hillsborough
						Ave Tampa, Fl 33635
					</p>
					<p className="text-slate-600 text-sm items-center flex justify-center">
						<i className="las la-phone text-xl mx-2 text-center  text-red-500"></i>(813) 475-4493
					</p>
				</div>
			</section>

			<section
				name="contact-section"
				className="flex m-2 p-4 bg-gray-50  items-center    rounded-xl shadow-lg "
			>
				<div name="hours" className="flex flex-col  text-center p-4">
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
