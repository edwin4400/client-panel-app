import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  totalOwed: number;
  
  constructor(private clientService: ClientService) { 
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    })
  }
  
  getTotalOwed(){
    let total = 0;
    for (let i = 0; i < this.clients.length; i++){
      total += +this.clients[i].balance; //unary +operator convert string to number, http://jibbering.com/faq/notes/type-conversion/#tcParse
    }
    this.totalOwed = total;
    }
}
