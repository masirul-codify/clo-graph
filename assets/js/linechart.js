// Line chart
const lineCtx = document.getElementById('linechart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['CLO 01', 'CLO 02', 'CLO 03', 'CLO 04', 'CLO 05', 'CLO 06', 'CLO 07'],
    datasets: [{
      label: '% of CLO attainment',
      data: [2.0, 1.0, 1.0, 2.0, 1.0, 1.0, 4.0],
      backgroundColor: [
        '#5588BB',
        '#66BBBB',
        '#AA6644',
        '#99BB55',        
        '#5588BB',
        '#66BBBB',
        '#AA6644'
      ],
      borderColor: '#5588BB',
      tension: 0.1,
      fill: false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 0.5,
          min: 0,
          max: 4.5 // Adjust max value as needed
        }
      }
    }
  }
});
