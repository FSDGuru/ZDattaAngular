import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css'],
})
export class SeatingComponent implements OnInit {
  ngOnInit: any;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private location: Location
  ) {}

  onClick(): void {
    // Get all SVG paths by their unique identifiers
    const svgPaths = this.elRef.nativeElement.querySelectorAll('#seats path');

    // Add click event listener to each SVG path
    svgPaths.forEach((path: any) => {
      this.renderer.listen(path, 'click', () => {
        // Toggle between occupied and free classes
        if (path.classList.contains('occupied')) {
          path.classList.remove('occupied');
          path.classList.add('free');
        } else {
          path.classList.remove('free');
          path.classList.add('occupied');
        }
      });
    });
  }
  goBack(): void {
    this.location.back(); // Go back to the previous page
  }
}
