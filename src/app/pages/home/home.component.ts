import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BaseComponent } from '@app/core/components/base/base.component';
import { DefaultLogoPipe, SlugifyPipe } from '@app/core/pipes';
import { ConfigService } from '@app/core/services/config.service';
import { LinkService } from '@app/core/services/link.service';
import { Profile, Section } from '@app/models/api';
import { Config } from '@app/models/config';
import { AllData } from '@app/models/data';
import { forkJoin, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [SlugifyPipe, DefaultLogoPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent extends BaseComponent {
  profile!: Profile;
  sections: Section[] = [];
  tagsShow = false;
  config!: Config;

  private linkService = inject(LinkService);
  private configService = inject(ConfigService);

  ngOnInit(): void {
    forkJoin({
      api: this.linkService.getLinks(),
      config: of(this.configService.getConfig()),
    })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ api: { profile, sections }, config }: AllData) => {
        this.profile = profile;
        this.sections = sections;
        this.config = config;
      });
  }
}
