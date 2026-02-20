// Check global dependencies
if (!window.React) console.error('React not loaded');
if (!window.ReactDOM) console.error('ReactDOM not loaded');
if (!window.ReactRouterDOM) {
    console.error('ReactRouterDOM not loaded');
    alert('ReactRouterDOM failed to load');
    throw new Error('ReactRouterDOM not loaded');
}
if (!window.supabase) console.error('Supabase not loaded');

console.log('Dependencies loaded:', {
    React: !!window.React,
    ReactDOM: !!window.ReactDOM,
    ReactRouterDOM: !!window.ReactRouterDOM,
    supabase: !!window.supabase
});

// Expose React hooks to window
try {
    window.useState = React.useState;
    window.useEffect = React.useEffect;
    window.useRef = React.useRef;
    window.useMemo = React.useMemo;
    window.useCallback = React.useCallback;

    // Expose React Router components and hooks to window
    window.Link = window.ReactRouterDOM.Link;
    window.useLocation = window.ReactRouterDOM.useLocation;
    window.useNavigate = window.ReactRouterDOM.useNavigate;
    window.HashRouter = window.ReactRouterDOM.HashRouter;
    window.Routes = window.ReactRouterDOM.Routes;
    window.Route = window.ReactRouterDOM.Route;
    window.Navigate = window.ReactRouterDOM.Navigate;
    window.BrowserRouter = window.ReactRouterDOM.BrowserRouter;
} catch (e) {
    console.error('Error exposing globals:', e);
    alert('Error initializing app: ' + e.message);
}
