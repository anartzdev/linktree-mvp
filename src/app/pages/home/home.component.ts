import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DefaultLogoPipe, SlugifyPipe } from '@app/core/pipes';
import { LinkService } from '@app/core/services/link.service';
import { Profile, Section } from '@app/models/api';

@Component({
  selector: 'app-home',
  imports: [SlugifyPipe, DefaultLogoPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  profile!: Profile;
  sections: Section[] = [];
  tagsShow = false;

  private linkService = inject(LinkService);

  ngOnInit(): void {
    this.linkService.getLinks().subscribe(({ profile, sections }) => {
      this.profile = profile;
      this.sections = sections;
    });
  }
}
