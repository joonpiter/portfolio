// Spline's <spline-viewer> is a plain web component, loaded at runtime via a
// <script type="module"> tag rather than a bundled React component — see
// Scene3D.tsx. TypeScript doesn't know about it by default, so declare it as
// a JSX intrinsic here. @types/react 19 nests the JSX namespace inside the
// "react" module (not the old global JSX namespace), so that's what we
// augment.
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}
