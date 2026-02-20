
// --- Icons ---
window.Icons = {
    Plus: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    ),
    Trash: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
    ),
    Edit: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    ),
    LogOut: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    ),
    Book: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    ),
    Menu: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    ),
    X: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    ),
    Search: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    ),
    Filter: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
    ),
    Rotate: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
    ),
    Star: ({ className, fill = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    ),
    ChevronDown: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>
    ),
    ChevronUp: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="18 15 12 9 6 15"></polyline></svg>
    )
};

// --- Components ---

window.Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-2.5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 select-none";
    const variants = {
        primary: "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5",
        secondary: "bg-white text-gray-700 border-2 border-gray-100 hover:border-orange-200 hover:bg-orange-50",
        danger: "bg-red-100 text-red-500 hover:bg-red-200",
        ghost: "bg-transparent text-gray-500 hover:text-orange-500 hover:bg-orange-50/50",
        icon: "p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-orange-500 border border-transparent hover:border-orange-100 shadow-sm hover:shadow-md"
    };
    
    return (
        <button 
            onClick={onClick} 
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

window.Input = ({ label, error, ...props }) => (
    <div className="flex flex-col gap-1.5 mb-5">
        {label && <label className="text-sm font-bold text-gray-600 ml-1">{label}</label>}
        <input 
            className={`px-4 py-3 border-2 rounded-2xl bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-200 ${error ? 'border-red-300 focus:border-red-400' : 'border-gray-100 focus:border-orange-300'}`}
            {...props}
        />
        {error && <span className="text-xs font-bold text-red-400 ml-1">{error}</span>}
    </div>
);

window.TextArea = ({ label, error, ...props }) => (
    <div className="flex flex-col gap-1.5 mb-5">
        {label && <label className="text-sm font-bold text-gray-600 ml-1">{label}</label>}
        <textarea 
            className={`px-4 py-3 border-2 rounded-2xl bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-200 ${error ? 'border-red-300 focus:border-red-400' : 'border-gray-100 focus:border-orange-300'}`}
            rows="3"
            {...props}
        />
        {error && <span className="text-xs font-bold text-red-400 ml-1">{error}</span>}
    </div>
);

window.Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-orange-900/20 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border-4 border-white ring-4 ring-orange-50">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-orange-50/50">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white text-gray-400 hover:text-orange-500 transition-colors">
                        <window.Icons.X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                    {children}
                </div>
            </div>
        </div>
    );
};

window.Card = ({ children, className = '', ...props }) => (
    <div className={`bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`} {...props}>
        {children}
    </div>
);

window.FlipCard = ({ front, back, isFlipped, onFlip, className = '' }) => {
    return (
        <div 
            className={`relative w-full h-80 cursor-pointer group perspective-1000 ${className}`}
            onClick={onFlip}
        >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                    <div className="w-full h-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50/30">
                        {front}
                        <div className="absolute bottom-4 right-4 text-orange-300 opacity-50 text-sm flex items-center gap-1">
                            <window.Icons.Rotate className="w-4 h-4" /> 點擊翻轉
                        </div>
                    </div>
                </div>
                
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-white rounded-3xl shadow-md border-2 border-orange-100 p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-orange-50/50 -z-10"></div>
                        {back}
                    </div>
                </div>
            </div>
        </div>
    );
};

window.ProgressBar = ({ current, total, label }) => {
    const percent = Math.min(100, Math.max(0, (current / total) * 100)) || 0;
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-1.5">
                <span>{label}</span>
                <span>{current} / {total}</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-pink-400 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

window.SearchBar = ({ value, onChange, placeholder = "搜尋..." }) => (
    <div className="relative">
        <window.Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
            type="text" 
            value={value} 
            onChange={onChange}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all shadow-sm"
            placeholder={placeholder}
        />
    </div>
);

window.Badge = ({ children, color = 'gray' }) => {
    const colorStyles = {
        green: 'bg-green-100 text-green-600',
        orange: 'bg-orange-100 text-orange-600',
        blue: 'bg-blue-100 text-blue-600',
        pink: 'bg-pink-100 text-pink-600',
        gray: 'bg-gray-100 text-gray-600'
    };
    
    return (
        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${colorStyles[color] || colorStyles.gray}`}>
            {children}
        </span>
    );
};

// --- Navbar ---
window.Navbar = ({ user, onLogout }) => {
    const location = window.useLocation();
    
    const navItems = [
        { path: '/', label: '單字', icon: '🎴' },
        { path: '/grammar', label: '文法', icon: '🧩' },
        { path: '/sentences', label: '情境句', icon: '💬' }
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-orange-100 shadow-sm">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                            日
                        </div>
                        <span className="font-bold text-xl text-gray-800 tracking-tight hidden md:block">Nihongo</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {navItems.map(item => {
                            const isActive = location.pathname === item.path;
                            return (
                                <window.Link 
                                    key={item.path} 
                                    to={item.path}
                                    className={`px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                                        isActive 
                                            ? 'bg-orange-50 text-orange-600 shadow-sm' 
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="hidden md:block">{item.label}</span>
                                </window.Link>
                            );
                        })}
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block text-right">
                            <div className="text-xs font-bold text-gray-400">登入者</div>
                            <div className="text-sm font-bold text-gray-700 truncate max-w-[120px]">{user?.email?.split('@')[0]}</div>
                        </div>
                        <window.Button onClick={onLogout} variant="icon" title="登出">
                            <window.Icons.LogOut className="w-5 h-5" />
                        </window.Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// --- Error Boundary ---
