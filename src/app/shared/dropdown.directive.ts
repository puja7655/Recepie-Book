import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDrpdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false
    constructor(private elRef: ElementRef) { }
    ngOnInit(): void {

    }
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen
    // }

    //If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one,
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

}