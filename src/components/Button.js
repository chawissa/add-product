import clsx from "clsx";

// export default function Button(props) {
//   const { type, disabled, children } = props;
//   return (
//     <button className="ui-button" type={type} disabled={disabled}>
//       {children}
//     </button>
//   );
// }

export default function Button(props) {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-button", className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
