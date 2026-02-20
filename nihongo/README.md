# Nihongo - 日語學習字卡

這是一個基於 React + Tailwind CSS + Supabase 的日語學習卡片網頁應用程式。

## 功能特色

- **單字卡**：平假名、漢字、中文意思對照，支援翻轉與發音。
- **文法筆記**：詳細的文法解說與例句。
- **情境句**：實用生活例句與註解。
- **酷功能**：
  - 隨機測驗模式
  - 學習進度追蹤 (新項目/學習中/已熟記)
  - 收藏功能
  - 關鍵字搜尋與篩選

## 技術架構

- **Frontend**: React 18 (CDN version), Tailwind CSS
- **Routing**: React Router (HashRouter for GitHub Pages compatibility)
- **Backend**: Supabase (Database & Auth)

## 如何部署到 GitHub Pages

1. 將所有檔案推送到 GitHub Repository 的 `main` 分支。
2. 確保 `index.html` 位於根目錄。
3. 到 **Settings** > **Pages**，將 Source 設定為 `main` branch 和 `/ (root)` folder。
4. 等待部署完成，即可透過 `https://<username>.github.io/<repo-name>/` 訪問。

## 注意事項

- 本專案使用 Supabase 的免費層級，請確保 `js/lib/supabaseClient.js` 中的 API Key 正確。
- 由於使用 HashRouter，網址會包含 `/#/` (例如 `/#/grammar`)，這是正常現象。