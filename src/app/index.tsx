import './index.css'
import { router } from "./routes";
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { setupStore } from '../entities';
import { Provider } from 'react-redux';

const store = setupStore();

export function App() {
  return (
    <Provider store = {store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}
