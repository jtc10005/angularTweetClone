import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { Subscription, Observable, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'NewPost-component',
  templateUrl: './NewPost.component.html',
  styleUrls: ['./NewPost.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {
  private postForm: FormGroup;
  private tags: string[] = [];
  ngUnsubscribe = new Subject();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postForm = this.fb.group(new Post());
    this.postForm.controls.text.validator = Validators.required;

    this.postForm.controls.text.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((text: string) => {
        if (text.trimRight() === '') {
          return;
        }
        let startIndex = -1;
        text.split('').forEach((c: string, i: number) => {
          //   let tag = '';

          if (c === ' ' && startIndex > -1) {
            const tag = text.substring(startIndex, i);
            if (!this.tags.find(t => t === tag)) {
              this.tags.push(tag);
              startIndex = -1;
            }
            // this.tags.push(tag);
            // tag = '';
          }
          if (c === '#') {
            // tag = tag.concat(c);
            startIndex = i;
          }
        });
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(undefined);
    this.ngUnsubscribe.complete();
  }
  SavePost() {
    this.tags = [];
    this.postForm.reset();
  }
  CancelPost() {
    this.tags = [];
  }
}
