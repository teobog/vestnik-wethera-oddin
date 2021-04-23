// ЕСЛИ ТЫ СЮДА ЗАШЕЛ - НИЧО ТУТ СУКА НЕ ТРОГАЙ БО СЛОМАЕШЬ
import Chart from 'chart.js/auto';

let arr1 = [5,4,2,6]
let arr2 = [2,652,78]
let arr3 = []
let arr4 = []

function createDatas(array1,array2,array3,array4){
  arr1 = array1
  arr2 = array2
  arr3 = array3
  arr4 = array4
  console.log(arr1,arr2,arr3,arr4)

  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['09:00', '12:00', '15:00', '16:00', '19:00', '21:00', '00:00'],
      datasets: [{
        label: '— Temperature, C° ',
        data: arr4,
        backgroundColor: [
          '#FF6B09',
        ],
        borderColor: [
          '#FF6B09',
        ],
        borderWidth: 1
      },
        {
          label: '— Humidity, % ',
          data: arr1,
          backgroundColor: [
            '#0906EB',
          ],
          borderColor: [
            '#0906EB',
          ],
          borderWidth: 1
        },
        {
          label: '— Wind Speed, m/s ',
          data: arr3,
          backgroundColor: [
            '#EA9A05',
          ],
          borderColor: [
            '#EA9A05',
          ],
          borderWidth: 1
        },
        {
          label: '— Atmosphere Pressure, m/m',
          data: arr2,
          backgroundColor: [
            '#067806',
          ],
          borderColor: [
            '#067806',
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  },
  arr1,arr2,arr3,arr4,
  );
}



export default {createDatas};
