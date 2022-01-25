import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  nome = environment.nome 
  foto = environment.foto

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua sessão expirou. Faça o login novamente.')
      this.router.navigate(['/entrar'])
      environment.token = ''
      environment.nome = ''
      environment.foto = ''
      environment.id = 0
    }
  }

}
