import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SnackbarProvider, useSnackbar } from 'notistack'

interface Props{
 Component: React.FC;
 pageProps: Record<string, unknown>; // Interface for unknown page props

}

console.log("store", store);

function MyApp({Component, pageProps}:Props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    return(
        <SnackbarProvider>
        <Provider store={store}>
        <Component  {...pageProps} />
        </Provider>
        </SnackbarProvider>
    )
}

export default MyApp