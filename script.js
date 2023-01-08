//shop script
s = 0;
x = 0;
c = 0;
max = 300;
function add(ch1, ch) {
  c = Number(ch);
  s = s + Number(ch);
  table = document.getElementById("tab");
  row = table.insertRow(1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell1.innerHTML = ch1;
  cell2.innerHTML = ch + " DT";
  document.getElementById("total").innerHTML = s;
  x = x + 1;
  document.getElementById("quantity").innerHTML = x;
  if (s > max && x > 5) {
    alert("you get a 50dt discount");
    max = max * 2;
  }
}
function change(a, b, c, d, e, f) {
  if (document.getElementById(a).hidden == true) {
    document.getElementById(a).hidden = false;
  } else {
    document.getElementById(a).hidden = true;
  }
  if (document.getElementById(b).hidden == false) {
    document.getElementById(b).hidden = true;
  } else {
    document.getElementById(b).hidden = true;
  }
  if (document.getElementById(c).hidden == false) {
    document.getElementById(c).hidden = true;
  } else {
    document.getElementById(c).hidden = true;
  }
  if (document.getElementById(d).hidden == false) {
    document.getElementById(d).hidden = true;
  } else {
    document.getElementById(d).hidden = true;
  }
  if (document.getElementById(e).hidden == false) {
    document.getElementById(e).hidden = true;
  } else {
    document.getElementById(e).hidden = true;
  }
  if (document.getElementById(f).hidden == false) {
    document.getElementById(f).hidden = true;
  } else {
    document.getElementById(f).hidden = true;
  }
  if (
    document.getElementById(a).hidden == true &&
    document.getElementById(b).hidden == true &&
    document.getElementById(c).hidden == true &&
    document.getElementById(d).hidden == true &&
    document.getElementById(e).hidden == true &&
    document.getElementById(f).hidden == true
  ) {
    document.getElementById("card").hidden = false;
  }else{
    document.getElementById("card").hidden = true;
  }

}
function delet() {
  con = confirm("are you sure that you wont to delete your last order");
  if (con == true) {
    document.getElementById("tab").deleteRow(1);
    x = x - 1;
    s = s - c;
    document.getElementById("quantity").innerHTML = x;
    document.getElementById("total").innerHTML = s;
    if (x == 0 || s < 0) {
      document.getElementById("total").innerHTML = 0;
    }
  }
}
/*singup-in script*/
verif = false;
function verifier() {
  verif = true;
}
/*index script*/
function check() {
  if ((verif = true)) {
    document.getElementById("az").checked == verif;
  }
}
