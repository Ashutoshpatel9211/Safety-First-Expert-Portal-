document.getElementById('generateBtn').addEventListener('click', function() {
    const input = document.getElementById('rawInput').value;
    const output = document.getElementById('reportContainer');

    if (!input.trim()) {
        output.innerHTML = `<p style="color:red;">Error: No data detected for analysis.</p>`;
        return;
    }

    // Processing state
    output.innerHTML = `<div class="placeholder-text animate__animated animate__pulse animate__infinite">Analyzing dataset for neutrality...</div>`;

    setTimeout(() => {
        const report = processData(input);
        renderReport(report, output);
    }, 800);
});

function processData(text) {
    // Logic: Identify potential advice and convert to observation
    // This simulates a highly regulated summarization engine
    const sentences = text.match(/[A-Z][^.!?]*[.!?]/g) || [text];
    
    return {
        observations: sentences.filter(s => s.length > 5),
        meta: {
            confidence: "High",
            processedDate: new Date().toLocaleDateString()
        }
    };
}

function renderReport(data, element) {
    const listItems = data.observations
        .map(item => `<li><i class="la la-check-circle" style="color:var(--primary)"></i> ${item}</li>`)
        .join('');

    element.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <span class="category-tag">Descriptive Summary</span>
            <ul style="list-style: none; padding: 0;">
                ${listItems}
            </ul>
            
            <div class="disclaimer-box">
                <strong><i class="la la-exclamation-triangle"></i> Liability Protection:</strong>
                This output is a factual categorization only. It does not provide medical diagnosis, legal advice, or prescriptive action.
            </div>
            
            <button onclick="window.print()" style="margin-top:20px; background:none; border:1px solid #ddd; cursor:pointer; padding:5px 10px; border-radius:5px;">
                <i class="la la-print"></i> Export to PDF
            </button>
        </div>
    `;
}