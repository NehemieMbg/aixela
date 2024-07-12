import Link from 'next/link';
import Aixela from '../logo/Aixela';

const Navbar = () => {
  return (
    <nav className="py-4 px-10">
      <div>
        <Aixela className="text-lg" />
      </div>

      <ul>
        <li>
          <Link href={'/'}>Campaigns</Link>
        </li>
        <li>
          <Link href={'/'}>About</Link>
        </li>
        <li>
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>

      <div></div>
    </nav>
  );
};

export default Navbar;
