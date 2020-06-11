import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UsersComponent } from "./users/users.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import {UpdateComponent} from "./update/update.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UsersComponent },
  { path: "update", component: UpdateComponent },

  // { path: "rtl", component: RtlComponent }
];
