import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider,} from '@apollo/client';

const api = import.meta.env.BACKEND_API_URL;

const client = new ApolloClient({
 uri: `${api}/graphql`,
 cache: new InMemoryCache(),
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
