$(document).ready(function () {
  
  var amount = "";

  document.querySelector('#amount').addEventListener('keypress', function (e) {
    
    if (e.key === 'Enter') {

      amount = $('#amount').val();
      fetchData(processResults);

    }
  });


  function fetchData(cb) {

    $.ajax({
      url: "https://open.er-api.com/v6/latest/EUR",
      type: "GET",
      dataType: "json",
      success: function (results) {
        cb(null, results);
      },
      error: function (request, statusText, httpError) {
        cb(httpError || statusText);
      },
    });
  }

  function processResults(error, results) {

    if (error) {
      console.log('something went wrong')
    }

    var usd = results.rates.USD;
    var usdtToEur = usd * amount;

    $('#results').html(usdtToEur);

  }

});
