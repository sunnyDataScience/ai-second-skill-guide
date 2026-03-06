# Chapter 6｜任務→工具矩陣：不要追新，追「可交付」

> 這一章幫你解決「工具太多不知道選哪個」的焦慮。答案很簡單：先確認你的任務，再選工具。

---

## 為什麼不列「2026 年 Top 10 AI 工具」？

因為工具每三個月就換一輪。你今天收藏的清單，三個月後一半會改版、兩個會消失。

你可能正處在這樣的階段：手機裡存了一堆 AI 工具截圖，電腦裝了好幾個試用版，但每次真的要做事的時候，還是不確定該打開哪一個。

**真正不會過期的，是「任務分類」。**

你永遠需要整理文件、分析數據、做簡報、串流程。工具會換，任務不會。所以這章用「你要做什麼」來分類，再對應目前最主流的工具。

先把「用對的工具做對的任務」這件事做好，再來談追新工具。

---

## 一張表看完

| 任務類別 | 首選工具 | 替代方案 | 選型理由 |
|---------|---------|---------|---------|
| **文書整理** | ChatGPT / Claude | Gemini / Notion AI | ChatGPT 通用性最強；Claude 擅長長文推理 |
| **深度研究** | Google NotebookLM / Perplexity | ChatGPT Deep Research | NotebookLM 可上傳 50 份文件交叉分析 |
| **數據分析** | ChatGPT Code Interpreter / Claude Artifacts | Julius AI / Sheets + Gemini | 上傳 CSV 即分析；Artifacts 支援互動圖表 |
| **簡報產出** | Gamma / Plus AI | Beautiful.ai / Canva | Gamma 速度最快；Plus AI 原生支援 PPT |
| **視覺設計** | Canva AI (Magic Studio) | Figma AI / Adobe Firefly | Canva 門檻最低；Figma 適合專業 UI/UX |
| **工作流自動化** | Make / Zapier | n8n | Zapier 最易上手；Make 複雜邏輯更強；n8n 最適合 AI 工作流 |
| **程式輔助** | Cursor / GitHub Copilot | Claude Code / Windsurf | Cursor 評分 4.9/5；Copilot 用戶最多、最便宜 |

---

## 六大任務類別

### 類別 1｜文書整理與研究

**適用場景：** 會議紀錄、Email 撰寫、公文整理、摘要、翻譯、校稿、深度研究

對一個每天要回覆十幾封 Email 的業務來說，光是讓 AI 幫忙打草稿，就能省下大量的時間和腦力。

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| ChatGPT | 通用文字任務 | 貼上原文 + STRIKE 指令 | 免費 / Plus $20/月 |
| Claude | 長文處理、邏輯推理 | 適合報告、企劃、需要結構化輸出的場景 | 免費 / Pro $20/月 |
| Gemini | Google 生態系內使用 | 在 Gmail、Docs、Sheets 內直接呼叫 | 免費 / Advanced $20/月 |
| NotebookLM | 深度文件研究 | 上傳多份 PDF，AI 變成該主題專家 | 免費 |
| Perplexity | 即時搜尋 + 附來源 | 需要最新資訊且要求引用來源的查詢 | 免費 / Pro $20/月 |

**怎麼選：** 日常文字工作用 ChatGPT 或 Claude 擇一。需要深度研究特定主題用 NotebookLM（免費）。需要最新資訊用 Perplexity。

### 類別 2｜數據分析

**適用場景：** 數據清洗、統計分析、圖表製作、趨勢解讀

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| ChatGPT Code Interpreter | 上傳 CSV 直接分析 | 上傳檔案 + 說你要什麼分析 | Plus $20/月 |
| Claude Artifacts | 互動式圖表與分析 | 貼數據 + 要求視覺化 | 免費 / Pro $20/月 |
| Julius AI | AI 原生數據分析平台 | 專為數據分析設計，支援自然語言查詢 | 免費 / $20/月起 |
| Google Sheets + Gemini | 試算表內分析 | 在表格內用 AI 公式輔助 | 免費 / Workspace 方案 |
| Excel + Copilot | 微軟生態系內分析 | 在 Excel 內用 Copilot 分析數據 | Microsoft 365 Copilot $30/月 |

**怎麼選：** 新手從 ChatGPT Code Interpreter 開始（上傳檔案即可）。已經習慣試算表的用 Sheets + Gemini 或 Excel + Copilot。想要更專業的分析可試 Julius AI。

### 類別 3｜簡報產出

**適用場景：** 簡報大綱、講稿、版型設計、視覺素材

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| Gamma | 最快速簡報生成 | 貼大綱，自動產出完整簡報 | 免費 / Plus $10/月 |
| Plus AI | 原生 PPT / Google Slides 整合 | 在 PowerPoint 或 Google Slides 內直接生成 | $15/月起 |
| Beautiful.ai | 智慧設計引擎 | 自動套用設計最佳實踐，維持視覺一致 | $12/月起 |
| Canva | 海量模板 + AI 設計 | 數千種簡報模板，AI 一鍵生成視覺素材 | 免費 / Pro $13/月 |

