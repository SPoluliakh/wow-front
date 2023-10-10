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
    case 'Google reviews':
      return 'https://l.facebook.com/l.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FUBUMzwx9K3BV7c1H8%3Fg_st%3Diw%26fbclid%3DIwAR3_7Yqv-hhzABpNJgD293-Ek6mhxVFyWZgunPXzqsclhFpQPV-7I418CU8&h=AT0U7lBRunpjwSgLqBv74WZ-aW508bYT1aSQdHNumoz6QabXkRA56BhhGFz6ZGida0uMGFeb-bmz-tPinAGW8ylSs-bez1NCp6vs4ak8iMl3WDw9YaavFVqUbWbFbbPT2fmP ';
    default:
      return undefined;
  }
};
