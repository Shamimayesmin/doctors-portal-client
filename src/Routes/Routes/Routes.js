import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Myappointment from "../../Pages/Dashboard/Myappointment/Myappointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/appointment",
				element: <Appointment></Appointment>,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		errorElement: <DisplayError></DisplayError>,
		children: [
			{
				path: "/dashboard",
				element: <Myappointment></Myappointment>,
			},
			{
				path: "/dashboard/allusers",
				element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
				// element: <AllUsers></AllUsers>,
			},
			{
				path: "/dashboard/adddoctor",
				element: (
					<AdminRoute>
						<AddDoctor></AddDoctor>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/managedoctors",
				element: (
					<AdminRoute>
						<ManageDoctors></ManageDoctors>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(
						`https://doctors-portal-server-pearl.vercel.app/bookings/${params.id}`
					),
			},
		],
	},
]);

export default router;
