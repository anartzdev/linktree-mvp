import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Config } from './models/config';
import { ConfigService } from './core/services/config.service';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './core/components/base/base.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'linktree-mvp';

  config!: Config;
  private configService = inject(ConfigService);

  ngOnInit() {
    this.configService.loadConfig().pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      this.config = data;
    });
  }
}
