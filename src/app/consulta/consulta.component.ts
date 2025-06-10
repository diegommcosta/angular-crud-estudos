import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

  nomeBusca: string = '';
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "uf", "municipio", "acoes"]
  listaClientes: Cliente[] = [];
  snack: MatSnackBar = inject(MatSnackBar)

  constructor(
    private service: ClienteService,
    private router: Router
  ){};

  ngOnInit(){
    this.listaClientes = this.service.pesquisarCliente('');
  };

  pesquisar(){
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  };

  preparaEditar(id: string){
    this.router.navigate(['/cadastro'], { queryParams: { "id" : id } })
  };

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true;
  }

  deletar(cliente: Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarCliente('');
    this.snack.open('Deletado com sucesso!', 'Ok')
  }

}