**怎麼選：** 要最快出初稿用 Gamma。需要匯出 PowerPoint 或在 Google Slides 編輯用 Plus AI。重視視覺設計用 Beautiful.ai 或 Canva。

### 類別 4｜工作流自動化

**適用場景：** 收集→整理→觸發→通知 的重複流程

對一個需要每天從多個平台收集客戶回饋的客服主管來說，自動化工具（Automation，指讓系統自動執行重複動作的工具）能把「手動複製貼上」變成「自動收集整理」。

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| Zapier | 最易上手，8,000+ 整合 | 「當 X 發生，自動做 Y」，非技術人員首選 | 免費（100 任務/月）/ $20/月起 |
| Make | 多步驟視覺化流程 | 拖拉設定觸發條件，複雜邏輯與分支更強 | 免費（1,000 操作/月）/ $9/月起 |
| n8n | AI 原生、可自架 | 內建 70+ AI 節點，最適合 AI Agent 工作流 | 自架免費 / Cloud $20/月起 |

**怎麼選：** 完全不懂技術從 Zapier 開始。需要複雜邏輯或預算有限用 Make。要做 AI Agent 工作流或想自架用 n8n。三者穩定性都在 99% 以上。

### 類別 5｜視覺設計

**適用場景：** 社群圖片、品牌素材、UI/UX 設計

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| Canva AI (Magic Studio) | 非設計師首選 | AI 一鍵生成多版本預覽，模板數千種 | 免費 / Pro $13/月 |
| Figma AI | 專業 UI/UX 設計 | AI 生成、設計檢查、原型製作 | 免費（Starter）/ $15/用戶/月 |
| Adobe Firefly | 企業級 AI 圖像生成 | 注重版權安全與品牌合規 | Creative Cloud 內含 |

**怎麼選：** 非設計師做行銷素材用 Canva。專業設計師用 Figma。企業注重版權合規用 Adobe Firefly。

### 類別 6｜程式輔助

**適用場景：** 寫程式、Debug、自動化腳本、重構

| 工具 | 最適用情境 | 一句話怎麼用 | 費用參考 |
|------|-----------|-------------|---------|
| Cursor | AI 原生 IDE，評分 4.9/5 | 全專案上下文理解、多檔案 Composer 模式 | 免費 / Pro $20/月 |
| GitHub Copilot | 用戶最多（2,000 萬+） | VS Code 外掛，擅長樣板程式碼與測試 | 免費（有限）/ $10/月 |
| Claude Code | 複雜推理與大規模重構 | 需要深度邏輯推理的場景 | 依用量計費 |

**怎麼選：** 日常開發首選 Cursor（全專案理解最強）或 Copilot（最便宜、整合最廣）。需要複雜推理用 Claude Code。

---

## 怎麼用這張矩陣

1. **先確認你的任務屬於哪一類**
2. **從該類別挑一個工具**（優先選你已經有帳號的）
3. **用 STRIKE 下指令，做出成果**
4. **不滿意再換替代方案**

**原則：一個任務用一個工具，用到熟再換。** 跟理財一樣——與其同時開十個帳戶，不如先把一個帳戶管好。

---

## 費用速算

如果你只選一個付費工具，建議從 ChatGPT Plus 或 Claude Pro 開始（$20/月），涵蓋文書 + 數據 + 程式三大類。等確認需求後再加購專用工具。

| 預算等級 | 建議組合 | 月費 |
|---------|---------|------|
| 免費起步 | ChatGPT 免費版 + NotebookLM + Canva 免費版 | $0 |
| 基礎版 | ChatGPT Plus（或 Claude Pro）+ Gamma 免費版 | ~$20/月 |
| 進階版 | ChatGPT Plus + Make + Gamma Plus | ~$50/月 |
| 專業版 | Claude Pro + Cursor Pro + Make + Gamma | ~$70/月 |

---

## 任務→工具速查表

```
我要整理文字       → ChatGPT / Claude
我要做深度研究     → NotebookLM / Perplexity
我要分析數據       → Code Interpreter / Julius AI / Sheets + Gemini
我要做簡報         → Gamma（快速）/ Plus AI（需匯出 PPT）
我要自動化流程     → Zapier（簡單）/ Make（複雜）/ n8n（AI 原生）
我要設計圖片       → Canva AI
我要寫程式         → Cursor / GitHub Copilot
```

截圖存起來，需要的時候查就好。不用背，用多了自然記得。

---

*本矩陣根據 2025–2026 年主流評測整理。工具更新快速，建議每季複查一次，以實際使用體驗為準。*

*下一章：30 天專案計畫——每天 10-20 分鐘，做出一個成果。*
