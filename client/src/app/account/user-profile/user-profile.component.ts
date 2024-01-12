import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(user => {
      this.user = user;
    });
  }
  
}

