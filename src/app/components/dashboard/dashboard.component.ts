import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  name: string = "";
  tier: string = "";
  id: number = 0;
  total: number = 0;
  withdraw: number;

  user: any = {
    id: "",
    name: "",
    tier:{},
    withdrawal: "",
  };

  tiers = {
    tier1: {
      amount: 10000,
      percentage: '7'
    },
    tier2: {
      amount: 20000,
      percentage: '12'
    },
    tier3: {
      amount: 30000,
      percentage: '25'
    },
  }

  users: any = [];

  constructor() {}

  ngOnInit() {}

  register() {
    this.id = this.id + 1;

    (this.user.id = this.id), (this.user.name = this.name);

    
    if (this.tier === "tier1") {
      this.user.tier = this.tiers.tier1;
    } else if (this.tier === "tier2") {
      this.user.tier = this.tiers.tier2;
      
    } else if (this.tier === "tier3") {
      this.user.tier = this.tiers.tier2;
    }

    this.total = this.total + this.user.tier['amount'];
    
    this.withdraw = (this.user.tier.percentage / 100) * this.total;
    this.user.withdrawal = Math.floor(this.withdraw);

    this.users.push(this.user);
    console.log(this.users);

    this.user = {};
  }
}
