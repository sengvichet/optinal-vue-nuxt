export default function (context) {
    console.log('[Middleware] Pulling Posts')
        context.store.dispatch('postPull')
} 