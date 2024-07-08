import { Provider } from 'react-redux';
import store from './store/store';
import { RouterProvider } from 'react-router-dom';
import route from './routes/route';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
