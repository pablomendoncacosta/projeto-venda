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
            window.location.href='#prodt'
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

            console.log(val.quantidade)
                resultado = quantidade * val.valor
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

const itens=[
    {
        imga:'../imagens/01.jpg',
    
        imgb:'../imagens/02.jpg',
  
        imgc:'../imagens/03.jpg',
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
            <img src="`+val.imga+`" alt="Foto de apresentação da cerveja">
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
        <img src="`+val.imgb+`" alt="Foto de apresentação do Whisky">
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
        <img src="`+val.imgc+`" alt="Foto de apresentação do vinho">
        </div>
        </div>
        `})
        if(apresentaçao.style.display == 'block'){
            apresentaçao.style.display = 'none'
        }else{
            apresentaçao.style.display = 'block'
        }
}


const filterElement = document.querySelector('pesquisa')
const cards = document.querySelector('.Aprencs')

filterElement.addEventListener('input', filterCards)

function filterCards(){
    if(filterElement.value != ''){
        for(let card of cards){
            let title = card.querySelector('h1')
            title = title.textContent.toLowecase()
            console.log(title)
        }
    }
}