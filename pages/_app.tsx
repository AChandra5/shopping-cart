import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  Component: React.FC;
  pageProps: Record<string, unknown>; // Interface for unknown page props
}

console.log("store", store);

function MyApp({ Component, pageProps }: Props) {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <PersistGate loading={"loading..."} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default MyApp;
