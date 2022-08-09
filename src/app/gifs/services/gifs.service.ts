import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'XL0NKRy9XV3YqqAoI1p3KmojldJPeUpN';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }
  buscarGifs(query: any) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }
}
