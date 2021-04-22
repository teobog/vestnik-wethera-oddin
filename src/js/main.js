export default { checkVisible };

let ref = {
    mainBox: document.querySelector('#main_container'),
    fiveDaysBtn: document.querySelector('.btn_five_days'),
    todayBtn: document.querySelector('#btn_today'),
    fiveDaysBlock: document.querySelector('#five_days_block'),
    oneDayBtn:document.querySelector('button_block'),
    chartBlockBtn: document.querySelector('.btn_chart_block'),
    chartShowBtn: document.querySelector('.btn_chart_block'),
    chartHideBtn: document.querySelector('.btn_hide_chart_block'),
    chartBlock: document.querySelector('.chart_block'),

    
};
ref.fiveDaysBtn.addEventListener('click', showFive);
ref.chartShowBtn.addEventListener('click', showChart);
ref.chartHideBtn.addEventListener('click', hideChart);
ref.todayBtn.addEventListener('click', hideFive);



function checkVisible() {

console.log(ref.fiveDaysBlock.classList.contains('is_hidden'));

    ref.fiveDaysBlock.classList.contains('is_hidden') ? ref.mainBox.classList.toggle('is_hidden', false) : '';
    };

    function showFive(e) {
        ref.mainBox.classList.toggle('is_hidden', true);
        ref.fiveDaysBlock.classList.toggle('is_hidden', false);
        ref.chartBlockBtn.classList.toggle('is_hidden', false);
        // ref.oneDayBtn.classList.toggle('is_hidden', false);

        
}
    
function showChart() {
    ref.chartBlock.classList.toggle('is_hidden', false);
    ref.chartShowBtn.classList.toggle('is_hidden', true);
    
}

function hideChart() {
        ref.mainBox.classList.toggle('is_hidden', true);

        ref.chartShowBtn.classList.toggle('is_hidden', false);
        ref.chartBlock.classList.toggle('is_hidden', true);
    

    
}

function hideFive() {
        ref.mainBox.classList.toggle('is_hidden', false)
        ref.fiveDaysBlock.classList.toggle('is_hidden', true);
    ref.chartBlockBtn.classList.toggle('is_hidden', true);
    ref.chartBlock.classList.toggle('is_hidden', true);
    
        
}