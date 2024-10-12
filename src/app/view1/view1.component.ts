import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ToyStoreType } from '../models/toy-store-data/toy-store-type';
import { ToyCategoriesType } from '../models/toy-store-data/toy-categories-type';
import { ToyStoreDataService } from '../services/toy-store-data.service';

@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public toyStoreDataToyCategories: ToyCategoriesType[] = [];
  public toyStoreDataToyStore: ToyStoreType[] = [];

  constructor(
    private toyStoreDataService: ToyStoreDataService,
  ) {}

  ngOnInit() {
    this.toyStoreDataService.getToyCategoriesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.toyStoreDataToyCategories = data
    );
    this.toyStoreDataService.getToyStoreList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.toyStoreDataToyStore = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
