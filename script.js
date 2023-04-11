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
    if(ComouSem.style.display == 'block'){
        ComouSem.style.display = 'none'
    }else{
        ComouSem.style.display ='block'
    }
}
function alco(){
    var resultado = document.querySelector("#resultadoAL");
     var fx = document.getElementsByName("alcool");
     if(fx[0].checked){
         resultado.innerHTML=`Essa são nossas bebidas alcoólica `
         resultado.style.textAlign  = "center";
         resultado.style.color = "white";
         resultado.style.border = "1px solid black"
         resultado.style.backgroundColor = "#F29F05";
         resultado.style.marginTop ="10px";
         resultado.style.fontSize  = "1.3em";
     } else if(fx[1].checked){
         resultado.innerHTML=`Por enquanto não temos esse produto disponivel`
         resultado.style.textAlign  = "center";
         resultado.style.color = "white";
         resultado.style.marginTop ="10px";
         resultado.style.fontSize  = "1.3em";
         resultado.style.border = "1px solid black";
         resultado.style.backgroundColor = "#BFA399";
     }else{
         window.alert('Por favor selecione alguma opeção![ERRO]')
         
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
        valor:800,
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
        containerProdutos.innerHTML+=`
        <div  id="fan-single">
        <div class="single">
        <img src="`+val.img+`"/>
        <h1>`+val.nome+`</h1>
        <h3><del>`+val.desconto+`</del></h3> 
        <p>`+val.informacao+`</p>
        <h2>`+valr+`</h2>
        <a onclick="Atualizarvalor()" key="`+val.id+`" class="button" href"#">Comprar</a>
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
            window.location.href="#prodt"
            prodt.style.display ="block"
            containerCarrinho.innerHTML+=`
            <hr>
            <div id="quantidade" >
            <div  class="quant">
            <p>`+val.nome+`| quantidade:
            <span `+val.quantidade+`</span> 
            valor:<span>`+val.valor+`<span></p> 
            <input type="text" value="`+val.valor+`" name="valor" id="ValorPd">
            <input type="text" value="`+val.quantidade+`" name="valor" id="qcarrinho">
            </div>
            <hr>
    
        `;}     
        
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


function Atualizarvalor(){
    let total = 0
        var produto = document.querySelectorAll("#qcarrinho").value
        var signlevalor = document.querySelectorAll("#ValorPd").value
        console.log(signlevalor)
        console.log(produto)
        for(var i = 0; i < produto.length; i++){ 

    total = (signlevalor * produto)
    var resvalor = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    preco.innerHTML="";
    preco.innerHTML+=`
    <p>`+resvalor+`</p>
    ` 
    }
}

function limpar(){
    var elemento = document.querySelector('#quantidade')
        elemento.remove();
        Atualizarvalor()
}


const itens=[
    {
        imga:'../imagens/01.jpg',
        imgpa:'../imagens/01-p.jpg',
        imgb:'../imagens/02.jpg',
        imgpb:'../imagens/02-p.jpg',
        imgc:'../imagens/03.jpg',
        imgpc:'../imagens/03-p.jpg',
    }
]

 var containerAp = document.getElementById('apresentaçao')
function Cerveja() {
        itens.map((val)=>{
            apresentaçao.style.background='url(../imagens/fundo-cerveja.jpg)'
            apresentaçao.style.backgroundSize='cover'
            apresentaçao.style.backgroundPosition='top top'
            apresentaçao.style.backgroundAttachment='fixed'
            containerAp.innerHTML=''
            containerAp.innerHTML+=`
            <div class="Aprencs">
            <div class="Aprencs-dens">
            <h1>Refresque-se Com o sabor autêntico e icomparavel da nossa cerveja, perfeita para acaompanhar bons momentos com amigos e familia.</h1>
            <picture>
            <source media="(max-width: 720px )" srcset="`+val.imgpa+`" type="image/jpg">
            <img src="`+val.imga+`" alt="Foto de apresentação da cerveja">
            </picture>
            </div>
        </div>
            `
        })
    if(apresentaçao.style.display == 'block'){
        apresentaçao.style.display ='none'
    }else{
        apresentaçao.style.display='block'
    }
    }

function Whisky(){
    itens.map((val)=>{
        apresentaçao.style.background='url(../imagens/fundo-whisky.jpg)'
        apresentaçao.style.backgroundSize='cover'
        apresentaçao.style.backgroundPosition='center center'
        apresentaçao.style.backgroundAttachment='fixed'
        containerAp.innerHTML=''
        containerAp.innerHTML+=`
        <div class="Aprencs">
        <div class="Aprencs-dens">
        <h1>Sinta o verdadeiro sabor da sofisticação com nossos whisky de qualidade premium, ideal para momentos únicos e especiais.</h1>
        <picture>
        <source media="(max-width: 720px )" srcset="`+val.imgpb+`" type="image/jpg">
        <img src="`+val.imgb+`" alt="Foto de apresentação do Whisky">
        </picture>
        </div>
        </div>
        `})
        if(apresentaçao.style.display =='block'){
            apresentaçao.style.display ='none'
        }else{
            apresentaçao.style.display = 'block'
        }
}
function Vinho(){
    itens.map((val)=>{
        apresentaçao.style.background='url(../imagens/fundo-vinho.jpg)'
        apresentaçao.style.backgroundSize='cover'
        apresentaçao.style.backgroundPosition='left center'
        apresentaçao.style.backgroundAttachment='fixed'
        containerAp.innerHTML=''
        containerAp.innerHTML+=`
        <div class="Aprencs">
        <div class="Aprencs-dens">
        <h1>Desfrute de um sabor refinado com nossos vinho de alta qualidade, perfeito para qualquer ocasião!</h1>   
        <picture>
        <source media="(max-width: 720px )" srcset="`+val.imgpc+`" type="image/jpg">
        <img src="`+val.imgc+`" alt="Foto de apresentação do Vinho">
        </picture>
        </div>
        </div>
        `})
        if(apresentaçao.style.display == 'block'){
            apresentaçao.style.display = 'none'
        }else{
            apresentaçao.style.display = 'block'
        }
}


const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('#fan-single')

filterElement.addEventListener('input', filterCards)

function filterCards(){
    if(filterElement.value != ''){
        for(let card of cards){
            let title = card.querySelector('h1')
             title = title.textContent.toLowerCase()
    
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = "none"
            }else{
                 card.style.display ="inlineflex"
            }
        }
    }else{
        for(let card of cards){
            card.style.display = "inline-flex"
}
}
}
const filter = document.querySelector('section input')
const card = document.querySelectorAll('#fan-single')

filter.addEventListener('input', filterNum)
function filterNum(){
    if(filter.value != ''){
    for(let card of cards){
        let title = card.querySelector('h2')
        title = title.textContent.toLowerCase()
        console.log(title)
        let filterText = filter.value.toLowerCase()
        if(!title.includes(filterText)){
            card.style.display="none"
        }else{
            card.style.display = "inline-flex"
        }
    }
    }else{
        card.style.display = 'inline-flex'
    }
}

