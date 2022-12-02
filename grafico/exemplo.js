new Morris.Line({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeLinha',

    resize: true,

    // Dados do gráfico
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 7 }
    ],

    // O nome do eixo com os valores de X
    xkey: 'year',
    
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],

    // Rótulos para os índices -- aparece quando passa o mouse por cima
    labels: ['Value']
});

new Morris.Bar({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeBarra',

    resize: true,

    // Dados do gráfico
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 7 }
    ],

    // O nome do eixo com os valores de X
    xkey: 'year',
    
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],

    // Rótulos para os índices -- aparece quando passa o mouse por cima
    labels: ['Value']
});

new Morris.Area({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeArea',

    resize: true,

    // Dados do gráfico
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 },
      { year: '2013', value: 25 },
      { year: '2014', value: 7 }
    ],

    // O nome do eixo com os valores de X
    xkey: 'year',
    
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],

    // Rótulos para os índices -- aparece quando passa o mouse por cima
    labels: ['Value']
});

new Morris.Donut({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeDonut',

    resize: true,

    // Dados do gráfico
    data:  [
        {label: "Vendas", value: 12},
        {label: "Compras", value: 30},
        {label: "Aluguéis", value: 20}
      ],
});