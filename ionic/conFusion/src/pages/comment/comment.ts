import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Comment }  from '../../shared/comment';
import { Comment }  from '../../shared/dish';


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
    commentForm: FormGroup;
    comment: Comment;
    dish: Dish;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder ) {
    
        this.dish = navParams.get('dish');
        
        this.commentForm = this.formBuilder.group({
        rating: 5,
        author: ['', Validators.required],
        comment: ['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.comment = this.commentForm.value;
    this.comment.date= new Date().toString();
    this.dish.comments.push(this.comment);
    this.viewCtrl.dismiss(this.dish);
  }
  
  onSubmit() {   
    this.dismiss();
  }
  
}
