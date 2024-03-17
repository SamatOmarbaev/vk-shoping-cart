import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.ts'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>
)
