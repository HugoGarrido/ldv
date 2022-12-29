import Link from 'next/link';
import { ReactElement } from 'react';

function FunFacts(): ReactElement {
  return (
    <div>
      <div>Fun Facts</div>

      <div>
        <ul>
          <li>
            <Link href="/fun-facts/first-fun-fact">First Fun Fact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FunFacts;
