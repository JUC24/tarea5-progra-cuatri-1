// Imprime tablas de multiplicar 

inc = 0
for (let i = 1; i <= 10 ; i++) {
  document.write("tabla del " + i + "<br>" )
  for (let j = 1; j <= 10 ; j++){
    document.write(i + " * " + i + " = " + (i*j))
    document.write("<br>")
  }
} 
/* 

salida: 

0 * 1 = 0
0 * 2 = 0

1*1 = 1
1*2 = 2 

2*1 = 2
2*2 = 4

*/