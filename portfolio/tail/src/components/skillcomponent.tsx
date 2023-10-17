export function skillComponent(props) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-20">
      <div className="flex flex-col items-center">
        <img src={props.image} className="h-1/2 " />
        <h1 className="h-1/2 pt-10 text-white font-Questrial text-3xl">
          {props.skillName}
        </h1>
      </div>
    </div>
  );
}
