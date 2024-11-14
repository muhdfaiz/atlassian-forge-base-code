import * as ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import App from './App';
import React from 'react';
import AppProvider from '@atlaskit/app-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);
