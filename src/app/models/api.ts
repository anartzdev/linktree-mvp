export interface Api {
  profile: Profile;
  sections: Section[];
}

export interface Profile {
  name: string;
  photo: string;
  description: string;
}

export interface Section {
  title: string;
  links: Link[];
}

export interface Link {
  title: string;
  description: string;
  photo: string;
  url: string;
  icon: string;
  tags: string[];
}
