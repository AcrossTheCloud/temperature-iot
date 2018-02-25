var chart = c3.generate({
        data: {
            json: [
                {},
            ],
            keys: {
                value: ['temperature'],
                x: 'time'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                        format: '%H:%M:%S'
                }
            }
        }
    });

var updateChart = function(data) {
  chart.load({json: data, keys: { value: ['temperature'], x: 'time'}});
}

  $.getJSON( "https://temperature-api.acrossthecloud.net/temperature", function( data ) {
    var modified = [];
    data.Items.forEach(function(item) {
      modified.push({time: item.time*1000, temperature: item.temperature});
    });
    updateChart(modified);
  })
