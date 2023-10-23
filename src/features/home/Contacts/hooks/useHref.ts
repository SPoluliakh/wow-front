export const useHref = (title: string) => {
  switch (title) {
    case 'Phone':
      return 'tel:(803)634-1263';
    case 'E-mail':
      return 'mailto: wowcleanandshine@gmail.com';
    case 'Instagram':
      return 'https://instagram.com/wowcleanandshine';
    case 'Facebook':
      return 'https://www.facebook.com/wowcleanandshine/';
    case 'Service area':
      return 'https://www.google.com/maps/place/WOW+Clean%26Shine/@33.580103,-81.915808,9z/data=!4m6!3m5!1s0x401f363bb9bc631f:0xe86628ca3c55356c!8m2!3d33.5801025!4d-81.9158085!16s%2Fg%2F11s4wp8r1g?hl=en&entry=ttu';
    case 'Google reviews':
      return 'https://l.facebook.com/l.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FUBUMzwx9K3BV7c1H8%3Fg_st%3Diw%26fbclid%3DIwAR3_7Yqv-hhzABpNJgD293-Ek6mhxVFyWZgunPXzqsclhFpQPV-7I418CU8&h=AT0U7lBRunpjwSgLqBv74WZ-aW508bYT1aSQdHNumoz6QabXkRA56BhhGFz6ZGida0uMGFeb-bmz-tPinAGW8ylSs-bez1NCp6vs4ak8iMl3WDw9YaavFVqUbWbFbbPT2fmP ';
    default:
      return undefined;
  }
};
