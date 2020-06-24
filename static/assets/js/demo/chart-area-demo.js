// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

      var raw = {};
      var key = '2PACX-1vTSHE3T_xQQ-2H6-_UEiFI9NrZNe-92H-BQDVclUdijjIOFzJRq-9ySbuNPhYrVbp3KqR7S3_qixCyD';
      
      function init() {
        Papa.parse(`https://clients.benjamintormey.com/.netlify/functions/csv?key=${key}`, {
          download: true,
          header: true,
          complete: showInfo
        })
      }

      window.addEventListener('DOMContentLoaded', init);

      function showInfo(results) {
        var data = results.data
        // data comes through as a simple array since simpleSheet is turned on
        alert("Successfully loaded " + data.length + " rows of live weight data!")
        data.forEach(addData);
        drawChart();
      }
      
      function addData(item, index) {
        if (item.Weight !== "NaN") {
          raw[item.Date] = item.Weight;
        }
      }
      
    var myAreaChart;
    var labels = [];
    var weight = [];
    function drawChart() {
      var ctx = document.getElementById("myAreaChart").getContext("2d");

      var backgroundColor = "white";
      
      Chart.plugins.register({
        beforeDraw: function(c) {
          var ctx = c.chart.ctx;
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, c.chart.width, c.chart.height);
        }
      });

      for (var key in raw) {
        labels.push(key);
        weight.push(parseFloat(raw[key]));
      }
      
      function bollinger(values, N, K) {
        let i = 0;
        let sum = 0;
        let sum2 = 0;
        const bands = K.map(() => new Float64Array(values.length).fill(NaN));
        for (let n = Math.min(N - 1, values.length); i < n; ++i) {
          const value = values[i];
          sum += value, sum2 += value ** 2;
        }
        for (let n = values.length, m = bands.length; i < n; ++i) {
          const value = values[i];
          sum += value, sum2 += value ** 2;
          const mean = sum / N;
          const deviation = Math.sqrt((sum2 - sum ** 2 / N) / (N - 1));
          for (let j = 0; j < K.length; ++j) {
            bands[j][i] = mean + deviation * K[j];
          }
          const value0 = values[i - N + 1];
          sum -= value0, sum2 -= value0 ** 2;
        }
        return bands;
      }
      
      var bands = bollinger(weight, 7, [-2, -1, 0, +1, +2]);
      
      var maxFirstWeek = Math.max.apply(null, weight.slice(1,7));
      
      myAreaChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "First week of data",
              data: new Array(7).fill(maxFirstWeek),
              fill: true,
              backgroundColor: pattern.draw('ring', 'rgb(255,105,97,0.7)'),
              borderColor: "rgba(0, 0, 0, 0.0)",
              borderWidth: 1,
              pointRadius: 0
            },
            {
              label: "-2\u03C3",
              data: bands[0],
              fill: false,
              backgroundColor: "rgba(55, 173, 221, 0.3)",
              borderColor: "rgba(55, 173, 221, 0)",
              borderWidth: 1,
              pointRadius: 0
            },
            {
              label: "-\u03C3",
              data: bands[1],
              fill: "-1",
              backgroundColor: "rgba(55, 173, 221, 0.3)",
              borderColor: "rgba(55, 173, 221, 0)",
              borderWidth: 1,
              pointRadius: 0
            },
            {
              label: "MA(7)",
              data: bands[2],
              fill: "-1",
              backgroundColor: "rgba(55, 173, 221, 0.6)",
              borderColor: "rgba(255, 255, 255, 0.6)",
              borderWidth: 3,
              pointRadius: 0
            },
            {
              label: "+\u03C3",
              data: bands[3],
              fill: "-1",
              backgroundColor: "rgba(55, 173, 221, 0.6)",
              borderColor: "rgba(55, 173, 221, 0)",
              borderWidth: 1,
              pointRadius: 0
            },
            {
              label: "+2\u03C3",
              data: bands[4],
              fill: "-1",
              backgroundColor: "rgba(55, 173, 221, 0.3)",
              borderColor: "rgba(55, 173, 221, 0)",
              borderWidth: 1,
              pointRadius: 0
            },
            {
              label: "Weight (kg)",
              data: weight,
              fill: false,
              borderColor: "#000000",
              backgroundColor: "#000000",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      });
    }
