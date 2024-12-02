import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-error',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {

  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors?: string[];

  get404Error(){
    this.http.get(this.baseUrl + 'test/notfound').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    });
  }

  get400Error(){
    this.http.get(this.baseUrl + 'test/badrequest').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    });
  }

  get401Error(){
    this.http.get(this.baseUrl + 'test/unauthorized').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    });
  }

  get500Error(){
    this.http.get(this.baseUrl + 'test/internalerror').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    });
  }

  get400ValidationError(){
    this.http.post(this.baseUrl + 'test/validationerror', {}).subscribe({
      next: response => console.log(response),
      error: error => this.validationErrors = error
    });
  }

}
