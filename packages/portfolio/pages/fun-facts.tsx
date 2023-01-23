import Link from 'next/link';
import { ReactElement } from 'react';
import { PageMenu } from '../shared/components/PageMenu/PageMenu';

function FunFacts(): ReactElement {
  return (
    <div>
      <PageMenu />
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
