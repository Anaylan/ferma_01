import { DefaultLayout } from "@/layouts/DefaultLayout";

import { lazy } from "react";
import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/pages/Error";

const Home = lazy(() => import("@/pages/Home"));
const Privacy = lazy(() => import("@/pages/Privacy"));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			errorElement={<ErrorBoundary />}
			element={<DefaultLayout />}>
			<Route index element={<Home />} />
			<Route path='privacy' element={<Privacy />} />
		</Route>
	)
);
