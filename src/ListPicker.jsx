export default function ListPicker({ values }) {
  const random_num = Math.floor(Math.random() * values.length);
  const random_ele = values[random_num];
  return (
    <div>
      <p>List of Values : {values}</p>
      <p>Random Element is : {random_ele}</p>
    </div>
  );
}
