import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-gatos',
  templateUrl: './page-gatos.component.html',
  styleUrls: ['./page-gatos.component.css']
})
export class PageGatosComponent {
  gatosForm: FormGroup

  isError = false
  arrGatos: any[] = []

  constructor(private fb: FormBuilder) {
    this.gatosForm = this.fb.group({
      'name': ['', Validators.required],
      'raza': ['', Validators.required]
    })

    // this.arrGatos = [{ name: "Paco", raza: "Persa" }]
  }

  sendData() {
    let gatoName = this.gatosForm.value.name
    let gatoRaza = this.gatosForm.value.raza

    if (gatoRaza.length == 0 || gatoName.length == 0) {
      this.isError = true
      return
    } else {
      this.isError = false
    }

    this.arrGatos.push({ id: this.arrGatos.length, name: gatoName, raza: gatoRaza })

    this.gatosForm.patchValue({ name: "", raza: "" })
  }

  deleteGato(id: number) {
    this.arrGatos = this.arrGatos.filter(g => g.id != id)
  }
}
