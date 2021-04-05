import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements OnInit {

  constructor() {
    

    this.obtenerObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log("Subs: ", valor ),
      error => console.warn("Ocurrio un error"),
      () => console.info("Terminó la subscripción")
    )

   }

   obtenerObservable(): Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>(observer => {


      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if(i == 10) {
          clearInterval(intervalo);
          observer.complete();
        }

        if(i == 2){
          console.log('SI OCURRÓO EL ERROR');
          observer.error("Ocurrio un error");
        }


      }, 1000);

    });

    return obs$;

   }

  ngOnInit(): void {
  }

}