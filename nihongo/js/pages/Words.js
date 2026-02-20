window.Words = () => {
    return (
        <window.ErrorBoundary>
            <window.LearningPageTemplate
                tableName="words"
                title="單字 / 漢字"
                icon="🎴"
                renderFront={(item) => (
                    <>
                        <div className="text-4xl font-black text-gray-800 mb-2 tracking-wide">{item.japanese}</div>
                        <div className="text-lg text-gray-500 font-medium font-serif">{item.kana}</div>
                    </>
                )}
                renderBack={(item) => (
                    <div className="text-xl font-bold text-gray-700 leading-relaxed">{item.chinese}</div>
                )}
                defaultFormState={{ japanese: '', kana: '', chinese: '', example: '', status: 'new' }}
                renderForm={(formData, setFormData) => (
                    <>
                        <window.Input 
                            label="單字 / 漢字" 
                            value={formData.japanese} 
                            onChange={e => setFormData({...formData, japanese: e.target.value})} 
                            placeholder="例如：猫"
                            required
                        />
                        <window.Input 
                            label="平假名 / 讀音" 
                            value={formData.kana} 
                            onChange={e => setFormData({...formData, kana: e.target.value})} 
                            placeholder="例如：ねこ"
                            required
                        />
                        <window.Input 
                            label="中文意思" 
                            value={formData.chinese} 
                            onChange={e => setFormData({...formData, chinese: e.target.value})} 
                            placeholder="例如：貓"
                            required
                        />
                        <window.TextArea 
                            label="例句 (選填)" 
                            value={formData.example} 
                            onChange={e => setFormData({...formData, example: e.target.value})} 
                            placeholder="例如：吾輩は猫である。"
                        />
                    </>
                )}
                searchFields={['japanese', 'kana', 'chinese']}
                quizConfig={{
                    questionField: (item) => (
                        <div className="text-center">
                            <div className="text-5xl font-black text-gray-800 mb-4">{item.japanese}</div>
                            <div className="text-2xl text-gray-500 font-serif">{item.kana}</div>
                        </div>
                    ),
                    answerField: (item) => (
                        <div className="text-3xl font-bold text-gray-700">{item.chinese}</div>
                    )
                }}
            />
        </window.ErrorBoundary>
    );
};
