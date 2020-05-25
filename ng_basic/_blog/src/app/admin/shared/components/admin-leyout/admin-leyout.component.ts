import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin-leyout',
  templateUrl: './admin-leyout.component.html',
  styleUrls: ['./admin-leyout.component.scss']
})
export class AdminLeyoutComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
