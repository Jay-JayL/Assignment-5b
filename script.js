let input = 0

document.getElementById('button').addEventListener('click', area)

function area () {
  d = document.getElementById('input').value

  d=parseInt(d)

  r=d/2

  number = 3.14*2*r

  number2 = 3.14*r**2
  document.getElementById('paragraph').innerHTML = number
 document.getElementById('paragraph2').innerHTML = number2
}