import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../notification.service';

import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {  
  postForm: FormGroup = this.fb.group({
    title: [''],
    content: ['Duration:  What went well:  What was challenging:']
  });
  
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    db: AngularFireDatabase, 
    private fb: FormBuilder,
    private notificationService: NotificationService) {
    this.itemsRef = db.list('posts');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addItem(title: string, content: string) {
    this.itemsRef.push({ title: title, content: content });
    this.log('The post was submitted successfully!');
    
    this.postForm.reset();
    
    setTimeout(() => {
      this.notificationService.clear();
    }, 3000)
  }
  
  private log(notificationMessage: string) {
    this.notificationService.add(`${notificationMessage}`);
  }
}
