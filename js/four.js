var i = 1;
var j = 1;
var k = 1;
$(".plus1").click(function () {
  i++;
  $("p.num1").html(i);
});
$(".minus1").click(function () {
  i--;
  $("p.num1").html(i);
});
$(".plus2").click(function () {
  j++;
  $("p.num2").html(j);
});
$(".minus2").click(function () {
  j--;
  $("p.num2").html(j);
});
$(".plus3").click(function () {
  k++;
  $("p.num3").html(k);
});
$(".minus3").click(function () {
  k--;
  $("p.num3").html(k);
});
