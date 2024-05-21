import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user/user.model';
import { ApplicationConfigService } from '../core/config/application-config.service';

@Component({
  selector: 'jhi-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  matches: any[] = [];

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  ngOnInit(): void {
    this.http.get<User[]>(this.applicationConfigService.getEndpointFor('matches/getMatchingUsers')).subscribe((users: any[]) => {
      this.matches = users;
    });
  }
}
