import { Subject, takeUntil } from 'rxjs';
import { ApiServiceService } from './../../../../shared/services/api-service.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-coins',
  templateUrl: './select-coins.component.html',
  styleUrls: ['./select-coins.component.scss']
})
export class SelectCoinsComponent implements OnInit, OnDestroy {
  public destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() selected = new EventEmitter<string[]>();


  public form: FormGroup = new FormGroup({
    selected: new FormControl()
  })
  public pairs: string[] = [];

  constructor(
    private _apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      res => {
        console.log(res)
        this.selected.emit(res.selected);
      }
    );

    this.getPairs().then(res => {
      this.pairs = res;
    })



    this.form.get('selected')?.setValue(['USD-BRL', 'USD-BRLT', 'CAD-BRL']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private getPairs(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this._apiService.getPairs().pipe(takeUntil(this.destroy$)).subscribe(
        res => {
          resolve(Object.keys(res));
        },
        err => {
          reject(err);
        }
      )
    })

  }

  public getSelecteds(value: any) {
    console.log(value);
  }
}
