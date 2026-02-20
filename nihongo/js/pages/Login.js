

window.Login = () => {
    const { useState } = window.React;
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isSignUp) {
                const { error } = await window.supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                alert('註冊成功！請檢查您的信箱以驗證帳號。');
            } else {
                const { error } = await window.supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cream px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border-4 border-white ring-4 ring-orange-50 animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl mb-4 shadow-sm">
                        <window.Icons.Book className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                        {isSignUp ? '建立帳號' : '歡迎回來'}
                    </h1>
                    <p className="text-gray-500 font-medium">日語學習字卡管理系統</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <window.Input
                        label="Email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                    />
                    <window.Input
                        label="密碼"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />

                    {error && (
                        <div className="p-4 bg-red-50 text-red-500 text-sm font-bold rounded-2xl border border-red-100 flex items-center gap-2">
                            <window.Icons.X className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <window.Button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 text-lg shadow-orange-200"
                    >
                        {loading ? '處理中...' : (isSignUp ? '註冊' : '登入')}
                    </window.Button>
                </form>

                <div className="mt-8 text-center text-sm font-medium text-gray-500">
                    {isSignUp ? '已經有帳號？' : '還沒有帳號？'}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="ml-1 text-orange-500 hover:text-orange-600 font-bold hover:underline decoration-2 underline-offset-2 transition-all"
                    >
                        {isSignUp ? '登入' : '註冊新帳號'}
                    </button>
                </div>
            </div>
        </div>
    );
};
