/**
 * VIEW — carte avec la bordure "sketch" organique utilisée
 * pour la story About et le formulaire de contact.
 */
export default function SketchCard({ children, className = "", style = {}, ...rest }) {
  return (
    <div
      className={className}
      style={{
        border: "2px solid currentColor",
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
