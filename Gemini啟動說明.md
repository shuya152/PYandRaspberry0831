# Gemini 啟動說明

本文件提供多種啟動 Gemini 的方式。請根據您的安裝方式和需求選擇合適的方法。

## 1. 從原始碼啟動 (Python)

如果您是從原始碼安裝 Gemini，可以使用 Python 執行主程式。

1.  **確認環境：**
    *   確保您已安裝 Python 3.x。
    *   確保所有必要的 Python 套件已安裝。通常可以透過 `pip install -r requirements.txt` 來安裝。

2.  **啟動指令：**
    在專案的根目錄下執行以下指令：
    ```bash
    python main.py
    ```
    (請將 `main.py` 替換為您的 Gemini 主程式檔案名稱)

## 2. 使用可執行檔啟動

如果您有預先編譯好的 Gemini 可執行檔，可以直接執行它。

1.  **賦予執行權限 (Linux/macOS)：**
    如果可執行檔沒有執行權限，請先賦予它：
    ```bash
    chmod +x ./gemini_executable
    ```
    (請將 `gemini_executable` 替換為您的可執行檔名稱)

2.  **啟動指令：**
    ```bash
    ./gemini_executable
    ```
    (請將 `gemini_executable` 替換為您的可執行檔名稱)

## 3. 透過啟動腳本啟動

有些專案會提供專門的啟動腳本 (例如 `start.sh`, `run.bat`) 來簡化啟動流程。

1.  **尋找啟動腳本：**
    檢查專案根目錄或 `scripts/` 目錄下是否有類似 `start.sh` (Linux/macOS) 或 `run.bat` (Windows) 的檔案。

2.  **執行腳本：**
    *   **Linux/macOS:**
        ```bash
        ./start.sh
        ```
    *   **Windows (在命令提示字元或 PowerShell 中):**
        ```bash
        run.bat
        ```

## 4. Docker 啟動 (如果適用)

如果 Gemini 專案提供了 Docker 支援，您可以使用 Docker 容器來啟動。

1.  **建置 Docker 映像檔：**
    在包含 `Dockerfile` 的目錄下執行：
    ```bash
    docker build -t gemini-app .
    ```

2.  **啟動 Docker 容器：**
    ```bash
    docker run -p 8000:8000 gemini-app
    ```
    (請根據您的 `Dockerfile` 和應用程式設定調整連接埠映射 `-p`)

## 5. 配置選項

在啟動 Gemini 之前，您可能需要配置一些選項。這些選項通常透過以下方式提供：

*   **環境變數：** 例如 `GEMINI_API_KEY=your_key python main.py`
*   **配置文件：** 例如 `config.ini`, `settings.json`, `.env`
*   **命令列參數：** 例如 `python main.py --port 8080`

請查閱專案的 `README.md` 或其他文件以獲取詳細的配置說明。

---

如果您在啟動過程中遇到任何問題，請檢查錯誤訊息並參考專案的說明文件或尋求協助。
