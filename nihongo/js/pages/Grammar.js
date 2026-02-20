window.Grammar = () => {
    return (
        <window.ErrorBoundary>
            <window.LearningPageTemplate
                tableName="grammar"
                title="文法筆記"
                icon="🧩"
                renderFront={(item) => (
                    <div className="text-center">
                        <div className="text-sm text-gray-400 font-bold mb-4">文法</div>
                        <div className="text-4xl font-bold text-gray-800 mb-2">{item.grammar}</div>
                    </div>
                )}
                renderBack={(item) => (
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800 mb-4">{item.meaning}</div>
                        <div className="space-y-4 text-left">
                            {item.context && (
                                <div className="bg-orange-50 p-3 rounded-lg">
                                    <div className="text-xs font-bold text-orange-400 mb-1">情境</div>
                                    <div className="text-gray-700">{item.context}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                renderForm={(formData, setFormData) => (
                    <>
                        <window.Input 
                            label="文法 (假名/句型)" 
                            value={formData.grammar}
                            onChange={e => setFormData({...formData, grammar: e.target.value})}
                            required
                            placeholder="例：～てもいいです"
                        />
                        <window.Input 
                            label="中文意思" 
                            value={formData.meaning}
                            onChange={e => setFormData({...formData, meaning: e.target.value})}
                            required
                            placeholder="例：可以..."
                        />
                        <window.Input 
                            label="情境說明" 
                            value={formData.context}
                            onChange={e => setFormData({...formData, context: e.target.value})}
                            placeholder="例：表示許可"
                        />
                        <window.TextArea 
                            label="例句" 
                            value={formData.example}
                            onChange={e => setFormData({...formData, example: e.target.value})}
                            placeholder="例：写真を撮ってもいいですか。"
                        />
                    </>
                )}
                defaultFormState={{ grammar: '', meaning: '', context: '', example: '' }}
                searchFields={['grammar', 'meaning', 'context', 'example']}
                quizConfig={{
                    questionField: (item) => (
                        <div className="text-center">
                            <div className="text-sm text-gray-400 font-bold mb-4">請問這個文法的意思是？</div>
                            <div className="text-6xl font-bold text-gray-800 mb-2">{item.grammar}</div>
                        </div>
                    ),
                    answerField: (item) => (
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-800 mb-4">{item.meaning}</div>
                            {item.example && (
                                <div className="mt-4 p-4 bg-orange-50 rounded-xl text-left">
                                    <div className="text-xs font-bold text-orange-400 mb-1">例句</div>
                                    <div className="text-gray-700 whitespace-pre-wrap">{item.example}</div>
                                </div>
                            )}
                        </div>
                    )
                }}
            />
        </window.ErrorBoundary>
    );
};
