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
    ref.fiveDaysBlock.classList.contains('is_hidden') ? ref.mainBox.classList.toggle('is_hidden', false) : '';
    };

function hideMainT() {
    ref.mainBox.classList.toggle('is_hidden', true);
    ref.fiveDaysBlock.classList.toggle('showBox', true);
}


function showFive(e) {
    ref.mainBox.classList.toggle('showBox', false);
    ref.mainBox.classList.toggle('hideBox', true);
    ref.fiveDaysBlock.classList.toggle('hideBox', false);   

    setTimeout(hideMainT, 1000);
    ref.chartBlockBtn.classList.toggle('hideBox', false);    
    ref.chartBlockBtn.classList.toggle('is_hidden', false);
    ref.fiveDaysBlock.classList.toggle('is_hidden', false);   
    
}
    
function showChart() {
    ref.chartBlock.classList.toggle('hideBox', false);
    ref.chartBlock.classList.toggle('showBox', true);
    ref.chartBlock.classList.toggle('is_hidden', false);
    ref.chartShowBtn.classList.toggle('is_hidden', true);
    

    
}

function hideChartT() {
    ref.chartBlock.classList.toggle('is_hidden', true);
    ref.chartShowBtn.classList.toggle('is_hidden', false);
    ref.chartShowBtn.classList.toggle('showBox', false);
}

function hideChart() {
    ref.chartBlock.classList.toggle('hideBox', true);
    setTimeout(hideChartT, 1000);
}

function hideFiveT() {
    ref.chartBlock.classList.toggle('is_hidden', true);
    // ref.fiveDaysBlock.classList.toggle('hideBox', false);
    ref.mainBox.classList.toggle('showBox', false);
    ref.chartBlockBtn.classList.toggle('hideBox', false);
    ref.chartBlock.classList.toggle('hideBox', false);
    ref.fiveDaysBlock.classList.toggle('is_hidden', true);    
    ref.chartBlockBtn.classList.toggle('is_hidden', true);
    ref.mainBox.classList.toggle('is_hidden', false);
    ref.mainBox.classList.toggle('showBox', true);



    }

function hideFive() {
    setTimeout(hideFiveT, 1000);

    ref.fiveDaysBlock.classList.toggle('showBox', false);
    ref.fiveDaysBlock.classList.toggle('hideBox', true);
    ref.chartBlockBtn.classList.toggle('hideBox', true); 
    ref.chartBlock.classList.toggle('hideBox', true);
    ref.mainBox.classList.toggle('hideBox', false);

    
        
}