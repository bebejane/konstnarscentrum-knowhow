import type { ItemTypeDefinition } from '@datocms/cma-client';
type EnvironmentSettings = {
  locales: 'en';
};
export type RelatedMemberNews = ItemTypeDefinition<
  EnvironmentSettings,
  '969576',
  {
    member_news: {
      type: 'link';
    };
  }
>;
export type Form = ItemTypeDefinition<
  EnvironmentSettings,
  '997780',
  {
    subject: {
      type: 'string';
    };
    reciever: {
      type: 'string';
    };
    confirmation: {
      type: 'string';
    };
    form_fields: {
      type: 'rich_text';
      blocks: FormText | FormTextblock | PdfForm;
    };
  }
>;
export type FormText = ItemTypeDefinition<
  EnvironmentSettings,
  '997781',
  {
    title: {
      type: 'string';
    };
  }
>;
export type FormTextblock = ItemTypeDefinition<
  EnvironmentSettings,
  '997941',
  {
    title: {
      type: 'string';
    };
  }
>;
export type PdfForm = ItemTypeDefinition<
  EnvironmentSettings,
  '997942',
  {
    title: {
      type: 'string';
    };
  }
>;
export type About = ItemTypeDefinition<
  EnvironmentSettings,
  '1349096',
  {
    title: {
      type: 'string';
    };
    image: {
      type: 'file';
    };
    show_image: {
      type: 'boolean';
    };
    intro: {
      type: 'text';
    };
    content: {
      type: 'structured_text';
      blocks: Image | Button | Video;
      inline_blocks: Lexicon;
    };
    slug: {
      type: 'slug';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type Image = ItemTypeDefinition<
  EnvironmentSettings,
  '1349197',
  {
    image: {
      type: 'gallery';
    };
    layout: {
      type: 'string';
    };
  }
>;
export type Activity = ItemTypeDefinition<
  EnvironmentSettings,
  '1349208',
  {
    title: {
      type: 'string';
    };
    black_headline: {
      type: 'boolean';
    };
    image: {
      type: 'file';
    };
    intro: {
      type: 'text';
    };
    category: {
      type: 'link';
    };
    date: {
      type: 'date_time';
    };
    date_end: {
      type: 'date_time';
    };
    show_form: {
      type: 'boolean';
    };
    location: {
      type: 'string';
    };
    content: {
      type: 'structured_text';
      blocks: Form | Image | Button | Video;
      inline_blocks: Lexicon;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export type ActivityCategory = ItemTypeDefinition<
  EnvironmentSettings,
  '1349252',
  {
    category: {
      type: 'string';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type Employee = ItemTypeDefinition<
  EnvironmentSettings,
  '1349260',
  {
    name: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    title: {
      type: 'string';
    };
    region: {
      type: 'link';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type InEnglish = ItemTypeDefinition<
  EnvironmentSettings,
  '1349296',
  {
    title: {
      type: 'string';
    };
    content: {
      type: 'structured_text';
      blocks: Image | Button | Video | Text;
      inline_blocks: Lexicon;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export type Content = ItemTypeDefinition<
  EnvironmentSettings,
  '1350577',
  {
    title: {
      type: 'string';
    };
    sub_title: {
      type: 'string';
    };
    slug: {
      type: 'string';
    };
    layout: {
      type: 'structured_text';
    };
  }
>;
export type Contact = ItemTypeDefinition<
  EnvironmentSettings,
  '2019722',
  {
    phone: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    address: {
      type: 'text';
    };
  }
>;
export type Button = ItemTypeDefinition<
  EnvironmentSettings,
  '2021678',
  {
    text: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
  }
>;
export type Gallery = ItemTypeDefinition<
  EnvironmentSettings,
  '2021679',
  {
    images: {
      type: 'gallery';
    };
    layout: {
      type: 'string';
    };
  }
>;
export type Video = ItemTypeDefinition<
  EnvironmentSettings,
  '2021689',
  {
    video: {
      type: 'video';
    };
    title: {
      type: 'string';
    };
  }
>;
export type Footer = ItemTypeDefinition<
  EnvironmentSettings,
  '2022490',
  {
    about_the_project: {
      type: 'text';
    };
  }
>;
export type Text = ItemTypeDefinition<
  EnvironmentSettings,
  '2022592',
  {
    headline: {
      type: 'string';
    };
    text: {
      type: 'text';
    };
    link: {
      type: 'string';
    };
  }
>;
export type SelectedMember = ItemTypeDefinition<
  EnvironmentSettings,
  '2022593',
  {
    selected_members: {
      type: 'links';
    };
  }
>;
export type SelectedCommission = ItemTypeDefinition<
  EnvironmentSettings,
  '2022595',
  {
    commissions: {
      type: 'links';
    };
  }
>;
export type LatestNews = ItemTypeDefinition<
  EnvironmentSettings,
  '2022596',
  {
    description: {
      type: 'string';
    };
  }
>;
export type LatestActivity = ItemTypeDefinition<
  EnvironmentSettings,
  '2022597',
  {
    description: {
      type: 'string';
    };
  }
>;
export type ImageShortcut = ItemTypeDefinition<
  EnvironmentSettings,
  '2022598',
  {
    image: {
      type: 'file';
    };
    headline: {
      type: 'string';
    };
    black_headline: {
      type: 'boolean';
    };
    text: {
      type: 'string';
    };
    link: {
      type: 'string';
    };
  }
>;
export type Slide = ItemTypeDefinition<
  EnvironmentSettings,
  '2022599',
  {
    headline: {
      type: 'string';
    };
    black_text: {
      type: 'boolean';
    };
    image: {
      type: 'file';
    };
    link: {
      type: 'link';
    };
  }
>;
export type MetaBlock = ItemTypeDefinition<
  EnvironmentSettings,
  '2022642',
  {
    title: {
      type: 'string';
    };
    text: {
      type: 'string';
    };
  }
>;
export type Sponsor = ItemTypeDefinition<
  EnvironmentSettings,
  '2022646',
  {
    image: {
      type: 'file';
    };
    url: {
      type: 'string';
    };
  }
>;
export type ContactPage = ItemTypeDefinition<
  EnvironmentSettings,
  'E5eB2yf0SSyblVu6RKxnhg',
  {
    title: {
      type: 'string';
    };
    image: {
      type: 'file';
    };
    show_image: {
      type: 'boolean';
    };
    intro: {
      type: 'text';
    };
    content: {
      type: 'structured_text';
      blocks: Image | Button | Video;
      inline_blocks: Lexicon;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export type Knowledge = ItemTypeDefinition<
  EnvironmentSettings,
  'E_3Fl52mRVO9Ee7hdqvH9g',
  {
    title: {
      type: 'string';
    };
    black_headline: {
      type: 'boolean';
    };
    image: {
      type: 'file';
    };
    intro: {
      type: 'text';
    };
    category: {
      type: 'link';
    };
    content: {
      type: 'structured_text';
      blocks: Form | Image | Button | Video;
      inline_blocks: Lexicon;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export type LexiconText = ItemTypeDefinition<
  EnvironmentSettings,
  'Kw4a0VUnS_aYi3iKfKrlfg',
  {
    intro: {
      type: 'structured_text';
    };
  }
>;
export type Member = ItemTypeDefinition<
  EnvironmentSettings,
  'LIP_uDB9RMeopV35L9i_ZQ',
  {
    email: {
      type: 'string';
    };
    first_name: {
      type: 'string';
    };
    last_name: {
      type: 'string';
    };
    address: {
      type: 'string';
    };
    city: {
      type: 'string';
    };
    postal_code: {
      type: 'string';
    };
    phone: {
      type: 'string';
    };
    age: {
      type: 'integer';
    };
    sex: {
      type: 'string';
    };
    country: {
      type: 'string';
    };
    language: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    social: {
      type: 'text';
    };
    education: {
      type: 'text';
    };
    mission: {
      type: 'text';
    };
    work_category: {
      type: 'string';
    };
    kc_member: {
      type: 'boolean';
    };
    education_three_years: {
      type: 'boolean';
    };
    have_worked_three_years: {
      type: 'boolean';
    };
    protected_identity: {
      type: 'boolean';
    };
    auth: {
      type: 'json';
    };
  }
>;
export type Lexicon = ItemTypeDefinition<
  EnvironmentSettings,
  'L15PBlnFSPKVEaPdPqHgpw',
  {
    word: {
      type: 'string';
    };
    desc: {
      type: 'structured_text';
    };
  }
>;
export type Application = ItemTypeDefinition<
  EnvironmentSettings,
  'Mp_LEZ7zRGiUuFUSsoMR1Q',
  {
    activity: {
      type: 'link';
    };
    member: {
      type: 'link';
    };
    approval_status: {
      type: 'string';
    };
  }
>;
export type ImageShortcutDouble = ItemTypeDefinition<
  EnvironmentSettings,
  'TtT-UlVbT_SIpcmlJ0n-mg',
  {
    shortcuts: {
      type: 'rich_text';
      blocks: ImageShortcut;
    };
  }
>;
export type Start = ItemTypeDefinition<
  EnvironmentSettings,
  'XkNvrh4tQrCcOeNoU6SfHw',
  {
    gallery: {
      type: 'rich_text';
      blocks: Slide;
    };
    sections: {
      type: 'rich_text';
      blocks: Text | LatestActivity | ImageShortcut | ImageShortcutDouble;
    };
  }
>;
export type KnowledgeCategory = ItemTypeDefinition<
  EnvironmentSettings,
  'fFuWpfddSFWXcKzhRPYSuw',
  {
    category: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type AnyBlock =
  | RelatedMemberNews
  | Form
  | FormText
  | FormTextblock
  | PdfForm
  | Image
  | Content
  | Contact
  | Button
  | Gallery
  | Video
  | Text
  | SelectedMember
  | SelectedCommission
  | LatestNews
  | LatestActivity
  | ImageShortcut
  | Slide
  | MetaBlock
  | Sponsor
  | ImageShortcutDouble;
export type AnyModel =
  | About
  | Activity
  | ActivityCategory
  | Employee
  | InEnglish
  | Footer
  | ContactPage
  | Knowledge
  | LexiconText
  | Member
  | Lexicon
  | Application
  | Start
  | KnowledgeCategory;
export type AnyBlockOrModel = AnyBlock | AnyModel;
