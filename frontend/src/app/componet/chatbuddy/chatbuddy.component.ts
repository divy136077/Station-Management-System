import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbuddy',
  templateUrl: './chatbuddy.component.html',
  styleUrls: ['./chatbuddy.component.css']
})
export class ChatbuddyComponent {
  img1:any;
  // burger:any;
  constructor(){
    this.img1 = "../../../../assets/images/info-ico-w.png"
    // this.burger = document.querySelector('.hamburger-box')

  }

  burgerclick(){
    let burger = document.querySelector('.hamburger-box')
    let burger1 = document.querySelector('.menu')
    burger && burger.classList.toggle('active')
    burger1 && burger1.classList.toggle('active')
  }

    // burger.on("click", function(e) {
    //     $(this).toggleClass("active");
    //     $('.js-nav').parent().find('.menu').toggleClass('active');
    // });
}
