import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-forms',
  templateUrl: './data-forms.component.html',
  styleUrl: './data-forms.component.css'
})
export class DataFormsComponent {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ){}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(25)]], 
      email: [null, [Validators.required, Validators.email]],
      cep: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      rua: [null, [Validators.required]],
      complemento: [null],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]]
    })
  }

  resetarForm() {
    this.formulario.reset();
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http
        .post('https://httpbin.org/post', JSON.stringify({}))
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.resetarForm();
          },
          (error: any) => alert('erro')
        );
  }
}
