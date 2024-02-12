import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlighter]'
})
export class AppHighlighterDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'lightblue')
    this.backgroundColor='lightBlue'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor='transparent'
  }
}
