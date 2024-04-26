import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface Props{
 Component: React.FC;
 pageProps: Record<string, unknown>; // Interface for unknown page props

}

console.log("store", store);

function MyApp({Component, pageProps}:Props) {
    return(
        <Provider store={store}>
        <Component  {...pageProps} />
        </Provider>
    )
}

export default MyApp