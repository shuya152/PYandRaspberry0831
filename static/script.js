document.addEventListener('DOMContentLoaded', function() {
    // 模擬 IoT 裝置數據更新
    function updateDeviceData() {
        // 裝置 A
        document.getElementById('deviceA-temp').textContent = (20 + Math.random() * 10).toFixed(1) + '°C';
        document.getElementById('deviceA-humidity').textContent = (50 + Math.random() * 20).toFixed(0) + '%';
        document.getElementById('deviceA-status').textContent = Math.random() > 0.1 ? '正常' : '警告';
        document.getElementById('deviceA-status').className = Math.random() > 0.1 ? 'text-success' : 'text-warning';

        // 裝置 B
        document.getElementById('deviceB-temp').textContent = (25 + Math.random() * 8).toFixed(1) + '°C';
        document.getElementById('deviceB-humidity').textContent = (45 + Math.random() * 15).toFixed(0) + '%';
        document.getElementById('deviceB-status').textContent = Math.random() > 0.2 ? '正常' : '離線';
        document.getElementById('deviceB-status').className = Math.random() > 0.2 ? 'text-success' : 'text-danger';

        // 裝置 C
        document.getElementById('deviceC-temp').textContent = (18 + Math.random() * 12).toFixed(1) + '°C';
        document.getElementById('deviceC-humidity').textContent = (55 + Math.random() * 10).toFixed(0) + '%';
        document.getElementById('deviceC-status').textContent = Math.random() > 0.05 ? '正常' : '警告';
        document.getElementById('deviceC-status').className = Math.random() > 0.05 ? 'text-success' : 'text-warning';
    }

    // 每 3 秒更新一次數據
    setInterval(updateDeviceData, 3000);

    // 首次載入時更新數據
    updateDeviceData();
});