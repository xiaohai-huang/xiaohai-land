import type { UIToolkitElements } from "@reactunity/renderer/uitoolkit";

type ImageProps = UIToolkitElements["image"] & {
  onLoad?: (event: { type: string }) => void;
};
function Image(props: ImageProps) {
  // @ts-ignore
  return <my-image {...props} />;
}

export default Image;
