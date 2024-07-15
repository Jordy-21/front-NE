import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        let movetop = document.getElementById('movetop');

        if (movetop) {
          movetop.style.display = 'block';
        }
      } else {
        let movetop = document.getElementById('movetop');
        if (movetop) {
          movetop.style.display = 'none';
        }
      }
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
