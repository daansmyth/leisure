package com.leisure.leisure;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
	
	@GetMapping("/")
	public String getIndex() {
		return "index";
	}
	
	@GetMapping("/premium")
	public String getPremium() {
		return "premium";
	}
	
	@GetMapping("/duvidas")
	public String getDuvidas() {
		return "duvidas";
	}

	@GetMapping("/pesquisa")
	public String getPesquisa() {
		return "anuncio";
	}
	
	@GetMapping("/perfil")
	public String getPerfil(Model model) {
		model.addAttribute("selecao", 1);
		return "perfil";
	}
	@GetMapping("/perfil/")
	public String getPerfilBarra(Model model) {
		model.addAttribute("selecao", 1);
		return "perfil";
	}

	@GetMapping("/perfil/anunciar")
	public String getAnunciar(Model model) {
		model.addAttribute("selecao", "anunciar");
		return "perfil";
	}

	@GetMapping("/perfil/anuncio")
	public String getAnuncio(Model model) {
		model.addAttribute("selecao", "anuncio");
		return "perfil";
	}

	@GetMapping("/perfil/meusdados")
	public String getMeusdados(Model model) {
		model.addAttribute("selecao", "meusdados");
		return "perfil";
	}
}
