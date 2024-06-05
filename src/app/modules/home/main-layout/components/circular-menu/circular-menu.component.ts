import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit, OnDestroy {
  circleElement: HTMLElement | null = null;
  maxRadius = 50; // Maximum allowed radius for movement

  ngOnInit() {
    this.circleElement = document.querySelector('.circle-light');
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    if (this.circleElement) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate distance from the center of the window
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      // Calculate the distance from the center using Pythagorean theorem
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Limit the distance to the max radius
      let limitedX = distanceX;
      let limitedY = distanceY;
      if (distance > this.maxRadius) {
        const ratio = this.maxRadius / distance;
        limitedX = distanceX * ratio;
        limitedY = distanceY * ratio;
      }

      // Update the position of the circle
      this.circleElement.style.top = `calc(50% + ${limitedY}px)`;
      this.circleElement.style.left = `calc(50% + ${limitedX}px)`;
    }
  }
}
