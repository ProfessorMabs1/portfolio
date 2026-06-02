        function showTab(tabId) {
            // Hide all panels
            document.querySelectorAll('.tab-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            // Remove active from all buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Show selected panel
            document.getElementById(tabId).classList.add('active');
            // Activate clicked button
            event.target.classList.add('active');
        }
