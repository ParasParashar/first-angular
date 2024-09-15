import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="flex bg-blue-600 px-5 p-3 items-center justify-between">

    <div
    routerLink="/"
    class=' cursor-pointer text-3xl  font-sans  text-green-300  '>
    Store
  </div>
  <button routerLink="/add" class="rounded-xl p-3 bg-slate-400 text-white">Add 🧺 </button>
</div>
  `,
  styles: ``
})
export class HeaderComponent {

}
