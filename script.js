var res = fetch("https://data.covid19india.org/v4/min/data.min.json");

res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(data1){
  for(var i in data1){
    console.log(i,data1[i]);
    var div = document.createElement("div");
    div.innerHTML=`<p>${i}</p>
    <h6>Vaccinated1:${data1[i].total.vaccinated1}</h6>
    <h6>Total Recovered:${data1[i].total.recovered}</h6>
    <h5>Delta Tested:${data1[i].delta.tested}</h5>`
    document.body.append(div);
  }
};
