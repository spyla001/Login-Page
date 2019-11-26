import { NgModule} from '@angular/core';

import { MatFormFieldModule,
         MatCardModule,
         MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
         } from '@angular/material';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatTabsModule
    ],
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatTabsModule
    ]
})
export class AngularMaterialModule { }
