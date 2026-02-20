const App = () => {
    const { useState, useEffect } = window.React;
    const { HashRouter, Routes, Route, Navigate } = window;

    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for session
        window.supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = window.supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogout = async () => {
        await window.supabase.auth.signOut();
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-gray-500 bg-cream">系統載入中...</div>;
    }

    if (!session) {
        return <window.Login />;
    }

    return (
        <window.ErrorBoundary>
            <HashRouter>
                <div className="min-h-screen bg-cream">
                    <window.Navbar user={session.user} onLogout={handleLogout} />
                    <main className="fade-in">
                        <Routes>
                            <Route path="/" element={<window.Words />} />
                            <Route path="/grammar" element={<window.Grammar />} />
                            <Route path="/sentences" element={<window.Sentences />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        </window.ErrorBoundary>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
