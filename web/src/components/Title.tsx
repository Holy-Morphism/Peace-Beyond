interface TitleClassName {
  className: string;
}

export default function Title(props: TitleClassName) {
  return (
    <span className={props.className}>
      <span>Peace</span>
      <span className="font-serif"> & </span>
      <span>Beyond</span>
    </span>
  );
}
