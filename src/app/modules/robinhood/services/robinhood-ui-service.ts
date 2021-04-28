import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RobinhoodUiService {
  Icons = {
    material: {
      home: "insert_chart_outlined",
      balance: "credit_card",
      search: "search",
      messages: "chat_bubble_outline",
      setting: "perm_identity",
    },
    fa: {
      home: "fa-chart-line",
      balance: "fa-wallet",
      search: "fa-search",
      messages: "fa-comment-alt",
      setting: "fa-user",
    },
  };
  constructor() {}
}
