import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from 'src/app/service/api/auth.service';
import { AuthAdminGuard } from 'src/app/service/guard/auth-admin.guard';
import { AuthProfGuard } from 'src/app/service/guard/auth-prof.guard';
import { AuthGuard } from 'src/app/service/guard/auth.guard';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}
