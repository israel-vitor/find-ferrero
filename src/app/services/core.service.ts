import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface answer {
  id?: string;
  answer: string;
  created_at: any;
  position: 'bed' | 'tube' | 'mirror' | 'purifier' | 'pepper';
}

export interface mapAccess {
  id?: string;
  accessed_at: any;
}

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private mapAccessCollectionName = "map-access"
  private answersCollectionName = "answers"
  constructor(private angularFirestore: AngularFirestore) { }

  public createMapAccessRegister(): Promise<any> {
    return this.angularFirestore.collection(this.mapAccessCollectionName).add({
      "accessed_at": new Date()
    })
  }

  public createAnswer(answer: string, position: string): Promise<any> {
    return this.angularFirestore.collection(this.answersCollectionName).add({
      "created_at": new Date(),
      "answer": answer,
      "position": position
    })
  }

  public readAnswers(): Observable<answer[]> {
    return this.angularFirestore.collection<answer>(this.answersCollectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as answer;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public readMapAccess(): Observable<mapAccess[]> {
    return this.angularFirestore.collection<mapAccess>(this.mapAccessCollectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as mapAccess;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


}
