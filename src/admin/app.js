import ResendButton from "./extensions/components/ResendButton"

export default {
  config: {},
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "ResendButton",
      Component: ResendButton,
    });
  },
};