class ErrorBoundary extends window.React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 text-center">
                    <div className="text-6xl mb-4">😵</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Oops，載入資料出錯了！</h2>
                    <p className="text-gray-500 mb-4">{this.state.error && this.state.error.toString()}</p>
                    <window.Button onClick={() => window.location.reload()} variant="primary">
                        重新整理頁面
                    </window.Button>
                </div>
            );
        }
        return this.props.children;
    }
}
window.ErrorBoundary = ErrorBoundary;

// --- Template Component ---

window.LearningPageTemplate = ({
    tableName,
    title,
    icon,
    renderFront,
    renderBack,
    renderForm,
    defaultFormState,
    searchFields,
    quizConfig
}) => {
    const { useState, useEffect, useMemo } = window.React;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(defaultFormState);
    
    // View State
    const [viewMode, setViewMode] = useState('grid'); // 'grid', 'quiz'
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [flippedCards, setFlippedCards] = useState({});
    const [selectedCards, setSelectedCards] = useState(new Set());
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    
    // Quiz State
    const [quizItem, setQuizItem] = useState(null);
    const [isQuizFlipped, setIsQuizFlipped] = useState(false);

    // UI State
    const [expandedExamples, setExpandedExamples] = useState({});

    const fetchItems = async () => {
        try {
            const { data, error } = await window.supabase
                .from(tableName)
                .select('*')
                .order('created_at', { ascending: false });
            if (error) throw error;
            // Normalize data
            const normalizedData = data.map(item => ({
                ...item,
                status: item.status || 'new',
                is_favorite: item.is_favorite || false,
                example: item.example || ''
            }));
            setItems(normalizedData);
        } catch (error) {
            console.error(`Error fetching ${tableName}:`, error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
        const subscription = window.supabase
            .channel(`${tableName}_channel`)
            .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, fetchItems)
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, [tableName]);

    // Derived State
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            let matchesSearch = false;
            if (Array.isArray(searchFields)) {
                matchesSearch = searchFields.some(field => 
                    String(item[field] || '').toLowerCase().includes(searchQuery.toLowerCase())
                );
            } else if (typeof searchFields === 'function') {
                matchesSearch = searchFields(item).toLowerCase().includes(searchQuery.toLowerCase());
            }
            
            const matchesStatus = statusFilter === 'all' || 
                                 (statusFilter === 'favorite' ? item.is_favorite : item.status === statusFilter);
            return matchesSearch && matchesStatus;
        });
    }, [items, searchQuery, statusFilter, searchFields]);

    const progressStats = useMemo(() => {
        const total = items.length;
        const mastered = items.filter(w => w.status === 'mastered').length;
        return { total, mastered };
    }, [items]);

    // Actions
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = (await window.supabase.auth.getUser()).data.user;
            if (!user) return;

            const payload = { ...formData, user_id: user.id };
            
            if (editingId) {
                const { error } = await window.supabase
                    .from(tableName)
                    .update(payload)
                    .eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await window.supabase
                    .from(tableName)
                    .insert([payload]);
                if (error) throw error;
            }
            setIsModalOpen(false);
            resetForm();
        } catch (error) {
            console.error('Error saving item:', error);
            alert('儲存失敗 (如果是新欄位請先執行 SQL 更新資料庫): ' + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('確定要刪除嗎？')) return;
        try {
            await window.supabase.from(tableName).delete().eq('id', id);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleBatchDelete = async () => {
        if (!confirm(`確定要刪除選取的 ${selectedCards.size} 個項目嗎？`)) return;
        try {
            const ids = Array.from(selectedCards);
            await window.supabase.from(tableName).delete().in('id', ids);
            setSelectedCards(new Set());
            setIsSelectionMode(false);
        } catch (error) {
            console.error('Error batch deleting:', error);
        }
    };

    const handleBatchStatus = async (status) => {
        try {
            const ids = Array.from(selectedCards);
            await window.supabase.from(tableName).update({ status }).in('id', ids);
            setSelectedCards(new Set());
            setIsSelectionMode(false);
        } catch (error) {
            console.error('Error batch updating status:', error);
            alert('批次更新失敗 (如果是新欄位請先執行 SQL 更新資料庫): ' + error.message);
        }
    };

    const toggleFavorite = async (e, item) => {
        e.stopPropagation();
        try {
            // Optimistic update
            const newFav = !item.is_favorite;
            setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_favorite: newFav } : i));
            
            await window.supabase
                .from(tableName)
                .update({ is_favorite: newFav })
                .eq('id', item.id);
        } catch (error) {
            console.error('Error toggling favorite:', error);
            fetchItems(); // Revert on error
            alert('收藏失敗 (如果是新欄位請先執行 SQL 更新資料庫): ' + error.message);
        }
    };

    const handleCardFlip = (id) => {
        if (isSelectionMode) {
            const newSet = new Set(selectedCards);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            setSelectedCards(newSet);
        } else {
            setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
        }
    };

    const toggleExample = (e, id) => {
        e.stopPropagation();
        setExpandedExamples(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const startQuiz = () => {
        const pool = filteredItems.length > 0 ? filteredItems : items;
        if (pool.length === 0) return alert('沒有內容可以測驗！');
        const randomItem = pool[Math.floor(Math.random() * pool.length)];
        setQuizItem(randomItem);
        setIsQuizFlipped(false);
        setViewMode('quiz');
    };

    const nextQuiz = () => {
        const pool = filteredItems.length > 0 ? filteredItems : items;
        let randomItem;
        do {
            randomItem = pool[Math.floor(Math.random() * pool.length)];
        } while (pool.length > 1 && randomItem.id === quizItem.id);
        setQuizItem(randomItem);
        setIsQuizFlipped(false);
    };

    const resetForm = () => {
        setFormData(defaultFormState);
        setEditingId(null);
    };

    const openEdit = (item) => {
        // Only copy fields that are in defaultFormState
        const cleanData = {};
        Object.keys(defaultFormState).forEach(key => {
            cleanData[key] = (item[key] !== undefined && item[key] !== null) ? item[key] : defaultFormState[key];
        });
        setFormData(cleanData);
        setEditingId(item.id);
        setIsModalOpen(true);
    };

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-500"></div>
        </div>
    );

    // --- Render Quiz Mode ---
    if (viewMode === 'quiz' && quizItem) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-8 pb-24 min-h-screen flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <window.Button onClick={() => setViewMode('grid')} variant="ghost">
                        ← 返回列表
                    </window.Button>
                    <div className="text-xl font-bold text-orange-500">隨機測驗</div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <window.FlipCard
                        isFlipped={isQuizFlipped}
                        onFlip={() => setIsQuizFlipped(!isQuizFlipped)}
                        className="h-96"
                        front={quizConfig.questionField(quizItem)}
                        back={quizConfig.answerField(quizItem)}
                    />

                    <div className="flex justify-center gap-4 mt-8">
                        <window.Button onClick={nextQuiz} className="px-12 py-4 text-lg shadow-xl">
                            下一個 <window.Icons.Rotate className="w-5 h-5 ml-2" />
                        </window.Button>
                    </div>
                </div>
            </div>
        );
    }

    // --- Render Grid Mode ---
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 pb-32 md:pb-12">
            {/* Header Stats & Actions */}
            <div className="mb-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 tracking-tight flex items-center gap-3">
                            <span className="text-4xl">{icon}</span> {title}
                        </h1>
                        <p className="text-gray-500 mt-2 font-medium">
                            學習目標: {progressStats.mastered} / {progressStats.total} 已熟記
                        </p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <window.Button onClick={startQuiz} variant="secondary" className="flex-1 md:flex-none">
                            <span className="text-xl">🎲</span> 隨機測驗
                        </window.Button>
                        <window.Button onClick={() => { resetForm(); setIsModalOpen(true); }} className="flex-1 md:flex-none shadow-orange-200">
                            <window.Icons.Plus className="w-5 h-5" /> 新增
                        </window.Button>
                    </div>
                </div>

                <window.ProgressBar 
                    current={progressStats.mastered} 
                    total={progressStats.total} 
                    label="總體熟練度" 
                />

                {/* Filter & Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex-1">
                        <window.SearchBar 
                            value={searchQuery} 
                            onChange={e => setSearchQuery(e.target.value)} 
                            placeholder="搜尋內容..." 
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {[
                            { id: 'all', label: '全部', color: 'gray' },
                            { id: 'new', label: '新項目', color: 'blue' },
                            { id: 'learning', label: '學習中', color: 'orange' },
                            { id: 'mastered', label: '已熟記', color: 'green' },
                            { id: 'favorite', label: '收藏', color: 'pink' }
                        ].map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setStatusFilter(filter.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                                    statusFilter === filter.id 
                                        ? `bg-${filter.color}-100 text-${filter.color}-600 ring-2 ring-${filter.color}-200` 
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                    <button 
                        onClick={() => setIsSelectionMode(!isSelectionMode)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                            isSelectionMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {isSelectionMode ? '完成選取' : '批次選取'}
                    </button>
                </div>
            </div>

            {/* Batch Actions Bar (Floating) */}
            {isSelectionMode && selectedCards.size > 0 && (
                <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-4">
                    <span className="font-bold text-sm">已選 {selectedCards.size} 個</span>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <button onClick={() => handleBatchStatus('mastered')} className="hover:text-green-400 text-sm font-bold">標記已熟</button>
                    <button onClick={() => handleBatchStatus('learning')} className="hover:text-orange-400 text-sm font-bold">標記學習</button>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <button onClick={handleBatchDelete} className="hover:text-red-400 text-sm font-bold">刪除</button>
                </div>
            )}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="relative group">
                        {/* Selection Checkbox Overlay */}
                        {isSelectionMode && (
                            <div className="absolute top-4 left-4 z-20" onClick={(e) => e.stopPropagation()}>
                                <input 
                                    type="checkbox" 
                                    checked={selectedCards.has(item.id)}
                                    onChange={() => handleCardFlip(item.id)}
                                    className="w-6 h-6 rounded-md text-orange-500 focus:ring-orange-500 border-gray-300 cursor-pointer"
                                />
                            </div>
                        )}

                        <window.FlipCard
                            isFlipped={flippedCards[item.id]}
                            onFlip={() => handleCardFlip(item.id)}
                            front={
                                <div className="flex flex-col items-center w-full relative">
                                    <div className="absolute -top-2 -left-2 z-10">
                                        {item.status === 'mastered' && <window.Badge color="green">🎉 已熟記</window.Badge>}
                                        {item.status === 'learning' && <window.Badge color="orange">📖 學習中</window.Badge>}
                                        {item.status === 'new' && <window.Badge color="blue">🌱 新項目</window.Badge>}
                                    </div>
                                    
                                    <button 
                                        onClick={(e) => toggleFavorite(e, item)}
                                        className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-orange-50 transition-colors z-10"
                                    >
                                        <window.Icons.Star 
                                            className={`w-6 h-6 transition-all ${item.is_favorite ? 'text-yellow-400 fill-yellow-400 scale-110' : 'text-gray-300 hover:text-yellow-400'}`} 
                                        />
                                    </button>

                                    {renderFront(item)}
                                </div>
                            }
                            back={
                                <div className="flex flex-col items-center w-full h-full relative">
                                    <div className="absolute top-0 right-0 flex gap-1 z-10">
                                        <button onClick={(e) => { e.stopPropagation(); openEdit(item); }} className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg">
                                            <window.Icons.Edit className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center items-center text-center w-full overflow-hidden">
                                        {renderBack(item)}
                                        
                                        {item.example && (
                                            <div className="w-full relative z-10">
                                                <button 
                                                    onClick={(e) => toggleExample(e, item.id)}
                                                    className={`flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${
                                                        expandedExamples[item.id] ? 'text-orange-500' : 'text-orange-300 hover:text-orange-400'
                                                    }`}
                                                >
                                                    {expandedExamples[item.id] ? (
                                                        <><window.Icons.ChevronUp className="w-3 h-3" /> 收起例句</>
                                                    ) : (
                                                        <><window.Icons.ChevronDown className="w-3 h-3" /> 查看例句</>
                                                    )}
                                                </button>
                                                
                                                <div 
                                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                        expandedExamples[item.id] ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                                    onClick={(e) => e.stopPropagation()} 
                                                >
                                                    <div className="bg-orange-50/80 p-3 rounded-xl text-left overflow-y-auto max-h-32 no-scrollbar">
                                                        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{item.example}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>

            {filteredItems.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-gray-500 text-lg font-medium">找不到符合條件的項目</p>
                    {statusFilter !== 'all' && (
                        <button onClick={() => setStatusFilter('all')} className="mt-4 text-orange-500 font-bold hover:underline">
                            清除篩選
                        </button>
                    )}
                </div>
            )}

            <window.Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title={editingId ? '編輯' : '新增'}
            >
                <form onSubmit={handleSubmit}>
                    {renderForm(formData, setFormData)}
                    <div className="flex justify-end gap-2 mt-6">
                        <window.Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>取消</window.Button>
                        <window.Button type="submit">儲存</window.Button>
                    </div>
                </form>
            </window.Modal>
        </div>
    );
};
