import { Component, Input, numberAttribute, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { ToyModel } from '../models/real-toy-store-api/toy-model';
import { RealToyStoreAPIService } from '../services/real-toy-store-api.service';

@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _toyID?: number;
  @Input({ transform: numberAttribute })
  public get toyID(): number | undefined {
    return this._toyID;
  }
  public set toyID(value: number | undefined) {
    this._toyID = value;
    this.toy$.next();
  }
  public toy?: ToyModel;
  public toy$: Subject<void> = new Subject<void>();


  constructor(
    private realToyStoreAPIService: RealToyStoreAPIService,
  ) {}

  ngOnInit() {
    this.realToyStoreAPIService.getToyModel(this.toyID as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.toy = data
    );
    this.toy$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.realToyStoreAPIService.getToyModel(this.toyID as any).pipe(take(1)).subscribe(
        data => this.toy = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.toy$.complete();
    this.destroy$.complete();
  }
}
