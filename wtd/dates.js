function dates() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let datetime1 = document.getElementById("date1").value.split("-").join(" ") + " " + document.getElementById("time1").value.split(":").join(" ");
  let datetime2 = document.getElementById("date2").value.split("-").join(" ") + " " + document.getElementById("time2").value.split(":").join(" ");
  datetime1 = datetime1.split(" ");
  datetime2 = datetime2.split(" ");
  const unix2 = new Date(months[parseInt(datetime2[1]) - 1] + " " + datetime2[2] + ", " + datetime2[0] + " " + [datetime2[3], datetime2[4], datetime2[5]].join(":"));
  const unix1 = new Date(months[parseInt(datetime1[1]) - 1] + " " + datetime1[2] + ", " + datetime1[0] + " " + [datetime1[3], datetime1[4], datetime1[5]].join(":"));
  if (isNaN(unix1 - unix2)) {
    document.getElementById("output").innerHTML = "You missed a field or two!";
    return;
  }
  const out = Math.abs(unix1 - unix2)/1000
  document.getElementById("output").innerHTML = out.toString().split("").reverse().join("").match(/.{1,3}/g).reverse().join(",");
}
