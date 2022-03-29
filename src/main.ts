import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, h, provide} from 'vue'
import App from './App.vue'

const httpLink = createHttpLink({
    uri: 'https://graphql-gateway.axieinfinity.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
}); 

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app')