import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="turbomodal"
export default class extends Controller {
  connect() {
    console.log("turbo modal connected");
  }
}
