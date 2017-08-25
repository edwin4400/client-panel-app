import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    email: string;
    password: string;
    
  constructor(private afAuth: AngularFireAuth) { }

    login(email, password){
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(userData => resolve(userData),
            err => reject(err));
        })
    }
    
    //check user status
    getAuth(){
        return this.afAuth.authState.map(auth => auth)
    }
    
    //Logout user
    logout(){
        this.afAuth.auth.signOut();
    }
    
    //Register user
    register(email, password){
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(userData => resolve(userData), err => reject(err))
        });
    }
}
