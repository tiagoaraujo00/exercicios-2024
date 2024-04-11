import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IValues } from './discussions.interfaces';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss'],
})
export class DiscussionsComponent implements OnInit {
  values: Array<IValues> = [];

  @ViewChild('assuntoInput', { static: false })
  subject!: ElementRef<HTMLInputElement>;
  @ViewChild('conteudoInput', { static: false })
  content!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  handleCreateTopic = (event: SubmitEvent) => {
    event.preventDefault();

    const subject = this.subject?.nativeElement.value;
    const content = this.content?.nativeElement.value;

    if (subject && content) {
      this.values.push({ subject: subject, content: content });

      this.subject.nativeElement.value = '';
      this.content.nativeElement.value = '';
    }

    console.log(this.values);
  };
}
