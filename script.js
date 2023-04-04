function carrinho(){
    if(prodt.style.display == 'block'){
        prodt.style.display = 'none'
    }else{
        prodt.style.display='block'
    }

}
function Tela(){
    if(window.innerWidth >= 768){
        prodt.style.display = 'block'
    }else{
        prodt.style.display = 'none'
    }
}
function fil(){
    if(Opfilter.style.display == 'block'){
        Opfilter.style.display = 'none'
    }else{
        Opfilter.style.display='block'
    }

}
function Tela(){
    if(window.innerWidth >= 768){
        Opfilter.style.display = 'block'
    }else{
        Opfilter.style.display = 'none'
    }
}
function Pvalor(){
    if(value.style.display == 'block'){
        value.style.display = 'none'
    }else{
        value.style.display ='block'
    }
}
function alcool(){
    if(cosalcool.style.display == 'block'){
        cosalcool.style.display = 'none'
    }else{
        cosalcool.style.display ='block'
    }
}


const items=[
    {
        id:0,
        nome:'Cerveja Heineken Long neck 330ml',
        img:'imagens/long-m.png',
        desconto:'R$13,75',
        valor:13.50,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:1,
        nome:'Cerveja Stella Artois Long neck 330ml',
        img:'imagens/Stella.png',
        desconto:'11,15',
        valor:10.95,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:2,
        nome:'Vinho Pergula Tinto Suave  1l',
        img:'imagens/pergola.png',
        desconto:'R$45.25',
        valor:44.35,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:3,
        nome:'Cerveja Heineken Long neck 330ml',
        img:'imagens/haineken-m.png',
        desconto:'R$5,75',
        valor:4.98,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:4,
        nome:'Cerveja Original 350ml',
        img:'imagens/original-m.png',
        desconto:'R$5.25',
        valor:4.35,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:5,
        nome:'Cerveja Império Puro Malte Lata 269ml',
        img:'imagens/imperio.png',
        desconto:'R$4.99',
        valor:4.78,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:6,
        nome:'Whisky Royal Salute 700ml',
        img:'imagens/reyalsalute.png',
        desconto:'R$1150',
        valor:1100,
        informacao:'Por Unidade',
        quantidade:0
    },
    {
        id:7,
        nome:'Cerveja Spaten Lata 269ml',
        img:'imagens/Spaten.png',
        desconto:'R$4.99',
        valor:4.78,
        informacao:'Por Unidade',
        quantidade:0
    },
]

inicializarLoja = () =>{
    var containerProdutos = document.getElementById('produtos')
    
    items.map((val) =>{
        var valr = val.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        console.log(valor)
        containerProdutos.innerHTML+=`
        <div  id="fan-single">
        <div class="single">
        <img src="`+val.img+`"/>
        <h1>`+val.nome+`</h1>
        <h3><del>`+val.desconto+`</del></h3> 
        <p>`+val.informacao+`</p>
        <h2>`+valr+`</h2>
        <a key="`+val.id+`" class="button" href"#">Comprar</a>
        </div>  
        </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('Fan-carrinho')
    containerCarrinho.innerHTML="";
    items.map((val)=>{

        var valr = val.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        if(val.quantidade > 0){
            location.href='#carinho'
            prodt.style.display='block'
         containerCarrinho.innerHTML+=`
            <hr>
            <p id="quantidade">           
            <label for="iexpluir">`+val.nome+`  quantidade:`+val.quantidade+`|`+valr+`|</label>
            <input type="radio" name="expluir" id="iexpluir"></p>
            <hr>
        `;}     
        if(val.quantidade>0){
            quantidadecar.innerHTML="";
            val.quantidade++;
            quantidadecar.innerHTML+=`<p>`+val.quantidade+`</p>`

        } 
         if(val.quantidade > 0){
            preco.innerHTML=''
            var valo = val.valor
            var quantidade = val.quantidade
            var resultado = `${valo * quantidade}`
        ;
        console.log(valo)
        preco.innerHTML+=`
        <p>`+resultado+`</p>
        ` }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

atualizarPreco = () => {
    var containerPreco = document.getElementById('preco')
    containerPreco.innerHTML="";
    items.map((val)=>{
        if(val.quantidade > 0){
                resultado = val.quantidade * val.valor
            console.log(resultado)
            containerPreco.innerHTML+=`
            <p >  `+resultado+`  </p>
        `;}     

    })
}
atualizarPreco();

function limpar(){
    var elemento = document.getElementById('quantidade')
    if (iexpluir > 0){
        window.alert("oj")
    }else    {
        elemento.remove();
    }
}


