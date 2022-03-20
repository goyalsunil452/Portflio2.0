import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio2';
  showProfile:any=false;
  scrollY=true;
  skills=['Html','Css','Javascript','Typescript','Python','Angular','React Js','Django','Node Js']

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.scrollY);
    window.onscroll = () => {
      if(window.scrollY>20){
        this.scrollY=false;
      }else{
        this.scrollY=true;
      }
      this.scrollActive();
    }
  }
  openProfile(){
    this.showProfile=!this.showProfile;
  }

scrollActive(){
  const sections = document.querySelectorAll('section[id]');
  const currentSection:any =document.querySelectorAll('.nav__list');
  const scrollY = window.pageYOffset

    sections.forEach((current:any) =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          let obj:any = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
          obj?.classList.add('active-link')
        }else{
          let obj:any = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
          obj?.classList.remove('active-link')
        }
    })
}
}
