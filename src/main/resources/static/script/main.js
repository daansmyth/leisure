const btnSubmenuIndex = document.querySelector('.btn-submenu');
const btnSubmenuDownload = document.querySelector('.btn-download');
const btnArrowReplaceCategoria = document.querySelector('.arrow-replace-categoria');
const btnArrowReplaceDownload = document.querySelector('.arrow-replace-download');
const btnLoginCadastro = document.querySelector('.container__usuario');

const modalCadastrar = document.querySelector('.modal-cadastrar');
const modalLogin = document.querySelector('.modal-login');
const btnLogin = document.querySelector('.btn-login');
const btnCadastrar = document.querySelector('.btn-cadastrar');

// ALTERAR TEMA

const body = document.querySelectorAll('.body');
const btnTrocarTema = document.querySelector('.btnTemaChange');
const iconSol = document.querySelectorAll('.fa-sun');
const iconLua = document.querySelectorAll('.fa-moon');
const header = document.querySelectorAll('.cabecalho');
const listaMenu = document.querySelectorAll('.lista-menu');
const listaMenuItem = document.querySelectorAll('.container__link');
const listaMenuItemSpan = document.querySelectorAll('.container__link span');
const listasubMenuCategoria = document.querySelectorAll('.lista-menu__sublista-categoria');
const listasubMenuDownload = document.querySelectorAll('.lista-menu__sublista-download');
const listaSubMenu = document.querySelectorAll('.lista-menu__sublista-item');
const sobre = document.querySelectorAll('.sobre');
const time = document.querySelectorAll('.time__card');
const temaLocalStorage = localStorage.getItem('tema');

if(temaLocalStorage === 'temaDark'){
	aplicarDark();
	btnTrocarTema.checked = true;
}

btnTrocarTema.addEventListener('change', function (){
	if(btnTrocarTema.checked){
		aplicarDark ();
		localStorage.setItem('tema', 'temaDark');
	}else{
		removerDark ();
		localStorage.removeItem('tema');
	}
})

function aplicarDark (){
	iconSol.forEach(tema =>{
		tema.classList.toggle('hidden');
	})
	iconLua.forEach(tema =>{
		tema.classList.toggle('hidden');
	})
	body.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	header.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listaMenu.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listaMenuItem.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listaMenuItemSpan.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listasubMenuCategoria.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listasubMenuDownload.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	listaSubMenu.forEach(tema => {
		tema.classList.add('tema-dark');
	})
	sobre.forEach(tema => {
		tema.classList.add('tema-dark-sobre');
	})
	time.forEach(tema => {
		tema.classList.add('tema-dark-sobre');
	})
}

function removerDark (){
	
	iconSol.forEach(tema =>{
		tema.classList.toggle('hidden');
	})
	iconLua.forEach(tema =>{
		tema.classList.toggle('hidden');
	})
	body.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	header.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listaMenu.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listaMenuItem.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listaMenuItemSpan.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listasubMenuCategoria.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listasubMenuDownload.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	listaSubMenu.forEach(tema => {
		tema.classList.remove('tema-dark');
	})
	sobre.forEach(tema => {
		tema.classList.remove('tema-dark-sobre');
	})
	time.forEach(tema => {
		tema.classList.remove('tema-dark-sobre');
	})
}

const swiper = new Swiper('.swiper', {
	spaceBetween: 20,
		slidesPerView: 3,
	loop: false,
	pagination: {
		el: '.swiper-pagination',
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});	

const swiperDestaques = new Swiper('.swiperDestaques', {
	spaceBetween: 20,
 	slidesPerView: 2,
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
});

if(btnSubmenuIndex){
	btnSubmenuIndex.addEventListener('click', () => {
		listasubMenuCategoria.forEach(click => {
			click.classList.toggle('hidden');
		})
		btnArrowReplaceCategoria.classList.toggle('fa-chevron-right');
		btnArrowReplaceCategoria.classList.toggle('fa-chevron-down');
	})
}else{

}

btnSubmenuDownload.addEventListener('click', () => {
	listasubMenuDownload.forEach(click => {
		click.classList.toggle('hidden');
	})
	btnArrowReplaceDownload.classList.toggle('fa-chevron-right');
	btnArrowReplaceDownload.classList.toggle('fa-chevron-down');
})

// const conteudoModal = document.querySelector('.modal-content');

if(btnLogin){
	btnLogin.addEventListener('click', () =>{
		modalCadastrar.classList.toggle('hidden')
		modalLogin.classList.toggle('hidden')
	})
}else{

}

if(btnCadastrar){
	btnCadastrar.addEventListener('click', () =>{
		modalCadastrar.classList.toggle('hidden')
		modalLogin.classList.toggle('hidden')
	})
}else{

}
