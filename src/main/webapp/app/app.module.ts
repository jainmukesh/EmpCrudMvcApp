import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { EmpCrudMvcAppSharedModule, UserRouteAccessService } from './shared';
import { EmpCrudMvcAppHomeModule } from './home/home.module';
import { EmpCrudMvcAppAdminModule } from './admin/admin.module';
import { EmpCrudMvcAppAccountModule } from './account/account.module';
import { EmpCrudMvcAppEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EmpCrudMvcAppSharedModule,
        EmpCrudMvcAppHomeModule,
        EmpCrudMvcAppAdminModule,
        EmpCrudMvcAppAccountModule,
        EmpCrudMvcAppEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EmpCrudMvcAppAppModule {}
