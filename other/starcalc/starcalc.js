function updateFields() {
  function thousandths (num) {
    if (num - Math.round(num) === 0) {
      return num
    }
    return Math.round(1000*num)/1000;
  }
  mass = parseFloat(document.getElementById("mass").value);
  document.getElementById("luminosity").value = thousandths(Math.pow(mass, 3));
  document.getElementById("diameter").value = thousandths(Math.pow(mass, 0.74) * 1392680).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km";
  document.getElementById("temp").value = thousandths(Math.pow(mass, 0.505) * 5778).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "K°";
  document.getElementById("lifetime").value = thousandths(Math.pow(mass, -2.5) * 10000000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " years";
  document.getElementById("ihb").value = thousandths(Math.sqrt(Math.pow(mass, 3)) * 0.95).toString() + " AU";
  document.getElementById("ohb").value = thousandths(Math.sqrt(Math.pow(mass, 3)) * 1.67).toString() + " AU";
  document.getElementById("ipb").value = thousandths(mass * 0.1).toString() + " AU";
  document.getElementById("opb").value = thousandths(mass * 40).toString() + " AU";
  document.getElementById("frost").value = thousandths(Math.sqrt(Math.pow(mass, 3))*4.85).toString() + " AU";
}
