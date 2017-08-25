import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  
  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
    //Get ID
    this.id = this.activatedRoute.snapshot.params['id'];
    //Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0) {
        this.hasBalance = true;
      };
      this.client = client;
    });
  }
  
  updateBalance(id){
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show("Balance updated", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/client', this.id]); //another way to write navigate(['/client/' + this.id])
  }
  
  onDeleteClick(){
    this.clientService.deleteClient(this.id);
    this.flashMessagesService.show("Client Deleted", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
    
  }

}
