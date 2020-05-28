let theClass, theDate, allData; // create variables for storing data

var dataInfo = fetch("./data.json") // get the data from json folder
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    theClass = data.class;
    dataDate = data.date;
    allData = data; // storing the data in a variable
  });
let markets = []; // create an empty array to store the market values
let imgOut = "";
let imageOut = document.getElementById("image");
var a;
let sources = ["Infoware", "ODS", "SAP", "Board"]; // storing the data into an array
function random(value) {
  // calling the function
  allData.Brands.forEach((item) => {
    a = item.image;
    if (value === item.brand) {
      // comparing given value to item
      markets = item.market; // adding values to market according to the brand name
      imgOut = "<img src = " + a + ">";
      //console.log(markets);
    }
  });

  let output = ""; // creating a output variable to store the market result
  let outputSource = ""; // creating a variable to store the source output
  let selectMarket = document.getElementById("markets");
  let selectSource = document.getElementById("sources");

  //loop through all the markets

  markets.forEach((i) => {
    // placing the market values into option
    output += `<option value="${i}">${i}</option>`;
  });
  //console.log(markets);
  selectMarket.innerHTML = output;
  imageOut.innerHTML = imgOut;
  selectMarket.removeAttribute("hidden");
  sources.forEach((i) => {
    outputSource += `<option value="${i}">${i}</option>`;
  });
  selectSource.innerHTML = outputSource;
}

// $(function () {
//   var now = new Date();
//   var day = ("0" + now.getDate()).slice(-2);
//   var month = ("0" + (now.getMonth() + 1)).slice(-2);
//   var today = now.getFullYear() + "-" + month + "-" + day;
//   var disabledDates = [today];
//   $("#datepickerFrom").datepicker({
//     beforeShowDay: function (date) {
//       var string = jQuery.datepicker.formatDate("yy-mm-dd", date);
//       return [disabledDates.indexOf(string) == -1];
//     },
//   });
//   $("#datepickerTo").datepicker({
//     beforeShowDay: function (date) {
//       var string = jQuery.datepicker.formatDate("yy-mm-dd", date);
//       return [disabledDates.indexOf(string) == -1];
//     },
//   });
// });
