import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from "@angular/core";
import { RobinhoodUiService } from "../services/robinhood-ui-service";

@Component({
  selector: "app-robinhood-home",
  templateUrl: "./robinhood-home.component.html",
  styleUrls: ["./robinhood-home.component.scss"],
  encapsulation: ViewEncapsulation.None, //by having None encapsulation, this style will bleed to all elements, including children elements
})
export class RobinhoodHomeComponent implements OnInit, AfterViewInit {
  uiState = {
    iconKey: "material", //default to material icons
  };
  selectedFont: string = "roboto";

  constructor(private uiService: RobinhoodUiService) {
    console.log(this.uiService);
  }

  ngOnInit(): void {}

  get currentIcons() {
    return this.uiService.Icons[this.uiState.iconKey];
  }

  changeTheme(value) {
    console.log("change theme");
    // document.body.setAttribute("data-theme", value);
    let app = document.getElementById("app-frame");
    app.setAttribute("data-theme", value);
  }

  ngAfterViewInit() {
    let app = document.getElementById("main");

    app.addEventListener("scroll", (e) => {
      let pageHeader = document.querySelector(".sticky-header") as any;
      // if scroll, pageHeader has 16px margin top
      // console.log("pageHeader.offsetTop", pageHeader.offsetTop);
      if (pageHeader.offsetTop > 0) {
        pageHeader.classList.add("shadow");
      } else {
        pageHeader.classList.remove("shadow");
      }
    });
  }

  changeFont_1(font) {
    var selectors = ["h1", "h2", "h3", "p"];
    selectors.forEach((item: string) => {
      let el = document.querySelector(item) as HTMLElement;
      el.style.fontFamily = font;
    });
  }

  changeFont(value) {
    let app = document.getElementById("app-frame");
    app.setAttribute("data-font", value);
  }
}
