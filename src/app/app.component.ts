import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form:FormGroup;
  query:string;
  search:string;

  constructor(private formBuilder:FormBuilder) {}
  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        query:[''],
        search:['']
      })
  
  }
  onSubmit() {

    this.query=this.form.controls.query.value;
    this.search=this.form.controls.search.value;
    if (this.search === 'ask') {
      window.open(`https://www.${this.search}.com/web?q=${this.query}`,'_blank');
    } else {
    window.open(`https://www.${this.search}.com/search?q=${this.query}`,'_blank');
    }
    
  }
}
