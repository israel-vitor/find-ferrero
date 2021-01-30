import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private mapAccessCollectionName = "map-access"
  constructor(private angularFirestore: AngularFirestore) { }

  public createMapAccessRegister(): Promise<any> {
    return this.angularFirestore.collection(this.mapAccessCollectionName).add({
      "accessed-at": Date.now()
    })
  }

}
