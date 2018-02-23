import { Http, Headers, URLSearchParams } from '@angular/http'
import { Injectable } from "@angular/core";
import { Widget } from '@app/Components/widgets/widgets.interface'

import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/widgets/'
const HEADER = {
  headers: new Headers({'Content-Type': 'application/json'})
}

@Injectable()
export class WidgetsService {

  constructor (private http: Http) {}
  
  get_all () {
    return this.http.get(BASE_URL)
      .map(res => res.json())
  }
  
  get_by (id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json())
  }

  create (widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json())
  }

  update (widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .map(res => res.json())
  }

  delete_by (widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .map(res => res.json())
  }

  search (query: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', query);

    return this.http.get(`${BASE_URL}`, { search: params })
      .map(res => res.json())
  }
}