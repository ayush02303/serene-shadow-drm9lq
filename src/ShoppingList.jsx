function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li>
          {i.name} - {i.age}
        </li>
      ))}
    </ul>
  );
}
export default ShoppingList;
