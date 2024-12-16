import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Config } from './models/config';
import { ConfigService } from './core/services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'linktree-mvp';

  config!: Config;
  private configService = inject(ConfigService);

  ngOnInit() {
    this.configService.loadConfig().subscribe((data) => {
      this.config = data;
    });
  }
}
