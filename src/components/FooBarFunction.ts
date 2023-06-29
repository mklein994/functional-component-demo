import { h } from "vue";

function FooBar(props: { kind: string; favouriteNumber: number }) {
  return h("div", [
    h("span", `kind: ${props.kind}`),
    h("span", `favourite number: ${props.favouriteNumber}`),
  ]);
}

FooBar.props = {
  kind: {
    type: String,
    required: true,
  },

  favouriteNumber: {
    type: Number,
    required: true,
  },
};

export default FooBar;
