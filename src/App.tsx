import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import { Fragment, Suspense, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./utils/router";
import { QueryContextModal, StatusEnum } from "./utils/context/QueryContext";
import { SendData } from "./components/Form/SendData";

if (process.env.NODE_ENV == "production") {
	var script = document.createElement("script");
	script.textContent = `
	var _paq = window._paq = window._paq || [];
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
	  var u="//matomo.genshin-easy.ru/";
	  _paq.push(['setTrackerUrl', u+'matomo.php']);
	  _paq.push(['setSiteId', '1']);
	  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
	})();
  `;

	document.body.appendChild(script);
}

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Fragment>
			<Suspense
				fallback={
					<Box
						width={"100wv"}
						height='100vh'
						alignItems={"center"}
						justifyContent='center'
						display='flex'>
						<Spinner as={"span"} size={"xl"} color='white' />
					</Box>
				}>
				<QueryContextModal.Provider
					value={{
						isOpen,
						onOpen,
						onClose,
					}}>
					<RouterProvider router={router} />
				</QueryContextModal.Provider>
			</Suspense>
		</Fragment>
	);
}

export default App;
