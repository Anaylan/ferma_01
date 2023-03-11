import { Fragment } from "react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Home } from "@/pages/Home";
function App() {
	return (
		<Fragment>
			<DefaultLayout>
				<Home />
			</DefaultLayout>
		</Fragment>
	);
}

export default App;
