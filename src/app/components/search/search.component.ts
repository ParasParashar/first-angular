import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  text = '';
  // emitng search event to home so it's fileter the data accordingly
  @Output() onSearchProduct = new EventEmitter<string>();
  onSearch() {
    console.log('Search is Working');
    this.onSearchProduct.emit(this.text)
  };
  onInputChange(e: any) {
    console.log('Input changes', this.text);
    // this.text = e.target.value;
  };
  onTyping(e: any) {
    // this.text = e.target.value;
    console.log('Typing is Working', this.text);
    this.onSearchProduct.emit(this.text)

  };
}
