import { 
  Component, 
  Input, OnInit, Output, EventEmitter,
  ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auto-scroll',
  templateUrl: './auto-scroll.component.html',
  styleUrls: ['./auto-scroll.component.scss']
})
export class AutoScrollComponent implements OnInit,OnDestroy {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('scrollContent', { static: true })
  scrollable!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(private host:ElementRef) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit(): void {
    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.scrollable.nativeElement);
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
