import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable()
export class ClientService {
    clients: FirebaseListObservable<any[]>;
    client: FirebaseObjectObservable<any>;
    id: string;

  constructor(private af: AngularFireDatabase) {
      this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

    getClients(){
        return this.clients;
    }
    
    newClient(client: Client){
        this.clients.push(client);
    }
    
    getClient(id) {
        this.client = this.af.object('/clients/'+ id) as FirebaseObjectObservable<Client>;
        return this.client;
    }
    
    updateClient(id, client){
        return this.clients.update(id, client);
    }

    deleteClient(id){
        return this.clients.remove(id);
    }
}
