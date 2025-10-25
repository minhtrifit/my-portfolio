export const getTechStackIcon = (name: string): string => {
  if (name === 'html') return '/assets/icons/technicals/html.png';
  if (name === 'css') return '/assets/icons/technicals/css.png';
  if (name === 'javascript') return '/assets/icons/technicals/javascript.png';
  if (name === 'typescript') return '/assets/icons/technicals/typescript.png';
  if (name === 'reactjs') return '/assets/icons/technicals/reactjs.png';
  if (name === 'nextjs') return '/assets/icons/technicals/nextjs.png';
  if (name === 'firebase') return '/assets/icons/technicals/firebase.png';
  if (name === 'tailwindcss') return '/assets/icons/technicals/tailwindcss.png';
  if (name === 'nestjs') return '/assets/icons/technicals/nestjs.png';
  if (name === 'postgresql') return '/assets/icons/technicals/postgresql.png';
  if (name === 'supabase') return '/assets/icons/technicals/supabase.png';
  if (name === 'nodejs') return '/assets/icons/technicals/nodejs.png';
  if (name === 'mysql') return '/assets/icons/technicals/mysql.png';
  if (name === 'express') return '/assets/icons/technicals/express.png';
  if (name === 'mongo') return '/assets/icons/technicals/mongo.png';
  if (name === 'spring') return '/assets/icons/technicals/spring.png';

  return '';
};
