import { Component, ChangeDetectorRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  texts: string[] = [
    'Hey there!',
    'Software Engineer',
    'Blockchain Enthusiast'
  ];

  displayedText = '';
  textIndex = 0;
  charIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.type();
  }

  type(): void {
    if (this.charIndex < this.texts[this.textIndex].length) {
      this.displayedText += this.texts[this.textIndex].charAt(this.charIndex);
      this.charIndex++;

      this.cdr.markForCheck(); 

      setTimeout(() => this.type(), 80);
    } else {
      setTimeout(() => this.erase(), 1500);
    }
  }

  erase(): void {
    if (this.charIndex > 0) {
      this.displayedText = this.displayedText.slice(0, -1);
      this.charIndex--;

      this.cdr.markForCheck(); 

      setTimeout(() => this.erase(), 30); 
    } else {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      setTimeout(() => this.type(), 300);
    }
  }
}

