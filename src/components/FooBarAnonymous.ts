import { type FunctionalComponent, h } from "vue";

const FooBarAnonymous: FunctionalComponent<{
  kind: string;
  favouriteNumber: number;
}> = (props) => {
  return h("div", [
    h("span", `kind: ${props.kind}`),
    h("span", `favourite number: ${props.favouriteNumber}`),
  ]);
};

FooBarAnonymous.props = {
  kind: {
    type: String,
    required: true,
  },

  favouriteNumber: {
    type: Number,
    required: true,
  },
};

export default FooBarAnonymous;
