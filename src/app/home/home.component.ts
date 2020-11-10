import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { UserServiceClient } from "../services/userServiceClient";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  showRegistration = true;

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone: new FormControl(""),
    email: new FormControl(""),
    video: new FormControl(""),
    street: new FormControl(""),
    street2: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    zip: new FormControl(""),
  });

  constructor(private userService: UserServiceClient) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.userService.createUser(this.profileForm.value).then((user) => {
      console.log("user created successfully", user);
      this.showRegistration = !this.showRegistration;
    });
  }
}
