// components/ChildComponent.tsx
import { FC } from 'react';
import { ChildComponentProps } from '@/components/interface';

const ChildComponent: FC<ChildComponentProps> = ({ items }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;

