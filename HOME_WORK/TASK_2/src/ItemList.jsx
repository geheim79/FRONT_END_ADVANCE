function ItemList(props) {
  return (
    <ul>
      {props.items.map((fruit) => (
        <li key={fruit}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;