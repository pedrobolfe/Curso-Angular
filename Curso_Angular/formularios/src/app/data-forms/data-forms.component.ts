import { SharedModule } from './../shared/shared.module';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-forms',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './data-forms.component.html',
  styleUrl: './data-forms.component.css'
})
export class DataFormsComponent {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultaCepService
  ){}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(25)]], 
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        complemento: [null],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      })
      
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

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  // resetaDadosForm() {
  //   this.formulario.patchValue({
  //     endereco: {
  //       rua: null,
  //       complemento: null,
  //       bairro: null,
  //       cidade: null,
  //       estado: null
  //     }
  //   });
  // }

  populaDadosForm(dados: any) {
    // this.formulario.setValue({});
    console.log(dados);

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //this.formulario.get('nome').setValue('Pedo5r');

  }
}
