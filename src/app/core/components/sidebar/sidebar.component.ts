import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "tim-icons icon-bank",
    class: ""
  },
  {
    path: "/prestadores",
    title: "Prestadores",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/conveniados",
    title: "Conveniados",
    icon: "icon-zoom-split",
    class: ""
  },
  {
    path: "/associados",
    title: "Associados",
    icon: "tim-icons icon-satisfied",
    class: ""
  },
  {
    path: "/relatorios",
    title: "Relatórios",
    icon: "icon-chart-pie-36",
    class: ""
  }   
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
