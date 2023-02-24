import { Raleway } from '@next/font/google';
import cn from 'classnames';

const font = Raleway({ subsets: ['latin'] });

export default function Home() {
  return <main className={cn(font.className)}>Hello world !</main>;
}
