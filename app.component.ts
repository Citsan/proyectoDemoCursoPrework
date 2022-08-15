import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Citlalli';
  age = 22;
  img = "https://source.unsplash.com/random";
  btnDisabled =true;
  person ={
    name : 'Citlalli',
    age : 22,
    avatar : "https://source.unsplash.com/random"
  }


  names :string []= ['sebas', 'juli', 'cit',];
  NewName ="";


  toggleButton(){
    this.btnDisabled = !this.btnDisabled;

  }
  onScroll ( event: Event ){
    const element = event.target as HTMLElement;
    console.log (element.scrollTop);
  }

  increaseAge(){
    this.person.age +=1;
  }
  diminuirage(){
    this.person.age -=1;
  }

  changename( event: Event ){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }
  addName (){
    this.names.push(this.NewName);
    this.NewName = ' ';
  }
  deleteName (index : number ){
    this.names.splice(index, 1 );
  }


}
