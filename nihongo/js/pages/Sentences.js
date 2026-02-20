window.Sentences = () => {
    return (
        <window.ErrorBoundary>
            <window.LearningPageTemplate
                tableName="sentences"
                title="情境句"
                icon="💬"
                renderFront={(item) => (
                    <div className="text-center">
                        <div className="text-sm text-gray-400 font-bold mb-4">日文句子</div>
                        <div className="text-3xl font-bold text-gray-800 leading-relaxed">{item.japanese_sentence}</div>
                    </div>
                )}
                renderBack={(item) => (
                    <div className="text-center">
                        <div className="text-sm text-gray-400 font-bold mb-2">中文語境</div>
                        <div className="text-2xl font-bold text-gray-800 mb-6">{item.chinese_context}</div>
                        
                        {item.note && (
                            <div className="bg-orange-50 p-4 rounded-xl text-left">
                                <div className="flex gap-2 items-center mb-2">
                                    <span className="text-xl">💡</span>
                                    <span className="text-xs font-bold text-orange-400">註解</span>
                                </div>
                                <div className="text-gray-700 whitespace-pre-wrap">{item.note}</div>
                            </div>
                        )}
                    </div>
                )}
                renderForm={(formData, setFormData) => (
                    <>
                        <window.Input 
                            label="中文語境" 
                            value={formData.chinese_context}
                            onChange={e => setFormData({...formData, chinese_context: e.target.value})}
                            required
                            placeholder="例：在餐廳點餐時"
                        />
                        <window.TextArea 
                            label="日文句子" 
                            value={formData.japanese_sentence}
                            onChange={e => setFormData({...formData, japanese_sentence: e.target.value})}
                            required
                            placeholder="例：メニューを見せていただけますか。"
                            rows="3"
                        />
                        <window.TextArea 
                            label="註解 (可選)" 
                            value={formData.note}
                            onChange={e => setFormData({...formData, note: e.target.value})}
                            placeholder="例：敬語用法，對長輩或店員使用"
                            rows="2"
                        />
                    </>
                )}
                defaultFormState={{ chinese_context: '', japanese_sentence: '', note: '' }}
                searchFields={['chinese_context', 'japanese_sentence', 'note']}
                quizConfig={{
                    questionField: (item) => (
                        <div className="text-center">
                            <div className="text-sm text-gray-400 font-bold mb-4">請問這句話的意思是？</div>
                            <div className="text-3xl font-bold text-gray-800 leading-relaxed">{item.japanese_sentence}</div>
                        </div>
                    ),
                    answerField: (item) => (
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-800 mb-4">{item.chinese_context}</div>
                            {item.note && (
                                <div className="mt-4 p-4 bg-orange-50 rounded-xl text-left">
                                    <div className="text-xs font-bold text-orange-400 mb-1">註解</div>
                                    <div className="text-gray-700 whitespace-pre-wrap">{item.note}</div>
                                </div>
                            )}
                        </div>
                    )
                }}
            />
        </window.ErrorBoundary>
    );
};
