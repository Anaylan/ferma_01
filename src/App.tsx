import { Box, Spinner } from "@chakra-ui/react";
import { Fragment, Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./utils/router";

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
						<Spinner size={"xl"} color='white' />
					</Box>
				}>
				<RouterProvider router={router} />
			</Suspense>
		</Fragment>
	);
}

export default App;
