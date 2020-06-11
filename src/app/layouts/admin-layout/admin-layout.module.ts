import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsersComponent } from './users/users.component';
import { FilterPipe } from './filter.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CardComponent } from './card/card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { Filter2Pipe } from './filter2.pipe';
import { UpdateComponent } from './update/update.component';
import { InfoComponent } from './info/info.component';
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        MatProgressSpinnerModule,
        HighchartsChartModule,
        ChartModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule

    ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    UsersComponent,
    FilterPipe,
    CardComponent,
    Filter2Pipe,
    UpdateComponent,
    InfoComponent,

    // RtlComponent
  ]
})
export class AdminLayoutModule {}
