function main() {

  let a = 1;
  let b;
  let range = "";

  b = a + 1;

  for(let i=0; i<9; i++) {
    range += i + ", ";
  }

  let c = 5;
  let d = 0;

  while(c != 0) {
    d++;
    c--;
  }

  let e = 0;

  if(d == 5) {
    e = 42;
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+ 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;


  console.info("d: " + d);
  console.info("e: " + e);
  console.info("Hello");
  console.info(range.substring(0, range.length - 2));
  console.info(a,b);
  console.info("Today is: " + today);

}

main();
