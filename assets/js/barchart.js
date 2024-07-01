 
// Bar chart
const barCtx = document.getElementById('barchart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['CLO 01', 'CLO 02', 'CLO 03', 'CLO 04'],
    datasets: [{
      label: '% of CLO attainment',
      data: [85, 80, 75, 80],
      backgroundColor: [
        '#5588BB',
        '#66BBBB',
        '#AA6644',
        '#99BB55',
      ],
      hoverOffset: 4,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

