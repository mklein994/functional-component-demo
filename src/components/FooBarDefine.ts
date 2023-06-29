import { defineComponent, h } from "vue";

export default defineComponent(
  (props: { kind: string; favouriteNumber: number }) => {
    return () =>
      h("div", [
        h("span", `kind: ${props.kind}`),
        h("span", `favourite number: ${props.favouriteNumber}`),
      ]);
  },
  {
    props: {
      kind: {
        type: String,
        required: true,
      },

      favouriteNumber: {
        type: Number,
        required: true,
      },
    },
  }
);
